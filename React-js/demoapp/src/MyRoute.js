import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import First from "./First";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Post from "./pages/Post";
import PostComm from "./pages/PostComm";
const MyRoute = () => {
  return (
    <Router>
        <Routes >
            <Route path='/' element={<Layout/>}>
             <Route index element={<Homepage/>}/>
             <Route path='/products' element={<Products/>}/>
             <Route path='/posts' element={<Post/>}/>
             <Route path='/comment'element={<PostComm/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default MyRoute