import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none transition-transform duration-500"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(119, 198, 255, 0.3) 0%, transparent 50%)
          `,
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />

      {/* Glass overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none backdrop-blur-sm" />

      {/* Content Wrapper */}
      <div
        className={`relative z-10 flex flex-col min-h-screen transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-white/20 shadow-md">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-10 md:py-14 lg:py-16">
            <div
              className={`transition-all duration-700 ease-out delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {children}
            </div>
          </div>

          {/* Decorative blurs */}
          <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -left-32 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </main>

        {/* Footer */}
        <footer className="relative z-10 bg-gradient-to-t from-gray-50/80 to-transparent dark:from-gray-900/80 backdrop-blur-md border-t border-white/20">
          <Footer />
        </footer>
      </div>

      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 z-50 transition-all duration-300"
        style={{
          width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
        }}
      />
    </div>
  )
}

export default Layout
