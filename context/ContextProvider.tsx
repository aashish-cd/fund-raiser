import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { getAllProducts } from '../firebase'

const MyProvider = ({ children }: any) => {
  const [data, setData] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const value = {
    filteredProducts,
    data,
    setData,
    setFilteredProducts,
  }

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}

export default MyProvider
