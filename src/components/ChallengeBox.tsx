import { Button } from './Button'

import styles from './../styles/components/ChallengeBox.module.css'
import { useContext } from 'react'
import { ChallengeContext } from '@/hooks/ChallengeContext'

export const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengeContext)

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
              onClick={resetChallenge}
            >
              Falhei
            </Button>
            <Button type="button" className={styles.challengeSucceededButton}>
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
