import { previewData } from "next/headers"
//groq is sanity the equivalent of GraphQL for SQL
import { groq } from "next-sanity"
import { client } from "../../../lib/sanity.client"
//temporary solution unitl next-sanity impliments support for client modules
import PreviewSuspense  from "../../../components/PreviewSuspense"
import PreviewPostList from "../../../components/PreviewPostList"
import PostList from "@/components/PostList"
import ChatMessages from "../../../components/ChatMessages"


//move all of this under the Hustle notes section of the app. 
const query = groq`*[_type=='chatMessage']{
    ...,
    author->,
    chatType[]{...}
} | order(publishedAt asc)`

export default async function ChatText () {

    if(previewData()){
        return(
                // <PreviewSuspense fallback= "Loading Preview">
                //     <PreviewPostList query={query}/>   
                // </PreviewSuspense>  
                <div>Test</div>          
        )
    }
    
    const chats = await client.fetch(query)
    return (
            <ChatMessages chats={chats}/>
                      
    )
}
