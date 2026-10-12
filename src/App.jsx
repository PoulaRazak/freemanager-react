import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbar/view'
import Footer from './components/footer/view'
import Overview from './pages/overview/view'

function App() {
  return (
    <>
      <div className="bg-background text-text min-h-screen flex flex-row gap-6">
        <Navbar/>
        <Overview/>
      </div>
      <Footer/>
    </>
  )
}

export default App
