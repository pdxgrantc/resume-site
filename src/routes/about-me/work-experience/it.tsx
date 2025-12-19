import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-me/work-experience/it')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about-me/work-experience/it"!</div>
}
