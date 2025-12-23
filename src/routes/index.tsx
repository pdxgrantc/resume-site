import { createFileRoute } from '@tanstack/react-router'
import { PageWrapper } from '@/components/PageWrapper'
import { LinkButton } from '@/components/utils/buttons'
import { Container } from '@/components/utils/container'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <header
      className="flex-1 max-h-full max-w-screen m-auto flex flex-row flex-nowrap gap-container"
      style={{ minHeight: 'calc(100vh - var(--header-height))' }}
    >
      <img
        src="/images/Grant-Headshot.jpg"
        alt="Grant-Headshot"
        style={{ maxHeight: 'calc(100vh - var(--header-height))' }}
      />
      <div className='bg-main w-full text-light'>
        <h1>Grant Conklin</h1>
        <h2>-Full Stack Web Developer</h2>
        <h2>-Computer Science Student At Oregon State University</h2>
        <LinkButton route="/about-me">
          <h2>More About Me</h2>
        </LinkButton>
      </div>
    </header>
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
