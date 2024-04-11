import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import Home from './Home';
import Band from './Band';
import Tour from './Tour';
import Contact from './Contact';


function Header() {
    return (
        <header className="flex flex-col w-full lg:text-md">
            <nav className="bg-black w-full text-sm ">
                <div className="flex flex-row text-white   max-w-screen-xl ">
                    <div className=" w-full lg:flex lg:w-auto ">
                        <ul className="flex flex-col sm:flex-row justify-start md:flex-row text-xs lg:text-lg lg:flex-row  ">
                            <li>
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) =>
                                        `block py-4 pr-8 pl-8 duration-200 ${isActive ? "text-black-700" : "text-white-700"} border-b-6 border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 hover:text-black lg:p-4`
                                    }
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Band"
                                    className={({ isActive }) =>
                                        `block py-4 pr-8 pl-8 duration-200 ${isActive ? "text-white-700" : "text-black-700"} border-b-6 border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 hover:text-black lg:p-4`
                                    }
                                >
                                    BAND
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Tour"
                                    className={({ isActive }) =>
                                        `block py-4 pr-8 pl-8 duration-200 ${isActive ? "text-white-700" : "text-black-700"} border-b-6 border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 hover:text-black lg:p-4`
                                    }
                                >
                                    TOUR
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-4 pr-8 pl-8 duration-200 ${isActive ? "text-white-700" : "text-black-700"} border-b-6 border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 hover:text-black lg:p-4`
                                    }
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/more"
                                    className={({ isActive }) =>
                                        `block py-4 pr-8 pl-8 duration-300 ${isActive ? "text-white-700" : "text-black-700"} border-b-6 border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 hover:text-black lg:p-4`
                                    }
                                >
                                    MORE
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className='flex-row py-4 pr-5 pl-5 lg:p-4 lg:hover:bg-red-700'>
                        <img
                            className="w-5"
                            src='data:image/png;base64,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'
                            alt="search"
                        />
                    </div>
                </div>
            </nav>

        </header>


    );
}

export default Header
