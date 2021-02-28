import { ChallengeContext } from '@/hooks/ChallengeContext'
import styles from '@/styles/components/LevelUpModal.module.css'
import { useContext } from 'react'

export const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpmodal } = useContext(ChallengeContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpmodal}>
          <img src="/icons/close.svg" alt="Close modal" />
        </button>
      </div>
    </div>
  )
}
