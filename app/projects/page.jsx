import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Projects() {
  return (
    <div className='md:flex md:justify-center md:mt-[50px]'>
      <div className='md:w-8/12 md:h-[450px] md:flex md:justify-around md:gap-16 text-lightPurple'>

        {/* Project 1 content */}
        <section className='relative bg-gradient-to-r from-yellow from-1% to-green to-80% md:w-96 rounded-2xl md:p-4 md:pt-8 shadow-2xl'>
          <div className='md:w-11/12 md:h-2/3 md:mx-auto rounded-2xl shadow-2xl'>
            <Image className='object-cover w-full h-full object-top rounded-2xl' width={500} height={500} alt='Project1 thumbnail' src='/project2_thumbnail.png' />
          </div>
          <footer className='md:w-10/12 md:mx-auto md:mt-4'>
            <h2 className='md:font-bold md:text-3xl md:mb-2'>GeniusHome</h2>
            <p className='text-lg tracking-normal text-justify leading-tight'>Design and frontend/backend development of this home organisation software.</p>
          </footer>
          {/* Hover Project 1 */}
          <div className='absolute inset-0 bg-lightPurple opacity-0 hover:opacity-90 rounded-2xl transition-all ease-in-out duration-300'>
            <div className='w-full h-1/2 pt-14'>
              <Link href='https://github.com/davidypaloma/GeniusHome'>
                <Image className='w-16 mb-8 shadow-xl mx-auto' width={100} height={100} alt='Github icon' src='/github_icon.png' />
                <p className='bg-white w-9/12 px-4 py-1 text-center mx-auto rounded-lg shadow-xl'><span>{'{'}</span> Visit this project at GitHub <span>{'}'}</span></p>
              </Link>
            </div>
            <div className='w-full h-1/2 pt-10'>
              <Link href='https://genius-home.fly.dev/'>
                <Image className='w-16 mb-8 shadow-xl mx-auto' width={100} height={100} alt='Github icon' src='/link_icon.png' />
                <p className='bg-white w-9/12 px-4 py-1 text-center mx-auto rounded-lg shadow-xl'><span>{'{'}</span> Visit the complet web Project <span>{'}'}</span></p>
              </Link>
            </div>
          </div>
        </section>

        {/* Project 2 content */}
        <section className='relative bg-gradient-to-r from-yellow from-1% to-green to-80% md:w-96 rounded-2xl md:p-4 md:pt-8 shadow-2xl'>
          <div className='md:w-11/12 md:h-2/3 md:mx-auto rounded-2xl shadow-2xl'>
            <Image className='object-cover w-full h-full object-top rounded-2xl' width={500} height={500} alt='Project2 thumbnail' src='/project1_thumbnail.png' />
          </div>
          <footer className='md:w-10/12 md:mx-auto md:mt-4'>
            <h2 className='md:font-bold md:text-3xl md:mb-2'>Adopt Me!</h2>
            <p className='text-lg tracking-normal text-justify leading-tight'>Design and frontend/backend development of this mobile app for pet adoption.</p>
          </footer>
          {/* Hover Project 2 */}
          <div className='absolute inset-0 bg-lightPurple opacity-0 hover:opacity-90 rounded-2xl transition-all ease-in-out duration-300'>
            <div className='w-full h-1/2 pt-14'>
              <Link href='https://github.com/davidypaloma/adopt-me-app'>
                <Image className='w-16 mb-8 shadow-xl mx-auto' width={100} height={100} alt='Github icon' src='/github_icon.png' />
                <p className='bg-white w-9/12 px-4 py-1 text-center mx-auto rounded-lg shadow-xl'><span>{'{'}</span> Visit this project at GitHub <span>{'}'}</span></p>
              </Link>
            </div>
            <div className='w-full h-1/2 pt-6'>
              <Link href='https://adopt-me-app.fly.dev/'>
                <Image className='w-16 mb-8 shadow-xl mx-auto' width={100} height={100} alt='Github icon' src='/img/link_icon.png' />
                <p className='bg-white w-9/12 px-4 py-1 text-center mx-auto rounded-lg shadow-xl'><span>{'{'}</span> Visit the complet web Project <span>{'}'}</span></p>
                <p className='text-white text-center font-thin text-sm mt-2'><span className='font-normal'>Important!</span><br />Activate the mobile view to display this app correctly</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects
