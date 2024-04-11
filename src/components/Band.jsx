import React from 'react';
const Band = () => {
    return (
        <div>
            <div className="text-center">
                <p className="font-sans text-2xl lg:text-3xl tracking-wider">THE BAND</p><br />
                <p className="font-snas font-style: italic text:md lg:text-md text-gray-400">We love music</p><br />
                <p className="text-justify lg:px-72  text-sm px-5 lg:text-md">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br /><br />
            </div>

            <div className="px-4 py-5">
                <div className="flex flex-col md:flex-row lg:flex-row lg:px-48 items-center gap-20 py-9">
                    <div className="card card-cover lg:px-26 h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                        <p className="text-sm text-center">Name:</p>
                        <img
                            src='https://www.w3schools.com/w3images/bandmember.jpg'
                            alt='name'
                        />
                    </div>
                    <div className="card card-cover lg:px-26 h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                        <p className="text-sm text-center">Name:</p>
                        <img
                            src='https://www.w3schools.com/w3images/bandmember.jpg'
                            alt='name'
                        />
                    </div>
                    <div className="card card-cover lg:px-26 h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                        <p className="text-sm text-center">Name:</p>
                        <img
                            src='https://www.w3schools.com/w3images/bandmember.jpg'
                            alt='name'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Band