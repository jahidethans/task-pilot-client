import {  HamburgerIcon } from "@chakra-ui/icons";
import {  IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout()
    .then(()=>{
      toast("Log Out Sucessfully", {
        icon: "👏",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    })
  }
    
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>Contact us</NavLink></li>
        <li> {user ? <NavLink to='/dashboard'>Dashboard</NavLink> : ''}
          </li>
    </>
    return (
        <div className="md:container mx-auto flex justify-between items-center flex-row-reverse md:flex-row my-5 px-4 lg:px-0 absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 text-white">
            <Link to='/' className="text-3xl md:text-5xl font-bold md:font-semibold">TaskPilot</Link>
            <div className="hidden md:block">
                <ul className="flex space-x-12">
                    {links}
                </ul>
            </div>
            <div className="hidden md:block"> {user ? (
          <button onClick={handleLogout} className="py-4 px-9 rounded-lg bg-[#3A3A3A] text-[#FFF] text-lg">Logout</button>
        ) : (
          <Link to="/login" className="btn btn-outline">
            Login
          </Link>
        )}
               </div>

            {/* mobile menu dropdown */}
            <div className="md:hidden mr-8">
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        bg='#3A3A3A'
                    />
                      <MenuList bg='black'>
            <MenuItem bg='black' _hover={{ bg: '#3A3A3A' }}>
              <NavLink to="/">Home</NavLink>
            </MenuItem>
            <MenuItem bg='black' _hover={{ bg: '#3A3A3A' }}>
              <NavLink to="/contact">Contact us</NavLink>
            </MenuItem>
            <MenuItem bg='black' _hover={{ bg: '#3A3A3A' }}>
              {user ? <NavLink to='/dashboard'>Dashboard</NavLink> : ''}
            </MenuItem>
            <MenuItem bg='black' _hover={{ bg: '#3A3A3A' }}>
            {user ? (
          <button onClick={handleLogout} className="py-4 px-9 rounded-lg bg-[#3A3A3A] text-[#FFF] text-lg">Logout</button>
        ) : (
          <Link to="/login" className="btn btn-outline">
            Login
          </Link>
        )}
            </MenuItem>
          </MenuList>
                </Menu>
            </div>
        </div>
    );
};

export default Navbar;