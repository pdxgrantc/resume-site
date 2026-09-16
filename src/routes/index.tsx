import { useRef } from 'react'

import { createFileRoute } from '@tanstack/react-router'
import { ScrollButton, OutsideLink } from '@/components/utils/buttons'
import { Section } from '@/components/utils/container'

// icons
import { SiGithub as GitHubLogo } from 'react-icons/si'
import { FaLinkedinIn as LinkedLogo } from 'react-icons/fa'
import { IoIosMail as MailLogo } from 'react-icons/io'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return <NewHomePage />
  //return <OldHomePage />
}

function NewHomePage() {
  const bioRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    if (bioRef.current)
      bioRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  return (
    <>
      <div className="max-h-full max-w-screen m-auto flex flex-col flex-nowrap">
        <DesktopLanding handleScrollFunction={handleScroll}></DesktopLanding>
        <Bio ref={bioRef}></Bio>
        <Section title={'Education'} background="f0f7ff">
          <p>Testing the section background</p>
        </Section>
        <Section title={'Experience'}>
          <p>Testing the section background</p>
        </Section>
        <Section title={'Projects'} background="f0f7ff">
          <p>Testing the section background</p>
        </Section>
      </div>
    </>
  )
}

interface ChildPropsDesktopLanding {
  handleScrollFunction: () => void
}

function DesktopLanding({ handleScrollFunction }: ChildPropsDesktopLanding) {
  return (
    <div className="px-page min-h-screen w-full bg-[url('/images/LandingPage.jpg')] bg-cover bg-center ">
      <div className="text-white">
        <h1>Hello, I'm Grant</h1>
        <h2>IT Technician, Developer, Student</h2>
        <ScrollButton onClick={handleScrollFunction}>Learn More</ScrollButton>
      </div>
    </div>
  )
}

interface ChildPropsBio {
  ref: React.RefObject<HTMLDivElement | null>
}

function Bio({ ref }: ChildPropsBio) {
  return (
    <Section scrollRef={ref}>
      <div ref={ref} className="min-h-100 bg-white flex flex-row">
        <div className="flex flex-col">
          <p>Name: Grant Conklin</p>
          <p>School: Oregon State University</p>
          <p>Hometown: Portland, OR</p>
          <div className="flex">
            <OutsideLink link="https://www.github.com/pdxgrantc">
              <GitHubLogo className="h-12 w-auto py-2 mx--auto text-button hover:text-button_hover" />
            </OutsideLink>
            <OutsideLink link="mailto:pdxgrantc@gmail.com">
              <MailLogo className="h-12 py-0 w-auto text-button hover:text-button_hover" />
            </OutsideLink>
            <OutsideLink link="https://www.linkedin.com/in/pdxgrantc">
              <LinkedLogo className="h-11 w-auto text-button hover:text-button_hover" />
            </OutsideLink>
          </div>
        </div>
        <div>
          <div>
            <button className="nav-button">Download Resume</button>
          </div>
        </div>
      </div>
    </Section>
  )
}

/*
function OldHomePage() {
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
*/
