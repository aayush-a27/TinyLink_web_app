import Link from '../models/Link.js'
import { generateCode, isValidUrl, isValidCode } from '../utils/codeGenerator.js'

// Create a new short link
export const createLink = async (req, res) => {
  try {
    const { url, customCode } = req.body

    // Validate URL
    if (!url || !isValidUrl(url)) {
      return res.status(400).json({ message: 'Valid URL is required' })
    }

    let code = customCode

    // Validate custom code if provided
    if (customCode) {
      if (!isValidCode(customCode)) {
        return res.status(400).json({ message: 'Invalid custom code format' })
      }

      // Check if custom code already exists
      const existingLink = await Link.findOne({ code: customCode })
      if (existingLink) {
        return res.status(409).json({ message: 'Custom code already exists' })
      }
    } else {
      // Generate unique code
      do {
        code = generateCode()
      } while (await Link.findOne({ code }))
    }

    // Create new link
    const link = new Link({ code, url })
    await link.save()

    res.status(201).json({
      code: link.code,
      url: link.url,
      shortUrl: `${process.env.BASE_URL}/${link.code}`,
      clicks: link.clicks,
      createdAt: link.createdAt
    })
  } catch (error) {
    console.error('Create link error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Get all links
export const getLinks = async (req, res) => {
  try {
    const links = await Link.find().sort({ createdAt: -1 })
    res.json(links)
  } catch (error) {
    console.error('Get links error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Get stats for a specific link
export const getLinkStats = async (req, res) => {
  try {
    const { code } = req.params
    const link = await Link.findOne({ code })

    if (!link) {
      return res.status(404).json({ message: 'Link not found' })
    }

    res.json(link)
  } catch (error) {
    console.error('Get link stats error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Delete a link
export const deleteLink = async (req, res) => {
  try {
    const { code } = req.params
    const link = await Link.findOneAndDelete({ code })

    if (!link) {
      return res.status(404).json({ message: 'Link not found' })
    }

    res.json({ message: 'Link deleted successfully' })
  } catch (error) {
    console.error('Delete link error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Redirect to original URL
export const redirectToUrl = async (req, res) => {
  try {
    const { code } = req.params
    const link = await Link.findOne({ code })

    if (!link) {
      return res.status(404).json({ message: 'Link not found' })
    }

    // Update click count and last clicked timestamp
    link.clicks += 1
    link.lastClicked = new Date()
    await link.save()

    // Redirect to original URL
    res.redirect(302, link.url)
  } catch (error) {
    console.error('Redirect error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}