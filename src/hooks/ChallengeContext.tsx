import { createContext, useCallback, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import challenges from '../../challenges.json'
import { LevelUpModal } from '@/components/LevelUpModal'

type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

type ChallengesContextData = {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: Challenge
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  closeLevelUpmodal: () => void
}

type ChallengesProviderProps = {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export const ChallengeContext = createContext<ChallengesContextData>(
  {} as ChallengesContextData
)
export const ChallengeContextProvider: React.FC<ChallengesProviderProps> = ({
  children,
  ...rest
}) => {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  )
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  const levelUp = useCallback(() => {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }, [])

  const closeLevelUpmodal = useCallback(() => {
    setIsLevelUpModalOpen(false)
  }, [])

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }, [])

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null)
  }, [])

  const completeChallenge = useCallback(() => {
    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }, [])

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpmodal
      }}
    >
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  )
}
