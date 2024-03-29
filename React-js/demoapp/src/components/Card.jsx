// import React from 'react'
// import { Link } from 'react-router-dom'
// const Card = (props) => {
//   const{image,title,price,id}=props.data || {}
//   return (
//     <>
       
//   <div className="col">
//     <div className="card">
//       <img src={image} className="card-img-top" alt="{props.data.title}" />
//       <div className="card-body">
//         <h5 className="card-title">{title.slice(0,20)}...</h5>
//         <h5>${price}</h5>
//        <Link  to={`/productdetails/${id}`} className="btn btn-success">View details</Link>
//       </div>
//     </div>
//   </div>
//     </>
//   )
// }

// export default Card
import React from 'react'
import { Link } from 'react-router-dom'
const Card  = (props) => {
const{title,price,id,image}=props.data
  return (
    <>
   
  <div className="col">
    <div className="card">
      <img src={image} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,20)}...</h5>
        <h5 className="card-price">${price}</h5>
        <Link to={`/productdetails/${id}`} className="btn btn-success">View Details</Link>

      </div>

    </div>
  </div>
     </>
  )
}
export default Card  