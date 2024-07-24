import React from "react"
import {  Card } from "react-bootstrap"
import "./Card.css"
import { data } from "../Body/data"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = () =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 120,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
  //       nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  // const NextArrow = (props) => {
  //   const { onClick } = props;
  //   return <div className="slick-arrow next-arrow" onClick={onClick}></div>;
  // };

  // const PrevArrow = (props) => {
  //   const { onClick } = props;
  //   return <div className="slick-arrow prev-arrow" onClick={onClick}></div>;
  };

    
    

    return(

        
            
        <div className="m-5 w-3/4 ">
            <div className=" mt-20 slider-container ">
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className=" bg-white h-[450px] text-black rounded-xl">
                        <div className="bg-light border p-2 m-2" >
                            <img src={item.image} alt="team " className="card-img-top" />
                            <div>
                                <h3 className="card-title">{item.title}</h3>
                                <div className="card-text card-row">
                                    {item.language.map((lang, idx) => (
                                    <span key={idx} className="rounded-pill bg-secondary m-1 p-2" style={{ whiteSpace: 'nowrap' }}>{lang}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                            <h6 className="text-left my-3">{item.subtitle}</h6>
                            <div className="text-left fw-lighter">
                                {item.workList.map((work, idx) => (
                                <span key={idx}>{work}<br /></span>
                                ))}
                            </div>
                            </div>
                            <div className="row m-3">
                            <div className="col-md-6 d-flex justify-content-start align-items-center">
                                <div>
                                {item.profilePic.map((pic, idx) => (
                                    <img key={idx} className={`profile profile${idx +1}` } src={pic} alt="a profile pic" />
                                ))}
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end align-items-center">
                                <button className="rounded-pill btn btn-warning">Get Details</button>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}


                </Slider>
            </div>
        </div>
    )
}

export default Cards