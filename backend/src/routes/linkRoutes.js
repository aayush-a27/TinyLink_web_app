import express from 'express'
import {
  createLink,
  getLinks,
  getLinkStats,
  deleteLink,
  redirectToUrl
} from '../controllers/linkController.js'

const router = express.Router()

// API routes
router.post('/api/links', createLink)
router.get('/api/links', getLinks)
router.get('/api/links/:code', getLinkStats)
router.delete('/api/links/:code', deleteLink)

// Redirect route (must be last to avoid conflicts)
router.get('/:code', redirectToUrl)

export default router