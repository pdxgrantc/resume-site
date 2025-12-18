import { createFileRoute } from '@tanstack/react-router'
import type {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from 'react'

export const Route = createFileRoute('/projects/graphics')({
  component: RouteComponent,
})

type project = {
  title: string
  description: string
}

/* TODO put each project into a dropdown */
function RouteComponent() {
  return (
    <>
      <div>Hello "/projects/graphics"!</div>
      <title>OpenGL Projects</title>
      <h1>Graphics Based Projects</h1>
      <p>
        These projects were written while enrolled in CS 450 at Oregon State
        University. This class was an introduction to 3d computer graphics using
        OpenGL. The course covered the basic graphics pipeline up to basic
        vertex and fragmentation shader implementation.
      </p>
      <div>
        <p>test</p>
        <Project projectData={ProjectData[0]} />
        <Project projectData={ProjectData[1]} />
        <Project projectData={ProjectData[2]} />
        <Project projectData={ProjectData[3]} />
        <Project projectData={ProjectData[4]} />
      </div>
    </>
  )
}

function Project({ projectData }: { projectData: project }) {
  console.log(projectData)
  return (
    <>
      <h2>{projectData.title}</h2>
      <h2>{projectData.description}</h2>
    </>
  )
}

const ProjectData = [
  {
    title: 'Project1',
    description:
      'Project 1 description with lots and lots and lots of text. okay i lied its not that much text lol haha.',
  },
  {
    title: 'Project2',
    description:
      'Project 2 description with lots and lots and lots of text. okay i lied its not that much text lol haha.',
  },
  {
    title: 'Project3',
    description:
      'Project 1 description with lots and lots and lots of text. okay i lied its not that much text lol haha.',
  },
  { title: 'Project4' },
  { title: 'Project5' },
]
