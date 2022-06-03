import "./Navbar.css"
import {Routes,Route} from "react-router"
import { Electronics } from "../Electronics/Electronics"
import { Clothing } from "../Clothing/Clothing"
import { Link } from "react-router-dom"
import { Product } from "../Product/Product"



export const Nav = ()=>{
    return(
        <div className="nav"> 
            <div className="logo_div"><Link to="/"><h1>Tendyz</h1></Link></div>
            <div className="navbar_div">
                
                {/* <Link to="/"><h3>Home</h3></Link> */}
                <Link to="/Electronics"><h3>Electronics ▼<img src="" alt="" /></h3></Link>
                <Link to="/Clothing"><h3>Clothing ▼</h3></Link>
                {/* <Link to="/Furniture"><h3>Furniture ▼</h3></Link> */}
                {/* <Link to="/Product"><h3>Product ▼</h3></Link> */}
                
            
            <div className="login_signup">
                <img src="" alt="" />
           <i class="fa-solid fa-cart-shopping"></i>
            <Link to="/Signup"><h3>Signup</h3></Link>
            <Link to="/login"><h3>Login</h3></Link>
            
            </div>
            </div>
        </div>
    )
}