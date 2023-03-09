
// import ChatCategorySelector from "./ChatCategorySelector"
// import { previewData } from "next/headers"
// //groq is sanity the equivalent of GraphQL for SQL
// import { groq } from "next-sanity"
// import { client } from "../lib/sanity.client"
// //temporary solution unitl next-sanity impliments support for client modules
// import PreviewSuspense  from "../components/PreviewSuspense"
// import ChatMessages from "../components/ChatMessages"
// import PreviewChatMessages from "./PreviewChatMessages"

// const query = groq`*[_type=='chatMessage']{
//     ...,
//     author->,
//     chatType[]{...}
// } | order(publishedAt asc)`


// const ChatPortal = async () => {
//     if(previewData()){
//         return(
//                 <PreviewSuspense fallback= "Loading Preview">
//                     <PreviewChatMessages query={query}/>   
//                 </PreviewSuspense>                          
//         )
//     } 

//     const chats = await client.fetch(query)

//     return (
//         <div className="flex">
//             <ChatCategorySelector />
//             <ChatMessages chats={chats}/>
//         </div>
//   )
// }

// export default ChatPortal
import ClientRouting from "./ClientRouting";

type Props = {
    chatTypes: ChatType[]
};

function ChatPortal ({ chatTypes } : Props ) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {chatTypes.map((chatType) => (                    
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
                            <ClientRouting route={`chatTexts/chatTypes/${chatType.slug.current}`} key={chatType._id}>
                            <a className="block relative h-48 rounded overflow-hidden group">
                                <img
                                alt="ecommerce"
                                className="object-cover object-center w-full h-full block group-hover:opacity-75"
                                src="https://dummyimage.com/420x260"
                                />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                {chatType.title}
                                </h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">
                                {chatType.description}
                                </h2>
                            </div>
                        </ClientRouting>
                        </div>

                    ))}

                    {/* the ones below are there only for display purposes until I have created more chatTypes. Delete everything below except the closing two divs and closing section */}
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                            <p className="mt-1">$12.00</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                            <p className="mt-1">$18.40</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                            <p className="mt-1">$18.40</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                            <p className="mt-1">$18.40</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )

}

export default ChatPortal