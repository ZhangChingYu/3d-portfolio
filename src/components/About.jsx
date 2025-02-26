import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { SectionWrapper } from '../hoc'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => {

  return (
    <Tilt className='sm:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] text-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a student major in Computer Science and Software Engineering.
        I have experience in Java, Javascript and MySQL, and have experience
        developing applications in frameworks like React, SpringBoot and Django.
        I'm always enthusiastic about new IT technologies and thrilled to learn
        new skills. I'm a team player and like to explore new ideas with my team.
        Let's work together to make our ideas to life!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={services.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")