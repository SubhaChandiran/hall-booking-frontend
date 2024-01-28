import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Lik, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact Component={Homescreen} />
          <Route path="/book/:roomid" exact Component={Bookingscreen} />
          <Route path="/register" exact Component={Registerscreen} />
          <Route path="/login" exact Component={Loginscreen} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
