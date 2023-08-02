import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Breaking = () => {
    return (
        <div className='flex justify-center items-center w-full px-2'>
            <div className='my-2 py-2 px-4 w-full max-w-7xl flex bg-news-red rounded-full'>
                <span className='md:pl-2 flex items-center md:gap-1 whitespace-nowrap md:pr-2'>
                    <i class='bx bxs-bolt bx-sm md:bx-md bx-flashing'></i>
                    <h2 className='hidden md:block text-xl font-bold'>BREAKING NEWS :</h2>
                </span>
                <Marquee pauseOnHover='true'>
                    <ul className='flex justify-center items-center gap-8'>
                        <li>
                            <Link href="/">lorem ipsum something here..</Link>
                        </li>
                        <li>
                            <Link href="/">lorem ipsum something here..</Link>
                        </li>
                        <li>
                            <Link href="/">lorem ipsum something here..</Link>
                        </li>
                        <li>
                            <Link href="/">lorem ipsum something here..</Link>
                        </li>
                    </ul>
                </Marquee>

            </div>
        </div>
    )
}

export default Breaking