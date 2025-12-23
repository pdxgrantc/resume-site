import { Outlet, createFileRoute } from '@tanstack/react-router'
import { PageWrapper } from '../components/PageWrapper'

export const Route = createFileRoute('/about-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageWrapper className="bg-black">
      <h1>About Me</h1>
      <Outlet />
    </PageWrapper>
  )
}
