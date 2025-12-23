import { createFileRoute } from '@tanstack/react-router'
import PageWrapper from '../components/PageWrapper'
import { Link } from '@tanstack/react-router'
import { LinkButton } from '../utils/buttons'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <PageWrapper>
      <header className="flex-1">
        <div className="flex flex-row flex-nowrap h-full gap-container">
          <img
            src="/images/Grant-Headshot.jpg"
            alt="Grant-Headshot"
            className="h-120 rounded-img"
          />
          <div className="text-left">
            <h1>Grant Conklin</h1>
            <h2>-Full Stack Web Developer</h2>
            <h2>-Computer Science Student At Oregon State University</h2>
            <LinkButton route="/about-me">
              <div>
                <p>About Me</p>
              </div>
            </LinkButton>
          </div>
        </div>
      </header>
    </PageWrapper>
  )
}

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hello! I'm Grant Conklin, a passionate full-stack web developer and a
        computer science student at Oregon State University. I love creating
        dynamic and responsive web applications that provide seamless user
        experiences.
      </p>
    </div>
  )
}
