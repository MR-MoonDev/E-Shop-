import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Shop" element={<Shop/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
