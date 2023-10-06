import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Carrer</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <img className="h-12 w-12" src="/src/assets/user.png" alt="" />
                    <button className="text-white px-3 py-2 bg-gray-700"><Link>Login</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;