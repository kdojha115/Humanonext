import Body from "../../Components/Body/Body"
import Navbar from "../../Components/Navbar/Navbar"



const Home = () =>{

    return (
        <div>
            <div className="sticky-top">
                <Navbar/>
            </div>
            <div className="">
                <Body/>
            </div>
            
            
        </div>

    )
}

export default Home