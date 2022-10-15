import './App.css'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3001')

function App() {
  return (
    <>
      {console.log(socket)}
      < div className="App" >
        <h1>App</h1>
      </div >
    </>
  )
}

export default App
