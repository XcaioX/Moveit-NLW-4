import { useContext } from 'react'

import { ChallengeContext } from '@/hooks/ChallengeContext'
import styles from './../styles/components/CompletedChallenges.module.css'

export const CompletedChallenges: React.FC = () => {
  const { challengeCompleted } = useContext(ChallengeContext)

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengeCompleted}</span>
    </div>
  )
}
