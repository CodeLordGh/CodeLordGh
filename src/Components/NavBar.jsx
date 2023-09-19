import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const Links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

  return (
    <div className='flex justify-between items-center
    w-full h-20 text-white bg-black fixed px-4' >
        <div><h1 className='text-5xl ml-l font-signature '>CodeLord <span className='text-green-700'>G</span><span className='text-red-700'>h</span></h1></div>
        
        <ul className='hidden md:flex'>

            {Links.map(({link , id }) => {
                return (
                    <li key={id} className='px-4 cursor-pointer capitalize
                        font-medium text-gray-500 hover:scale-105
                        duration-200'> {link} </li>
                )
            })}
        </ul>

        <div onClick={() => {
            setNav(!nav)
        }} className='cursor-pointer pr-4 text-gray-500 md:hidden'>
            {nav? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        { nav && <ul className='flex flex-col justify-center items-center
        absolute top-20 right-0 left-0 h-screen bg-gradient-to-b
        from-black to-gray-500 '>
            {Links.map(({link , id }) => {
                return (
                    <li key={id} className='px4 cursor-pointer capitalize py-6
                    text-4xl'> {link} </li>
                )
            })}
        </ul>
         }
        
        

    </div>
  )
}

export default NavBar
