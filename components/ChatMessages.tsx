import ChatMessageBody from './ChatMessageBody'
import './chat-messages.css';

interface Props {
  chats?: Chat[];
}


function ChatMessages ({ chats = [] }: Props ={} ) {

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {chats.map((chat, index) => (
            <ChatMessageBody chat={chat} index={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChatMessages;
