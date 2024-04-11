import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="h-auto w-auto">
                <img
                    className='w-full'
                    src="https://www.w3schools.com/w3images/la.jpg"
                    alt="bc" />
                <div className=" w-auto absolute text-white top-1/3 lg:top-1/4 left-1/2 -translate-x-1/2 -translate-y-1 lg:-translate-y-1/4 md:-translate-y-1/2">
                    <h1 className="text-white font-semibold text-s mt-20 mr-5 sm:text-3xl sm:mt-21 md:text-4xl md:mt-25 lg:text-5xl lg:mt-35"> Los Angeles</h1>
                    <p className="text-white text-xs mr-5">we had the best time playing at Venice Beach!</p>
                </div>
            </div>
            <div className="h-auto w-auto">
                <img
                    className='w-full'
                    src="https://www.w3schools.com/w3images/ny.jpg"
                    alt="bc" />
                {/* <div className=" w-auto absolute text-white top-1/4 lg:top-2/3 left-1/2 -translate-x-1/2 -translate-y-1 lg:-translate-y-1/4 md:-translate-y-1/2">
                    <h1 className="text-white font-semibold text-s mt-20 mr-5 sm:text-3xl sm:mt-21 md:text-4xl md:mt-25 lg:text-5xl lg:mt-35">New York</h1>
                    <p className="text-white text-xs mr-5">The Atmosphere in New York is Lorem ipsum</p>
                </div> */}
            </div>
            <div className="h-auto w-auto">
                <img
                    className='w-full'
                    src="https://www.w3schools.com/w3images/chicago.jpg"
                    alt="bc" />
                {/* <div className=" w-auto absolute text-white top-1/3 lg:top-1/4 left-1/2 -translate-x-1/2 -translate-y-1 lg:-translate-y-1/4 md:-translate-y-1/2">
                    <h1 className="text-white font-semibold text-s mt-20 mr-5 sm:text-3xl sm:mt-21 md:text-4xl md:mt-25 lg:text-5xl lg:mt-35">Chicago</h1>
                    <p className="text-white text-xs mr-5">Thank you!Chicago-A Night we won't forget  </p>
                </div> */}
            </div>

        </div>


    )
}

export default Home

