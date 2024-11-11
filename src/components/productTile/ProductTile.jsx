import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context/context";


function ProductTile({ singleProductTile }) {

    const navigate = useNavigate()
    const {addToCart, cartItems} = useContext(ShoppingCartContext)

    function handleNavigateToProductDetailsPage(getCurrProdId){
        console.log(getCurrProdId, navigate)
        navigate(`/product-details/${getCurrProdId}`);
    }
    return (
        <div className="relative group border border-black p-6 cursor-pointer">
            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img src={singleProductTile?.thumbnail}
                    alt={singleProductTile?.title}
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" />
            </div>
            <div className="flex items-start justify-between mt-4 space-x-4">
                <div className="text-gray-900 font-bold sm:text-sm tetx-xs md:text-base">
                    <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{singleProductTile?.title}</p>
                </div>
                <div className="text-right">
                    <p className="text-gray-700 font-semibold text-xs sm:text-sm md:text=[14px]">${singleProductTile?.price}</p>
                </div>
            </div>
            <button onClick={()=> handleNavigateToProductDetailsPage(singleProductTile?.id)}
            className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-semibold text-lg">Details</button>
            <button disabled={cartItems.findIndex(item=> item.id === singleProductTile?.id) > -1}
            onClick={()=> addToCart(singleProductTile)}
            className="disabled:bg-red-600 px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-semibold text-lg">Add To Cart</button>
        </div>
    )
}

export default ProductTile;