import Link from 'next/link'
import React from 'react'
import DropDown from './DropDown'

const Navbar = () => {
    return (
        // MAIN NAVIGATION 
        <header className='bg-news-red w-full flex justify-center items-center'>
            <nav className='h-16 w-full max-w-7xl flex justify-between items-center'>
                {/* LEFT NAV */}
                <div className='h-full flex justify-between items-center gap-8'>
                    {/* LOGO OR TEXT */}
                    <div className=''>
                        <h1 className='font-extrabold text-3xl'>COVER NEWS</h1>
                    </div>
                    {/* MENU OR LINKS */}
                    <ul className='h-full flex justify-center items-center relative'>
                        {/* MENU BUTTONS */}
                        <li className='cursor-pointer h-full flex justify-center items-center px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                            <Link className='font-bold text-lg flex items-center gap-1' href="/">
                                <i class='bx bxs-home bx-burst'></i>
                                <span>HOME</span>
                            </Link>
                        </li>
                        <li className='cursor-pointer h-full flex justify-center items-center px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                            <Link className='font-bold text-lg flex items-center gap-1' href="/">
                                <i class='bx bxs-flag bx-burst' ></i>
                                <span>HARYANA</span>
                            </Link>
                        </li>
                        <li className='cursor-pointer h-full flex justify-center items-center px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                            <Link className='font-bold text-lg flex items-center gap-1' href="/">
                                <i class='bx bxs-castle bx-burst' ></i>
                                <span>NATIONAL</span>
                            </Link>
                        </li>
                        <li className='cursor-pointer h-full flex justify-center items-center px-4 border-l-2 border-news-white/25 hover:bg-news-black'>
                            <Link className='font-bold text-lg flex items-center gap-1' href="/">
                                <i class='bx bx-globe bx-burst'></i>
                                <span>INTERNATIONAL</span>
                            </Link>
                        </li>
                        <DropDown />
                    </ul>
                </div>
                {/* RIGHT NAV */}
                <div className='flex items-center gap-4'>
                    <button>
                        <i className='hover:text-news-black bx bxl-facebook-circle bx-sm' ></i>
                    </button>
                    <button>
                        <i className='hover:text-news-black bx bxl-twitter bx-sm' ></i>
                    </button>
                    <button>
                        <i className='hover:text-news-black bx bxl-instagram-alt bx-sm'></i>
                    </button>
                    <button>
                        <i className='hover:text-news-black bx bxs-envelope bx-sm' ></i>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar