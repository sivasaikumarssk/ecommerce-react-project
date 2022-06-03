import React from "react"
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { CheckoutPage } from "../Checkout/Checkout";
import { Link } from "react-router-dom";
import "./Product.css"


export const Product = ()=>{
   
    const [data,setData] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://tendyz-data.herokuapp.com/product/${id}`).then((data)=>{
             setData(data.data)
            //    console.log(data.data)
        })
    },[])

   console.log("data",data)
    let cartCount;
   const cartFunc = ()=>{
            let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
           cartArr.push(data);
           localStorage.setItem("cart",JSON.stringify(cartArr));
            
   }
    return(
        <div className="product">
            <div className="product_div">
                <img src={data.image} alt="" /><br/>
                
                
            </div>
            <div className="product_details">
                <h2>Cart:{cartCount}</h2>
                <h2>{data.title}</h2><br/>
                <h3>Price : ${data.price}</h3><br/>
                {data.description} <br/>
                <br />
                <br />
                <Link to="/cart"><button onClick={cartFunc}>Add to cart</button></Link>
                </div>
                
            <div>
                
            </div>
        
        </div>
    )
    // data.filter((e)=> e.id==id).map((elem)=>{
    //      console.log(elem.title)
    //     return(
    //       <div>
    //       elem.title
          
    //       </div>
    //     )
    // })
    
}


