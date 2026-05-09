import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Generate from './pages/Generate'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice.js'
import { auth } from './utils/firebase.js'
import { useSelector } from 'react-redux'
import { useState } from 'react'
export const ServerUrl="http://localhost:8000"
export const App = () => {
  const dispatch=useDispatch();
  const {userData}=useSelector((state)=>state.user)
  const [authChecked,setAuthChecked]=useState(false);
  
  useEffect(()=>{
    const fetchUser=async()=>{
      try{
        const res=await axios.get(ServerUrl+"/api/user/current-user",{withCredentials:true})
        console.log(res.data)
        dispatch(setUserData(res.data))
        setAuthChecked(true);

      }
      catch(err){
        console.error("Error fetching user:", err)
        dispatch(setUserData(null))
        setAuthChecked(true);
      }
    }
    fetchUser();
  },[])









  return (
    <>
    {
      !authChecked && <div className='fixed top-0 left-0 w-full h-1 bg-[#35ebff] animate-pulse z-50'>Loading...</div>
    }
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/generate' element={<Generate/>}/>
    </Routes>
    </>
  )
}
