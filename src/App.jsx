import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Tasks from './Pages/Tasks'
import ApiData from './Pages/ApiData'
import { useTheme } from './contexts/ThemeContext.jsx'
import './index.css'
const App = () => {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api-data" element={<ApiData />} />
      </Routes>
    </div>
  )
}

export default App