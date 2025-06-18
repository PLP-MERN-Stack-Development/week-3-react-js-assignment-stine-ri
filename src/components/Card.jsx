const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        border border-gray-200 dark:border-gray-700 
        rounded-2xl shadow-sm 
        p-6 
        transition-transform duration-300 ease-in-out 
        hover:shadow-lg hover:-translate-y-1 
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card
