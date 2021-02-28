import { AppProps } from 'next/app'
import { AnimateSharedLayout } from 'framer-motion'

import './../styles/global.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}

export default MyApp
