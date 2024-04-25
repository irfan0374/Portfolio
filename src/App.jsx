import "./App.css";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.jpg";
import processing from "./assets/processing.jpeg";

import call from './assets/call.svg'
import email from './assets/email.svg'
import location from './assets/location.svg'
import github from "./assets/github1.png";
import LinkedIn from "./assets/linkedin.svg";
import Profile from "./assets/profile2.png";
import leetcode from "./assets/Leetcode1.png";
import Muhammed_Irfan_Resume from './assets/Resume.pdf'
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import ProjectCard from "./component/ProjectCard";
import Technology from "./component/Technology";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container py-8 w-full m-auto bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-end px-3 ">

            <div>
              <ul className="flex gap-6 md:gap-12">
                <li>
                  <a href="#projects" className=" text-sm md:text-lg text-gray-400 hover:text-white cursor-pointer font-semibold">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-sm md:text-lg text-gray-400 hover:text-white cursor-pointer font-semibold">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className=" text-sm md:text-lg text-gray-400 hover:text-white cursor-pointer font-semibold">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm md:text-lg text-gray-400 hover:text-white cursor-pointer font-semibold">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container  px-4 pt-2 md:pt-12 pb-3 md:pb-12 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl ">Hello,I am Muhammed Irfan</h2>
              <div>
    <h2 class="font-bold text-xl md:text-4xl mt-1 text-blue-600 gradiant-text whitespace-nowrap overflow-hidden">Full Stack Developer</h2>
    <div>

                  <h2 className=" font-sans text-md mt-1  text-gray-400" >With a focus on <span className="text-sky-500">React</span></h2>
                </div>
              </div>

              <p className="mt-4 text-gray-400 text-center md:text-justify">
                As a passionate self-taught Full-Stack Developer specializing in MERN technology, I transform ideas into user-friendly applications. I'm eager to join dynamic teams, contribute my skills, drive innovation, and create something amazing together. Let's connect!
              </p>
              <a href={
                Muhammed_Irfan_Resume
              } download >

                <div className="button ">
                  <div className="button-wrapper">
                    <div className="text">Resume</div>
                    <span className="icon animate-bounce ">
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative">
              <img src={Profile} className="tansform hover:scale-95 duration-150 relative z-10 w-[200px] m-auto h-[300px] md:h-[430px] md:w-[880px] " />
            </div>
          </div>
        </section>
      <Technology/>
        {/* Projects section */}

        <section id="projects">
          <div className="container m-auto px-4 py-2 md:py-12">
            <h2 className="text-xl md:text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className=" transfrom hover:scale-125 duration-150 w-full h-auto rounded" />
                <h3 className="text-xl md:text-2xl font-semibold mt-8">
                  Sevensky
                </h3>
                <p className="text-gray-400 text-sm mt-2">

                  a MERN stack-based real estate platform featuring real-time chat (Socket.io), secure payments (Stripe), and seamless navigation (Google Maps). Leveraged Axios interceptors for efficient data flow and utilized Tailwind CSS for a responsive UI. Result: An innovative and user-friendly real estate experience.

                </p>
                <div className="flex mt-5 md:mt-12 gap-6 ">
                  <button className="flex-1 text-sm py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700" onClick={() => window.location.href = "https://zuus.onrender.com"}>
                    Live preview
                  </button>
                  <section className="flex justify-center items-center">
                    <a
                      href="https://github.com/irfan0374/SevenSky--ClientSide"
                      className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-white text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 15 15"
                        className="w-5 text-black"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          fill="currentColor"
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                        ></path>
                      </svg>
                      <span
                        className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                      >
                        GitHub
                      </span>
                    </a>
                  </section>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto transfrom hover:scale-125 duration-150 rounded" />
                <h3 className="text-xl md:text-2xl font-semibold mt-8">
                  Zuus
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Zuus is an e-commerce platform specializing in the online sale of shoes& chappels

                  In the client-side, implemented features include user authentication, productlisting, wishlist, shopping cart, OTP verification, profile management, ordertracking and cancellation, and Razorpay payment integration.

                </p>
                <div className="flex mt-5 md:mt-12 gap-6 ">
                  <button className="flex-1 text-sm py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700" onClick={() => window.location.href = "https://zuus.onrender.com"}>
                    Live preview
                  </button>
                  <section className="flex justify-center items-center">
                    <a
                      href="https://github.com/irfan0374/Zuus-E-commerce"
                      className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-white text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 15 15"
                        className="w-5 text-black"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          fill="currentColor"
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                        ></path>
                      </svg>
                      <span
                        className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                        GitHub
                      </span>
                    </a>
                  </section>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="transfrom hover:scale-125 duration-150 w-full h-auto rounded" />
                <h3 className="text-xl md:text-2xl font-semibold mt-8">
                  Weather App
                </h3>
                <p className="text-gray-400 text-sm mt-2">

                  This project is a React weather application that utilizes the OpenWeatherMap API to fetch weather data for a given location. It also incorporates Mapbox to retrieve the user's exact location for accurate weather information.
                </p>
                <div className="flex mt-5 md:mt-12 gap-6 ">
                  <button className="flex-1 text-sm py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700" onClick={() => window.location.href = "https://zuus.onrender.com"}>
                    Live preview
                  </button>
                  <section className="flex justify-center items-center">
                    <a
                      href="https://github.com/irfan0374/weatherApp"
                      className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-white text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 15 15"
                        className="w-5 text-black"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          fill="currentColor"
                          d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                        ></path>
                      </svg>
                      <span
                        className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                      >
                        GitHub
                      </span>
                    </a>

                  </section>

                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={processing} className="w-full h-auto" />
                <h3 className="text-xl md:text-2xl font-semibold mt-8">
                  project 4
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, enim ducimus sit cum nulla dolorum voluptatem inventore in quidem nobis cupiditate
                </p>

              </div>

            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className=" py-6 md:py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-xl md:text-2xl font-semibold">Technologies</h2>
            <div className="mt-9 md:mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-sm text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-1 md:h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-6 md:mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Bootstrap</h2>
                  <p className="text-sm text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-1 md:h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-6 md:mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript
                  </h2>
                  <p className=" text-sm text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-1 md:h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-6 md:mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    node js
                  </h2>
                  <p className="text-sm text-gray-500">Advanced</p>
                </div>
                <span className="w-[95%] h-1 md:h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-6 md:mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    MongoDB
                  </h2>
                  <p className="text-sm text-gray-500">Advanced</p>
                </div>
                <span className="w-[89%] h-1 md:h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-6 md:mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-sm text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-1 md:h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-6 md:mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React Native</h2>
                  <p className="text-sm text-gray-500">Advanced</p>
                </div>
                <span className="w-[80%] h-1 md:h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-4 md:py-14">
            <h2 className="text-xl md:text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className=" sm:flex-row gap-4 md:gap-16 mt-7 md:mt-12 w-[80%] grid grid-cols-2 md:grid rows-1">
              <div>
                <p className="fmd:font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  DSA
                </p>
              </div>
              <div>
                <p className="md:font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  AWS
                </p>
              </div>
              <div>
                <p className="md:font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Figma
                </p>
              </div>
              <div>
                <p className="md:font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  git
                </p>
              </div>
              <div>
                <p className="md:font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Postman
                </p>
              </div>
              <div>
                <p className="md:font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Ajax
                </p>
              </div>
              <div>
                <p className="md:font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  jwt
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
            </div>
          </div>
        </section>
        <section className="py-2 md:py-3" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-xl md:text-2xl font-semibold">About me</h2>
            <div className="mt-6 md:mt-12  relative before:absolute before:top-0 before:left-20 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[73px]">
                <h3 className="absolute left-0 text-md md:text-lg font-mono md:font-semibold">2019-22</h3>
                <p className="text-sm md:text-lg">
                  Graduated Bachelor degree (Co-opertative arsts and science College) specified with computer application
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[73px]">
                <h3 className="absolute left-0 text-md md:text-lg font-mono md:font-semibold">2023-24</h3>
                <p className="text-sm md:text-lg">
                  I became more interested in problem-solving and technology, leading me to delve into both front-end and back-end development using the MERN stack.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* contact card start */}
        <section className="container m-auto px-4 md:py-8" id="contact">
          <h1 className="text-xl md:text-2xl font-semibold ">
            Get in touch
          </h1>
          <div className=" border mt-5 rounded-3xl p-4 md:p-6">
            <div>
              <p className="pt-3 md:pt-5 pl-2 font-mono text-sm md:text-lg">
                I'm currently avaliable to take on new projects. So feel free to sent me a message about anything that you want to run past me. You can contact anytime at 24/7
              </p>
              <div>
                <ul className="flex flex-col gap-5 pl-4 pt-5">
                  <div className="flex">
                    <li className="bg-white w-8 md:w-12 h-8 md:h-12 first-letter:rounded-2xl flex justify-center items-center rounded-3xl">
                      <div className="flex">
                        <img src={location} className="w-5 md:w-8 h-8" alt="" />
                      </div>
                    </li>
                    <p className="pl-4 text-gray-400 text-sm md:text-lg font-semibold">Kannur,India 670304</p>
                  </div>
                  <div className="flex">
                    <li className="bg-white w-8 md:w-12 h-8 md:h-12 first-letter:rounded-2xl flex justify-center items-center rounded-3xl">
                      <div className="flex">
                        <img src={email} className="w-5 md:w-8 h-8" alt="" />
                      </div>
                    </li>
                    <p className="pl-4 text-gray-400 text-sm md:text-lg font-semibold">irfan188iqbal@gmail.com</p>
                  </div>
                  <div className="flex">
                    <li className="bg-white w-8 md:w-12 h-8 md:h-12 first-letter:rounded-2xl flex justify-center items-center rounded-3xl animate-bounce">
                      <div className="flex">
                        <img src={call} className="w-5 md:w-8 h-8 " alt="" />

                      </div>
                    </li>
                    <p className="pl-4 text-gray-400  text-sm md:text-lg font-semibold">+91 8139024188</p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* contact card end */}

      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">

          <div>
            <ul className="flex gap-6">
          <h3 className="text-gray-500 font-serif text-sm">
          Feel free to follow me</h3>
              <li>
                <a href="https://leetcode.com/Irfan374/">
                  <img src={leetcode} className="w-7  tranform hover:scale-125  " />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/muhammedirfaniqbal/">
                  <img src={LinkedIn} className="  tranform hover:scale-125  w-7" />
                </a>
              </li>
              <li>
                <a href="https://github.com/irfan0374">
                  <img src={github} className=" tranform hover:scale-125 w-9" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}
export default App;
