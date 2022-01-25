import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>
    <header 
    // className="sticky top-0 z-50"
    >
      <NavBar />
    </header>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
