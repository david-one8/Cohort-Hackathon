import { Routes, Route, useLocation } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

// Components
import Navbar from './components/layout/Navbar.tsx'
import Footer from './components/layout/Footer.tsx'
import LoadingScreen from './components/ui/LoadingScreen.tsx'

// Pages
import Home from './pages/Home.tsx'
import Menu from './pages/Menu.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Franchise from './pages/Franchise.tsx'
import Auth from './pages/Auth.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const isAuthPage = location.pathname === '/auth' || location.pathname === '/login' || location.pathname === '/signup'

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    // Simulate initial loading time for the magic loader
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // 2.5 seconds loading time

    // Dynamically import Lenis to reduce initial bundle size
    let lenis: { destroy: () => void; raf: (time: number) => void } | null = null
    
    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
      }

      requestAnimationFrame(raf)
    })

    return () => {
      clearTimeout(loadingTimer)
      if (lenis) {
        lenis.destroy()
      }
    }
  }, [])

  return (
    <>
      <LoadingScreen
        isLoading={isLoading}
        text="Welcome to our restaurant..."
      />
      <Box minHeight="100vh" display="flex" flexDirection="column">
        {!isAuthPage && <Navbar />}
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Box>
        {!isAuthPage && <Footer />}
      </Box>
    </>
  )
}

export default App
