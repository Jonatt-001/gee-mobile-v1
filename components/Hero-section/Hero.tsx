'use client'
import React, { useState } from 'react'

type Props = {}

const Hero = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
  return (
    <div className='relative max-w-[1280px] lg:pt-32 md:px-10 mx-auto pt-16'>
        {/* Placeholder: Update this image source once you have your own drone/hero graphic */}
        <img className='absolute hero-drone top-28 w-1/4 h-auto right-0 xl:right-0' width="500" height="326" src="https://GitHub.GitHubassets.com/images/modules/site/home-campaign/hero-drone.webp" alt="" />
        <div className='flex'>
            <div className='relative '>
                <img aria-hidden="true" className='' src="https://GitHub.GitHubassets.com/images/modules/site/home-campaign/lines-hero.svg" width="437" height="637" alt="" />
                <div className='mx-auto my-3 '>
                    <span className='relative z-[11]'>
                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className=" text-white">
                        <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
                    </svg>
                    <span className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow " style={{ backgroundColor: 'var(--mktg-accent-primary)', filter: 'blur(17px)' }}></span>
                    </span>
                </div>
                <div style={{ background: 'linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)', marginLeft:'11px' }} className= " max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"></div>
            </div>
            <div className= ' absolute pt-32 mt-28 max-md:px-4 ml-4 md:ml-12'>
                <h1 className="md:mt-24 lg:mt-28 sm:mt-10 relative z-2 max-md:mb-5 text-[48px] md:text-[72px] max-sm:leading-[60px] max-md:leading-[80px] lg:text-[80px] font-semibold text-white"> Let&apos;s build from&nbsp;here</h1>
                <p className="relative z-1 text-[24px] md:text-[28px]  lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-5 md:mb-12 md:10/12  lg:w-9/12 text-[#7d8590]">
                Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers&nbsp;love.
                </p>
                <div className='flex lg:w-11/12 md:space-x-5 max-md:flex-col'>
                {/* Updated form action to point to the correct URL */}
                <form action="/login/index.html">
                    <div className=' grid max-md:grid-rows-2 md:grid-cols-2'>
                    <dl>
                        <dd>
                        <input className='h-12 focus:outline-none max-md:rounded-md md:rounded-s-md right-0 w-full placeholder:text-[16px] pl-3' placeholder="Email address" type="email" name="user_email" id="user_email" autoComplete="off" spellCheck="false"/>
                        </dd>
                    </dl>
                    {/* Updated button text and added type="submit" */}
                    <button type="submit" className='mb-10 md:mb-0 py-3 w-full home-campaign-signup-button text-[16px] max-md:rounded-md md:rounded-e-md text-white font-semibold'>
                        Continue with GitHub
                    </button>
                    </div>
                </form>
                <span className="border-t-[1px] md:border-l-[1px] border-neutral-700 md:mx-10 mb-3 md:mb-0"></span>
                {/* Updated href to point to the correct URL */}
                <a onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} href="/login/index.html" className='flex items-center w-full md:w-auto justify-center text-[16px] py-3 px-5 max-md:mt-4 rounded-md border-[#ae88f9] border-[1.5px] text-white'>
                    Start building with Gee Mobile
                    <svg xmlns="http://www.w3.org/2000/svg" className={` arrow-symbol-mktg text-white ml-3 transition ease-in duration-150 ${hovered1 ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered1 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap ="round"></path></svg>
                </a>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Hero
