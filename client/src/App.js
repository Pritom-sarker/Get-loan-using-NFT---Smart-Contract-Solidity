import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useMoralis } from "react-moralis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/Nav";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/Notfound";
import Product from "./pages/product/Product";
import Create from "./pages/create/Create";
import Roadmap from "./pages/roadmap/Roadmap";
import Team from "./pages/team/Team";
import User from "./pages/user/User";

function App() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/team" element={<Team />} />
          <Route path="/user" element={<User />} />
          <Route path="/nft" element={<Product />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
