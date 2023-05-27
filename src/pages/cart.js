import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { _DELETE_CART, _DOWN, _UP } from "../DB/common";
import { NavLink } from "react-router-dom";
import { useMemo } from "react";

function Cart() {
  const listCards = useSelector((store) => store.carts);

  const totalMoney = useMemo(() => {
    const totalMoney = listCards.reduce((total, card) => {
      return total + card.quantity * card.price;
    }, 0);
    return totalMoney;
  }, [listCards]);

  const dispatch = useDispatch();

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
              {listCards.map((card, index) => (
                <tr key={card.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={card.image} alt="Ảnh sản phẩm" />
                  </td>
                  <td>{card.name}</td>
                  <td className="text-danger">{card.price.toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-minus"
                      onClick={() =>
                        dispatch({
                          type: _DOWN,
                          payload: {
                            id: card.id,
                          },
                        })
                      }
                    >
                      -
                    </button>
                    <span className="mx-3 bg-white">{card.quantity}</span>
                    <button
                      className="btn btn-plus"
                      onClick={() =>
                        dispatch({
                          type: _UP,
                          payload: {
                            id: card.id,
                          },
                        })
                      }
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
                      onClick={() =>
                        dispatch({
                          type: _DELETE_CART,
                          payload: {
                            id: card.id,
                          },
                        })
                      }
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
export default Cart;
