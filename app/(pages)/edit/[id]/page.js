"use client"
import EditForm from "@/components/EditForm";
import axios from "axios";
import React, { use, useEffect, useState } from "react";

function page({params}) {
    const {id} =use(params)
    const [post, setPost] = useState(null);
    // console.log(id,"id")
    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`http://localhost:4000/posts/${id}`)
                // console.log(response.data,"single post");
                setPost(response.data)
            } catch (error) {
                console.log("error fetching post", error);
            }
        }
        fetchPost();
    }, [id])
    return( 
        <div className='max-w-3xl mx-auto'>
        {post?  <EditForm initialPost={post}/>: null }
        

         </div>
    )
}

export default page