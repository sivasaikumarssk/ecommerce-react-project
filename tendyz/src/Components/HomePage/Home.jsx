import "./Home.css"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router"
import {useEffect} from 'react';
import axios from "axios";


export const Home = ()=>{

    // const navigate = useNavigate();

    // useEffect(() => {
    //     let token = json
    // })
    return(
        <div className="home_div">
            
            <div className="hero_img_div">
                <img src="https://imgs.search.brave.com/OSb55FOVF5ADDJrgePrAM5q7oHTe-m2ekin8UYlvzOY/rs:fit:829:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/SkFMSmJXSGxGVmxp/cmRaUnc3REpRSGFF/UCZwaWQ9QXBp" alt="" />
                <img src="https://imgs.search.brave.com/WqvyVxE6F7wnvtrcUExbuF8Y3IF0PUJH1cMEsUDRRs0/rs:fit:636:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/eDNCdDdRVHJxMllN/ZC1SbTJBWnR3SGFG/aCZwaWQ9QXBp" alt="" />
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
                    <img src="https://imgs.search.brave.com/2CM9bCnRSXC3yl-kr-4-YK0IyvP6FnKXY_Qcg_7sKSQ/rs:fit:305:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/MWFCLXQtSzZ0Mjho/Vl9rQU1icDF3QUFB/QSZwaWQ9QXBp" alt="women" />
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
                    <img src="https://imgs.search.brave.com/d2XakrqKLJLBhYWCr208CR5RUlt8OXNXLOuU5HVsh9Y/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/N1c2ZHJWV2FZeWFi/dUlQN1U4WUR3SGFI/YSZwaWQ9QXBp" alt="jewellery" />
                    <h2>Jewellery</h2>
                    </Link>
                </div>
            </div>

            <div className="main_img">
                <img src="https://imgs.search.brave.com/MCk_sGIkB5y5B0yqM3YpJWySNwZlru-mob2SYD93iB8/rs:fit:835:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/QmtkMzlyTGxSbDMy/aUNzWmxWbkNRSGFF/TiZwaWQ9QXBp" alt="" />
            </div>
            
        </div>
    )
}