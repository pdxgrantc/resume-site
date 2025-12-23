import { createFileRoute } from '@tanstack/react-router'
import { PageWrapper } from '@/components/PageWrapper'

export const Route = createFileRoute('/about-me_/server-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageWrapper>
      <p>Hello "/about-me/server-management"!</p>
    </PageWrapper>
  )
}
