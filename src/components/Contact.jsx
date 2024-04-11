import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    return (
        <div className='bg-white text-black text-center'>
            <p className='tracking-widest text-3xl'><br /><br />CONTACT</p><br />
            <p className='tracking-widest text-sm italic text-gray-400'>Fan?Drop a note!</p><br /><br />

            <div className='flex lg:flex-row flex-col justify-around m-4'>
                <div className='flex flex-row' >
                    <div className='flex flex-col justify-around'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <FontAwesomeIcon icon={faPhone} />
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className='flex flex-col justify-around text-left ml-4'>
                        <p>Chicago, US</p>
                        <p> Phone: +00 151515c</p>
                        <p>Email: mail@mail.com</p>
                    </div>
                </div>
                <br />
                <div className='flex flex-col'>
                    <div className='flex flex-col lg:felx-row gap-4 justify-center'>
                        <input className=' border-gray-300 border p-2' type='text' placeholder='Name' ></input>
                        <input className='border border-gray-300 p-2' type='email' placeholder='Email' ></input>
                    </div>
                    <div className='flex flex-col'>
                        <input className=' border-gray-300 border w-full mt-2 items-start p-2' type='text' placeholder='Message' ></input>
                        <button className='bg-black mt-2 text-white w-28 ml-36  lg:ml-72 p-2 hover:bg-gray-400 hover:text-black'>SEND</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact