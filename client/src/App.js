import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Roadmap from "./pages/roadmap/Roadmap";
import Team from "./pages/team/Team";
import User from "./pages/user/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/team" element={<Team />} />
          <Route path="/user" element={<User />} />
          <Route path="/nft" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
