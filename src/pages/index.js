import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import productDB from "../DB/productDB";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { _ADD_CART, _DOWN, _UP } from "../DB/common";
function Home() {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.products);
  return (
    <div className="show-products">
      <Container fluid className="py-5">
        <Row className="">
          {listProduct.map((product) => (
            <Col md={6} lg={3} key={product.id}>
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>
                    <NavLink to="#" className="nav-link name-product fw-bold">
                      {product.name}
                    </NavLink>
                  </Card.Title>
                  <Card.Text className="desc-product">{product.desc}</Card.Text>
                  <Card.Text className="price-product fw-bold text-danger">
                    {product.price.toLocaleString()}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() =>
                      dispatch({
                        type: _ADD_CART,
                        payload: {
                          product: {
                            id: product.id,
                            name: product.name,
                            image: product.image,
                            price: product.price,
                            desc: product.desc,
                            quantity: product.quantity + 1,
                          },
                        },
                      })
                    }
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Home;
