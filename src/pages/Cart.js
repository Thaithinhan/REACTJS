import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import {
  decreaseCart,
  increaseCart,
  removeCart,
} from "../redux/reducer/CartSlice";

function CartPage() {
  const listCarts = useSelector((state) => state.carts);
  console.log(listCarts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeCart(id));
  };

  //Tăng số lượng
  const handleIncrease = (card) => {
    dispatch(increaseCart(card));
  };

  //Giảm số lượng
  const handleDecrease = (card) => {
    dispatch(decreaseCart(card));
  };

  const totalMoney = useMemo(() => {
    const total = listCarts.reduce(
      (prev, curr) => prev + curr.quantity * curr.price,
      0
    );
    return total;
  }, [listCarts]);

  return (
    <div className="cart-page">
      <Container fluid className="py-4">
        <div>
          <Table responsive="lg" className="table-cart">
            <thead>
              <tr>
                <th>#</th>
                <th>Hình ảnh sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Giá tiền</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {listCarts.map((card, index) => (
                <tr key={card.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={card.img} alt="Ảnh sản phẩm" />
                  </td>
                  <td>{card.product}</td>
                  <td className="text-danger">{card.price.toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-minus"
                      onClick={() => handleDecrease(card)}
                    >
                      -
                    </button>
                    <span className="mx-3 bg-white">{card.quantity}</span>
                    <button
                      className="btn btn-plus"
                      onClick={() => handleIncrease(card)}
                    >
                      +
                    </button>
                  </td>
                  <td className="fw-bold ">
                    {(card.price * card.quantity).toLocaleString()}
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(card.id)}
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="total-money">
          <b>Tổng tiền: </b>
          <span className="money fw-bold text-danger">
            {totalMoney.toLocaleString()}
          </span>
        </div>
        <NavLink to="/checkout">
          <button className="btn btn-success mt-3">Thanh toán</button>
        </NavLink>
        <br />
        <NavLink to="/">Tiếp tục mua sắm</NavLink>
      </Container>
    </div>
  );
}
export default CartPage;
