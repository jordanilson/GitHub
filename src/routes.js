import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";
import Erro404 from "./pages/404";
import Header from "../src/compoents/Header";
import NotFoud from "../src/pages/NotFoud";
import Footer from "./compoents/Footer";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/data/:input"} element={<Data />} />
        <Route path={"/data/:login"} element={<Data />} />
        <Route path={"/notfoud"} element={<NotFoud />} />
        <Route path="/*" element={<Erro404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
