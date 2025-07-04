import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import logo from '../assets/logo/Logo.svg';

const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const location = useLocation();

    const handleSignOut = () => {
        signOutUser()
            .then(() => console.log('Sign out successful'))
            .catch(() => console.log('Sign out failed'));
    };

    const activeClass =
        "bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white px-4 py-2 rounded-full font-semibold text-xl";

    const defaultClass =
        "px-4 py-2 text-gray-800 hover:text-black hover:bg-gray-200 rounded-full text-xl";

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/services", label: "Services" },
        { to: "/contact", label: "Contact" }
    ];

    const links = navLinks.map(({ to, label }) => (
        <li key={label}>
            <Link
                to={to}
                className={location.pathname === to ? activeClass : defaultClass}
            >
                {label}
            </Link>
        </li>
    ));

    const quoteButtonDesktop = (
        <Link
            to="/contact"
            className="bg-gradient-to-r from-[rgba(241,165,145,1)] to-[rgba(233,119,217,1)] text-white text-xl md:px-8 md:py-3 px-3 py-2 flex items-center gap-2 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200"
        >
            Get a Quote <ArrowRight className="h-4 w-4" />
        </Link>
    );

    const quoteLinkMobile = (
        <Link
            to="/contact"
            className="px-4 py-2 text-gray-800 hover:text-black hover:bg-gray-200 rounded-full text-lg w-full inline-block"
        >
            Get a Quote
        </Link>
    );

    return (
        <div className=" top-0 md:top-5 md:left-20 md:right-20 z-50 bg-[#F3F4F5]">
            <div className="max-w-[1800px] mx-auto bg-[#FFF] rounded-xl">
                <div className="px-4">
                    <div className="navbar h-[110px] items-center rounded-2xl">
                        {/* Navbar Start */}
                        <div className="navbar-start">
                            {/* Mobile Dropdown */}
                            <div className="dropdown">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="p-2 rounded-md border border-gray-300 lg:hidden cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-white text-black rounded-box z-50 mt-3 w-56 p-2 shadow"
                                >
                                    {links}
                                    <li className="mt-2">
                                        {quoteLinkMobile}
                                    </li>
                                </ul>
                            </div>

                            <Link to="/" className="w-96 font-bold">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>

                        {/* Navbar Center for Desktop */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">{links}</ul>
                        </div>

                        {/* Navbar End */}
                        <div className="navbar-end hidden lg:flex">
                            {quoteButtonDesktop}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
