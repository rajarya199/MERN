import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import First from "./First";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
const MyRoute = () => {
  return (
    <Router>
        <Routes >
            <Route path='/' element={<Layout/>}>
             <Route index element={<Homepage/>}/>
             <Route path='/products' element={<Products/>}/>
            </Route>
            
        </Routes>
    </Router>
  )
}

export default MyRoute