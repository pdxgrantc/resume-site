export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-container text-left rounded-img bg-container mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {children}
    </div>
  )
}