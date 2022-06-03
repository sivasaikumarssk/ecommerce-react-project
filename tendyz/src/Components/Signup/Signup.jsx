import "./Signup.css";
import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export const Signup = ()=>{

    const [user, setUser] =useState({email:"",password:""});
    const navigate= useNavigate();
    const handleChange= (e) =>{
        const {id,value} = e.target;
        setUser({...user,[id]:value});
    }
    const [register,setRegister] = useState(false)
    if(register){
        navigate('/login')
    }
    const handleClick = (e) =>{
        e.preventDefault();
        console.log(user)
        setRegister(false);
        axios.post(`http://localhost:5500/register`,user).them((res)=>{
            console.log(res.data)
        setRegister(true)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <>
        <div className="signup_div">
            
            <div className="left">
                <img src="https://imgs.search.brave.com/YuRxNR8gOm_6JO5lzWc8q6UsJYNZ6ik5wo5Y59DpIlU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/N0E1Q2dKNE91Q2VR/VkxNYzBvQ3BRSGFI/YSZwaWQ9QXBp" alt="" />
            </div>
    
        
        <div className="right">
            <form onSubmit={handleClick}>
                <div>
                    
                    <label htmlFor="">Email Adress </label>
                    <input type="text" onChange={handleChange} />
                    <br /> <br />
                    <label htmlFor="">Password </label>
                    <input type="text"  onChange={handleChange}/>

                </div>
                <input type="submit" onSubmit={handleClick} />
            </form>
        </div>
        </div>
        </>
    )

    
}


