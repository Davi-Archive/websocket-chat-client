import React from 'react'

const ChatFooter = () => {
    const [message, setMessage] = useState('')

    const handleSendMessage = (e) => {
        e.preventDefault()
        console.log({ username: localStorage.getItem('username'), message })
        setMessage('')
    }
    return (
        <div className="chat__footer">
            <form className="form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Write message"
                    className="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="sendBtn">SEND</button>
            </form>
        </div>
    )
}

export default ChatFooter