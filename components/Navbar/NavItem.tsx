import React from 'react'
import Link from 'next/link'

type NavItemProps = {
  index: string
  title: string
  destination: string
}

function NavItem({ index, title, destination }: NavItemProps) {
  return (
    <li className="">
      <Link href={destination} className="">
        <>
          <span className="mr-1 font-rounded font-bold" aria-hidden="true">
            {index}
          </span>
          {title}
        </>
      </Link>
    </li>
  )
}

export default NavItem
