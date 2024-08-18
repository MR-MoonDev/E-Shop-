import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Cheakout from "./pages/Cheakout";
import Order from "./pages/Order";
import FilterData from "./pages/FilterData";
import ProducDetail from "./pages/ProducDetail";
import Contact from "./Components/Contact";
import About from "./pages/About";
export default function App() {
  const [order,setOrder]=useState(null);  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Shop" element={<Shop/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cheakout" element={<Cheakout setOrderfuntion={(orderToAdd)=>{setOrder(orderToAdd)}}/>}></Route>
        <Route path="/order-confirmation" element={<Order order={order}/>}></Route>
        <Route path="/filter-data" element={<FilterData/>}></Route>
        <Route path="/product/:id" element={<ProducDetail/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
