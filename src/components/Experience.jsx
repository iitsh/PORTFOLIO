import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const experiences = t('experience.items');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="experience" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {t('experience.title')}
                </motion.h2>

                <motion.div
                    className="timeline"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="timeline-dot"
                                initial={{ scale: 0 }}
                                animate={inView ? { scale: 1 } : {}}
                                transition={{ delay: index * 0.3, type: 'spring', stiffness: 200 }}
                            />
                            <motion.div
                                className="timeline-content glass-card"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3>{exp.title}</h3>
                                <p className="company">{exp.company}</p>
                                <p className="period">{exp.period}</p>
                                <p>{exp.description}</p>
                                <div className="tech-tags">
                                    {exp.technologies.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            className="tech-tag"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
