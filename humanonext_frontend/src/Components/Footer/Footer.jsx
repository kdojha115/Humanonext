import React from "react";
import "./Footer.css";


const Footer = () =>{
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Business</h4>
                        <a href="/employee">
                            <p>Employee</p>
                        </a>
                        <a href="/services">
                            <p>Services</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>


                        <a href="/employee">
                            <p>Employee</p>
                        </a>
                        <a href="/services">
                            <p>Services</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>

                        <a href="/employee">
                            <p>Employee</p>
                        </a>
                        <a href="/services">
                            <p>Services</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>
                        
                    </div>

                    <div className="sb__footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                        
                    </div>

                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="https://www.emomatrix.com/">
                            <p>Emo matrix</p>
                        </a>


                        <a href="https://www.emomatrix.com/">
                            <p>Emo matrix</p>
                        </a>

                        <a href="https://www.emomatrix.com/">
                            <p>Emo matrix</p>
                        </a>

                        <a href="https://www.emomatrix.com/">
                            <p>Emo matrix</p>
                        </a>

                        <a href="https://www.emomatrix.com/">
                            <p>Emo matrix</p>
                        </a>
                        
                        
                    </div>

                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                        </a>
                        <a href="/career">
                            <p>Career</p>
                        </a><a href="/contact">
                            <p>Contact</p>
                        </a>

                        
                    </div>
                </div>
                

            

                <hr />

                <div className="sb__footer-links_socialmedia py-5">

                    <div className="pb-5">
                        <h5>SOCIAL</h5>
                        <h2>Follow us for the latest updates</h2>
                    </div>
                    <div className="socialmedia row">
                        <div className="socialmedia_div col">
                            <a className="row" href="https://www.facebook.com/emomatrixcompany/">
                            <div className="row w-auto">
                                <div className="socialmedia_img col">
                                    <img className="" src="./Image/SocialMedia/facebook.png" alt="facebook" />
                                </div>
                                <div className=" social_text col">
                                    <h5>FACEBBOK</h5>
                                    <p>HUMANONEXT</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="socialmedia_div col">
                            <a className="row" href="https://www.facebook.com/emomatrixcompany/">
                            <div className="row w-auto">
                                <div className="socialmedia_img col">
                                    <img className="" src="./Image/SocialMedia/twitter.png" alt="X" />
                                </div>
                                <div className="social_text col">
                                    <h3>X</h3>
                                    <p>HUMANONEXT</p>
                                </div>
                            </div>
                                
                            </a>
                        </div>
                        <div className="socialmedia_div col">
                            <a className="row" href="https://www.facebook.com/emomatrixcompany/">
                            <div className="row w-auto ">
                                <div className="socialmedia_img col w-20">
                                    <img className="" src="./Image/SocialMedia/linkedin.png" alt="Linkedin" />
                                </div>
                                <div className="social_text col 2-80">
                                    <h3>LINKEDIN</h3>
                                    <p>HUMANONEXT</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="socialmedia_div col">
                            <a className="row" href="https://www.instagram.com/emo_matrix/?hl=en">
                            <div className="row w-auto">
                                <div className="socialmedia_img col">
                                    <img className="" src="./Image/SocialMedia/instagram.png" alt="instagram" />
                                </div>
                                <div className="social_text col">
                                    <h3>INSTAGRAM</h3>
                                    <p>HUMANONEXT</p>
                                </div>
                            </div>
                                
                            </a>
                        </div>
                        
                    
                    </div>
                </div>

                <hr />

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Humanonext. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms">
                            <div>
                                <p>Terms & Conditions</p>
                            </div>
                        </a>
                        <a href="/privacy">
                            <div>
                                <p>Privacy</p>
                            </div>
                        </a>
                        <a href="/security">
                            <div>
                                <p>Security </p>
                            </div>
                        </a>
                        <a href="/cookie">
                            <div>
                                <p>Cookie Declaration</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer