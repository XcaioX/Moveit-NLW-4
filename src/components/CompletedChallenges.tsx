import { useContext } from 'react'

import { ChallengeContext } from '@/hooks/ChallengeContext'
import styles from './../styles/components/CompletedChallenges.module.css'

export const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengeContext)

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}
