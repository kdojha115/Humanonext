import React from "react"
import Cards from "../Card/Cards"
import  ScrollableTabsButtonVisible  from "../Technology/Technologies"
import Test from "../Technology/test"
import Test1 from "../Technology/test1"
import Test2 from "../Technology/test2"
import Test3 from "../Technology/test3"
import AlumniSlider from "../AlumniSlider/AlumniSlider"
import CompaniesLogo from "../AlumniSlider/CompaniesLogo"
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs"



const Body = () =>{

    

    return (
        <>
            
            <div>
                <Cards/>
            </div>
            <div style={{ maxWidth: '100%', height: '300px' }}>
                <div>
                <p className="fs-2">Technologies and Platforms We Use</p>
                </div>
                {/* <ScrollableTabsButtonVisible/> */}
                {/* <Test/> */}
                {/* <Test1/> */}
                {/* <Test2/> */}
                <Test3/>
            </div>
            <div >
                <AlumniSlider/>
                {/* <CompaniesLogo/> */}
            </div>
            <div>
                <WhyChooseUs/>
            </div>
            
        </>
    )
}

export default Body