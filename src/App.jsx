import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Lik, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact Component={Homescreen} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
