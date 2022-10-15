import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, ChatPage } from '../components/'
import { io } from 'socket.io-client'
const socket = await io('http://localhost:3001')

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {console.log(socket)}
        <Routes>
          <Route path='/' element={<Home socket={socket} />} />
          <Route path='/chat' element={<ChatPage socket={socket} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App