import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = ({ data }) => {
    return (
        < section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2" >
            {
                data.map(async (a) => {
                    const first50 = a.excerpt.rendered.slice(0, -16) + '...' + '<span class="text-news-red">Read More</span>'
                    return (
                        <Link href={`/${a.slug}`} className=" cursor-pointer p-4 bg-news-white flex flex-col gap-2  rounded-md hover:text-news-red">
                            <h1 className="text-4xl font-bold">
                                {a.title.rendered}
                            </h1>
                            <Image className="rounded-md h-[300px] w-full" src={a.featured_media_src_url} alt="article thumbnail" width={400} height={400} />
                            <p dangerouslySetInnerHTML={{ __html: first50 }} >
                            </p>
                        </Link>
                    )
                })
            }
        </section >
    )
}

export default Hero