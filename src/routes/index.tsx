import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <div className="flex flex-row flex-nowrap">
          <img src="/images/Grant-Headshot.jpg" alt="Grant-Headshot" className='h-130 rounded-img'/>
          <h1>Welcome to My Resume Site</h1>
        </div>
      </header>
    </div>
  )
}
