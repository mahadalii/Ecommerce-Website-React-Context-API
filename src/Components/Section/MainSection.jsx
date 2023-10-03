import React, { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import Loader from "../../Components/Loader/Loader"
import { CartItemsContext } from '../../context/CartItems'


const MainSection = () => {
    const {fetchproduct, isLoading, allproduct} = useContext(CartItemsContext)

  useEffect(() => {
    fetchproduct()
  }, [])

  
  return (
    <>
      <div className='container'>
        <div className='row'>
          {
            isLoading ? <Loader /> :
              allproduct.slice(0, 10).map((product) => (
                <div key={product.id} className='col-3 mt-5 mb-2'>
                  <Card product={product} />
                </div>

              ))
          }
        </div>
      </div>
    </>
  )
}

export default MainSection