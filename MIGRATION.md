# Gee Mobile migration

This project combines the Gee Mobile Next.js landing page with the existing GeeFox Git application.

## Routes

- `/` - Gee Mobile landing page
- `/login/index.html` - GitHub sign-in
- `/api/login` - GitHub OAuth initiation
- `/api/callback` - GitHub OAuth callback
- `/api/token` - authenticated token endpoint
- `/gfox-home.html` - authenticated application dashboard
- `/explorer.html` - repository explorer
- `/editor.html` - editor
- `/upload.html` - upload workflow
- `/settings.html` - settings
- `/repo-settings.html` - repository settings
- `/timeline.html` - timeline

## Production environment

Set:

- `APP_URL=https://mobile.geefox.xyz`
- `GITHUB_CLIENT_ID=<production GitHub OAuth client ID>`
- `GITHUB_CLIENT_SECRET=<production GitHub OAuth client secret>`

Register this GitHub OAuth callback:

`https://mobile.geefox.xyz/api/callback`

Do not commit `.env.local` or real credentials.

## Deployment

This application is intentionally configured as a normal Next.js server application rather than a static export because the GitHub OAuth endpoints under `pages/api/` must execute server-side.
