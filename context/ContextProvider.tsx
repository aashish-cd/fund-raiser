import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { getAllProducts } from '../firebase'

const MyProvider = ({ children }: any) => {
  const [data, setData] = useState([])
  const [isLoggedin, setIsLoggedin] = useState(true)

  const handleSignin = (logStatus: boolean) => {
    console.log('handle sign in ')
    setIsLoggedin(!logStatus)
  }

  const value = {
    data,
    setData,
    isLoggedin,
    setIsLoggedin,
    handleSignin,
  }

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}

export default MyProvider
