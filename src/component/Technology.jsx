import React from 'react'
import aws from '/aws-2.svg'
import git from '/git.svg'
import github from '/github.svg'
import javascritp from '/javascript.svg'
import Mongodb from '/mongodb.svg'
import nodejs from '/nodejs.svg'
import reactnative from '/react-native.svg'
import redux from '/redux.svg'
import tailwind from '/tailwindcss.svg'
import postman from '/postman.svg'
import react from '/react-2.svg'
import Bootstrap from '/bootstrap.svg'
import html from '/html.svg'
import css from '/css.svg'
import vercel from '/vercel.svg'

const Technology = () => {
  // Common style for small, professional icons
  const iconStyle = "h-8 md:h-10 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300";

  return (
   <div className="relative flex flex-col justify-center overflow-hidden bg-black py-6 border-y border-white/5">
    {/* Background Grid Accent */}
    <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>

    {/* First Row: Forward Motion */}
    <div className="pointer-events-none relative flex gap-8 overflow-hidden">
      <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8">
        <img className={iconStyle} src={tailwind} alt="Tailwind" />
        <img className={iconStyle} src={javascritp} alt="JavaScript" />
        <img className={iconStyle} src={nodejs} alt="Node.js" />
        <img className={iconStyle} src={reactnative} alt="React Native" />
        <img className={iconStyle} src={react} alt="React" />
        <img className={iconStyle} src={aws} alt="AWS" />
      </div>
      <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8">
        <img className={iconStyle} src={tailwind} alt="Tailwind" />
        <img className={iconStyle} src={javascritp} alt="JavaScript" />
        <img className={iconStyle} src={nodejs} alt="Node.js" />
        <img className={iconStyle} src={reactnative} alt="React Native" />
        <img className={iconStyle} src={react} alt="React" />
        <img className={iconStyle} src={aws} alt="AWS" />
      </div>
    </div>

    {/* Second Row: Reverse Motion */}
    <div className="pointer-events-none relative mt-8 flex gap-8 overflow-hidden">
      <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8 [animation-direction:reverse]">
        <img className={iconStyle} src={postman} alt="Postman" />
        <img className={iconStyle} src={html} alt="HTML" />
        <img className={iconStyle} src={css} alt="CSS" />
        <img className={iconStyle} src={Mongodb} alt="MongoDB" />
        <img className={iconStyle} src={Bootstrap} alt="Bootstrap" />
        <img className={iconStyle} src={git} alt="Git" />
        <img className={iconStyle} src={vercel} alt="Vercel" />
      </div>
      <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-8 [animation-direction:reverse]">
        <img className={iconStyle} src={postman} alt="Postman" />
        <img className={iconStyle} src={html} alt="HTML" />
        <img className={iconStyle} src={css} alt="CSS" />
        <img className={iconStyle} src={Mongodb} alt="MongoDB" />
        <img className={iconStyle} src={Bootstrap} alt="Bootstrap" />
        <img className={iconStyle} src={git} alt="Git" />
        <img className={iconStyle} src={vercel} alt="Vercel" />
      </div>
    </div>
  </div>
  )
}

export default Technology;