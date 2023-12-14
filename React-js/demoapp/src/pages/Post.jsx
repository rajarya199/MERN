import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Post = () => {
    const[posts,setPosts]=useState([])
    const[limit,setLimit]=useState(16)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result=>{
            console.log(result.data)
            setPosts(result.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <>
        <div className="container-fluid">
            <div className="row ">
                {posts.slice(0,limit).map((items,i)=>(
                     <div className="col-sm-6 mb-3 mb-sm-0 my-5">
                     <div className="card">
                     <div className="card-body">
                     <h5 className='card-title'>{items.title.slice(0,25)}..</h5>
                     <p className='card-text'>{items.body.slice(0,150)}...</p>
                     <Link href="#" className="btn btn-success">
             Read More.
           </Link>
                         </div>
                         </div>
                     </div>
                )

                )}
           
            </div>
            <div className="d-flex justify-content-center my-3">
                {limit<posts.length && <button className="btn btn-warning mx-5" onClick={()=> setLimit(limit+4)}>Load more</button>}
                { limit>16 &&
        <button className='btn btn-warning' onClick={()=>setLimit(limit-4)}>Show less</button>
      }
                </div>
        </div>
    </>
  )
}

export default Post