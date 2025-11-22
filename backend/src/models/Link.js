import mongoose from 'mongoose'

const linkSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
  clicks: {
    type: Number,
    default: 0
  },
  lastClicked: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
})

// Index for faster lookups
linkSchema.index({ code: 1 })

const Link = mongoose.model('Link', linkSchema)

export default Link