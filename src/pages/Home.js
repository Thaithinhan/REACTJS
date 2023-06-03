import { useEffect, useState } from "react";
import SliderComponent from "../components/Slider";
import { Col, Container, Row } from "react-bootstrap";
import { BsPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/reducer/CartSlice";
import ProductAPI from "../api/Product";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [isCheck, setIsCheck] = useState(true);
  const dispatch = useDispatch();

  //Thêm vào cart
  const handleAddCart = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const response = await ProductAPI.getAllProducts();
        // console.log(response);
        const data = await response.data;
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (isCheck) {
      fetchedProducts();
    }
    return () => {
      setIsCheck(false);
    };
  }, [isCheck]);

  return (
    <div>
      <SliderComponent />

      <Container className="show-list-products">
        <Row>
          {products.map((product) => (
            <Col lg={4} key={product.id} className="d-flex p-2">
              <div className="product-info bg-white d-flex p-2">
                <img src={product.img} alt="name" />
                <div className="ms-3">
                  <h6 className="fw-bold">{product.price}</h6>
                  <p className="fw-bold text-danger">{product.product}</p>
                </div>
                <button
                  className="btn btn-none"
                  onClick={() => handleAddCart(product)}
                >
                  <BsPlusCircleFill />
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default HomePage;
