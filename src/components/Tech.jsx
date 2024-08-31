import React from 'react'
import { RiReactjsLine, RiHtml5Fill, RiCss3Fill, RiTailwindCssFill, } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { motion } from 'framer-motion';

const techArray = [
    RiHtml5Fill,
    RiCss3Fill,
    BsBootstrapFill,
    SiJavascript,
    RiReactjsLine,
    SiTypescript,
    TbBrandNextjs,
    RiTailwindCssFill,
    SiMongodb,
]

const iconVar = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Tech = () => {

    return (
        <div className='border-b border-indigo-950 pb-24'>
            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconVar(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-indigo-950 p-4">
                    <RiHtml5Fill className='text-7xl text-orange-400'/>
                </motion.div>
                <motion.div variants={iconVar(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-indigo-950 p-4">
                    <RiCss3Fill className='text-7xl text-blue-400'/>
                </motion.div>
                <motion.div variants={iconVar(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-indigo-950 p-4">
                    <BsBootstrapFill className='text-7xl text-purple-400'/>
                </motion.div>
                <motion.div variants={iconVar(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-indigo-950 p-4">
                    <SiJavascript className='text-7xl text-yellow-400'/>
                </motion.div>
                <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-indigo-950 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div variants={iconVar(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-indigo-950 p-4">
                    <SiTypescript className='text-7xl text-blue-500'/>
                </motion.div>
                <motion.div variants={iconVar(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-indigo-950 p-4">
                    <TbBrandNextjs className='text-7xl text-gray-500'/>
                </motion.div>
                <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-indigo-950 p-4">
                    <RiTailwindCssFill className='text-7xl text-cyan-500'/>
                </motion.div>
                <motion.div variants={iconVar(5.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-indigo-950 p-4">
                    <SiMongodb className='text-7xl text-green-400'/>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Tech