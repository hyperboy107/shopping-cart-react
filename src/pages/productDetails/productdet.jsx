import {FaSpinner} from 'react-icons/fa6'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ShoppingCartContext } from '../../context/context';

function Productdet () {

  const {id} = useParams();
  const {productDet, setProductdet,loading, setloading, addToCart, cartItems} = useContext(ShoppingCartContext);

  async function fetchProductDetails() {
    const apiResponse = fetch(`https://dummyjson.com/products/${id}`);
    const res = await (await apiResponse).json();
    console.log(res);
    if(res){
      setProductdet(res)
      setloading(false)
    }
  }
  useEffect(()=>{
      fetchProductDetails()
  },[id])

  // function handleCart(){
  //   navigate('/cart')
  // }

   if(loading){
        return <h2><FaSpinner />Loading please wait...</h2>
    }
  return (
    <div>
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
      <nav className=" bg-pink-500 text-white">
            <a href="/" className="mr-5 font-semibold leading-6 text-white hover:text-gray-900">Home</a>
            <a href="/cart" className="mr-5 font-semibold leading-6 text-white hover:text-gray-900">Cart</a>
            <a href="/product-list" className="mr-5 font-semibold leading-6 text-white hover:text-gray-900">Products</a>
            <a href="/pricing" className="mr-5 font-semibold leading-6 text-white hover:text-gray-900">Pricing</a>
            <a href="/about" className="mr-5 font-semibold leading-6 text-white hover:text-gray-900">About US</a>
        </nav>
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-lg relative">
              <img src={productDet?.thumbnail} alt={productDet?.title} className="w-full mx-auto max-w-md rounded object-cover" />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {
                productDet?.images.length ? 
                productDet?.images.map(imageItem=>

                <div className="rounded-xl p-4 shadow-md" key={imageItem}>
                  <img src={imageItem} alt="Product secondary image" className="w-24 h-24 object-cover rounded cursor-pointer" />
                </div>
                ) : null
              }
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333333]">
              {productDet?.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-m font-semibold ml-8">
                ${productDet?.price}
              </p> <br />
              <p className="text-teal-600 text-m font-semibold ml-8">
                Details: {productDet?.description}
              </p>
            </div>
            <div>
              <button disabled={cartItems.findIndex(item=> item.id === productDet?.id) > -1}
              onClick={()=> addToCart(productDet)} 
              className=" disabled:bg-red-600 disabled:text-white mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded">
              Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productdet;