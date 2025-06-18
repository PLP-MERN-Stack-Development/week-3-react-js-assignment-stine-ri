import { Link } from 'react-router-dom'
import Button from './Button'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-gray-800 dark:text-white tracking-tight"
        >
          MyApp
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-2 flex-wrap">
          <Link to="/tasks">
            <Button variant="secondary">Tasks</Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary">API Data</Button>
          </Link>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle light/dark mode"
          className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
