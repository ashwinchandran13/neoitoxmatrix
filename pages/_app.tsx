import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
  <div className='relative'> 
    <NavBar />
    <AnimatePresence exitBeforeEnter>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  </div>
  )
}

export default MyApp
