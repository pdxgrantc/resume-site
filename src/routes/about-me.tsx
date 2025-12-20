import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Outlet />
      <div>Hello "/bio/about-me"!</div>
    </>
  )
}
