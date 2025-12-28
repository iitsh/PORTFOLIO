import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaHeartbeat, FaGlobe, FaBrain, FaShieldAlt, FaCode, FaDatabase
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = t('projects.items');
    const categories = t('projects.categories');

    const categoryIcons = {
        iot: <FaHeartbeat />,
        web: <FaGlobe />,
        ml: <FaBrain />,
        security: <FaShieldAlt />,
        bigdata: <FaDatabase />,
    };

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
    };

    return (
        <section id="projects" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {t('projects.title')}
                </motion.h2>

                {/* Filter Buttons */}
                <motion.div
                    className="projects-filter"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {Object.entries(categories).map(([key, value]) => (
                        <motion.button
                            key={key}
                            className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
                            onClick={() => setActiveFilter(key)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {value}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                className="project-card"
                                variants={itemVariants}
                                layout
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className="project-image" style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-card-hover)', fontSize: '3rem', color: 'var(--text-secondary)' }}>
                                            {categoryIcons[project.category] || <FaCode />}
                                        </div>
                                    )}
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-techs">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="project-tech">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
