const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-sm mt-auto transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} <span className="font-semibold">MyApp</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
