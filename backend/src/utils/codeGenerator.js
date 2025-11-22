import { nanoid } from 'nanoid'

export const generateCode = (length = 6) => {
  return nanoid(length)
}

export const isValidUrl = (string) => {
  try {
    new URL(string)
    return true
  } catch (_) {
    return false
  }
}

export const isValidCode = (code) => {
  // Allow alphanumeric characters, hyphens, and underscores
  const codeRegex = /^[a-zA-Z0-9_-]+$/
  return codeRegex.test(code) && code.length >= 1 && code.length <= 50
}