import { Fragment, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/homepage/home'
import Productlist from './pages/productList/productlist'
import Productdet from './pages/productDetails/productdet'
import Cartlist from './pages/cartList/cartlist'
import Pricing from './pages/homepage/pricing'
import AboutPage from './pages/About/about'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/product-list' element={<Productlist />}/>
        <Route path='/product-details/:id' element={<Productdet />} />
        <Route path='/cart' element={<Cartlist />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </Fragment>
    
  )
}

export default App
