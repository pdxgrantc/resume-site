import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-me_/server-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <p>Hello "/about-me/server-management"!</p>
    </div>
  )
}
