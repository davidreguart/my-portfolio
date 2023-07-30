import React from 'react'
import SkillButton from '../components/SkillButton'

function Technologies() {
  return (
    <div className='md:flex md:justify-center md:mt-[70px]'>
      <div className='md:w-8/12 md:h-[450px] md:gap-16 text-darkPurple'>

        <div className='md:flex md:justify-around md:gap-16'>
          <SkillButton icon='/../public/html_logo.png' />
          <SkillButton icon='/../public/css_logo.png' />
          <SkillButton icon='/../public/js_logo.png' />
          <SkillButton icon='/../public/react_logo.png' />
          <SkillButton icon='/../public/figma_logo.png' />
        </div>

        <div className='md:flex md:justify-around md:px-10 md:gap-16 md:mt-16'>
          <SkillButton icon='/../public/bootstrap_logo.png' />
          <SkillButton icon='/../public/tailwind_logo.png' />
          <SkillButton icon='/../public/mongo_logo.png' />
          <SkillButton icon='/../public/node_logo.png' />
        </div>

      </div>
    </div>
  )
}

export default Technologies
