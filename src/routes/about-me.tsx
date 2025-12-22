import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h1>About Me</h1>
      <Outlet />
    </>
  )
}
