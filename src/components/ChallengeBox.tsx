import { Button } from './Button'

import styles from './../styles/components/ChallengeBox.module.css'
import { useCallback, useContext } from 'react'
import { ChallengesContext } from '@/hooks/ChallengesContext'
import { CountdownContext } from '@/hooks/CountdownContext'

export const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  )
  const { resetCountdown } = useContext(CountdownContext)

  const handleChallengeSucceeded = useCallback(() => {
    completeChallenge()
    resetCountdown()
  }, [])

  const handleChallengeFailed = useCallback(() => {
    resetChallenge()
    resetCountdown()
  }, [])

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt="Challenge icon"
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </Button>
            <Button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </Button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  )
}
