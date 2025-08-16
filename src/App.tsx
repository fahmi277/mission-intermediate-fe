import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Page from './pages/Payment'
import Dashboard from './pages/Dashboard'

function App() {
  return (

    <Routes>
      <Route path="/" element={<LoginPage mode="login" onSubmit={() => { }} heading="" subheading="" />} />
      <Route path="/login" element={<LoginPage mode="login" onSubmit={() => { }} heading="" subheading="" />} />
      <Route path="/register" element={<RegisterPage mode="register" onSubmit={() => { }} heading="Pendaftaran Akun" subheading="Yuk, daftarkan akunmu sekarang juga!" />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

  )
}

export default App