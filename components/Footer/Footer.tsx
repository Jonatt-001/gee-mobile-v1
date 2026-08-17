import React from 'react'

const Footer = () => {
  return (
    <footer className='footer relative pt-14 break-words'>
      <div className='max-w-[1280px] mx-auto relative z-[2] overflow-hidden'>
        <div className='flex flex-col lg:flex-row py-10 mb-8 gap-10 px-4'>
          <div className='mb-8 px-2 lg:w-1/3'>
            <a href="/" aria-label="Gee Mobile home" className="inline-flex items-center gap-2 text-white">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white text-[#0d1117] font-black">G</span>
              <span className="font-semibold text-xl tracking-tight">Gee Mobile</span>
            </a>
            <div className='text-white'>
              <h2 className='mt-6 font-semibold'>Gee Mobile by GeeFox</h2>
              <p className="text-[14px] text-[#7d8590] mb-6">
                A mobile-first developer workspace for building, inspecting, editing, deploying and maintaining software from your phone.
              </p>
              <a href="/login/index.html" className='inline-flex px-6 py-3 text-[16px] font-semibold border-[0.5px] border-gray-400 rounded-lg hover:bg-white hover:text-[#0d1117] transition'>
                Open Gee Mobile
              </a>
            </div>
          </div>

          <div className='lg:flex w-full justify-between grid md:grid-cols-4 grid-cols-2 gap-8'>
            <div className='text-[#7d8590]'>
              <h2 className='font-medium mb-4 font-mono text-white'>Product</h2>
              <ul className='text-[14px] space-y-4'>
                <li><a href="#productivity">Build anywhere</a></li>
                <li><a href="#collaboration">Stay in control</a></li>
                <li><a href="#security">Secure by design</a></li>
                <li><a href="/login/index.html">Open Gee Mobile</a></li>
              </ul>
            </div>

            <div className='text-[#7d8590]'>
              <h2 className='font-medium mb-4 font-mono text-white'>Developers</h2>
              <ul className='text-[14px] space-y-4'>
                <li><a href="#productivity">Mobile development</a></li>
                <li><a href="#collaboration">Project workflows</a></li>
                <li><a href="#security">Project safeguards</a></li>
                <li><a href="https://geefox.xyz/">GeeFox</a></li>
              </ul>
            </div>

            <div className='text-[#7d8590]'>
              <h2 className='font-medium mb-4 font-mono text-white'>Resources</h2>
              <ul className='text-[14px] space-y-4'>
                <li><a href="#productivity">Features</a></li>
                <li><a href="#collaboration">Workflows</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="/">Product home</a></li>
              </ul>
            </div>

            <div className='text-[#7d8590]'>
              <h2 className='font-medium mb-4 font-mono text-white'>Company</h2>
              <ul className='text-[14px] space-y-4'>
                <li><a href="https://geefox.xyz/">GeeFox</a></li>
                <li><a href="/">Gee Mobile</a></li>
                <li><a href="https://geefox.xyz/">Ecosystem</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#161b22]'>
        <div className='max-w-[1280px] mx-auto text-[12px] md:flex py-6 justify-between items-center px-4'>
          <p className='text-[#7d8590]'>
            Gee Mobile is a GeeFox product. Built for developers who build on the move.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
