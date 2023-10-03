import { FaFacebook, FaGithub, FaGooglePlusG, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone1 from '../../../public/assets/qZone1.png'
import QZone2 from '../../../public/assets/qZone2.png'
import QZone3 from '../../../public/assets/qZone3.png'
const RightsideNav = () => {
    return (
        <div>
            <div className='border p-5'>
                <h1 className="text-2xl font-bold">Login With</h1>
                <button className="btn btn-outline w-full text-sky-300 border-sky-300 mt-6">
                    <FaGooglePlusG></FaGooglePlusG>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full text-black border-black mt-3">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <h1 className="text-2xl font-bold mt-6">Find Us On</h1>
            <div className='mt-6'>
            <a href="" className='flex items-center p-4 gap-2 border rounded-t-lg'>
                <FaFacebook></FaFacebook>
                Facebook
            </a>
            <a href="" className='flex items-center p-4 gap-2 border'>
                <FaTwitter></FaTwitter>
                Twitter
            </a>
            <a href="" className='flex items-center p-4 gap-2 border rounded-b-lg'>
                <FaInstagram></FaInstagram>
                Instagram
            </a>
            </div>
            <div className='bg-[#F3F3F3] flex flex-col items-center justify-center mt-6'>
                <h1 className='text-lg font-semibold my-5'>Q-Zone</h1>
                <img src={QZone1} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone3} alt="" />
            </div>
        </div>
    );
};

export default RightsideNav;