import { AppProps } from 'next/app'
import { AnimateSharedLayout } from 'framer-motion'

import './../styles/global.css'
import { ChallengeContextProvider } from '../hooks/ChallengeContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChallengeContextProvider>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ChallengeContextProvider>
  )
}

export default MyApp
