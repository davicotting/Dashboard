import React from 'react'
import ReactDOM from 'react-dom/client'
import { Dashboard } from './Pages/Dashboard'
import { Toaster } from 'sonner'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dashboard />
    <Toaster />
      </React.StrictMode>,
)
