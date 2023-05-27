import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import routerDB from "./routes/routerDB";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routerDB.map((router, index) => (
          <Route
            key={index}
            path={router.path}
            element={router.element}
          ></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
