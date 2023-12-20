import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
    <li><NavLink>Home</NavLink></li>
    <li><NavLink>Pricing</NavLink></li>
    <li><NavLink>Blog</NavLink></li>
    <li><NavLink>Contact us</NavLink></li>
    </>
    return (
        <div className="container mx-auto flex justify-between my-5">
            <div className="text-5xl font-semibold">TaskPilot</div>
            <div className="hidden md:block">
                <ul className="flex space-x-12">
                    {links}
                </ul>
            </div>
            <div className="hidden md:block">login</div>

            {/* mobile menu dropdown */}
            <div className="md:hidden">
                
            </div>
        </div>
    );
};

export default Navbar;