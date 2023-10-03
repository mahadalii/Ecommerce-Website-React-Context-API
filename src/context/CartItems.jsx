import axios from "axios"
import { createContext, useState } from "react"


const CartItemsContext = createContext({})



const CartItemsProvider = ({ children }) => {

  let [itemsQuantity, setItemsQuantity] = useState(0)
  let [allproduct, setAllProducts] = useState([])
  let [isLoading, setIsLoading] = useState(false)
  const [cartItems, setCartItems] = useState([])


  const incrementQuantity = () => {
    setItemsQuantity(++itemsQuantity)
  }


  const fetchproduct = () => {
    setIsLoading(true)
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setIsLoading(false)
        setAllProducts(response.data)
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err);
      })
  }



  let objToSend = {
    itemsQuantity,
    incrementQuantity,
    isLoading,
    allproduct,
    fetchproduct,
    cartItems,
    setCartItems
  }

  return <CartItemsContext.Provider value={objToSend}>{children}</CartItemsContext.Provider>

}

export { CartItemsContext, CartItemsProvider }