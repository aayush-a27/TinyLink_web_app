import axios from './axios'

export const api = {
  // Create a new short link
  createLink: async (data) => {
    const response = await axios.post('/api/links', data)
    return response.data
  },

  // Get all links
  getLinks: async () => {
    const response = await axios.get('/api/links')
    return response.data
  },

  // Get stats for a specific link
  getLinkStats: async (code) => {
    const response = await axios.get(`/api/links/${code}`)
    return response.data
  },

  // Delete a link
  deleteLink: async (code) => {
    const response = await axios.delete(`/api/links/${code}`)
    return response.data
  },

  // Health check
  healthCheck: async () => {
    const response = await axios.get('/healthz')
    return response.data
  }
}