import React from 'react'
import Link from 'next/link'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About me',
  route: '/about'
}, {
  label: 'Technologies',
  route: '/technologies'
}, {
  label: 'Projects',
  route: '/projects'
}, {
  label: 'Contact',
  route: '/contact'
}]

export default function Navbar() {
  return (
    <div className='md:w-full flex justify-center md:mt-20'>
      <nav className='md:bg-white md:w-8/12 md:h-20 md:flex md:justify-between md:rounded-xl md:px-12 md:shadow-xl'>
        <h1 className='md:w-2/4 md:flex md:items-center md:font-semibold md:text-2xl'>Web Developer Portfolio</h1>
        <ul className='md:w-3/4 md:flex md:justify-around md:items-center md:font-light md:text-base'>
          {links.map(({ label, route }) => (
            <li className='md:hover:bg-gradient-to-r from-yellow from-1% to-green to-40% md:hover:text-white md:rounded-xl md:px-4 md:h-full md:py-[30px] md:hover:skew-y-12 md:hover:scale-110 md:hover:shadow-xl duration-200 transition-all ease-in-out md:hover:font-medium' key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
