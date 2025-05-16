export default function ({ req, redirect }) {
  // Skip redirection in development environment
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  // Check if server-side
  if (process.server && req) {
    const host = req.headers.host

    // If the current domain is not www.detkendevelopment.com, redirect
    if (host && !host.includes('www.detkendevelopment.com')) {
      // Redirect to root domain without preserving path
      const newUrl = 'https://www.detkendevelopment.com'

      // Perform a 301 (permanent) redirect
      redirect(301, newUrl)
    }
  } else if (process.client) {
    // Client-side redirection
    const currentHost = window.location.hostname

    if (!currentHost.includes('www.detkendevelopment.com')) {
      // Redirect to root domain without preserving path
      const newUrl = 'https://www.detkendevelopment.com'

      // Redirect using window.location for client-side navigation
      window.location.href = newUrl
    }
  }
}
