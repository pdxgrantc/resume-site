import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-me/personal-projects/server-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/personal-projects/server-management"!</div>
}
