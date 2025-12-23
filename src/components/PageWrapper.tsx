import { type ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div
      className="px-page max-h-full py-page-break bg-main text-white text-[calc(10px+2vmin)] max-w-screen m-auto text-center flex flex-col items-center justify-center gap-page-break"
      style={{ minHeight: 'calc(100vh - var(--header-height))' }}
    >
      {children}
    </div>
  )
}
