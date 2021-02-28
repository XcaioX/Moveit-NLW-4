import styles from './../styles/components/Profile.module.css'

export const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/44593261?s=460&u=0eb7078193a172c984f01ed82da04c91032dc2da&v=4"
        alt="Caio Fernandes"
      />
      <div>
        <strong>Caio Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
