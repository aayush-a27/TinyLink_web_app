import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Redirect = () => {
  const { code } = useParams()

  useEffect(() => {
    // Redirect to the backend endpoint that handles the actual redirect
    window.location.href = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/${code}`
  }, [code])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting...</p>
      </div>
    </div>
  )
}

export default Redirect