import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Stats from './pages/Stats'
import Health from './pages/Health'
import Redirect from './pages/Redirect'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/code/:code" element={<Stats />} />
          <Route path="/healthz" element={<Health />} />
          <Route path="/:code" element={<Redirect />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App