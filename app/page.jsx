import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='md:flex md:justify-center md:mt-[70px]'>
      <div className='md:w-8/12 md:h-full md:flex'>
        <div className='md:w-3/5'>
          <div className='md:grid md:grid-rows-3 md:grid-flow-row md:h-full md:pt-10'>

            <div className='md:row-span-1'>
              <h2 className='md:font-semibold md:text-[44px] md:leading-[50px] text-grey'>Hi! I'm David Reguart,<br />your Front End Developer</h2>
            </div>

            <div className='md:row-span-1'>
              <p className=' md:text-2xl text-grey'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat .</p>
            </div>

            <div className='md:row-span-1'>
              <Link href='/contact' className='relative inline-block text-lg group'>
                <span className='relative z-10 block px-14 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
                  <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50' />
                  <span className='absolute left-0 w-96 h-96 -ml-2 -mt-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange group-hover:-rotate-180 ease rounded-3xl' />
                  <span className='relative'>Let's connect</span>
                </span>
                <span className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0' data-rounded='rounded-lg' />
              </Link>
            </div>
          </div>
        </div>
        <div className='md:w-2/5 md:flex md:justify-end'>
          <Image className='md:-mt-8 md:-mr-4 md:hover:scale-110 duration-200 transition-all ease-in-out' width={500} height={500} alt='David avatar' src='/../public/img/david_avatar.png' />
        </div>
      </div>
    </div>
  )
}
