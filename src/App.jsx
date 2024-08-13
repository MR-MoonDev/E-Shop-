import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Cheakout from "./pages/Cheakout";
import Order from "./pages/Order";
export default function App() {
  const [order,setOrder]=useState(null);  
  console.log("order:"+order)
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Shop" element={<Shop/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/cheakout" element={<Cheakout setOrderfuntion={(orderToAdd)=>{setOrder(orderToAdd)}}/>}></Route>
        <Route path="/order-confirmation" element={<Order order={order}/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
