import { randomBytes } from 'crypto'

function serializeCookie(name, value, options = {}) {
  const parts = [`${name}=${value}`]
  if (options.maxAge !== undefined) parts.push(`Max-Age=${options.maxAge}`)
  if (options.path) parts.push(`Path=${options.path}`)
  if (options.httpOnly) parts.push('HttpOnly')
  if (options.secure) parts.push('Secure')
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`)
  return parts.join('; ')
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const clientId = process.env.GITHUB_CLIENT_ID
  const appUrl = process.env.APP_URL || 'https://mobile.geefox.xyz'
  const redirectUri = `${appUrl}/api/callback`

  if (!clientId) {
    return res.status(500).json({ error: 'GitHub OAuth is not configured' })
  }

  const state = randomBytes(32).toString('hex')

  res.setHeader(
    'Set-Cookie',
    serializeCookie('oauth_state', state, {
      maxAge: 600,
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
    })
  )

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: 'repo',
    state,
    prompt: 'login',
  })

  return res.redirect(`https://github.com/login/oauth/authorize?${params.toString()}`)
}
