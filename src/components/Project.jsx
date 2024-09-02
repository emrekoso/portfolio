import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const ITEMS_PER_PAGE = 4;

const Project = ({ projects }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProject = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstProject = indexOfLastProject - ITEMS_PER_PAGE;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };


    const renderIcon = (icon) => {
        switch (icon) {
            case 'github':
                return <FaGithub size={20} className='hover:text-neutral-200' />;
            case 'externalLink':
                return <FaExternalLinkAlt size={20} className='hover:text-neutral-200' />;
            default:
                return null;
        }
    };

    return (
        <div className='border-b border-indigo-950 pb-4'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>
                Projects
            </motion.h2>
            <div>
                {currentProjects.map((project, index) => (
                    <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='relative w-full lg:w-1/4'>
                            <img src={project.image} alt={project.title} width={150} height={150} className='mb-6 rounded' />
                            {project.inProgress && <span className='absolute top-0 left-0 bg-neutral-900 text-purple-500 text-xs font-bold py-1 px-2 z-10'>in Progress</span>}
                            {/* <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 rounded h-[150px] w-[150px] hover:cursor-pointer"></div> */}
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            <div>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                                ))}
                                <div className="flex justify-end gap-3 text-neutral-400">
                                    {project.platforms.map((platform, index) => (
                                        <a
                                            href={platform.link}
                                            target="_blank"
                                            rel="icons"
                                            key={index}
                                        >
                                            {renderIcon(platform.icon)}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}

                <div className="flex justify-center mt-5 gap-10">
                    <MdNavigateBefore
                        onClick={currentPage === 1 ? null : handlePrevPage}
                        size={30}
                        className={`${currentPage === 1 ? 'text-neutral-700 cursor-not-allowed' : 'hover:cursor-pointer'
                            }`}
                    />
                    <MdNavigateNext
                        onClick={currentPage === totalPages ? null : handleNextPage}
                        size={30}
                        className={`${currentPage === totalPages ? 'text-neutral-700 cursor-not-allowed' : 'hover:cursor-pointer'
                            }`}
                    />
                </div>
            </div>
        </div>
    )
}

export default Project