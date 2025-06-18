import { Link } from 'react-router-dom'

const Button = ({ children, variant = 'primary', className = '', as = 'button', to, ...props }) => {
  const baseClasses =
    'px-4 py-2 rounded-md font-medium transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  }

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (as === 'link' && to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}

export default Button
