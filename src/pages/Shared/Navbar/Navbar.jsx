import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/group study.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { motion } from "framer-motion"


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline font-bold" : ""}>
            Home
        </NavLink></li>
        <li><NavLink to='/assignments'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline font-bold" : ""}>
            Assignments
        </NavLink></li>
        {user?.email ? <>
            <li><NavLink to='/createAssignment'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white underline font-bold" : ""}>
                Create Assignments
            </NavLink></li>
            <li><NavLink to='/myAssignments'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white underline font-bold" : ""}>
                My Assignments<span></span>
            </NavLink></li>
            <li><NavLink to='/submittedAssignments'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white underline font-bold" : ""}>
                Submitted Assignments
            </NavLink></li>
            <li><button onClick={logOut} className="btn-sm bg-gray-400 text-gray-700 normal-case">Log Out</button></li>

        </>
            : <li><NavLink to='/login'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-white underline font-bold" : ""}>
                Login
            </NavLink></li>
        }
        <li><NavLink to='/register'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white underline font-bold" : ""}>
            Register
        </NavLink></li>
    
    </>

    return (
        <div>
            <div className="navbar bg-blue-400 h-28 mb-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <motion.div initial={{y: -250}} animate={{y: -10}} transition={{delay: 0.2, type: 'spring', stiffness: 10}}  className="flex-col text-center">
                        <Link to='/' className="btn btn-ghost normal-case text-xl mt-3">
                            <img src={logo} alt="" />
                        </Link>
                        <a className="btn btn-ghost normal-case text-xs md:text-xl lg:text-xl font-mono text-white">GroupLearnHub</a>
                    </motion.div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? <div className="flex gap-2">
                            <div className="flex-col">
                                <label tabIndex={0} className="btn btn-ghost btn-circle normal-case avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} title={user.displayName} />
                                    </div>
                                </label>
                                <div>
                                    <p className="text-blue-600 text-center font-semibold normal-case">{user.displayName}</p>
                                </div>
                            </div>
                            </div>
                            :
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;