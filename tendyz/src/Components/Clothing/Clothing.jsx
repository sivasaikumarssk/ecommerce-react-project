import React, { useEffect, useState } from "react";
import axios from "axios";
import "./clothing.css";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { addProduct } from "../../Redux/Action";


export const Clothing = ()=>{
        const allProducts = useSelector((state)=> state.allProd.product);
        const [data,setData] = useState([])


        const filterProd = (value)=>{
            const list = allProducts.filter((x)=> x.category === value);
            setData(list);
            return(<>
            {list.map((el)=>{
                console.log("filtered",el)
                return(
                    <div key={el.id}>
                        {el.title}
                        <img src={el.image} alt="" />
                    </div>
                )
            })}</>)
            
        }

       
        const dispatch = useDispatch();
        const dataProducts = async ()=>{
       const response = await axios.get("https://fakestoreapi.com/products").catch((err) =>{
           console.log("error",err);
       });
       dispatch(addProduct(response.data))
   }
    useEffect(()=>{
            dataProducts();  
    },[]);
    
    const priceArr =JSON.parse(localStorage.getItem("sortedArrbyPrice"))||[];

    // const sortFunc =(()=>{
        
    //     localStorage.setItem("sortedArrbyPrice",JSON.stringify(priceArr))

    //     priceArr.sort((a,b) => a.price > b.price ? 1 : -1).map((e)=>{
            
    //         return(
    //             <>
    //             <img src={e.image} alt="" /> <br />

    //             ${e.price}  
                
    //             </>
    //         )
    //     })
    
    // })
    
    // console.log('data',allProducts)

    const handleChangeSort = (key, value = 1) => {
        if (value === 1) {
          allProducts.sort((a, b) => a[key] - b[key])
          dispatch(addProduct(data))
        }
        else {
          allProducts.sort((a, b) => b[key] - a[key])
          dispatch(addProduct(data))
        }
      }

    
    const finalProducts = allProducts.map((ele)=>{
        priceArr.push(ele);
        return(
            <div >
            <Link to={`/products/${ele.id}`}>
           <div className="products" key={ele.id}>
                <div className="products_div" >
                <img src={ele.image} alt="" /> <br />
                <h5>{ele.title}</h5>
                <h3>Price : ${ele.price}</h3> <br />
                {/* {ele.description} */}
                

            </div>
           </div>
           </Link>
           </div>
        )
    })

    return(
        <>
        <button onClick={()=>filterProd("men's clothing")}>Mens</button>
        <button onClick={()=>filterProd("women's clothing")}>Womens</button>
        <button onClick={()=>filterProd("jewelery")}>Jewelery</button>
        <button onClick={()=>filterProd("electronics")}>Electronics</button>
        <div>
            Name <button onClick={() => {
            handleChangeSort("title")
          }}>A-Z</button>

            Name <button onClick={() => {
            handleChangeSort("title",-1)
          }}>Z-A</button>

            Price<button onClick={() => {
            handleChangeSort("price")
          }}>Low - High</button>

            Price <button onClick={() => {
          handleChangeSort("price", -1)
        }}>High - Low</button>
        </div>
        <div className="allProducts">
                
           {finalProducts}
            
        </div>
        </>
    )






}
