import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'

const Home = () => {
  return (
    <Layout>
      <div className="grid gap-8 max-w-3xl mx-auto">
        <Card className="text-center shadow-lg p-8">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800 dark:text-white transition-all duration-300">
            👋 Welcome to <span className="text-blue-600 dark:text-blue-400">MyApp</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
            Stay on top of your tasks and explore up-to-date data with a simple, intuitive, and beautifully designed interface.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" to="/tasks" className="w-full sm:w-auto">
              🚀 View Tasks
            </Button>
            <Button as="link" to="/api-data" variant="secondary" className="w-full sm:w-auto">
              🌐 Explore API Data
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default Home
