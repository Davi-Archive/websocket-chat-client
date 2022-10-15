import { ChatBar, ChatBody, ChatFooter } from './'

const ChatPage = ({ socket }) => {
  return (
    <div className="chat">
      <ChatBar />
      <div className='chat__main'>
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  )
}

export default ChatPage