// import { previewData } from "next/headers"
//groq is sanity the equivalent of GraphQL for SQL
// import { groq } from "next-sanity"
// import { client } from "../../../lib/sanity.client"
// //temporary solution unitl next-sanity impliments support for client modules
// import PreviewSuspense  from "../../../components/PreviewSuspense"
// import PreviewPostList from "../../../components/PreviewPostList"
// import PostList from "@/components/PostList"
// import ChatMessages from "../../../components/ChatMessages"
// import { useStore } from "@/src/store"
// import ChatCategorySelector from "@/components/ChatCategorySelector"


// //move all of this under the Hustle notes section of the app. 
// const query = groq`*[_type=='chatMessage']{
//     ...,
//     author->,
//     chatType[]{...}
// } | order(publishedAt asc)`

// export default async function ChatText () {

//     if(previewData()){
//         return(
//                 // <PreviewSuspense fallback= "Loading Preview">
//                 //     <PreviewPostList query={query}/>   
//                 // </PreviewSuspense>  
//                 <div>Test</div>          
//         )
//     }
    
//     const chats = await client.fetch(query)
//     return (
//         <div className="flex-col">
//             <ChatCategorySelector />
//             <ChatMessages chats={chats}/> 
//         </div>
                  
                      
//     )
// }

import ChatCategorySelector from "./../../../components/ChatCategorySelector"
import { previewData } from "next/headers"
//groq is sanity the equivalent of GraphQL for SQL
import { groq } from "next-sanity"
import { client } from "../../../lib/sanity.client" 
//temporary solution unitl next-sanity impliments support for client modules
import PreviewSuspense  from "../../../components/PreviewSuspense"
import ChatMessages from "../../../components/ChatMessages"
import { useStore } from "@/src/store"
import PreviewChatMessages from "../../../components/PreviewChatMessages"

const query = groq`*[_type=='chatMessage']{
    ...,
    author->,
    chatType[]{...}
} | order(publishedAt asc)`

// const categoryQuery = groq`
//     *[_type == "chatMessage" && references(*[_type == "chatType" && title == "First set of chatTypes"]._id) ]

// `
  

const ChatPortal = async () => {
    if(previewData()){
        return(
                <PreviewSuspense fallback= "Loading Preview">
                    <PreviewChatMessages query={query}/>   
                </PreviewSuspense>  
                        
        )
    } 

    const chats = await client.fetch(query)

    return (
        <div className="flex-col">
            <ChatCategorySelector />
            <ChatMessages chats={chats}/>
        </div>
  )
}

export default ChatPortal