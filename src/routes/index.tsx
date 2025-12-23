import { createFileRoute } from '@tanstack/react-router'
import { LinkButton } from '@/components/utils/buttons'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <header
      className="flex-1 max-h-full max-w-screen m-auto flex flex-row flex-nowrap"
      style={{ minHeight: 'calc(100vh - var(--header-height))' }}
    >
      <img
        src="/images/Grant-Headshot.jpg"
        alt="Grant-Headshot"
        style={{ maxHeight: 'calc(100vh - var(--header-height))' }}
      />
      <div className="bg-main w-full flex flex-col gap-container text-light p-container">
        <div className="">
          <h1>Grant Conklin</h1>
          <ul>
            <li>
              <h3>-Full Stack Web Developer</h3>
            </li>
            <li>
              <h3>-Computer Science Student At Oregon State University</h3>
            </li>
            <li>
              <h3>-IT Professional</h3>
            </li>
          </ul>
        </div>
        <About />
        <CurrentProject />
      </div>
    </header>
  )
}

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        I am a student at Oregon State University studying computer science. I
        expect to graduate in June of 2026 with a Bachelors degree in Computer
        Science with a focus in web and mobile application development. I am
        passionate about learning new things and creating new projects.
      </p>

      <LinkButton route="/about-me">
        <h3>More About Me</h3>
      </LinkButton>
    </div>
  )
}

function CurrentProject() {
  return (
    <div>
      <h2>My Current Focus</h2>
      <p>
        I have been working on a web app I'm calling Ez Budget. While at
        university I've had to learn better budgeting techniques using Excel
        which has been a little clunky to use from my mobile device.
      </p>
      <LinkButton route="/projects/ez-budget">
        <h3>Projects</h3>
      </LinkButton>
    </div>
  )
}
