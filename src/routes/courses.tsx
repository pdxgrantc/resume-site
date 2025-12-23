import { Outlet, createFileRoute, Link } from '@tanstack/react-router'
import { PageWrapper } from '../components/PageWrapper'

export const Route = createFileRoute('/courses')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageWrapper>
      <div>Notable Courses</div>
      {CourseData.map((data) => (
        <Course key={data.title} data={data} />
      ))}
      <Outlet />
    </PageWrapper>
  )
}

type course = {
  title: string
  number: string
  link: string
}

function Course({ data }: { data: course }) {
  const relativeLink = '/courses/' + data.link
  return (
    <Link to={relativeLink}>
      <h2>{data.title}</h2>
      <h2>{data.number}</h2>
    </Link>
  )
}

const CourseData: course[] = [
  {
    title: 'Intro to Computer Graphics',
    number: 'CS 450',
    link: 'intro-to-computer-graphics',
  },
  {
    title: 'Web Application Dev',
    number: 'CS 493',
    link: '',
  },
]
