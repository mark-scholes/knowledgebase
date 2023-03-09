import { client} from "@/lib/sanity.client";
import ChatCategorySelector from "@/components/ChatCategorySelector"
import { previewData } from "next/headers"
import { groq } from "next-sanity"
import PreviewSuspense  from "@/components/PreviewSuspense"
import ChatMessages from "@/components/ChatMessages"
import PreviewChatMessages from "@/components/PreviewChatMessages"

type Props = {
    params: {
        slug: any;
    };
};

async function ChatType({ params: {slug}}: Props){


const query = groq` 
*[_type == 'chatMessage' && references(*[_type == 'chatType' && slug.current == $slug]._id)] {
  _id,
  description,
  chat,
  publishedAt,
  'chatTypes': *[_type == 'chatType' && _id in ^.chatTypes[]._ref]{
    _id,
    title
  }
}
`
    
    const chats: ChatType = await client.fetch(query, {slug})

    return (
        <div className="flex-col">
            {/* <ChatCategorySelector /> */}
            <ChatMessages chats={chats}/>
        </div>
  )
}

export default ChatType