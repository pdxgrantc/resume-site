import { PageWrapper } from '@/components/PageWrapper'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/courses_/CS493')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PageWrapper>Hello "/courses/CS493"!</PageWrapper>
}
