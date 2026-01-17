import { PageWrapper } from '@/components/PageWrapper'
import { OutsideLink } from '@/components/utils/buttons'
import { Container } from '@/components/utils/container'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/courses_/intro-to-computer-graphics')({
  component: RouteComponent,
})

type project = {
  title: string
  description: string
  link: string
}

function RouteComponent() {
  return (
    <PageWrapper>
      <Container>
        <title>CS 450 - Intro to Computer Graphics</title>
        <h1>Intro to Computer Graphics</h1>
        <p>
          This course was an introduction to the world of 3d graphics and 3d
          rendering techniques within OpenGL. The course covered the basic
          graphics pipeline up to basic vertex and fragment shader
          implementation.
        </p>
        <p>
          These projects were written while enrolled in CS 450 at Oregon State
          University.
        </p>
      </Container>
      <div className="flex flex-col gap-container">
        <Project projectData={ProjectData[0]} />
        <Project projectData={ProjectData[1]} />
        <Project projectData={ProjectData[2]} />
        <Project projectData={ProjectData[3]} />
        <Project projectData={ProjectData[4]} />
        <Project projectData={ProjectData[5]} />
        <Project projectData={ProjectData[6]} />
      </div>
    </PageWrapper>
  )
}

function Project({ projectData }: { projectData: project }) {
  return (
    <Container>
      <div className="flex flex-col text-left">
        <h2>{projectData.title}</h2>
        <h3>{projectData.description}</h3>
        <OutsideLink link={projectData.link}>
          <h3>View On GitHub</h3>
        </OutsideLink>
      </div>
    </Container>
  )
}

const ProjectData = [
  {
    title: 'Draw Something Cool in 3D!',
    description:
      'Create your own fun 3D scene using OpenGL with at least 100 vertices, 3D thickness, and at least 5 colors. Demonstrates basic 3D object drawing and OpenGL manipulation.',
    link: 'https://github.com/pdxgrantc/CS450-P1/',
  },
  {
    title: 'Using Transformations to Animate a Carousel Horse!',
    description:
      'Build and animate a carousel horse using compounded transformations. Includes drawing a horse, animating along a circular path, adding rocking motion, and switching between two views.',
    link: 'https://github.com/pdxgrantc/CS450-P2/',
  },
  {
    title: 'Lighting',
    description:
      'Create a 3D scene showing dynamic OpenGL lighting with a floor, walls, multiple objects including OBJ models, and animation of a point or spot light with color toggles.',
    link: 'https://github.com/pdxgrantc/CS450-P3/',
  },
  {
    title: 'Keytime Animation',
    description:
      "Perform keytime animation of two 3D objects using smooth interpolation. Animate at least nine quantities (eye, look-at, up-vector, and objects' transforms) over 10 seconds.",
    link: 'https://github.com/pdxgrantc/CS450-P4/',
  },
  {
    title: 'Texture Mapping',
    description:
      'Display several textured objects (OsuSphere, OsuCube, OsuCylinder, OsuCone, OsuTorus, and an OBJ object) using BMP textures in OpenGL, toggle textures on/off and animate light source.',
    link: 'https://github.com/pdxgrantc/CS450-P5/',
  },
  {
    title: 'Shaders, I',
    description:
      'Write a GLSL vertex and fragment shader to create a ‘pig-in-the-python’ effect on a snake OBJ model with per-fragment lighting, showing animated bulge effects.',
    link: 'https://github.com/pdxgrantc/CS450-P6/',
  },
  {
    title: 'Shaders, II',
    description:
      'Use a GLSL fragment shader to display silhouette edges and per-fragment lighting on a 3D object. Must toggle surface and silhouette display and adjust silhouette tolerance.',
    link: 'https://github.com/pdxgrantc/CS450-P7/',
  },
]
