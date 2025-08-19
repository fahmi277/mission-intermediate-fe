import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Page from './pages/Payment'
import Dashboard from './pages/Dashboard'
import AllProducts from './pages/AllProducts'
import DetailProduct from './pages/DetailProduct'
import PaymentPage from './pages/PaymentPage'

import MethodePaymentPage from './pages/MethodePaymentPage'

function App() {
  return (

    <Routes>
      <Route path="/" element={<LoginPage mode="login" onSubmit={() => { }} heading="" subheading="" />} />
      <Route path="/login" element={<LoginPage mode="login" onSubmit={() => { }} heading="" subheading="" />} />
      <Route path="/register" element={<RegisterPage mode="register" onSubmit={() => { }} heading="Pendaftaran Akun" subheading="Yuk, daftarkan akunmu sekarang juga!" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/detail-product" element={<DetailProduct />} />
      <Route path="/payment-methode" element={<MethodePaymentPage />} />
      <Route path="/payment-page" element={<PaymentPage />} />
    </Routes>

  )
}

export default App