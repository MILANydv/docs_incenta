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
      <Head faviconGlyph="⚡">{/* Additional head tags go here */}</Head>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <b>Incenta</b>
                  <span style={{ opacity: '60%' }}>Docs</span>
                </div>
              }
              projectLink="https://incenta.dev"
            />
          }
          footer={<Footer>MIT {new Date().getFullYear()} © Incenta.</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/incenta/incenta"
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
