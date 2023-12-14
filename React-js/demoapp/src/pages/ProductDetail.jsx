import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {
    const [product,setProduct]=useState({})
    const params=useParams()
    const id=params.productId
    useEffect( ()=>{
        axios.get(` https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
            .catch(err=> console.log(err))
    },[id])
  return (
    <>
        <div className="container my-5">
            <div className="row d-flex justify-content-evenly align-items-center">
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} width='400' />
                </div>
                <div className="col-md-6">
                    <h1>{product.title}</h1>
                    <h2>${product.price}</h2>
                    <p>Category:{product.category}</p>
                    <p>{product.description}</p>
                    <h4>{product.rating  && product.rating.rate}({product.rating && product.rating.count})</h4>
                    <div className="my-2">
                        <button className="btn btn-warning">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductDetail