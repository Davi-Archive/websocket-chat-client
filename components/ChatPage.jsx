import { useEffect } from 'react'
import { useState } from 'react'
import { ChatBar, ChatBody, ChatFooter } from './'

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState()

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]))
  }, [socket, messages])

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className='chat__main'>
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  )
}

export default ChatPage