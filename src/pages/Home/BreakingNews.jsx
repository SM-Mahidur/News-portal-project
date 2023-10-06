import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="my-8">
            <div className="bg-gray-100 text-sm flex px-4 gap-8 py-4 items-center">
                <button className="bg-red-600 text-white px-3 py-2">Latest</button>
                <Marquee pauseOnHover={true}><Link to="/"><p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p></Link></Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;