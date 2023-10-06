import user from './user.png'
import product from '../assets/editorsInsight1.png'
import { GiShare } from 'react-icons/gi';
import { BsBook } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';

const DragonNews = () => {
    const name = "Awlad Hossain";
    const date = "2022-08-21";

    return (
        <div className="border-2 p-4">
            <h2 className="text-2xl font-semibold py-4">Dragon News Home</h2>
            {/* card */}
            <div>
                <div className="card w-full bg-base-100 shadow-xl px-6">
                    {/* card top show */}
                    <div className='flex justify-between items-center py-8 bg-gray-300 px-4'>
                        <div className='flex gap-4 flex-wrap-reverse justify-center items-center'>
                            <div className="">
                                <img className='w-12 h-12 rounded-full border-none' src={user} alt="" />
                            </div>
                            <div className="">
                                <p>{name}</p>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className='flex gap-2 w-12 h-12 items-center justify-center'>
                            <BsBook></BsBook>
                            <GiShare></GiShare>
                        </div>
                    </div>
                    <h2 className='text-sm font-bold py-4'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                    <figure><img src={product} className='' alt="Shoes" /></figure>
                    <div className="">
                        <p className='text-sm my-4 py-4'>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... <br></br><span className=' text-red-400'>Read More</span></p>

                        <hr className='mx-auto bg-red-100 my-4 border-1 ' />
                        {/* rating */}
                        <div >
                            <div className="rating flex justify-between">
                                <div className='flex gap-2'>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <p className='ml-4 mb-8'>4.9</p>
                                </div>
                                <div className='flex'>
                                    <AiOutlineEye></AiOutlineEye>
                                    <p>499</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl px-6 my-8">
                    {/* card top show */}
                    <div className='flex justify-between items-center py-8 bg-gray-300 px-4'>
                        <div className='flex gap-4 flex-wrap-reverse justify-center items-center'>
                            <div className="">
                                <img className='w-12 h-12 rounded-full border-none' src={user} alt="" />
                            </div>
                            <div className="">
                                <p>{name}</p>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div className='flex gap-2 w-12 h-12 items-center justify-center'>
                            <BsBook></BsBook>
                            <GiShare></GiShare>
                        </div>
                    </div>
                    <h2 className='text-sm font-bold py-4'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                    <figure><img src={product} className='' alt="Shoes" /></figure>
                    <div className="">
                        <p className='text-sm my-4 py-4'>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... <br></br><span className=' text-red-400'>Read More</span></p>

                        <hr className='mx-auto bg-red-100 my-4 border-1 ' />
                        {/* rating */}
                        <div >
                            <div className="rating flex justify-between">
                                <div className='flex gap-2'>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <p className='ml-4 mb-8'>4.9</p>
                                </div>
                                <div className='flex'>
                                    <AiOutlineEye></AiOutlineEye>
                                    <p>499</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DragonNews;