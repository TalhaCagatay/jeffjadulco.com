import Image from 'next/image'
import React from 'react'
// Blob removed to show only the avatar photo
import { Contact } from '../components/contact'
import avatar from '../public/images/the-avatar.jpg'

export default async function Page() {
  return (
    <div>
      <div className="flex flex-col-reverse items-center mt-12 lg:flex-row lg:justify-between lg:space-x-6">
        <p className="max-w-3xl mt-12 text-3xl font-semibold lg:mt-0 sm:text-4xl sm:text-left md:text-center lg:text-left">
            Hi, I’m <span className="text-accent font-semibold">Talha Cagatay ISIK</span>. I’m an experienced <span className="text-accent font-semibold">game developer</span> and <span className="text-accent font-semibold">tools engineer</span> with a strong focus on <span className="text-accent font-semibold">C#/.NET</span>, <span className="text-accent font-semibold">Unity</span>, <span className="text-accent font-semibold">SDKs</span>, <span className="text-accent font-semibold">automation</span>.
        </p>
        <div className="flex items-center justify-center">
          <div className="relative w-40 h-40 overflow-hidden rounded-full md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white">
            <Image
              src={avatar}
              alt="My avatar"
              fill
              className="object-contain scale-100 rounded-full"
              quality={100}
              priority
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <section className="mt-12">
        <div className="flex items-center mb-6">
          <p className="text-sm uppercase tracking-[.3em] text-accent">Experiences</p>
        </div>
        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-back-secondary border border-white/10">
            <p className="text-base font-semibold">💼 Lead Unity Engineer — Trilitech <span className="text-fore-subtle">(Jul 2024 - Present)</span></p>
            <ul className="mt-3 list-disc list-inside text-fore-secondary">
              <li>
                Refactored <a href="https://github.com/trilitech/tezos-unity-sdk" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Tezos Unity SDK</a> with a team of 4 by introducing modular package architecture, increasing partner adoption by <span className="text-accent font-semibold">50%</span> and reducing support tickets by <span className="text-accent font-semibold">75%</span>.
              </li>
              <li>Learned Solidity within <span className="text-accent font-semibold">4 months</span> and developed production-ready smart contracts used by external partners for blockchain integrations.</li>
              <li>Rapidly acquired JavaScript/TypeScript to support partner integrations and created onboarding plans enabling smooth Web2 → Web3 migration.</li>
              <li>Contributed to TypeScript backend of internal real-time Web3 betting app ChartWin, improving platform stability and transaction workflows.</li>
              <li>Supported <span className="text-accent font-semibold">15+</span> external partners by working within their codebases and preparing migration/upgrade guidelines to improve SDK reliability.</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-back-secondary border border-white/10">
            <p className="text-base font-semibold">⚙️ Lead Unity Automation Engineer — Madbox <span className="text-fore-subtle">(Mar 2024 - Jul 2024)</span></p>
            <ul className="mt-3 list-disc list-inside text-fore-secondary">
              <li>Resolved critical dependency bottlenecks in build pipelines, increasing release frequency by <span className="text-accent font-semibold">40%</span>.</li>
              <li>Redesigned advertisement architecture by decoupling business logic from ad rule systems, enabling faster A/B tests and increasing revenue of <a href="https://play.google.com/store/apps/details?id=com.pocketchamps.game" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Pocket Champs</a> by <span className="text-accent font-semibold">15%</span>.</li>
              <li>Led code reviews and supported internal game teams, enforcing engineering best practices and maintaining delivery velocity.</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-back-secondary border border-white/10">
            <p className="text-base font-semibold">🧩 Lead Unity SDK Engineer — Coda Platform <span className="text-fore-subtle">(Mar 2020 - Mar 2024)</span></p>
            <ul className="mt-3 list-disc list-inside text-fore-secondary">
              <li>Led development and maintenance of Coda SDK supporting games at scale reaching over <span className="text-accent font-semibold">1M DAU</span>.</li>
              <li>Built internal admin panel for faster SDK diagnostics and issue resolution; adopted by partner studios.</li>
              <li>Developed native Unity plugins for Android and iOS and refactored ad provider architecture to enable rapid provider switches.</li>
              <li>Supported <span className="text-accent font-semibold">40+</span> game studios with hands-on guidance and improved developer onboarding.</li>
              <li>Transitioned into Web3 initiatives and became a core contributor to Unity Web3 SDK integrated into <span className="text-accent font-semibold">35+</span> games (<span className="text-accent font-semibold">500K DAU</span>).</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-back-secondary border border-white/10">
            <p className="text-base font-semibold">🚀 Lead Unity Developer — Fire Studios <span className="text-fore-subtle">(Aug 2019 - Mar 2020)</span></p>
            <ul className="mt-3 list-disc list-inside text-fore-secondary">
              <li>Hired as first engineer to build engineering foundation and scale the team to <span className="text-accent font-semibold">5</span> developers.</li>
              <li>Led development of <span className="text-accent font-semibold">10+</span> mobile games within 7 months by establishing efficient production workflows.</li>
              <li>Developed reusable modular codebase reducing development time for new titles.</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-back-secondary border border-white/10">
            <p className="text-base font-semibold">🎮 Senior Unity Game Developer — Panteon <span className="text-fore-subtle">(Sep 2018 - Aug 2019)</span></p>
            <ul className="mt-3 list-disc list-inside text-fore-secondary">
              <li>Developed gameplay systems, UI features and analytics integrations for <span className="text-accent font-semibold">25+</span> mobile titles including <a href="https://play.google.com/store/apps/details?id=com.hyper.ballbrawl" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline">Ball Brawl</a>.</li>
              <li>Worked in rapid prototyping cycles delivering new game concepts every two weeks.</li>
            </ul>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  )
}
