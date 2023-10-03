import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter } from 'react-router-dom'
import { CartItemsProvider } from './context/CartItems.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <CartItemsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CartItemsProvider>

)
