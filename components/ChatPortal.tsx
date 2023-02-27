import ChatCategorySelector from "./ChatCategorySelector"
import { previewData } from "next/headers"
//groq is sanity the equivalent of GraphQL for SQL
import { groq } from "next-sanity"
import { client } from "../lib/sanity.client"
//temporary solution unitl next-sanity impliments support for client modules
import PreviewSuspense  from "../components/PreviewSuspense"
import PreviewPostList from "../components/PreviewPostList"
import PostList from "@/components/PostList"
import ChatMessages from "../components/ChatMessages"
import { useStore } from "@/src/store"

const query = groq`*[_type=='chatMessage']{
    ...,
    author->,
    chatType[]{...}
} | order(publishedAt asc)`

const categoryQuery = groq`
    *[_type == "chatMessage" && references(*[_type == "chatType" && title == "First set of chatTypes"]._id) ]

`    // if(previewData()){
    //     return(
    //             // <PreviewSuspense fallback= "Loading Preview">
    //             //     <PreviewPostList query={query}/>   
    //             // </PreviewSuspense>  
    //             <div>Test</div>          
    //     )
    // }   

const ChatPortal = async () => {
    const chats = await client.fetch(query)
    return (
        <div className="flex">
            <ChatCategorySelector />
            <ChatMessages chats={chats}/>
        </div>
  )
}

export default ChatPortal