export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const cookieHeader = req.headers.cookie || ''
  const cookies = {}

  cookieHeader.split(';').forEach((cookie) => {
    const [name, ...valueParts] = cookie.trim().split('=')
    if (name && valueParts.length) {
      cookies[name] = valueParts.join('=')
    }
  })

  const token = cookies.gh_token

  if (token) {
    return res.status(200).json({ token })
  }

  return res.status(401).json({ error: 'Not authenticated' })
}
