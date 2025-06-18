import { useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'
import useLocalStorage from '../hooks/useLocalStorage'

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all')
  const [isAdding, setIsAdding] = useState(false)

  const addTask = () => {
    if (newTask.trim()) {
      setIsAdding(true)
      setTimeout(() => {
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
        setNewTask('')
        setIsAdding(false)
      }, 300)
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    const taskElement = document.getElementById(`task-${id}`)
    if (taskElement) {
      taskElement.classList.add('animate-fade-out')
      setTimeout(() => {
        setTasks(tasks.filter(task => task.id !== id))
      }, 300)
    }
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <Layout>
      <Card className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Task Manager
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="What needs to be done?"
            className="flex-grow px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
          />
          <Button 
            onClick={addTask}
            className={`min-w-[120px] ${isAdding ? 'animate-pulse' : ''}`}
            disabled={isAdding}
          >
            {isAdding ? 'Adding...' : 'Add Task'}
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          <Button 
            variant={filter === 'all' ? 'primary' : 'secondary'} 
            onClick={() => setFilter('all')}
            className="transition-all hover:scale-105"
          >
            All ({tasks.length})
          </Button>
          <Button 
            variant={filter === 'active' ? 'primary' : 'secondary'} 
            onClick={() => setFilter('active')}
            className="transition-all hover:scale-105"
          >
            Active ({tasks.filter(t => !t.completed).length})
          </Button>
          <Button 
            variant={filter === 'completed' ? 'primary' : 'secondary'} 
            onClick={() => setFilter('completed')}
            className="transition-all hover:scale-105"
          >
            Completed ({tasks.filter(t => t.completed).length})
          </Button>
        </div>

        <ul className="space-y-3">
          {filteredTasks.map(task => (
            <li 
              key={task.id}
              id={`task-${task.id}`}
              className={`
                flex items-center justify-between p-4 border rounded-lg
                ${task.completed ? 
                  'bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600' : 
                  'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                }
                animate-fade-in hover:shadow-md transition-all duration-200
              `}
            >
              <div className="flex items-center space-x-3 flex-grow">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className={`
                    h-6 w-6 rounded-full border-2
                    ${task.completed ? 
                      'border-green-500 bg-green-500 text-white' : 
                      'border-gray-300 dark:border-gray-500 hover:border-blue-500'
                    }
                    transition-colors duration-200 cursor-pointer
                    focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  `}
                />
                <span className={`
                  flex-grow break-words max-w-[70%] sm:max-w-none
                  ${task.completed ? 
                    'line-through text-gray-500 dark:text-gray-400' : 
                    'text-gray-800 dark:text-gray-200'
                  }
                  transition-all duration-200
                `}>
                  {task.text}
                </span>
              </div>
              <Button 
                variant="danger" 
                size="sm" 
                onClick={() => deleteTask(task.id)}
                className="hover:scale-110 transition-transform duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </Button>
            </li>
          ))}
        </ul>

        {filteredTasks.length === 0 && (
          <div className="text-center py-8 animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {filter === 'all' ? 
                "No tasks yet. Add one above!" : 
                filter === 'active' ? 
                "No active tasks. Great job!" : 
                "No completed tasks yet. Keep going!"}
            </p>
          </div>
        )}
      </Card>
    </Layout>
  )
}

export default Tasks