import React from 'react'
import { Link } from '@tanstack/react-router'

export function ScrollButton({
  onClick,
  children,
  className = '',
}: {
  onClick: () => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <button onClick={onClick} className={`nav-button ${className}`}>
      {children}
    </button>
  )
}

/* 
--Tailwind Scroll Button CSS
--Now defined in styles.css as .nav-button
    className="
        relative
        bg-transparent
        border-0
        h-fit
        pb-0.75
        box-border
        border-b-[3px] border-transparent
        align-middle
        font-bold
        w-fit flex gap-3 mt-1
        transition-all duration-300 ease-in-out
        hover:text-white hover:mt-0 hover:mb-1 hover:border-white
      "
      */

export function LinkButton({
  children,
  route,
}: {
  children: React.ReactNode
  route: string
}) {
  return (
    <Link
      to={route}
      type="button"
      className="
        relative
        bg-transparent
        border-0
        h-fit
        pb-0.75
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
      className="
        nav-button
      "
    >
      {children}
    </a>
  )
}

export const IconLink = ({
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
      className="
        flex size-12
        items-center justify-center
        rounded-fu
        transition-all
        duration-300
        ease-in-out
        hover:-translate-y-1
        hover:scale-110
        hover:bg-white
        hover:text-black
      "
    >
      <span
        className="
          flex size-7
          items-center justify-center
          transition-colors
          duration-300
          [&>svg]:h-full
          [&>svg]:w-full
          [&>svg]:fill-current
        "
      >
        {children}
      </span>
    </a>
  )
}

/* Old class
className="
        relative
        bg-transparent
        border-0
        h-fit
        pb-0.75
        box-border
        border-b-[3px] border-transparent
        align-middle
        font-bold
        w-fit flex gap-3 mt-1
        transition-all duration-300 ease-in-out
        hover:text-gray-300 hover:mt-0 hover:mb-1 hover:border-white
      "

    */
