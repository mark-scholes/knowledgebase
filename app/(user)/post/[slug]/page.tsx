import { client} from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import Image from 'next/image'
import { PortableTextComponents } from "@/components/PortableTextComponents";
import { urlFor } from "@/lib/urlFor";

type Props = {
    params: {
        slug: any;
    };
};

async function Post({ params: {slug}}: Props){
    const query = groq` 
    *[_type=='post' && slug.current == $slug][0]
     {
        title,
        ...,
        author->,
        categories[]{...}       
    }
    `
    
    const post: Post = await client.fetch(query, {slug})

    return (
        
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                {post.mainImage && (
                    <div className="rounded-lg h-64 overflow-hidden">
                        <Image  className="object-cover object-center h-full w-full" src={urlFor(post.mainImage).url()} height={500} width={1200}  alt={post.mainImage.asset._type}/>
                    </div>
                )};                
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg capitalize">{post.author.name}</h2>
                        <p className="text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, ducimus.</p>
                        
                    </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <h2 className="font-medium title-font mt-4 mb-4 text-gray-900 text-lg capitalize text-center sm:text-left">{post.title}</h2>
                    <p className="leading-relaxed text-lg mb-4"></p>
                    <PortableText 
                        value={post.body}
                        //all styles for the various portableText elements are configured in the PortableTextComponents                        
                        components={PortableTextComponents as Partial<PortableTextReactComponents>}/>

                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Post 