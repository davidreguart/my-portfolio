export default function About() {
  const commonBoldClassName = 'font-semibold'

  return (
    <div className='md:flex md:justify-center md:mt-[70px]'>
      <div className='md:w-8/12 md:h-[450px] md:grid md:grid-cols-2 md:gap-16 text-darkPurple'>
        {/* Column 1 content */}
        <div className='md:p-4'>
          <h1 className='md:font-bold md:text-4xl'>As a designer <span>{'{'}</span></h1>
          <p className='md:text-lg md:leading-6 md:font-light md:tracking-wide md:my-6'>After finishing my degree in Multimedia and Digital Arts I have achieved <span className={commonBoldClassName}>seniority as a Multimedia Designer</span> with +6 years of experience in the sector. Thanks to this I have gained a great professionalism with the <span className={commonBoldClassName}>Adobe Suite</span> as well as <span className={commonBoldClassName}>Figma,</span> essential tools to develop advanced skills as a <span className={commonBoldClassName}>UX/UI Designer.</span></p>
          <span className='md:font-bold md:text-4xl'>{'}'}</span>
        </div>

        {/* Column 2 content */}
        <div className='md:p-4 md:pt-24'>
          <h1 className='md:font-bold md:text-4xl'>As a developer <span>{'{'}</span></h1>
          <p className='md:text-lg md:leading-6 md:font-light md:tracking-wide md:my-6'>Before starting my degree in Multimedia and Digital Arts I took <span className={commonBoldClassName}>2 years of Computer Engineering.</span> During the 4th year of my Multimedia and Digital Arts degree I was <span className={commonBoldClassName}>certified with double honours</span> in Programming and Development and this made me decide to study the <span className={commonBoldClassName}>IronHack Web Development bootcamp.</span></p>
          <span className='md:font-bold md:text-4xl'>{'}'}</span>
        </div>
      </div>
    </div>
  )
}
