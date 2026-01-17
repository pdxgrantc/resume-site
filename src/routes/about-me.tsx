import { Outlet, createFileRoute } from '@tanstack/react-router'
import { PageWrapper } from '../components/PageWrapper'

export const Route = createFileRoute('/about-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageWrapper>
      <div className="">
        <div className="prose">
          <h1>About Me</h1>
          <p>
            I’m a computer science student at Oregon State University, focusing
            on web and mobile application development. My academic interests
            revolve around building full-stack applications that are practical,
            scalable, and user-focused, with particular attention to modern
            JavaScript frameworks, backend APIs, and cloud-based deployment.
            Through my coursework, I’ve developed a strong foundation in
            software design, problem solving, and working with evolving
            technologies, with the goal of creating applications that are both
            technically sound and intuitive to use.
          </p>
          <p>
            In addition to my studies, I have worked in campus IT support for
            the past three and a half years. This role has given me extensive
            hands-on experience troubleshooting hardware and software issues,
            supporting a diverse range of users, and communicating technical
            concepts in a clear and approachable way. Working in this
            environment has strengthened my ability to think critically under
            pressure, adapt to new systems quickly, and bridge the gap between
            technical solutions and real user needs.
          </p>
          <p>
            Outside of academics and work, I enjoy spending time outdoors and
            working on creative, hands-on projects. I regularly ski, hike, and
            camp, and I have a strong interest in woodworking. My most recent
            major build was a custom coffee table, a project that allowed me to
            combine careful planning, problem solving, and attention to
            detail—skills that closely mirror my approach to software
            development. In the technical space, I’ve also been working on my
            personal resume website and reconfiguring my home server environment
            using Proxmox, further expanding my experience with self-hosted
            infrastructure and system administration. Together, these interests
            reflect my passion for building, learning, and continuously
            improving across both digital and physical projects.
          </p>
        </div>
      </div>
      <Outlet />
    </PageWrapper>
  )
}
