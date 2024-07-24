import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Navbar.css";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";


const Navbar = () =>{

    const [hidden, setHidden] = useState(true);

    return (
        <div className="navbareffect">
            <header className="  z-100  p-3 bg-white text-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-between ">
                      
                        <div>
                            <a href="https://humanonext.com/" ><img alt="logo" src="https://img1.wsimg.com/isteam/ip/1f43bf7f-c014-454a-839a-0bf87063f4da/blob-4a1ecb3.png/:/rs=w:59,h:84,cg:true,m/cr=w:59,h:84/qt=q:95"></img></a>
                        </div>

                        <div className="">
                            <ul class="nav border border-secondary  p-1 explore-tabs bg-secondary text-white justify-content-start justify-content-xl-center rounded-pill  border-0 list-unstyled" id="myTabs" role="tablist">
                                
                                <li class="rounded-pill bg-white nav-item">
                                    <a class="nav-link text-black active font-16 poppins-medium" id="explore-one" data-bs-toggle="tab" href="#exploreone" role="tab" aria-controls="exploreone" aria-selected="true">Popular</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-black font-16 poppins-medium" id="explore-two" data-bs-toggle="tab" href="#exploretwo" role="tab" aria-controls="exploretwo" aria-selected="false">Product
                                        Engineering</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-black font-16 poppins-medium" id="explore-three" data-bs-toggle="tab" href="#explorethree" role="tab" aria-controls="explorethree" aria-selected="false">SaaS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-black font-16 poppins-medium" id="explore-four" data-bs-toggle="tab" href="#explorefour" role="tab" aria-controls="explorefour" aria-selected="false">AI &amp;
                                        ML</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-black font-16 poppins-medium" id="explore-five" data-bs-toggle="tab" href="#explorefive" role="tab" aria-controls="explorefive" aria-selected="false">
                                        Data Engineering
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-black font-16 poppins-medium" id="explore-six" data-bs-toggle="tab" href="#exploresix" role="tab" aria-controls="exploresix" aria-selected="false">
                                        Design
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-black font-16 poppins-medium" id="explore-seven" data-bs-toggle="tab" href="#exploreseven" role="tab" aria-controls="exploreseven" aria-selected="false">
                                        Marketing
                                    </a>
                                </li>
                            </ul>
                            
                        </div>
                        
                        

                        <div className="text-end  ">
                        <div
                                    className="container"
                                    onMouseEnter={() => setHidden(false)}
                                    onMouseLeave={() => setHidden(true)}
                                >
                            <button type="button" className="text-dark rounded-pill btn btn-warning">
                                

                                    <a href="/" className="contact-us text-dark">
                                        <span>Contact - Us </span>
                                    </a> 
                                    &nbsp;
                            
                                    {hidden ? <GoArrowUpRight />  : < GoArrowRight /> }
                                
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar;