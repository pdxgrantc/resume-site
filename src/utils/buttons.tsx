import React from 'react'
import { Link } from '@tanstack/react-router'

function LinkButton(to: string, text: string) {
  return (
    <Link to={to} className="button">
      {text}
    </Link>
  )
}
