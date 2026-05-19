import { Metadata } from 'next'
import { Fragment } from 'react'
import { Contact } from '../../components/contact'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return (
    <Fragment>
      <div className="container">
        <h1 className="mt-3 mb-6 text-4xl font-bold tracking-tight text-accent">
          About Me
        </h1>
        <article className="max-w-2xl min-w-0 text-base lg:text-lg text-fore-secondary space-y-6">
          <p>
            Hi, I’m <span className="text-accent font-semibold">Talha Cagatay ISIK</span>, a software engineer with nearly 10 years of experience building games, tools, libraries and SDKs.
          </p>
          <p>
            Outside of coding, I’m passionate about video games and currently enjoying <span className="text-accent font-semibold">God of War Ragnarök</span>. I also enjoy chess, puzzles, and solving LeetCode problems. Music has always been a big part of my life. I play both piano and guitar, with a taste ranging from rock to classical. I’m also an animal lover and can solve a Rubik’s Cube in under <span className="text-accent font-semibold">30 seconds</span>.
          </p>
        </article>
      </div>
      <Contact />
    </Fragment>
  )
}
