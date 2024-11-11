//Craete the context, provide the stage to context, wrap context in root component, consume the context using usecontext

import { createContext, useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { json, useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

//Create the provider in global
function ShoppingCartProvider({ children }) {
    const [loading, SetLoading] = useState(true);
    const [listOfProd, setListOfProd] = useState([])
    const [productDet, setProductdet] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate()


    async function fetchListOfProducts() {
        const apiResponse = await fetch('https://dummyjson.com/products');
        const res = await apiResponse.json()

        if (res && res?.products) {
            setListOfProd(res?.products);
            SetLoading(false)
        }
    }

    function addToCart(getProductDetails) {
        let copyExistingItem = [...cartItems]
        const findIndexOfCurrItem = copyExistingItem.findIndex(cartItems => cartItems.id === getProductDetails.id)
        console.log(findIndexOfCurrItem);
        if (findIndexOfCurrItem == -1) {
            copyExistingItem.push({
                ...getProductDetails,
                quantity: 1,
                totalPrice: getProductDetails?.price,
            })
        }
        else {
            copyExistingItem[findIndexOfCurrItem] = {
                ...copyExistingItem[findIndexOfCurrItem],
                quantity: copyExistingItem[findIndexOfCurrItem].quantity + 1,
                totalPrice: (copyExistingItem[findIndexOfCurrItem].quantity + 1) * copyExistingItem[findIndexOfCurrItem].price
            }
        }
        console.log(copyExistingItem, 'Copuydewf ewvef');
        setCartItems(copyExistingItem)
        localStorage.setItem('cartItems', JSON.stringify(copyExistingItem));
        // navigate('/cart')
    }

    function handleRemoveFromCart(getProductDetails, isPermanentRemoveFromCart) {
        let copyExistingItem = [...cartItems]
        const findIndexOfCurrItem = copyExistingItem.findIndex(cartItems => cartItems.id === getProductDetails.id);

        if (isPermanentRemoveFromCart) {
            copyExistingItem.splice(findIndexOfCurrItem, 1)
        }
        else {
            copyExistingItem[findIndexOfCurrItem] = {
                ...copyExistingItem[findIndexOfCurrItem],
                quantity: copyExistingItem[findIndexOfCurrItem].quantity - 1,
                totalPrice: (copyExistingItem[findIndexOfCurrItem].quantity - 1) * copyExistingItem[findIndexOfCurrItem].price
            }
        }
        localStorage.setItem('cartItems', JSON.stringify(copyExistingItem))
        setCartItems(copyExistingItem)
    }

    useEffect(() => {
        fetchListOfProducts();
        setCartItems(JSON.parse(localStorage.getItem('cartItems')) || [])
    }, [])

    console.log(cartItems)

    return <ShoppingCartContext.Provider value={{ listOfProd, loading, SetLoading, productDet, setProductdet, addToCart, cartItems, handleRemoveFromCart }}>
        {children}
    </ShoppingCartContext.Provider>
}

export default ShoppingCartProvider;