import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { IoHomeSharp, IoLogOut, IoMenu } from "react-icons/io5";

const SideBar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/')
                toast("Log Out Sucessfully", {
                    icon: "👏",
                    style: {
                        background: "#333",
                        color: "#fff",
                    },
                });
            })
    }
    return (
        <>
        
        <div className="w-64 min-h-[88vh] bg-[#121212] rounded-3xl mr-11">

            <ul className="menu text-center text-white space-y-2 pt-2 text-sm font-semibold">
                <li className=" font-normal text-5xl  mt-8 mb-8">TaskPilot.</li>
                <div>
                    <div className="flex flex-col gap-2 mb-8 items-center">
                        <img
                            className="w-12 h-12 rounded-full border-2 border-white my-2"
                            src={user.photoURL}
                            alt=""
                        />
                        <h1 className="text-[20px] font-semibold uppercase">{user?.displayName}</h1>
                    </div>
                    {/* Sidebar content here */}
                    
                </div>
                
                        <li><NavLink className='flex hover:bg-[#141414] py-2 w-fit px-4 mt-2 items-center gap-4'  to="/"><IoHomeSharp size={22} /> <p>Home</p></NavLink></li>
                    <li className="hover:bg-[#141414] py-2 w-fit px-4 mt-2">
                        <NavLink
                            to="/dashboard"
                            className="flex justify-center items-center gap-4"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <g clipPath="url(#clip0_6_322)">
                        <path d="M22.748 3.25409H14.0813V9.75409H22.748V3.25409ZM11.9146 3.25409H3.24796V14.0874H11.9146V3.25409ZM22.748 11.9208H14.0813V22.7541H22.748V11.9208ZM11.9146 16.2541H3.24796V22.7541H11.9146V16.2541Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_6_322">
                            <rect width="26" height="26" fill="white" />
                        </clipPath>
                    </defs>
                </svg> <h2>Dashboard</h2>
                        </NavLink>
                    </li>
                <li><NavLink className='flex hover:bg-[#141414]  py-2 w-fit px-4 mt-2 items-center gap-4' onClick={handleLogout}><IoLogOut size={22} /> <p>Log Out</p></NavLink></li>
             
            </ul>
           
        </div>
        </>
    );
};

export default SideBar;