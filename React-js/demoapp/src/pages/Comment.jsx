import React from 'react'
import { Link } from 'react-router-dom'
const Comment = (props) => {
  return (
    <> 
                     <div className="col-sm-6 mb-3 mb-sm-0 my-5">
                     <div className="card">
                     <div className="card-body">
                     <h5 className='card-title'>Name:{props.data.name.slice(0,25)}..</h5>
                     <h5 className='card-info'>E-mail:{props.data.email.slice(0,30)}..</h5>

                     <p className='card-text'>{props.data.body.slice(0,150)}...</p>
                     <Link href="#" className="btn btn-success">
             Read More.
           </Link>
                         </div>
                         </div>
                     </div>
    
    </>
  )
}

export default Comment