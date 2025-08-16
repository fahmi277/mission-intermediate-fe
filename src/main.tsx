import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import Page from './pages/Payment.tsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import AuthCard from './pages/AuthCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8"> */}
      <AuthCard
        heading="Masuk ke Akun"
        subheading="Yuk, lanjutin belajarmu di videobelajar"
        mode="login"
        onSubmit={(e) => {
          e.preventDefault()
          console.log('Login submitted')
        }}
      />
    {/* </div> */}

    {/* <Page /> */}
  </StrictMode>,
)
