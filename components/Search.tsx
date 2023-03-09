import { groq } from "next-sanity"
import { client } from "@/lib/sanity.client"
const Search = () => {

//     const query = groq `*[_type == "post" && 
//     body[].children[].text match "Compose"
//   ] {
//       _id,
//       title
//     } | order(title asc)`
//this would be the format if we were making searches for all posts that contain the word 'Compose' sees to work without any need to set it up within the Schema. 



  return (
    <div>Search</div>
  )
}

export default Search