import type { AppProps } from 'next/app'
import { Providers } from 'context/providers'
import { Layout } from 'design-systems'
import '../assets/scss/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}

export default MyApp
