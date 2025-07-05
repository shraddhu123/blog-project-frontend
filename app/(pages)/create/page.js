"use client"
import axios from 'axios'
import { ArrowLeft, Save } from 'lucide-react'
import {useRouter} from 'next/navigation';
import toast from 'react-hot-toast';
import React, { useState } from 'react'


function page() {
  const [formData, setFormData]= useState({
    title:"",
    author:"",
    description:""
  })
  const router=useRouter()

  const handleChange=(e)=>{
    const {name, value}=e.target;
    setFormData({...formData,[name]:value})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    // console.log(formData,"form Data")
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_URL}/posts`, formData);
      toast.success("Post Save Successfully")
        router.push("/")
    } catch (error) {
      toast.error("Post Not Save")
      console.log("error occured", error)
    }
  }
  return (
    <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold mb-5'>Create New Post</h2>
        <div className='card'>
            <label className='mb-2 block'>Title <span className='text-red-600'>*</span></label> 
            <input type='text' required name='title' value={formData.title} onChange={handleChange} id='title' placeholder='Enter post Title' className='input mb-4' />

            <label className='mb-2 block'>Author <span className='text-red-600'>*</span></label> 
            <input type='text' required id='author' name='author' value={formData.author} onChange={handleChange} placeholder='Enter Author Name' className='input mb-4' />

            <label className='mb-2 block'>Description </label> 
            <textarea type='text' id='description' name='description' value={formData.description} onChange={handleChange}  placeholder='Enter Post Description' className='input mb-4 min-h-[150px]' />

            <div className='flex gap-2 items-center'>
                <button onClick={handleSubmit} className='btn btn-primary flex gap-1 items-center'><Save />Create Post</button>
                <button className='btn btn-secondary flex gap-1 items-center'><ArrowLeft />Cancel</button>
            </div>

        </div>

    </div>
  )
}

export default page


