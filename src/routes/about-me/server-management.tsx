import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-me/server-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about-me/server-management"!</div>
}
