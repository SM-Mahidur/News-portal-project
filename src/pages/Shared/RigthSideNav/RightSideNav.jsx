import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const RightSideNav = () => {
    return (
        <div className='border-2 p-4'>
            {/* login with */}
            <div className=''>
                <h2 className="text-2xl font-semibold py-4">Login With</h2>
                <div className='flex flex-col gap-4'>
                <button className="btn btn-outline btn-accent w-full ">
                    <FaGoogle></FaGoogle>
                    Login WithGoogle
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With GitHub
                </button>
                </div>
            </div>

            {/* find us on  */}
            <div>
            <h2 className="text-2xl font-semibold py-4">Find us On</h2>
                <div className=''>
                <a href='#' className="flex p-4 text-lg items-center gap-2 border rounded-t-lg w-full  hover:bg-gray-700 hover:text-white">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a href='#' className="flex p-4 text-lg items-center gap-2 border-x w-full hover:bg-gray-700 hover:text-white ">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a href='#' className="flex p-4 text-lg items-center gap-2 border rounded-b-lg w-full hover:bg-gray-700 hover:text-white">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
                </div>
            </div>
            {/* QR Zone */}
            <div >
            <h2 className="text-2xl font-semibold py-4">Q-Zone</h2>
            <div >
                    <img className='w-full md:w-full' src="/src/assets/qZone1.png" alt="" />
                    <img className='py-2 w-full md:w-full' src="/src/assets/qZone2.png" alt="" />
                    <img className='w-full md:w-full' src="/src/assets/qZone3.png" alt="" />
            </div>
            </div>
        </div>
    );
};

export default RightSideNav;