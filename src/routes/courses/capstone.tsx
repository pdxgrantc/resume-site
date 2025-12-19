import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/courses/capstone')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/courses/capstone"!</div>
}
