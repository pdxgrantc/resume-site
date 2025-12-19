import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/courses/CS493')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/courses/CS493"!</div>
}
