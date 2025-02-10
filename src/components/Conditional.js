import React, { useEffect, useState } from 'react'

function Conditional() {
    const URL = "https://jsonplaceholder.typicode.com/comments";
    const [posts,setPosts] = useState([])
    const [postId , setPostId] = useState()

    async function getData(){
        let data = await fetch(URL)
        data = await data.json()
        setPosts(data)
    }

    useEffect( ()=>{
        getData();
    },[])
  return (
    <div>
        <div>
            <b>Controls</b>
            <input 
                placeholder='enter postId'
                onChange={(e)=>setPostId(e.target.value)}
            />
            {
                postId ?
                <b>Total records found for , postId = {postId} =&gt; {posts.length}</b>
                :
                <b>Enter the filter to see the magic...</b>
            }
        </div>
      <div style={{display:"flex",justifyContent:'space-around', flexWrap:"wrap"}}>
        {
            posts
            .filter( post => {
                
                return post.postId == postId || post.postId==1
            } )
            .map((post,index) => <Post post={post} index={index}/>)
        }
        {/* {
            posts
            .map((post,index) => post.postId==postId && <Post post={post} index={index}/>  )
        } */}
      </div>
    </div>
  )
}

export default Conditional


function Post({post}){
    return <div style={{backgroundColor:'#FFF2F2',padding:"5px",margin:"10px",borderRadius:"10px",width:"300px"}}>
        <p>postId : {post.postId}</p>
        <p>id = {post.id}</p>
        <b>{post.name}</b>
        <p>{post.email}</p>
        <p style={{fontSize:"12px"}}>{post.body}</p>
    </div>
}
