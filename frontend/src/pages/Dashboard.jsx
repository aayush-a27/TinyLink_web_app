import { useState, useEffect } from 'react'
import AddLinkForm from '../components/AddLinkForm'
import Table from '../components/Table'
import { api } from '../utils/api'

const Dashboard = () => {
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchLinks = async () => {
    try {
      setLoading(true)
      const data = await api.getLinks()
      setLinks(data)
      setError('')
    } catch (err) {
      setError('Failed to fetch links')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLinks()
    document.title = 'Dashboard - TinyLink'
  }, [])

  const handleLinkAdded = () => {
    fetchLinks()
  }

  const handleLinkDeleted = () => {
    fetchLinks()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage your short links</p>
        </div>

        <AddLinkForm onLinkAdded={handleLinkAdded} />

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Your Links ({links.length})</h2>
        </div>

        <Table links={links} onLinkDeleted={handleLinkDeleted} />
      </div>
    </div>
  )
}

export default Dashboard