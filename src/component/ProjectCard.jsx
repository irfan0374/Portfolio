import React from 'react';
import Leetcode from '../assets/project/Leetcode.png'
import Crud from '../assets/project/CRUD.png'
import sevenSky1 from '../assets/project/sevenSky1.png'
import sevenSky2 from '../assets/project/sevenSky2.png'
import sevenSky3 from '../assets/project/sevenSky3.png'
import Olx1 from '../assets/project/Olx1.png'
import Olx2 from '../assets/project/Olx2.png'
import Netflix1 from '../assets/project/Netflix1.png'
import Netflix2 from '../assets/project/Netflix2.png'
import Todo from '../assets/project/Todo.png'
import WeatherApp from '../assets/project/WeatherApp.png'

const ProjectCard = () => {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden py-3 md:py-2">
        <div className="relative flex flex-col justify-center overflow-hidden py-2 md:py-3">
            <img src="/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
            <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

            <div className="pointer-events-none relative flex gap-10 overflow-hidden">
                <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10">
    
                    <img className="aspect-square max-w-[clamp(8rem,28vmin,20rem)] rounded-lg object-cover shadow-md" src={Crud} alt="" />
                    <img className="aspect-square max-w-[clamp(8rem,28vmin,20rem)] rounded-lg object-cover shadow-md" src={Olx1} alt="" />
                    <img className="aspect-square max-w-[clamp(8rem,28vmin,20rem)] rounded-lg object-cover shadow-md" src={sevenSky1} alt="" />
                    <img className="aspect-square max-w-[clamp(8rem,28vmin,20rem)] rounded-lg object-cover shadow-md" src={sevenSky3} alt="" />
                    <img className="aspect-square max-w-[clamp(8rem,28vmin,20rem)] rounded-lg object-cover shadow-md" src={sevenSky2} alt="" />
                   
                </div>
                <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10">
                <img className="aspect-square max-w-[clamp(8rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={Olx2} alt="" />
                <img className="aspect-square max-w-[clamp(8rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={Netflix2} alt="" />
                <img className="aspect-square max-w-[clamp(8rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={WeatherApp} alt="" />
                <img className="aspect-square max-w-[clamp(8rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={Netflix1} alt="" />
                <img className="aspect-square max-w-[clamp(8rem,28vmin,20rem)] rounded-md object-cover shadow-md" src={Todo} alt="" />

                </div>
            </div>

        </div>
    </div>
  );
};

export default ProjectCard;
