import React from 'react';

const Tour = () => {
    return (
        <div>
            <div className="bg-black ">
                <p className="text-2xl tracking-widest lg:text-3xl text-white text-center">TOUR DATES</p><br />
                <p className="lg:text-xl text-md text-gray-500 italic text-center">Remember to book your tickets!</p><br />
                <table className="flex flex-col m-4 lg:m-64 lg:mt-8 mt-2 bg-white text-gray-500">
                    <tbody>
                        <tr className='p-2 flex flex-col'>
                            <td>September<button className='ml-4 text-white p-1 bg-red-700'>Soldout</button></td></tr>
                        <tr className='p-2 flex flex-col'>
                            <td>October<button className='ml-4 text-white p-1 bg-red-700'>Soldout</button></td></tr>
                        <tr className='p-2 flex flex-col'>
                            <td>November<button className='lg:ml-48 text-white p-2  bg-black rounded-full'>3</button></td></tr>
                    </tbody>
                </table>
                <div>
                    <div className="flex flex-col md:flex-row m-4 lg:flex-row lg:px-48 items-center gap-20">
                        <div className="card card-cover lg:px-26 overflow-hidden bg-white text-bg-dark rounded-4 shadow-lg">

                            <img
                                src='https://www.w3schools.com/w3images/newyork.jpg'
                                alt='name'
                            />
                            <p className="text-md font-bold m-2">New York</p>
                            <p className='text-gray-400 m-2'>Fri 27 Nov,2023</p>
                            <p className='text-md m-2'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                            <button className='bg-black text-white m-2 p-2' >Buy Ticket</button>
                        </div>
                        <div className="card card-cover bg-white lg:px-26 h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <img
                                src='https://www.w3schools.com/w3images/paris.jpg'
                                alt='name'
                            />
                            <p className="text-md font-bold m-2">New York</p>
                            <p className='text-gray-400 m-2'>Fri 27 Nov,2023</p>
                            <p className='text-md m-2'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                            <button className='bg-black text-white m-2 p-2' >Buy Ticket</button>
                        </div>
                        <div className="card card-cover bg-white lg:px-26 h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                            <img
                                src='https://www.w3schools.com/w3images/sanfran.jpg'
                                alt='name'
                            />
                            <p className="text-md font-bold m-2">New York</p>
                            <p className='text-gray-400 m-2'>Fri 27 Nov,2023</p>
                            <p className='text-md m-2'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                            <button className='bg-black text-white m-2 p-2' >Buy Ticket</button>

                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Tour;