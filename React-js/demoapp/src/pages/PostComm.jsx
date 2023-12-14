import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Comment from './Comment'
import axios from 'axios'
const PostComm = () => {
    const[comment,setComment]=useState([])
    const[limit,setLimit]=useState(16)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then( ab=>{
            console.log(ab.data)
            setComment(ab.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <div className="container-fluid">
            <div className="row ">
                {comment.slice(0,limit).map((items,i)=>(
                    <Comment data={items} key={i}/>
                ))}

                </div>
                <div className="d-flex justify-content-center my-3">
                {limit<comment.length && <button className="btn btn-warning mx-5" onClick={()=> setLimit(limit+4)}>Load more</button>}
                { limit>16 &&
        <button className='btn btn-warning' onClick={()=>setLimit(limit-4)}>Show less</button>
      }
                </div>
            </div>
    </div>
  )
}

export default PostComm