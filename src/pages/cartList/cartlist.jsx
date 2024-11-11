
import {FaFaceLaugh} from 'react-icons/fa6'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import CartTile from '../../components/productTile/cartTile/cartTile';


function Cartlist () {
  const {cartItems} = useContext(ShoppingCartContext)
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0)
  return (
    <div className="max-w-5xl m-auto max-md:max-w-xl py-4">
    <nav className="bg-pink-500 text-white">
      <a href="/" className="mr-5 font-medium leading-6 text-white hover:text-gray-900">Home</a>
            <a href="/pricing" className="mr-5 font-medium leading-6 text-white hover:text-gray-900">Pricing</a>
            <a href="/product-list" class="mr-5 font-medium leading-6 text-white hover:text-gray-900">Products</a>
            <a href="/about" className="mr-5 font-medium leading-6 text-white hover:text-gray-900">About Us</a>
    </nav>
      <h1 className="text-2xl font-bold text-gray-800 text-center">Cart Lists</h1>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2 space-y-4">
          {
            cartItems?.length ?
            cartItems.map(singleCartItem=> <CartTile singleCartItem={singleCartItem}/>)
             : <h2>Empty Cart</h2>
          }
        </div>
        <div className="bg-gray-100 rounded-sm p-2 h-max">
          <h3 className="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2">Order Summary</h3>
          <ul className="text-gray-700 mt-04 space-y-2">
            <p className="flex flex-wrap gap-4 text-sm font-bold">Total: ${totalPrice.toFixed(2)}</p>
          </ul>
          <div className="mt-5 flex gap-6">
            <button disabled={cartItems.length === 0}
            className="disabled:opacity-60 text-sm py-3 px-4 bg-pink-500 text-white font-bold rounded-md">Checkout</button>
            <button onClick={()=> navigate('/product-list')} className="text-sm py-3 px-4 bg-pink-500 text-white font-bold rounded-md">Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartlist;