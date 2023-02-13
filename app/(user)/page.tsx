import { previewData } from "next/headers"
//groq is sanity the equivalent of GraphQL for SQL
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
//temporary solution unitl next-sanity impliments support for client modules
import PreviewSuspense  from "../../components/PreviewSuspense"
import PreviewPostList from "../../components/PreviewPostList"
import PostList from "@/components/PostList"


const query = groq`*[_type=='post']{
    ...,
    author->,
    categories[]{...}
} | order(createdAt asc)`

export default async function HomePage () {

    if(previewData()){
        return(
                <PreviewSuspense fallback= "Loading Preview">
                    <PreviewPostList query={query}/>   
                </PreviewSuspense>            
        )
    }
    
    const posts = await client.fetch(query)
    return (
            <PostList posts={posts}/>
                      
    )
}

