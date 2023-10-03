import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartItemsContext } from '../../context/CartItems'

const Card = ({ product }) => {
    const { incrementQuantity, setCartItems, cartItems } = useContext(CartItemsContext)



    const { title, price, description, image, id } = product
    let shortdescription = description.substring(0, 100)
    let shorttitle = title.substring(0, 20)

    // add to cart
    const addToCartHandler = (product)=>{
        incrementQuantity()
        setCartItems([...cartItems,product])
    }

    // Removing from cart
    const removeFromCart = (oroduct)=>{

    }

    const buttonHandler = (product)=>{
        if(cartItems.length >= 0){
            addToCartHandler(product)
        }else{

        }
    }

    return (
        <>
            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://picsum.photos/200/300" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p className="mt-1">$16.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className="card">
                <Link to={`/product/${id}`}>
                    <img src={image} className="card-img-top" alt="..." style={{ height: 260 }} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{shorttitle}..</h5>
                    <p className="card-text">{shortdescription}..</p>
                    <p>Rs {price}</p>
                    <a href="#" className="btn btn-primary" onClick={()=>{
                        buttonHandler(product)
                    }}>Add to Cart</a>
                </div>
            </div>
        </>
    )
}

export default Card