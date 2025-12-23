import { createFileRoute } from '@tanstack/react-router'
import { PageWrapper } from '@/components/PageWrapper'

export const Route = createFileRoute('/courses_/capstone')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PageWrapper>Hello "/courses/capstone"!</PageWrapper>
}
