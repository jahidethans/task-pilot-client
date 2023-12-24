import {  Outlet } from "react-router-dom";
import SideBar from "../Components/Sidebar/SideBar";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Dashboard = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = ()=>{
        setSidebar(!sidebar)
    }
    return (
        <div className="flex px-6 pt-6 h-screen  bg-black">
            <IoMenu onClick={toggleSidebar} className="flex absolute z-20 text-white md:hidden my-5" size={22} />
            <div className={sidebar ? 'block z-10 md:block' : 'hidden md:block'}>
            <SideBar></SideBar>

            </div>
            <div className="flex-1 pt-16 md:py-7 absolute md:static z-0">
                <Outlet></Outlet>
            </div>
        </div>
    );
};


export default Dashboard;