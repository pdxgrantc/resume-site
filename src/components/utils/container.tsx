export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-container text-left rounded-img bg-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {children}
    </div>
  )
}

interface ChildPropsSection {
  children?: React.ReactNode | null
  title?: string | null
  scrollRef?: React.RefObject<HTMLDivElement | null>
  className?: string
}

export function Section({
  children,
  title,
  className,
  scrollRef,
}: ChildPropsSection) {
  return (
    <div className={`px-page py-container ${className ?? ''}`} ref={scrollRef}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
