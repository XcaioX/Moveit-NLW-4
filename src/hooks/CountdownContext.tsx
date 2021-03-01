import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import { ChallengesContext } from './ChallengesContext'

type CcountdownContextData = {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

export const CountdownContext = createContext<CcountdownContextData>(
  {} as CcountdownContextData
)

let countdownTimeout: NodeJS.Timeout

export const CountdownProvider: React.FC = ({ children }) => {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
    setHasFinished(false)
  }, [])

  const startCountdown = useCallback(() => {
    setIsActive(true)
  }, [])

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      startNewChallenge()
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
