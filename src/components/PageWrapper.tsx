import { type ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div
      className="max-h-full py-10 bg-[#282c34] text-white text-[calc(10px+2vmin)] max-w-screen m-auto  text-center flex flex-col items-center justify-center"
      style={{ minHeight: 'calc(100vh - var(--header-height))' }}
    >
      {children}
    </div>
  )
}
