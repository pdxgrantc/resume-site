import { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <div 
      className={`text-center flex flex-col ${className}`} 
      style={{ minHeight: "calc(100vh - 72px)" }}
    >
      {children}
    </div>
  )
}
