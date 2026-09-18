import { useRef } from 'react'

import { createFileRoute } from '@tanstack/react-router'
import { ScrollButton, IconLink } from '@/components/utils/buttons'
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
    <div className="max-h-full max-w-screen m-auto flex flex-col flex-nowrap text-xl font-medium">
      <DesktopLanding handleScrollFunction={handleScroll}></DesktopLanding>
      <Section scrollRef={bioRef}>
        <Bio></Bio>
      </Section>
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
  )
}

interface ChildPropsDesktopLanding {
  handleScrollFunction: () => void
}

function DesktopLanding({ handleScrollFunction }: ChildPropsDesktopLanding) {
  return (
    <div className="px-page min-h-screen w-full bg-[url('/images/LandingPage.jpg')] bg-cover bg-center flex items-center justify-end">
      <div className="flex flex-col gap-7 text-white text-right pr-[8%] pb-[15%]">
        <div>
          <h1 className="text-6xl font-extrabold">Hello, I'm Grant</h1>
          <h2 className="text-2xl font-bold">
            IT Technician, Developer, Student
          </h2>
        </div>
        <ScrollButton className="ml-auto" onClick={handleScrollFunction}>
          <h3 className="text-2xl">Learn More</h3>
        </ScrollButton>
      </div>
    </div>
  )
}

function Bio() {
  function calculateAge(): string {
    const date = new Date(2001, 8, 15) // Month is 0-indexed, so 8 = September
    const today = new Date()

    let years = today.getFullYear() - date.getFullYear()

    if (
      today.getMonth() < date.getMonth() ||
      (today.getMonth() === date.getMonth() && today.getDate() < date.getDate())
    ) {
      years--
    }

    return years.toString()
  }

  return (
    <div className="flex flex-row gap-15 h-fit">
      <div className="flex flex-col place-content-between min-w-fit min-h-50 max-h-68.75">
        <BioItem data1={'Name'} data2={'Grant Conklin'}></BioItem>
        <BioItem data1={'School'} data2={'Oregon State University'}></BioItem>
        <BioItem data1={'Age'} data2={calculateAge()}></BioItem>
        <BioItem data1={'Hometown'} data2={'Portland, OR'}></BioItem>
        <div className="flex gap-3">
          <IconLink link="https://www.github.com/pdxgrantc">
            <GitHubLogo className="h-12 w-auto mx-auto text-button hover:text-button_hover" />
          </IconLink>
          <IconLink link="mailto:pdxgrantc@gmail.com">
            <MailLogo className="h-12 w-auto text-button hover:text-button_hover" />
          </IconLink>
          <IconLink link="https://www.linkedin.com/in/pdxgrantc">
            <LinkedLogo className="h-11 w-auto text-button hover:text-button_hover" />
          </IconLink>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p>
            I am a student at Oregon State University studying computer science.
            I expect to graduate in December of 2026 with a Bachelors degree in
            Computer Science with a focus in web and mobile application
            development. I am passionate about learning new things and creating
            new projects.
          </p>
          <p>
            Outside of school, I enjoy spending time outdoors and working on
            hands-on projects. You can find me going skiing, hiking, and camping
            and camping in the areas surrounding Corvallis. Recently I’ve taken
            up a big interest in woodworking. My most recent build was a custom
            coffee table for my apartment.
          </p>
        </div>
        <button className="w-fit outline-1 px-10 py-3 transition-all duration-300 ease-in-out hover:bg-gray-100">
          Download Resume
        </button>
      </div>
    </div>
  )
}

interface ChildPropsBioItem {
  data1: string
  data2: string
}

function BioItem({ data1, data2 }: ChildPropsBioItem) {
  return (
    <div className="flex text-nowrap gap-2 pb-2 border-b">
      <p className="font-extrabold">{data1}:</p>
      <p>{data2}</p>
    </div>
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
