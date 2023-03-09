import { previewData } from "next/headers"
//groq is sanity the equivalent of GraphQL for SQL
import { groq } from "next-sanity"
import { client } from "../../../lib/sanity.client"
import type { SanityDocument } from "@sanity/client";
//temporary solution unitl next-sanity impliments support for client modules
import PreviewSuspense  from "@/components/PreviewSuspense"
import PreviewPostList from "@/components/PreviewPostList"
import PostList from "@/components/PostList"

//move all of this under the Hustle notes section of the app. 
const query = groq`*[_type == "post" && defined(slug.current)]{
    _id,
    _createdAt,
    _updatedAt,
    title,
    body, 
    slug, 
    publishedAt, 
    author->,
    categories[]{...} 
  } | order(_updatedAt desc)`

export const revalidate = 30; 
 

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

