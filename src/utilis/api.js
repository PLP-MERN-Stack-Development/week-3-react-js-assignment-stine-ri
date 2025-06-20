import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const fetchPosts = async () => {
  try {
    const response = await api.get('/posts')
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

export const fetchUsers = async () => {
  try {
    const response = await api.get('/users')
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}