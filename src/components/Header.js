import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const numberBuy = useSelector((state) => state.carts.length);

  return (
    <header className="container bg-white d-flex align-items-center justify-content-between py-3">
      <h3>
        <Link to="/" className="nav-link text-danger">
          Rikkei Medicine
        </Link>
      </h3>
      <div className="search-form position-relative">
        <i className="fa-solid fa-magnifying-glass position-absolute"></i>
        <input
          type="text"
          className="form-group px-5 py-2"
          placeholder="Tìm kiếm..."
        />
      </div>
      <div className="cart-user d-flex position-relative ">
        <Link to="/cart" className="nav-link cart text-danger me-3">
          <i className="fa-solid fa-bag-shopping"></i>
        </Link>
        <span className="number-buy">{numberBuy}</span>
        <Link to="/user" className="nav-link">
          <i className="fa-regular fa-circle-user"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
