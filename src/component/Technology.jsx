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
  return (
   <div className="relative flex flex-col justify-center overflow-hidden bg-black ">
  <img src="/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="800" />
  <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

  <div className="pointer-events-none relative flex gap-5 overflow-hidden">
    <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-5">
      <img className="aspect-square max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={git} alt="" />
      <img className="aspect-square max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md"src={javascritp} alt="" />
      <img className="aspect-square max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={nodejs} alt="" />
      <img className="aspect-square max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={reactnative} alt="" />
      <img className="aspect-square max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={react} alt="" />
    </div>
    <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10">
      <img className="aspect-square max-w-[clamp(5rem,14vmin,13rem)] rounded-2xl object-cover shadow-md"src={tailwind} alt="" />
      <img className="aspect-square max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={Mongodb} alt="" />
      <img className="aspect-square max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={redux} alt="" />
      <img className="aspect-square max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={github}alt="" />
      <img className="aspect-square max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={aws} alt="" />
    </div>
  </div>

  <div className="pointer-events-none relative mt-10 flex gap-10 overflow-hidden">
    <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-5 [animation-direction:reverse]">
    <img className="aspect-square    max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md"src={postman} alt="" />
      <img className="aspect-square  max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={html} alt="" />
      <img className="aspect-square  max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={css} alt="" />
      <img className="aspect-square  max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={Mongodb}alt="" />
      <img className="aspect-square  max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={Bootstrap} alt="" />
    </div>
    <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-5 [animation-direction:reverse]">
    <img className="aspect-square    max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md"src={vercel} alt="" />
      <img className="aspect-square  max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={github} alt="" />
      <img className="aspect-square  max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={postman} alt="" />
      <img className="aspect-square  max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={redux}alt="" />
      <img className="aspect-square  max-w-[clamp(4rem,12vmin,8rem)] rounded-2xl object-cover shadow-md" src={tailwind} alt="" />
    </div>
  </div>
</div>
  )
}

export default Technology
