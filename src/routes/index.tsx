import { createFileRoute } from '@tanstack/react-router'
import PageWrapper from '../components/PageWrapper'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <PageWrapper>
      <header className="flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)] flex-1">
        <div className="flex flex-row flex-nowrap" >
          <img
            src="/images/Grant-Headshot.jpg"
            alt="Grant-Headshot"
            className="h-100 rounded-img"
          />
          <div>
            <h1>Grant Conklin</h1>
            <h2>-Full Stack Web Developer</h2>
            <h2>-Computer Science Student At Oregon State University</h2>
          </div>
        </div>
      </header>
    </PageWrapper>
  )
}
