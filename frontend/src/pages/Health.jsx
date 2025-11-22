import { useState, useEffect } from 'react'
import { api } from '../utils/api'

const Health = () => {
  const [health, setHealth] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const checkHealth = async () => {
      try {
        setLoading(true)
        const data = await api.healthCheck()
        setHealth(data)
        setError('')
        document.title = 'Health Check - TinyLink'
      } catch (err) {
        setError('Health check failed')
      } finally {
        setLoading(false)
      }
    }

    checkHealth()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking health...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">System Health</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          {error ? (
            <div className="text-center">
              <div className="text-6xl mb-4">❌</div>
              <h2 className="text-xl font-semibold text-red-600 mb-2">System Unhealthy</h2>
              <p className="text-gray-600">{error}</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-xl font-semibold text-green-600 mb-4">System Healthy</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm text-gray-800">
                  {JSON.stringify(health, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Health