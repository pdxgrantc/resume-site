import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects_/ez-budget')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/EzBudget"!</div>
}
