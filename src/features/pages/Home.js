import React from 'react'
import Navbar from '../counter/navbar/Navbar'
import ProductList from '../counter/product/ProductList'
const Home = () => {
  return (
    <>
      <Navbar>
            <ProductList></ProductList>
      </Navbar>
    </>
  )
}

export default Home
