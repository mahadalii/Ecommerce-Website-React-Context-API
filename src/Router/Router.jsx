import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainSection from '../Components/Section/MainSection'
import CartSection from '../Components/Section/CartSection'
import DetailPage from '../Components/DetailPage/DetailPage'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<MainSection />} />
        <Route path='/cart' element={<CartSection />} />
        <Route path='/product/:id' element={<DetailPage />} />
        
    </Routes>
  )
}

export default Router