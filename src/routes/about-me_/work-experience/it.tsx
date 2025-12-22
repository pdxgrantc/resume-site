import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-me_/work-experience/it')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>IT work experience</div>
}
