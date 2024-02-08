import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { AuthProvider } from './context/authContext.jsx'
import {ChatProvider} from './context/chatContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <ChatProvider>
        <React.StrictMode>
            <App />
          </React.StrictMode>
      </ChatProvider>
    </AuthProvider>
)
