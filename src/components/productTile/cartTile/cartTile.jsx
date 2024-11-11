
import { Fragment, useContext } from 'react';
import {FaTrash, FaPlus, FaMinus} from 'react-icons/fa6'
import { ShoppingCartContext } from '../../../context/context';
function CartTile({singleCartItem}){

    const {handleRemoveFromCart, addToCart} = useContext(ShoppingCartContext)
    return (
        <Fragment>
            <div className="grid grid-cols-3 items-start gap-5">
            <div className="col-span-2 flex items-start gap-4">
                <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-200 p-1 rounded-sm">
                    <img src={singleCartItem?.thumbnail} alt="Single Cart" className="w-full h-full onject-contain" />
                </div>
                <div className="">
                    <h3 className="text-base font-bold text-gray-900">{singleCartItem?.title}</h3>
                    <button onClick={()=> handleRemoveFromCart(singleCartItem, true)}
                    className="text-sm py-3 px-4 bg-pink-500 text-white font-bold rounded-md mr-[15rem]"><FaTrash /></button>
                </div>
            </div>
            <div className="ml-auto">
                <h3 className="text-lg font-semibold text-gray-900">
                    ${singleCartItem?.totalPrice.toFixed(2)}
                </h3>
                <p className="mt-2 mb-3 font-semibold text-[16px]">Quantity: {singleCartItem?.quantity}</p>
                <div className="mt-3">
                    <button disabled={singleCartItem?.quantity === 1} 
                    onClick={()=> handleRemoveFromCart(singleCartItem, false)}
                    className="bg-pink-600 text-white border disabled:opacity-65 border-[#000] ml-[1rem] mx-2"><FaMinus/></button>
                    <button onClick={()=> addToCart(singleCartItem)} disabled={singleCartItem?.quantity === 10}
                    className="bg-pink-600 text-white border border-[#000] mx-2"><FaPlus/></button>
                </div>
            </div>
        </div>
        <hr className='border-emerald-500' />
        </Fragment>
    )
}

export default CartTile;