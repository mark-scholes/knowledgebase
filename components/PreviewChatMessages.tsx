"use client"

import { usePreview } from "@/lib/sanity.preview"
import ChatMessages from "./ChatMessages"

type Props = {
  query: string;
}



export default function PreviewPostList ({query}: Props) {
  const chats = usePreview(null, query);
  console.log("Loading Posts...", chats, chats.length)
  return (
    <ChatMessages chats={chats}/>
  )
}

