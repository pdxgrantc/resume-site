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
  background?: string
}

export function Section({
  children,
  title,
  className,
  scrollRef,
  background,
}: ChildPropsSection) {
  return (
    <div
      className={`px-page py-container flex flex-col gap-10 ${className ?? ''}`}
      style={{
        backgroundColor: `#${background ?? 'ffffff'}`,
      }}
      ref={scrollRef}
    >
      {title && <h2 className="font-bold text-6xl">{title}</h2>}
      <div>{children}</div>
    </div>
  )
}
