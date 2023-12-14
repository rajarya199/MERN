import React,{useState,useEffect} from 'react'
import Card from '../components/Card'
import axios from 'axios'
//usestate--take initial state value and update its  value 
//useeffect-perform side effect in your component like fetching data,updating dom
const Products = () => {
  const[products,setProducts]=useState([])
  const [limit,setLimit]=useState(12)
   useEffect( ()=>{
    
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      console.log(res.data) 
      setProducts(res.data)
    })
    .catch(err=>console.log(err))
   },[])
  return (
    <>
     <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-4 g-4">
      {products.slice(0,limit).map((item,i)=>(
          <Card data={item} key={i}/>
          //data is pass as prop to card
          ))}
     </div>
     <div className="d-flex justify-content-center my-3">
      {limit<products.length &&  <button className="btn btn-warning mx-5" onClick={()=> setLimit(limit+4)}>Load more</button>}
     {
      limit>12 &&  <button className="btn btn-warning" onClick={()=> setLimit(limit-4)}>Show less </button>
     }
     </div>
     </div>
    
    </>
  )
}

export default Products