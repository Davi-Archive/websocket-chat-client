import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChatBody = () => {
    const navigate = useNavigate()

    const handleLeaveChat = () => {
        localStorage.removeItem('username');
        navigate('/')
        window.location.reload()
    }
    return (
        <div>ChatBody</div>
    )
}

export default ChatBody