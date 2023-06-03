import { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductAPI from "../api/Product";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
function SliderComponent() {
  const [products, setProducts] = useState([]);
  const [isCheck, setIsCheck] = useState(true);

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
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="container sliders">
      <Slider {...settings}>
        {products.map((product) => (
          <div>
            <figure>
              <img src={product.img} alt="img-1" />
              <figcaption>
                <h6>{product.product}</h6>
              </figcaption>
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
