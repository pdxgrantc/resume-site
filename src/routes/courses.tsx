import { Outlet, createFileRoute, Link } from '@tanstack/react-router'
import { PageWrapper } from '../components/PageWrapper'
import { Container } from '@/components/utils/container'

export const Route = createFileRoute('/courses')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageWrapper>
      <h1>Notable Courses</h1>
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
      <Container>
        <h2>{data.title}</h2>
        <h2>{data.number}</h2>
      </Container>
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
