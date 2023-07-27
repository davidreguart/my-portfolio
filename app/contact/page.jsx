'use client'
import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    email: 'reguartdavid@gmail.com',
    subject: '',
    body: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleContactClick = () => {
    const { email, subject, body } = formData

    // Generamos el enlace con los datos del formulario
    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Abrimos el gestor de correo electrónico
    window.location.href = mailToLink
  }

  return (
    <div className='md:flex md:justify-center md:mt-[50px]'>
      <div className='bg-gradient-to-r from-yellow from-1% to-green to-80% md:w-6/12 md:h-[450px] rounded-2xl md:p-4 md:pt-8 shadow-2xl text-lightPurple'>
        <div className='md:mx-auto md:w-4/5'>
          <h1 className='md:font-bold md:text-4xl md:text-center md:mb-8'>Get in touch!</h1>
          <div className='md:mb-4 md:flex md:justify-center'>
            <label htmlFor='subject' />
            <input
              placeholder='Subject'
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleInputChange}
              className='w-11/12 rounded-md p-4 focus:outline-none bg-white bg-opacity-50 shadow-lg'
              autoComplete='off'
            />
          </div>

          <div className='md:mb-4 md:flex md:justify-center items-start'>
            <label htmlFor='body' />
            <textarea
              placeholder='How can I help you?'
              id='body'
              name='body'
              value={formData.body}
              onChange={handleInputChange}
              className='md:h-40 md:w-11/12 md:rounded-md md:p-4 focus:outline-none bg-white bg-opacity-50 shadow-lg resize-none'
              autoComplete='off'
            />
          </div>

          <div className='md:flex md:justify-center md:mt-8'>

            <button onClick={handleContactClick} className='relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-lightPurple transition duration-300 ease-out border-2 border-lightPurple rounded-2xl shadow-lg group'>
              <span className='absolute inset-0 flex items-center justify-center w-full h-full text-lightPurple duration-300 -translate-x-full bg-white bg-opacity-30 group-hover:translate-x-0 ease-in-out'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 5-7-5' />
                </svg>

              </span>
              <span className='absolute flex items-center justify-center w-full h-full text-lightPurple transition-all duration-300 transform group-hover:translate-x-full ease'>Contact me</span>
              <span className='relative invisible'>Contact me</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
