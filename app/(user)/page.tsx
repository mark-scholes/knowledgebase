import ClientRouting from '@/components/ClientRouting';
import Image from 'next/image';


export default async function HomePage () {

    return (

        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 group cursor-pointer hover:scale-105 transition duration-300">
            <ClientRouting route={`/updates`} >
                <Image 
                    className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="/images/Updates.jpg"
                    height={340} 
                    width={820} 
                    alt="Updates image"
                />
                <div className="text-center relative z-10 w-full">
                <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Updates</h2>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
                </ClientRouting>
            </div>
            <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/2 group cursor-pointer hover:scale-105 transition duration-300">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <ClientRouting route={`/chatTexts`} >
                    <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460" />
                    <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Chat Texts</h2>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </ClientRouting>
                </div>
                </div>
                <div className="px-2 w-1/2 group cursor-pointer hover:scale-105 transition duration-300">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <ClientRouting route={`/processes`} >
                    <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x420" />
                    <div className="text-center relative z-10 w-full">
                    <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Processes</h2>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    </div>
                </ClientRouting>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

)
}