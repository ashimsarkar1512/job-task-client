import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Main = () => {
            return (
                        <div>
                     <div className="h-20">
                     <Navbar></Navbar>
                     </div>
                          <Outlet></Outlet> 
                          <Footer></Footer>         
                        </div>
            );
};

export default Main;