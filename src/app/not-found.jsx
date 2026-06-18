import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100dvh - var(--nextra-navbar-height))',
      textAlign: 'center',
      padding: '0 1rem',
    }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>
        Page not found
      </h1>
      <p style={{ color: 'var(--x-color-gray-500)', marginBottom: '0.25rem' }}>
        The documentation you're looking for appears to be undocumented.
      </p>
      <p style={{ color: 'var(--x-color-gray-400)', fontSize: '0.875rem', marginBottom: '2rem' }}>
        Which, ironically, is why you're here.
      </p>
      <Link
        href="/docs"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.625rem 1.5rem',
          borderRadius: '0.75rem',
          fontWeight: 500,
          fontSize: '0.875rem',
          color: '#fff',
          background: 'var(--x-color-primary-600, #2563eb)',
          textDecoration: 'none',
          transition: 'all 0.2s',
        }}
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Back to Docs
      </Link>
    </div>
  )
}
