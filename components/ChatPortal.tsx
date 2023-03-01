import ChatCategorySelector from "./ChatCategorySelector"
import { previewData } from "next/headers"
//groq is sanity the equivalent of GraphQL for SQL
import { groq } from "next-sanity"
import { client } from "../lib/sanity.client"
//temporary solution unitl next-sanity impliments support for client modules
import PreviewSuspense  from "../components/PreviewSuspense"
import ChatMessages from "../components/ChatMessages"
import PreviewChatMessages from "./PreviewChatMessages"

const query = groq`*[_type=='chatMessage']{
    ...,
    author->,
    chatType[]{...}
} | order(publishedAt asc)`

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
        <div className="flex">
            <ChatCategorySelector />
            <ChatMessages chats={chats}/>
        </div>
  )
}

export default ChatPortal