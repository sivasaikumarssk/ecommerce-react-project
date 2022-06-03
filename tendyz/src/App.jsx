import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Nav} from "./Components/Navbar/Navbar"
import {Home} from "./Components/HomePage/Home"
import {Routes,Route} from "react-router"
import { Electronics } from './Components/Electronics/Electronics'
import { Clothing } from './Components/Clothing/Clothing'
import {Login} from "./Components/Login/Login"
import {Signup} from "./Components/Signup/Signup"
import { Product } from './Components/Product/Product'
import { CheckoutPage } from './Components/Checkout/Checkout'
import {Mens} from "./Components/Clothing/Mens"
import {Womens} from "./Components/Clothing/Womens"
import {Jewelery} from "./Components/Clothing/Jewelery"
import {Allproducts} from "./Components/Clothing/Allproducts"
import {CartDetails} from "./Components/Cart/CartPage"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
     
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/products' element= {<Allproducts/>} />
        <Route path='/electronics' element= {<Electronics/>} />
        <Route path='/clothing' element= {<Clothing/>} />
        <Route path='/mens' element= {<Mens/>} />
        <Route path='/women' element= {<Womens/>} />
        <Route path='/jewelery' element= {<Jewelery/>} />
        <Route path='/login' element= {<Login/>}/>
        <Route path='/signup' element= {<Signup/>}/>
        <Route path='/products/:id' element= {<Product/>}/>
        <Route path='/cart' element= {<CartDetails/>}/>
        <Route path='/checkout' element= {<CheckoutPage/>}/>
      </Routes>
      
      {/* <Footer/> */}
    </div>
  )
}

export default App
