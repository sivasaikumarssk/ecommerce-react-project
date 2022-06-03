import React from "react";
import { useSelector } from "react-redux";

export const Allproducts = ()=>{
    const products = useSelector((state) => state);
    console.log(products)
    
    // const list = products.map((ele)=>{
    //     return(
    //         <div>
    //             {ele.image}
    //             {ele.title}
    //         </div>
    //     )
    // });
    return(
        <div>

        </div>
    )
}




