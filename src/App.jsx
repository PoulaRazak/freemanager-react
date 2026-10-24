import './App.css'
import { Navbar } from './components/navbar'
import Footer from './components/footer'
import Overview from './pages/overview'

function App() {
  return (
    <>
      <div className="bg-background text-text min-h-screen flex flex-row gap-6">
        <Navbar/>
        <Overview/>
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default App
