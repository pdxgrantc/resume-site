import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-me/about-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bio/about-me"!</div>
}
