import crypto from 'crypto'

function parseCookies(cookieHeader = '') {
  const cookies = {}
  cookieHeader.split(';').forEach((cookie) => {
    const [name, ...valueParts] = cookie.trim().split('=')
    if (name && valueParts.length) {
      cookies[name] = valueParts.join('=')
    }
  })
  return cookies
}

function serializeCookie(name, value, options = {}) {
  const parts = [`${name}=${value}`]
  if (options.maxAge !== undefined) parts.push(`Max-Age=${options.maxAge}`)
  if (options.path) parts.push(`Path=${options.path}`)
  if (options.httpOnly) parts.push('HttpOnly')
  if (options.secure) parts.push('Secure')
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`)
  return parts.join('; ')
}

export default async function handler(req, res) {
  const appUrl = process.env.APP_URL || 'https://mobile.geefox.xyz'
  const { code, state } = req.query
  const cookies = parseCookies(req.headers.cookie || '')
  const storedState = cookies.oauth_state

  if (!code) {
    return res.redirect(`${appUrl}/login/index.html?error=no_code`)
  }

  if (!state || !storedState || state !== storedState) {
    return res.redirect(`${appUrl}/login/index.html?error=invalid_state`)
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: `${appUrl}/api/callback`,
      }),
    })

    const data = await tokenRes.json()

    if (data.error || !data.access_token) {
      return res.redirect(`${appUrl}/login/index.html?error=${encodeURIComponent(data.error || 'oauth_failed')}`)
    }

    const tokenCookie = serializeCookie('gh_token', data.access_token, {
      maxAge: 604800,
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
    })

    const clearStateCookie = serializeCookie('oauth_state', '', {
      maxAge: 0,
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
    })

    res.setHeader('Set-Cookie', [tokenCookie, clearStateCookie])

    return res.redirect(`${appUrl}/gfox-home.html?login=success`)
  } catch (error) {
    console.error('OAuth error:', error)
    return res.redirect(`${appUrl}/login/index.html?error=oauth_failed`)
  }
}
