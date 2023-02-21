"use client"

import { PortableText } from '@portabletext/react'
import { useRef } from 'react';
import { useStore } from "@/src/store";


interface Props {
  chats?: Chat[];
}

function ChatMessages ({ chats = [] }: Props ={} ) {
  // useStore.setState({ chatTypesDisplayed: "Type1", user: "Mark Scholes"})
  // console.log(useStore.getState().user)
  const divRef = useRef<HTMLDivElement>(null);
  const handleDoubleClick = () => {
    const divContent = divRef.current?.innerText;
    if (divContent) {
      navigator.clipboard.writeText(divContent);
    }
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {chats.map(chat => (
            <div className="p-4 md:w-1/3" key={chat._id}>
              <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg ">
                <div className="lg:h-48 md:h-36 w-full object-cover object-center border-gray-200 rounded-t-lg shadow dark:bg-gray-200 dark:border-gray-700 pl-2">
                  <div
                    className="text-sm font-normal text-gray-700 dark:text-gray-700 prose overflow-y-auto h-full  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-rounded-*"
                    onDoubleClick={handleDoubleClick}
                    ref={divRef}> 
                    {chat.chat && (
                  
                      <PortableText 
                        value={chat.chat}
                        components={{
                          marks: {/* ... */},
                          types: {/* ... */},
                          list: {/* ... */},
                        }} />
                        
                    )}  
                  </div>
                </div>

                <div className="p-6">

                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
                  {/* {useStore.getState().user} */}
                  {/* {chat.chatTypes.map(chatType => (
                    
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{chatType.name}</h2>
            
            ))} */}
                  {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1> */}
                  <p className="leading-relaxed mb-3">{chat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChatMessages;
