import { NavLink } from './atoms'
import { GitHub24, LinkedIn24, MailAt24 } from './icons'

const routes = [
  {
    path: '/projects',
    label: 'PROJECTS',
  },
  {
    path: '/about',
    label: 'ABOUT',
  },
]

export function Footer() {
  return (
    <footer className="relative w-full h-56 overflow-hidden bg-back-secondary text-secondary">
      <div className="container h-full px-5 pt-24 pb-12 m-auto md:max-w-screen-md lg:max-w-screen-lg md:px-20">
        <div className="container flex-col justify-between md:space-y-8">
          <nav className="flex-row items-center justify-center hidden space-x-6 text-sm lg:flex md:justify-end">
            {routes.map(route => (
              <NavLink key={route.path} to={route.path} title={route.label}>
                {route.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col-reverse space-y-8 space-y-reverse md:flex-row md:justify-between md:space-y-0">
            <span
              className="self-center text-xs tracking-wider md:self-end"
              aria-label="Copyright"
            >
              Talha Cagatay ISIK — 2026
            </span>
            <div className="flex flex-row items-center justify-center space-x-6 md:justify-end">
              <span>
                <a
                  href="mailto:isiktalhacagatay@gmail.com"
                  aria-label="Email isiktalhacagatay@gmail.com"
                  title="Email"
                  className="focus:text-accent"
                >
                  <MailAt24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/TalhaCagatay"
                  aria-label="Visit GitHub profile"
                  title="Visit GitHub profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <GitHub24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/talhaisik/"
                  aria-label="Visit LinkedIn profile"
                  title="Visit LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <LinkedIn24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
