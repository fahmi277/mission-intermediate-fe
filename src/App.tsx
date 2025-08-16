import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Heading1 from './components/Typography/heading/Heading1'
import Heading2 from './components/Typography/heading/Heading2'
import Heading3 from './components/Typography/heading/Heading3'
import Heading4 from './components/Typography/heading/Heading4'
import Heading5 from './components/Typography/heading/Heading5'
import Heading6 from './components/Typography/heading/Heading6'

import BodyText from './components/Typography/body/BodyText'
import Chip from './components/chip/Chip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>

        <div className="h-[74px] w-full bg-white flex items-center">
          <img
            src="../src/assets/logo.png"
            alt="Videobelajar Logo"
            className="h-[42px] w-[152px] ml-[24px] md:h-[56px] md:w-[237px] md:ml-[120px]"
          />
        </div>

        <div className="min-h-[calc(100vh-80px)] w-screen bg-[#fffdf2] flex items-center justify-center py-8 px-4">

            {/* <div className=''>
          <button className='w-[240px] h-[34px] sm:w-[518px] sm:h-[48px] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200'>
          Login
          </button>
          </div> */}





          <div className="bg-white py-8 px-5 rounded-lg shadow-lg text-center w-full max-w-[590px]">


            <Heading3 className="mb-10">Masuk ke Akun</Heading3>
            <p className="text-gray-600 mb-9 font-dm-sans ">Yuk, lanjutin belajarmu di videobelajar</p>


            <form className="space-y-6 flex flex-col mt-8 w-full text-left">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password */}
              <div >
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Kata Sandi <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="••••••••"
                />
                <div className="text-right mt-2">
                  <a href="#" className="text-sm text-[#49505c] hover:underline">Lupa Password?</a>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#3ECF4C] text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-200 mb-4"
              >
                Masuk
              </button>
              <button
                type="submit"
                className="w-full bg-[#E2FCD9] text-[#3ECF4C] font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-200"
              >
                Daftar
              </button>
            </form>

            <div className="flex justify-center space-x-4 mb-8">


              <a href="https://vite.dev" target="_blank" className="hover:opacity-80">
                <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" className="hover:opacity-80">
                <img src={reactLogo} className="h-16 w-16 animate-spin-slow " alt="React logo" />
              </a>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Vite + React</h1>
            <div className="mb-6">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                count is {count}
              </button>
              <p className="mt-4 text-gray-600">
                Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Click on the Vite and React logos to learn more
            </p>
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-semibold">🎉 Tailwind CSS is working!</p>
            </div>
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-semibold">🎉 Tailwind CSS is working!</p>
            </div>
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-semibold">🎉 Tailwind CSS is working!</p>
            </div>
          </div>
        </div>
          {/* <div className="space-y-4 p-4">
          <Heading1>Judul Utama</Heading1>
          <Heading2>Subjudul Besar</Heading2>
          <Heading3>Subjudul Sedang</Heading3>
          <Heading4>Subjudul Kecil</Heading4>
          <Heading5>Label</Heading5>
          <Heading6>Catatan</Heading6>
        </div>
        <div className="space-y-3 p-4">
          <BodyText size="large" weight="bold">Body Large Bold</BodyText>
          <BodyText size="medium" weight="semibold">Body Medium Semibold</BodyText>
          <BodyText size="small" weight="regular">Body Small Regular</BodyText>
          <BodyText>Default (Medium Regular)</BodyText>
        </div>

        <div>
          <Chip label="Success" type="success" variant="shadow" />
          <Chip label="Info" type="info" variant="fill" />
          <Chip label="Warning" type="warning" variant="outlined" />
          <Chip label="Warning" type="warning" variant="fill" />
          <Chip label="Disabled" disabled />
        </div> */}


      </div>
    </div>
  )
}

export default App
