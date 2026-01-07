import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useState } from "react";


const Navbar = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, role, user } = useSelector(
        (state) => state.auth
    );

    const [open, setOpen] = useState(false);


    return (
        <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-gray-900 dark:to-gray-800 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl font-extrabold tracking-wide"
                >
                    JobPortal
                </Link>

                {/* Links */}
                <div className="flex items-center gap-6">
                    <Link to="/" className="hover:text-gray-200">
                        Jobs
                    </Link>

                    {!isAuthenticated && (
                        <>
                            <Link to="/login" className="hover:text-gray-200">
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="bg-white text-indigo-600 dark:bg-gray-700 dark:text-white px-4 py-1.5 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                            >
                                Register
                            </Link>
                        </>
                    )}

                    {isAuthenticated && role === "recruiter" && (
                        <Link to="/recruiter">Dashboard</Link>
                    )}

                    {isAuthenticated && role === "admin" && (
                        <Link to="/admin">Dashboard</Link>
                    )}



                    {/* Profile Dropdown */}
                    {isAuthenticated && (
                        <div className="relative">
                            <button
                                onClick={() => setOpen(!open)}
                                className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full hover:bg-white/30 transition"
                            >
                                <div className="w-8 h-8 rounded-full bg-white text-indigo-600 dark:bg-gray-700 dark:text-white flex items-center justify-center font-bold">
                                    {user?.name?.charAt(0).toUpperCase()}
                                </div>
                                <span className="text-sm font-medium">
                                    {user?.name}
                                </span>
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg overflow-hidden">
                                    <Link
                                        to="/profile"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        onClick={() => setOpen(false)}
                                    >
                                        Profile
                                    </Link>
                                    <button
                                        onClick={() => {
                                            dispatch(logout());
                                            setOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
