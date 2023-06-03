import Header from "./components/Header";
import "./App.css";
import SliderComponent from "./components/Slider";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
