import { ChallengesContext } from '@/hooks/ChallengesContext'
import styles from '@/styles/components/LevelUpModal.module.css'
import { useContext } from 'react'

export const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close modal" />
        </button>
      </div>
    </div>
  )
}
