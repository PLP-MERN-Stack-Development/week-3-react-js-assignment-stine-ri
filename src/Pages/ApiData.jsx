import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'
import { fetchPosts, fetchUsers } from '../utilis/api'

const ApiData = () => {
  const [data, setData] = useState([])
  const [dataType, setDataType] = useState('posts')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const result = dataType === 'posts' ? await fetchPosts() : await fetchUsers()
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [dataType])

  const filteredData = data.filter(item => {
    if (dataType === 'posts') {
      return (
        (item?.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (item?.body?.toLowerCase() || '').includes(searchTerm.toLowerCase())
      )
    } else {
      return (
        (item?.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (item?.email?.toLowerCase() || '').includes(searchTerm.toLowerCase())
      )
    }
  })

  return (
    <Layout>
      <Card>
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          API Data Explorer
        </h1>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Button
            variant={dataType === 'posts' ? 'primary' : 'secondary'}
            onClick={() => setDataType('posts')}
          >
            Posts
          </Button>
          <Button
            variant={dataType === 'users' ? 'primary' : 'secondary'}
            onClick={() => setDataType('users')}
          >
            Users
          </Button>
        </div>

        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Search ${dataType}...`}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Loading / Error / Results */}
        {loading && (
          <p className="text-center text-blue-500 font-medium py-6 animate-pulse">
            Loading {dataType}...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 font-medium py-6">
            Error: {error}
          </p>
        )}

        {!loading && !error && (
          <div className="grid gap-4">
            {filteredData.map(item => (
              <Card key={item.id} className="p-4">
                {dataType === 'posts' ? (
                  <>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">{item.body}</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">
                      {item.email}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item?.address?.city || 'Unknown City'}, {item?.address?.street || 'Unknown Street'}
                    </p>
                  </>
                )}
              </Card>
            ))}
          </div>
        )}

        {!loading && !error && filteredData.length === 0 && (
          <p className="text-center py-6 text-gray-500 italic">
            No {dataType} found for "{searchTerm}"
          </p>
        )}
      </Card>
    </Layout>
  )
}

export default ApiData
