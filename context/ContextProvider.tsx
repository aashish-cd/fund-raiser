import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { auth } from '@/firebase'
import { useRouter } from 'next/router'

const MyProvider = ({ children }: any) => {
  const [data, setData] = useState([])
  const [isLoggedin, setIsLoggedin] = useState(true)
  const [user, setUser] = useState(auth.currentUser)
  const router = useRouter()

  const handleSignin = () => {
    if (user) {
      auth.signOut()
    } else {
      router.push('/login')
    }
  }

  useEffect(() => {
    //update user state
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [auth.currentUser])

  const value = {
    data,
    setData,
    isLoggedin,
    setIsLoggedin,
    handleSignin,
    user,
    setUser,
  }

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}

export default MyProvider
