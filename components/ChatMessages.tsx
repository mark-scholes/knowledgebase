"use client"

import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { useRef } from 'react';
import { PortableTextComponents } from './PortableTextComponents';
import './chat-messages.css';

interface Props {
  chats?: Chat[];
}


function ChatMessages ({ chats = [] }: Props ={} ) {
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleDoubleClick = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
    const divContent = (divRefs.current[index]?.firstChild?.firstChild as HTMLElement)?.innerText;
    if (divContent) {
       navigator.clipboard.writeText(divContent);
    }

    const target = e.currentTarget;
    target.classList.add('pressed');
    setTimeout(() => {
      target.classList.remove('pressed');
    }, 500);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {chats.map((chat, index) => (
            <div className="p-4 md:w-1/3" key={chat._id}>
              <div 
                className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg hover:scale-105 transition duration-300"
                onDoubleClick={handleDoubleClick(index)}
                ref={(ref) => divRefs.current[index] = ref}>
                <div className="lg:h-48 md:h-36 w-full object-cover object-center border-gray-200 rounded-t-lg shadow dark:bg-gray-200 dark:border-gray-700 pl-2">
                  <div
                    className="text-sm font-normal text-gray-700 dark:text-gray-700 prose overflow-y-auto h-full  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-rounded-*"
                  > 
                    {chat.chat && (
                      <PortableText   
                        value={chat.chat}
                        //all styles for the various portableText elements are configured in the PortableTextComponents
                        components={PortableTextComponents as Partial<PortableTextReactComponents>} />
                    )}  
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
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
