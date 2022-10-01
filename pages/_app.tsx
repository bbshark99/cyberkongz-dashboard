import type { AppProps } from 'next/app'
import "../assets/scss/main.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
