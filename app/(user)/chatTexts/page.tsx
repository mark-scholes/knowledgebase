import { previewData } from "next/headers"
//groq is sanity the equivalent of GraphQL for SQL
import { groq } from "next-sanity"
import { client } from "@/lib/sanity.client"
import type { SanityDocument } from "@sanity/client";
//temporary solution unitl next-sanity impliments support for client modules
import PreviewSuspense  from "@/components/PreviewSuspense"
import PreviewChatMessages from "@/components/PreviewChatMessages"
import ChatPortal from "@/components/ChatPortal"

//move all of this under the Hustle notes section of the app. 
const query = groq`*[_type == 'chatType']{title, slug, description} | order(_updatedAt desc)`

export const revalidate = 30; 
 

export default async function Chats () {

    if(previewData()){
        return(
                <PreviewSuspense fallback= "Loading Preview">
                    <PreviewChatMessages query={query}/>   
                </PreviewSuspense>            
        )
    }
    
    const chatTypes = await client.fetch(query)
    return (
            <ChatPortal chatTypes={chatTypes}/>
                      
    )
}

