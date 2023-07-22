import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'



const ServiceCard=({index, title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right", "spring", 0.5* index, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
    <div 
    options={{max:45, scale:1, speed:450}}
    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    >

    <img  src={icon} alt={title} className="w-16 h-16 object-contain"/>
     <h3 className="text-whiote text-[20px] font-bold text-centre">{title}</h3>
    </div>
    </motion.div>
    </Tilt>
   
  )
}



const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction
    </p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}        
    className="mt-4 text-secondary text-[25px] max-w-3xl leading-[30px]" > 
    I am currently a second year computer science student at York University(Toronto). I am an enthusiast programmer with keen interest in various website/applicaion development. I am also a good communicator and do contain leadership ability as well. Currently, I am looking for exciting Software development opurtunities for Summer 2024, to hone and grind my skills. 
     
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10"> 
    {
      services.map((service,index)=> (
        <ServiceCard key={service.title} index={index} {...service} />
      ))
    }
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")







///// can change the react / native developer from index.js, to add android app developer, web developer.