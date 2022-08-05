import React from 'react'
import { useRoutes } from 'react-router'
import CartPage from '../pages/CartPage'
import ProductPage from '../pages/ProductPage'

const Routes = () => {
    let Elements = useRoutes([
        {
            path: "/",
            element: <ProductPage/>
        },
        {
            path: "/cart",
            element: <CartPage/>
        }
    ])


  return Elements
}

export default Routes