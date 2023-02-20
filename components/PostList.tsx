import { PortableText } from "@portabletext/react";
import ClientRouting from "./ClientRouting";
type Props = {
    posts: Post[]
};

function PostList ({ posts } : Props ) {
  return (
    
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {posts.map(post => (
            <ClientRouting route={`/post/${post.slug.current}`} key={post._id}>
              <div className="py-8 flex flex-wrap md:flex-nowrap group cursor-pointer">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">{post.description}</span>
                    <span className="mt-1 text-gray-500 text-sm">{
                      new Date(post._updatedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      })
                    }</span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{post.title}</h2>
                     <p className="leading-relaxed line-clamp-2 "><PortableText value={post.body} /></p> 
                    <p className="mt-4 text-gray-500 text-sm capitalize">{post.author.name}</p>
                    {/* {post.categories.map(category => (
                        <div key={category._id}>
                          <span>{category._id}</span>
                        </div>
                      )
                      )} */}
                    <a className="text-indigo-500 inline-flex items-center mt-4 group-hover:underline">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
              </div>
              </ClientRouting>
          ))}
      </div>
    </div>
</section>
  )
}

export default PostList