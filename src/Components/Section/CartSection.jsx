import React, { useContext } from 'react'
import { CartItemsContext } from '../../context/CartItems'
import Card from '../Card/Card';


const CartSection = () => {
  const { cartItems } = useContext(CartItemsContext)
  console.log(cartItems);

  return (
    <>
      <div className='container mt-3 mb-5'>
        <div className="row">
          {
            cartItems.length < 1 ? <h1 className='text-center text-danger mt-5'>Sorry, Only items that are added to cart are shown here.🙁 </h1> : cartItems.map((product) => (
              <div key={product.id} className='col-3'>
                <Card product={product} />
              </div>
            ))
          }
        </div>
      </div>


    </>
  )
}

export default CartSection