import React from 'react'

const page = () => {

    const data = {
        category: 'प्रौद्योगिकी',
        title: 'चंद्रयान-3 के लिए कल का दिन सबसे खास, पूरी दुनिया की रहेगी नजर, जानें ISRO ने क्या बताया',
        content: 'भारत का तीसरा चंद्र मिशन 5 अगस्त को चंद्रमा के चारों ओर घूमते हुए एक कक्षा में प्रवेश करने का प्रयास करेगा. इसरो ने शुक्रवार को कहा, ‘चंद्रयान-3 अंतरिक्ष यान ने 14 जुलाई को प्रक्षेपण के बाद से चंद्रमा की लगभग दो-तिहाई दूरी तय कर ली है और चंद्रयान -ऑर्बिट इंसर्शन (एलओआई) के लिए 5 अगस्त को शाम करीब 7 बजे के लिए समय तय है. एक अगस्त की शुरुआत में अंतरिक्ष यान ने ट्रांस-लूनर इंजेक्शन (टीएलआई) के जरिए 288 किलोमीटर गुणा 3.7 लाख किलोमीटर की कक्षा हासिल की थी और चंद्रमा के प्रभाव क्षेत्र में प्रवेश किया था. चंद्रयान-3 को प्रक्षेपित किए जाने के बाद से उसे कक्षा में ऊपर उठाने की प्रक्रिया को पांच बार सफलतापूर्वक पूरा किया गया है. एक अगस्त को अंतिरक्ष यान को पृथ्वी की कक्षा से ऊपर उठाकर चंद्रमा की ओर बढ़ाने की प्रक्रिया को सफलतापूर्वक पूरा किया गया और यान को ‘ट्रांसलूनर कक्षा’ में डाल दिया गया. इसरो के अनुसार कल, एक और महत्वपूर्ण प्रयास में अंतरिक्ष यान को चंद्रमा की कक्षा में स्थापित किया जाएगा.',
        img: 'https://images.news18.com/ibnkhabar/uploads/2023/08/chandrayaan-3-mission-update-isro-said-now-4-days-from-lunar-orbit.jpg',
        date: '2021-08-04',
        author: 'Amit Kumar'
    }

    return (
        <>
            {/* Breadcrumb */}
            <div className='flex gap-2 items-center mb-2 bg-news-red/20 px-4 rounded-full'>
                <button className='flex items-center gap-1 hover:text-news-red'>
                    <i class='bx bxs-home bx-burst'></i>
                    <h6 className='font-bold'>HOME</h6>
                </button>
                <span>/</span>
                <button className='flex items-center gap-1 hover:text-news-red'>
                    <i class='bx bxs-castle bx-burst' ></i>
                    <h6 className='font-bold'>NATIONAL</h6>
                </button>
                <span>/</span>
                <h6>{data.title}</h6>
            </div>
            {/* Article */}
            <article className='my-4 flex flex-col gap-2'>
                <h1 className='font-bold text-4xl '>{data.title}</h1>
                <div className='flex gap-2'>
                    <div className='flex justify-start items-center text-lg gap-1'>
                        <i className='bx bxs-time' ></i>
                        <h6 className='font-semibold'>{data.date}</h6>
                    </div>
                    <div>
                        <button className='flex justify-start items-center text-lg gap-1'>
                            <i className='bx bxs-user-circle bx-sm'></i>
                            <h6 className='font-semibold'>{data.author}</h6>
                        </button>
                    </div>
                </div>
                <img className='h-[500px] w-fit' src={data.img} alt={data.title} />
                <p className='text-xl'>{data.content}</p>
            </article>
        </>
    )
}

export default page