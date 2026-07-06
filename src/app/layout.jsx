import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://docs.incenta.dev'),
  title: {
    template: '%s - Incenta Docs'
  },
  description: 'Incenta API documentation, webhook guides, SDK examples, and referral integration blueprints.',
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <style>{`
.dark .dark-invert { filter: brightness(0) invert(1); }
.dashboard-dark { display: none; }
.dark .dashboard-light { display: none; }
.dark .dashboard-dark { display: block; }
`}</style>
      </Head>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <img
                    src="/logos/logo.png"
                    alt="Incenta"
                    style={{ height: 24, width: 'auto' }}
                    className="dark-invert"
                  />
                  <span style={{ opacity: '60%', fontWeight: 500 }}>Docs</span>
                </div>
              }
              logoLink="https://incenta.dev"
              projectLink="https://github.com/MILANydv/docs_incenta.git"
            />
          }
          footer={<Footer>MIT {new Date().getFullYear()} © Incenta.</Footer>}
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
