import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TasksProvider } from './Components/Shared/TaskContext/TasksContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksProvider>
    

    </TasksProvider>
    <App />
  </React.StrictMode>,
)
