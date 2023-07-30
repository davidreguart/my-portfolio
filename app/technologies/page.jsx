import React from 'react'
import SkillButton from '../components/SkillButton'

function Technologies() {
  return (
    <div className='md:flex md:justify-center md:mt-[70px]'>
      <div className='md:w-8/12 md:h-[450px] md:gap-16 text-darkPurple'>

        <div className='md:flex md:justify-around md:gap-16'>
          <SkillButton icon='/html_logo.png' />
          <SkillButton icon='/css_logo.png' />
          <SkillButton icon='/js_logo.png' />
          <SkillButton icon='/react_logo.png' />
          <SkillButton icon='/figma_logo.png' />
        </div>

        <div className='md:flex md:justify-around md:px-10 md:gap-16 md:mt-16'>
          <SkillButton icon='/bootstrap_logo.png' />
          <SkillButton icon='/tailwind_logo.png' />
          <SkillButton icon='/mongo_logo.png' />
          <SkillButton icon='/node_logo.png' />
        </div>

      </div>
    </div>
  )
}

export default Technologies
