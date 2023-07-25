import Image from 'next/image'
import React from 'react'

function SkillButton({ icon }) {
  return (
    <div className='md:w-40 md:h-40 bg-gradient-to-r from-yellow from-1% to-green to-80% rounded-2xl shadow-lg md:flex md:justify-center md:items-center md:hover:scale-110 md:hover:animate-pulse md:delay-15000 md:transition-all md:ease-in-out md:duration-200'>
      <Image className='md:w-32' width={200} height={200} alt='skill_icon' src={icon} />
    </div>
  )
}

export default SkillButton
