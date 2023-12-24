import { Button } from '@chakra-ui/react';
import banner from '../../assets/banner.png'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Banner = () => {
    const {user} = useAuth()
    return (
        <div className='md:container md:mx-auto flex flex-col md:flex-row justify-center items-center gap-14 lg:gap-40  pt-48'>
            <div className="space-y-5 text-center md:text-left text-white">
                <h2 className="text-4xl mb-10 md:text-7xl font-semibold" >Productivity Is At <br /> <span className="bg-gradient-to-r from-[#5B5B5B] to-[#232323] text-transparent bg-clip-text ">The Heart</span> Of Every <br />Organization</h2>
                <p >Efficiently manage your tasks with ease. Streamline your workflow,
organize priorities, and achieve your goals. Experience the power
of effective task management with us.</p>
<br />
{user ? <Link to='/dashboard'><Button
      colorScheme='#5B5B5B'
      variant='outline'
      focusBorderColor='#5B5B5B' 
      _hover={{ bg: '#5B5B5B' }} 
    >
      Let's Explore
    </Button></Link> : <Link to='/login'><Button
      colorScheme='#5B5B5B'
      variant='outline'
      focusBorderColor='#5B5B5B' 
      _hover={{ bg: '#5B5B5B' }} 
    >
      Let's Explore
    </Button></Link>}
          

            </div>
           
            <div>
                <img src={banner} className='lg:w-[50vw]' alt="task management banner.Dark mode. Dashboard." />
            </div>
        </div>
    );
};

export default Banner;