import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Erro404 from "./pages/404";
import Header from "../src/compoents/Header";
import NotFoud from "../src/pages/NotFoud";
import Footer from "./compoents/Footer";
import Dados from "./pages/Dados";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/Dados/:input"} element={<Dados />} />
        <Route path={"/Dados/:login"} element={<Dados />} />
        <Route path={"/notfoud"} element={<NotFoud />} />
        <Route path="/*" element={<Erro404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
