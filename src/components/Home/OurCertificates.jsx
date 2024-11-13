import React from 'react'
import DivOrigami from '../shared/DivOrigami'

const OurCertificates = () => {
  return (
    <div className='page w-full flex items-center justify-center z-[11]'>
      <div className="certificate-container flex max-sm:flex-col items-center w-4/5 max-sm:w-[90%] rounded-lg bg-gray-100 p-2 mt-6 border shadow-lg">
        <div className="content flex flex-col justify-center items-center w-1/2 max-sm:w-full">
            <p className='heading text-4xl max-lg:text-2xl '>Our Certificates</p>
            <p className='text-gray-400 text-xl max-sm:text-sm text-center'>Best Digital Marketing Company.</p>
        </div>
        <div className="cards flex items-center justify-center gap-2 w-1/2 max-sm:w-full">
            <DivOrigami />
        </div>
      </div>
    </div>
  )
}

export default OurCertificates
