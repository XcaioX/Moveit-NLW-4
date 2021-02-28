import { GetServerSideProps } from 'next'

import { ChallengeBox } from '@/components/ChallengeBox'
import { CompletedChallenges } from '@/components/CompletedChallenges'
import { Countdown } from '@/components/Countdown'
import { ExperienceBar } from '@/components/ExperienceBar'
import { Profile } from '@/components/Profile'
import { SEO } from '@/components/SEO'
import { CountdownProvider } from '@/hooks/CountdownContext'
import { ChallengeContextProvider } from '@/hooks/ChallengeContext'

import styles from './../styles/pages/Home.module.css'

type HomeProps = {
  level: number
  currentExperience: number
  challengesCompleted: number
}

const Home: React.FC<HomeProps> = ({
  challengesCompleted,
  currentExperience,
  level
}) => {
  return (
    <ChallengeContextProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <SEO title="Home" />
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengeContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
export default Home
