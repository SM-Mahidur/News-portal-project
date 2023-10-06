import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [catagories , setCatagories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCatagories(data))
    },[])
    return (
        <div className="border-2 p-4">
            <h2 className="text-2xl font-semibold py-4">All Caterogy{catagories.length}</h2>
            <div className=''>
                {
                    catagories.map(catagorie =>
                         <Link key={catagorie.id} to={`/catagorie/${catagorie.id}`} className="btn justify-start bg-white rounded-none border-none hover:btn-outline w-full">{catagorie.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;