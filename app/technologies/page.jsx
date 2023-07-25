import React from 'react'
import SkillButton from '../components/SkillButton'

function Technologies() {
  return (
    <div className='md:flex md:justify-center md:mt-[70px]'>
      <div className='md:w-8/12 md:h-[450px] md:gap-16 text-darkPurple'>

        <div className='md:flex md:gap-16'>
          <SkillButton icon='/../public/img/html_logo.png' />
          <SkillButton icon='/../public/img/css_logo.png' />
          <SkillButton icon='/../public/img/js_logo.png' />
          <SkillButton icon='/../public/img/react_logo.png' />
          <SkillButton icon='/../public/img/figma_logo.png' />
        </div>

        <div className='md:flex md:justify-around md:px-10 md:gap-16 md:mt-16'>
          <SkillButton icon='/../public/img/bootstrap_logo.png' />
          <SkillButton icon='/../public/img/tailwind_logo.png' />
          <SkillButton icon='/../public/img/mongo_logo.png' />
          <SkillButton icon='/../public/img/node_logo.png' />
        </div>

      </div>
    </div>
  )
}

export default Technologies
