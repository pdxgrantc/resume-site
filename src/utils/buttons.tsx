import React from 'react'
import { Link } from '@tanstack/react-router'

export function LinkButton(  { children, route }: { children: React.ReactNode, route: string }) {
  return (
    <Link
      to={route}
      type="button"
      className="
        relative
        bg-transparent
        border-0
        h-fit
        pb-[3px]
        box-border
        border-b-[3px] border-transparent
        align-middle
        font-bold

        w-fit flex gap-3 mt-1
        transition-all duration-300 ease-in-out
        hover:text-white hover:mt-0 hover:mb-1 hover:border-white
      "
    >
      {children}
    </Link>
  )
}
  
export const OutsideLink = ({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="buttons center w-fit flex gap-3 mt-1 hover:text-white hover:mt-0 hover:mb-1 font-semibold transition-all durration-300 ease-in-out"
    >
      {children}
    </a>
  )
}
