import { Metadata } from 'next'
import { Fragment } from 'react'
import { ButtonPop } from '../../components/buttonAccent'
import { Contact } from '../../components/contact'
import { Project24 } from '../../components/icons'
import { getProjects } from '../../lib/notion'

import type { Project } from '../../types/project'

type FeaturedProject = Project & {
  videoLink: string
}

export const metadata: Metadata = {
  title: 'Projects',
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'pocketchamps',
    title: 'Pocket Champs',
    description:
      'Led the automation team for this game. Mainly focued on automating build, testing, and release processes, and improving development efficiency.',
    link: 'https://play.google.com/store/apps/details?id=com.pocketchamps.game',
    type: 'Game',
    year: '2024',
    tags: ['Unity', 'Mobile', 'Racing', 'Multiplayer'],
    videoLink: 'https://www.youtube.com/embed/eeHfqVh77IE',
  },
  {
    id: 'ballbrawl',
    title: 'Ball Brawl 3D - Football Cup',
    description:
      'Developed gameplay systems, UI features and analytics integrations.',
    link: 'https://play.google.com/store/apps/details?id=com.hyper.ballbrawl',
    type: 'Game',
    year: '2018',
    tags: ['Unity', 'Mobile', 'Sports'],
    videoLink: '',
  },
  {
    id: 'matchingham',
    title: 'Matchingham',
    description: 'A mobile match-3 puzzle game available on Google Play.',
    link: 'https://play.google.com/store/apps/details?id=com.Focus.Matchingham',
    type: 'Game',
    year: '2026',
    tags: ['Unity', 'Mobile', 'Puzzle'],
    videoLink: 'https://www.youtube.com/embed/ehioILYVDTQ',
  },
  {
    id: 'infiniterunner',
    title: 'Infinite Runner - ADHD',
    description: 'Infinite runner game aimed to improve ADHD symptoms.',
    link: 'https://youtu.be/N1rLWApNPig',
    type: 'Game',
    year: '2024',
    tags: ['Unity', 'Mobile', 'Infinite Runner', 'Health'],
    videoLink: 'https://www.youtube.com/embed/N1rLWApNPig',
  },
  {
    id: 'carcare3d',
    title: 'Car Care 3D',
    description: 'A car repair simulation game.',
    link: 'https://youtu.be/rWcYnsefoSw',
    type: 'Game',
    year: '2022',
    tags: ['Unity', 'Mobile', 'Simulation'],
    videoLink: 'https://www.youtube.com/embed/rWcYnsefoSw',
  },
  {
    id: 'colorsort',
    title: 'Color Sort',
    description: 'A shader graph water liquid color sorting game built in Unity.',
    link: 'https://youtu.be/WNegfREsxCM',
    type: 'Game',
    year: '2026',
    tags: ['Unity', 'Shader Graph', 'Puzzle'],
    videoLink: 'https://www.youtube.com/embed/WNegfREsxCM',
  },
  {
    id: 'dogsout3d',
    title: 'Dogs Out 3D',
    description: 'A hypercasual gate runner game.',
    link: 'https://youtu.be/nNI8qWBXFFA',
    type: 'Game',
    year: '2022',
    tags: ['Unity', 'Mobile', 'Hypercasual', 'Runner'],
    videoLink: 'https://www.youtube.com/embed/nNI8qWBXFFA',
  },
  {
    id: 'catchandfight',
    title: 'Catch and Fight',
    description: 'Multiplier Gate based hypercasual strategy game.',
    link: 'https://youtu.be/rHlZZ3VgELc',
    type: 'Game',
    year: '2022',
    tags: ['Unity', 'Mobile', 'Hypercasual', 'Strategy'],
    videoLink: 'https://www.youtube.com/embed/rHlZZ3VgELc',
  },
  {
    id: 'hypermatch',
    title: 'HyperMatch',
    description: '3D match puzzle game on a conveyor.',
    link: 'https://youtu.be/7ghzNdqmnP0',
    type: 'Game',
    year: '2019',
    tags: ['Unity', '3D', 'Puzzle'],
    videoLink: 'https://www.youtube.com/embed/7ghzNdqmnP0',
  },
  {
    id: 'mergeup',
    title: 'Merge Up',
    description: '2D merge puzzle game.',
    link: 'https://youtu.be/c51-FPs0cxg',
    type: 'Game',
    year: '2018',
    tags: ['Unity', '2D', 'Merge', 'Puzzle'],
    videoLink: 'https://www.youtube.com/embed/c51-FPs0cxg',
  },
  {
    id: 'spaceinvaders',
    title: 'Space Invaders',
    description: 'Space Invaders case study I made for masomo games around 2018 with cocos2d-x.',
    link: 'https://youtu.be/e-GZno-Cc8Q',
    type: 'Game',
    year: '2018',
    tags: ['Cocos2d-x', 'C++', '2D', 'Arcade', 'Shooter'],
    videoLink: 'https://www.youtube.com/embed/e-GZno-Cc8Q',
  },
  
]

export default async function Projects() {
  const projects = (await getProjects()) || []
  return (
    <Fragment>
      <span className="inline-flex p-3 rounded-full bg-back-subtle">
        <Project24 />
      </span>
      <h1 className="mt-3 mb-2 text-2xl font-bold text-accent">Projects</h1>
      <p className="mb-12 text-fore-subtle">
        Some of my gaming portfolio which includes both personal and commercial projects.
      </p>
      <section className="mb-12">
        <div className="grid gap-6">
          {featuredProjects.map(project => (
            <div
              key={project.id}
              className="p-6 rounded-3xl bg-back-secondary border border-back-subtle"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-semibold text-fore-primary">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-fore-subtle">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags?.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-sm bg-back-subtle text-fore-subtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-fore-secondary">
                    {project.link.includes('play.google.com') && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-accent"
                      >
                        View on Google Play
                      </a>
                    )}
                  </div>
                </div>
                {project.videoLink ? (
                  <div className="mt-6 overflow-hidden rounded-3xl border border-back-subtle">
                    <iframe
                      src={project.videoLink}
                      title={project.title}
                      className="w-full min-h-[300px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:-mx-6 justify-items-start md:grid-cols-3 lg:grid-cols-4">
          {projects.map(project => {
            return (
              <ButtonPop key={project.id}>
                <ProjectCard project={project} />
              </ButtonPop>
            )
          })}
        </div>
      </section>
      <Contact />
    </Fragment>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative flex flex-col justify-between w-full h-full px-6 py-5 group bg-back-secondary hover:bg-back-secondary">
        <div className="flex justify-between pb-10 space-x-3 sm:space-x-0">
          <div>
            <h3 className="text-xl font-semibold text-fore-primary group-hover:text-accent">
              <span className=" focus:text-accent">{project.title}</span>
            </h3>
            <h4 className="pr-3 mt-1 font-base text-fore-subtle">
              {project.description}
            </h4>
          </div>
        </div>
        <div className="flex flex-wrap">
          {project.tags?.map(tag => (
            <span
              key={tag}
              className="p-1 mb-2 mr-2 text-xs rounded-sm text-fore-subtle bg-back-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
