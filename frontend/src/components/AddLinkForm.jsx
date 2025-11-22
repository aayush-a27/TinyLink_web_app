import { useState } from 'react'
import { api } from '../utils/api'

const AddLinkForm = ({ onLinkAdded }) => {
  const [formData, setFormData] = useState({
    url: '',
    customCode: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const data = { url: formData.url }
      if (formData.customCode.trim()) {
        data.customCode = formData.customCode.trim()
      }

      await api.createLink(data)
      setFormData({ url: '', customCode: '' })
      onLinkAdded()
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create link')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Create New Short Link</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
            URL to shorten *
          </label>
          <input
            type="url"
            id="url"
            required
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            placeholder="https://example.com/very-long-url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="customCode" className="block text-sm font-medium text-gray-700 mb-1">
            Custom short code (optional)
          </label>
          <input
            type="text"
            id="customCode"
            value={formData.customCode}
            onChange={(e) => setFormData({ ...formData, customCode: e.target.value })}
            placeholder="my-custom-code"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Creating...' : 'Create Short Link'}
        </button>
      </form>
    </div>
  )
}

export default AddLinkForm