import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 h-40 sm:h-80 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Silvia</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop mobile applications, web <br className='sm:block hidden'/> applications, user interfaces
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center item-start p-2'>
            <motion.div className='w-3 h-3 rounded-full bg-secondary mb-1'
            animate={{y:[0, 24, 0]}} transition={{duration:1.5, repeat:Infinity, repeatType:'loop'}}/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero