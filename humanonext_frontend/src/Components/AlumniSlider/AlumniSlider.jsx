import React from "react";
import './AlumniSlider.css'
import { AlumniSliderData } from "./AlumniSliderData";

const AlumniSlider = () => {

    const marqueeItemsCount = 1000;

    return (
        <div>
            <div class="container mt-4 media2  ">
                <div class="row colo">
                    <div class="row2">
                        <h3 class="text-center p-4">
                            Who Worked with us?
                        </h3>


                        <div className="marquee marquee--1">
                        {Array.from({ length: marqueeItemsCount }).map((_, index) => (
                            <div key={index} className="marquee__item box">
                            <img
                                src={AlumniSliderData[index % AlumniSliderData.length].image}
                                alt={AlumniSliderData[index % AlumniSliderData.length].title}
                                width="100"
                                height="100"
                            />
                            </div>
                        ))}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlumniSlider