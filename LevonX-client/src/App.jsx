import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice.js'
export const ServerUrl="http://localhost:8000"
export const App = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    const fetchUser=async()=>{
      try{
        const res=await axios.get(ServerUrl+"/api/user/current-user",{withCredentials:true})
        console.log(res.data)
        dispatch(setUserData(res.data))

      }
      catch(err){
        console.error("Error fetching user:", err)
        dispatch(setUserData(null))
      }
    }
    fetchUser();
  },[])
  return (
    <Routes>

      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}
