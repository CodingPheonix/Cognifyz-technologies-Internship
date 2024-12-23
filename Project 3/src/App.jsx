import './App.css'
import Hero_section from './Components/Hero_section'
import Technologies from './Components/Technologies'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className='relative max-w-[2070px] mx-auto'>
      <div className='fixed top-0 w-full max-w-[2070px]'>
        <Navbar />
      </div>
      <div>
        <Hero_section />
        <Technologies />
        <Contact />
      </div>
    </div>
  )
}

export default App
