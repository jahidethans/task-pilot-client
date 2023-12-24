const Footer = () => {
    return (
        <div className="bg-[#000000] text-white">
            <div style={{justifyItems:'center'}} className="container py-14 mx-auto px-4  grid grid-cold-1 md:grid-cols-3 gap-5">
                <div>
                    
                    <p className='text-lg mt-2 max-w-sm'>Easy to use Work management solution which is both Powerful and intuitive.</p>
                </div>
                <div>
                    <span className="text-xl font-bold border-b-2 border-black mb-3">Links</span> <br />
                    <ul className='mt-2'>
                        <li className='text-lg font-medium hover:translate-x-2 duration-200 hover:text-yellow-600 cursor-pointer'>- Home</li>
                        <li className='text-lg font-medium hover:translate-x-2 duration-200 hover:text-yellow-600 cursor-pointer'>- About Us</li>
                        <li className='text-lg font-medium hover:translate-x-2 duration-200 hover:text-yellow-600 cursor-pointer'>- Contact Us</li>
                        <li className='text-lg font-medium hover:translate-x-2 duration-200 hover:text-yellow-600 cursor-pointer'>- Blog</li>
                        <li className='text-lg font-medium hover:translate-x-2 duration-200 hover:text-yellow-600 cursor-pointer'>- Feature</li>
                    </ul>
                </div>
                <div>
                    <span className="text-xl font-bold border-b-2 border-black mb-3">Social Links</span> <br />
                    <ul className='mt-2'>
                        <li className='text-lg font-medium hover:translate-x-2 duration-200 hover:text-yellow-600 cursor-pointer'>- Facebook</li>
                        <li className='text-lg font-medium hover:translate-x-2 duration-200 hover:text-yellow-600 cursor-pointer'>- Twitter</li>
                        <li className='text-lg font-medium hover:translate-x-2 duration-200 hover:text-yellow-600 cursor-pointer'>- Instagram</li>
                        <li className='text-lg font-medium hover:translate-x-2 duration-200 hover:text-yellow-600 cursor-pointer'>- Youtube</li>
                    </ul>
                </div>
            </div>
            <p className='text-center py-3'>© 2023 - taskPilot.</p>
        </div>
    );
};

export default Footer;