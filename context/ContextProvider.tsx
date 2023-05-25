import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { getAllProducts } from '../firebase'

const MyProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const fetchData = async () => {
    const products = await getAllProducts()
    setData(products)
    setFilteredProducts(products)
  }

  const filterProducts = (category) => {
    if (category === 'all') {
      setFilteredProducts(data)
    } else {
      setFilteredProducts(data.filter((item) => item.category === category))
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const value = {
    filterProducts,
    filteredProducts,
    data,
    setData,
    setFilteredProducts,
  }

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}

export default MyProvider
