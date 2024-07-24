import React from "react";
import './WhyChooseUs.css'
import 'swiper/css';

const WhyChooseUs = () =>{
    return (
        <div className="  whyChooseUs rxsection-t-space threeboxList">
            <div className="whyChooseUsBox">

                {/* Heading  */}


                <div className="w-full p-5 text-center">

                    <h2>Why Choose Us?</h2>

                    <div className="listanchor para_md b-space-40">

                        <p >We are an expert offshore software development partner, 
                            with over two decades of experience in transforming business processes digitally. 
                            We have often been named as a most preferred software engineering company for
                            our highly collaborative approach
                        </p>

                    </div>
                    
                </div>

                {/* Three box */}


                <div className="pb-5 relative row bullet-slider ">
                        {/* 1  */}


                    <div className="boxContainer col pr-4">

                        <div className="Container p-4 h-auto m-top-1 "> 
                            <div>
                                <h2>Fast Onboarding</h2>
                            </div>
                            <div>
                                <p className="listanchor para_md b-space-40 ">We excel at streamlined communication. Enabling rapid application development to our global 
                                    clientele with increased proficiency. We make time, culture and location differences imperceptible.</p>
                            </div>
                            <div className="">
                                <ul >
                                    <li> <span className="before "></span> Strategy</li>
                                    <li> <span className="before"></span> Visibility</li>
                                    <li> <span className="before"></span> Transparency</li>
                                </ul>
                            </div>
                            <div className="borderDesign"></div>
                        </div>


                    </div>

                        {/* 2 */}
                        
                    <div className="boxContainer col pr-4">

                        <div className="Container p-4 h-auto m-top-1 ">
                            <div>
                                <h2>Agile Project Management</h2>
                            </div>
                            <div>
                                <p className="listanchor para_md b-space-40  ">Keeping it simple and clear. A Solid project management process in place to meet client’s expectations, 
                                    avoid budget overruns and minimize project risks. Delivering a software product 
                                    without a hitch from scope to delivery.</p>
                            </div>
                            <div className="">
                                <ul>
                                    <li> <span className="before "></span> Agile</li>
                                    <li> <span className="before "></span> Responsive</li>
                                    <li> <span className="before "></span> Quality</li>
                                </ul>
                            </div>
                            <div className="borderDesign"></div>
                        </div>

                    </div>

                        {/* 3 */}

                    <div className="boxContainer col pr-4">

                        <div className="Container p-4 h-auto m-top-1 ">
                            <div>
                                <h2>Consistent Delivery</h2>
                            </div>
                            <div>
                                <p className="listanchor para_md b-space-40">In-depth expertise, time-tested processes and tech excellence allow us to deliver optimal output.
                                We implement various software development methodologies to deliver on-time software.</p>
                            </div>
                            <div className="">
                                <ul>
                                    <li> <span className="before "></span> Scalability</li>
                                    <li> <span className="before "></span> Certainty</li>
                                    <li> <span className="before "></span> Performance</li>
                                </ul>
                            </div>
                            <div className="borderDesign"></div>
                        </div>

                    </div>                        
                </div>  
            </div>

        </div>
        
    )
}

export default WhyChooseUs