import React, { useEffect, useState } from "react";
import axios from "axios";
import "./clothing.css";
import { Product } from "../Product/Product";
import { Link } from "react-router-dom";

export const Jewelery = ()=>{
    
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data)

    let componentMounted =true;
    useEffect(()=>{
        if(componentMounted){
            axios.get("https://tendyz-data.herokuapp.com/product").then((data)=>{
             setData(data.data)
            //    console.log(data.data)

        
            })
        }
        return ()=>{
            componentMounted = false;
        }
    },[]);
    
    const filterProd = (value)=>{
        const list = data.filter((x)=> x.category === value);
        setFilter(list);
    }
    
    const ShowProd = ()=>{
        return (
            <>
            
            <div className="home_div">
            
            <div >
                <img className="hero_img_div" src="https://imgs.search.brave.com/4kvhLbU8vz5wAWKZz_jvfYfTeHCUKa4q_5KiNglGJvA/rs:fit:1321:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/ZmhIN2dPdURMQUdM/LUJDN3lEMGlRSGFD/cSZwaWQ9QXBp" alt="" />
                
            </div>

            <div className="category">
                <div >
                    <Link to="/mens">
                        <img src="https://imgs.search.brave.com/TSmQEVPZ-8_97QvU_uuY5SclTHQVomHxQL5dkDZoLZo/rs:fit:380:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/bzdpZmlpMGd2SVpf/b0d1NE1XczlBSGFK/UCZwaWQ9QXBp" alt="men" />
                        <h2>Mens</h2>
                    </Link>
                </div>
                <div>
                    <Link to="/women">
                    <img onClick={()=>filterProd("women's clothing")} src="https://imgs.search.brave.com/2CM9bCnRSXC3yl-kr-4-YK0IyvP6FnKXY_Qcg_7sKSQ/rs:fit:305:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/MWFCLXQtSzZ0Mjho/Vl9rQU1icDF3QUFB/QSZwaWQ9QXBp" alt="women" />
                    <h2>Womens</h2>
                    </Link>
                </div>
                <div>
                    <Link to="/electronics">
                    <img src="https://imgs.search.brave.com/TIABskTDg9OFYgoPpGBr30y8Ut4Zi3s1KkZaXSptgUE/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/ZmJtVDRpTjEtc2k2/NkUyczdsdExRSGFI/YSZwaWQ9QXBp" alt="electronics" />
                    <h2>Electronics</h2>
                    </Link>
                </div>
                <div>
                    <Link to="/jewelery">
                    <img onClick={()=>filterProd("jewelery")} src="https://imgs.search.brave.com/d2XakrqKLJLBhYWCr208CR5RUlt8OXNXLOuU5HVsh9Y/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/N1c2ZHJWV2FZeWFi/dUlQN1U4WUR3SGFI/YSZwaWQ9QXBp" alt="jewellery" />
                    <h2>Jewellery</h2>
                    </Link>
                </div>
            </div>

            
            
        </div>
        <div className="buttons">
            <button onClick={()=>filterProd("jewelery")}>Jewelery</button>


            </div>
            <hr/>
            {filter.map((ele)=>{
                // console.log(ele)
                return(
                    <>
                    <Link to={`/products/${ele.id}`}>
                    <div className="clothing_div"  >   
                        <div className="products_div" key={ele.id}>
                            <img src={ele.image} alt="" /><br/>
                            <h2>{ele.title}</h2> <br/>
                            Price : ${ele.price}
                            {ele.description}
                        </div>
                       
                    </div>
                    </Link>
                    <hr/>
                    </>
                )
            })}
            </>
        )
    }
    return(
        <div>
        <div><ShowProd/></div>

        </div>

    )
    
}
