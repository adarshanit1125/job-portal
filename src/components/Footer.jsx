import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-2">
                        JobPortal
                    </h2>
                    <p className="text-sm">
                        A role-based job portal built with modern
                        frontend technologies.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="hover:text-white">
                                Jobs
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="hover:text-white">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className="hover:text-white"
                            >
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/profile"
                                className="hover:text-white"
                            >
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Tech Stack 
                <div>
                    <h3 className="text-white font-semibold mb-3">
                        Tech Stack
                    </h3>
                    <p className="text-sm">
                        React · Redux Toolkit · Tailwind CSS
                    </p>
                </div>*/}
            </div>

            <div className="border-t border-gray-700 text-center py-4 text-sm">
                © {new Date().getFullYear()} JobPortal. All
                rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
