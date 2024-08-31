import React from 'react'
import profilePicture from "../assets/bgProfile.svg"
import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
    return (
        <div className="border-b border-indigo-950 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 variants={container(0.20)} initial="hidden" animate="visible"
                            className="pb-16 text6xl font-thin tracking-tight lg:mt-16 lg:text-8xl md:text-4xl sm:text-2xl">Emre Çelik</motion.h1>
                        <motion.span variants={container(0.40)} initial="hidden" animate="visible" className="bg-gradient-to-r from-cyan-600 via-slate-500 to-blue-800 bg-clip-text text-3xl tracking-tight text-transparent">
                            Front-end Developer
                        </motion.span>
                        <motion.p variants={container(0.60)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img initial={{x:100, opacity:0}} animate={{x: 0, opacity: 1}} transition={{duration: 1, delay: 0.80}} src={profilePicture} alt="Profile Picture" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero