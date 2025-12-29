import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Formation = () => {
    const { t } = useLanguage();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const formations = t('formation.items');
    const currentLabel = t('formation.current');

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
        <section id="formation" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {t('formation.title')}
                </motion.h2>

                <motion.div
                    className="formation-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {formations.map((formation, index) => (
                        <motion.div
                            key={index}
                            className="formation-card glass-card"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <div className="formation-icon">
                                {index === 0 ? <FaGraduationCap /> : <FaUniversity />}
                            </div>
                            <div className="formation-content">
                                <div className="formation-header">
                                    <h3>{formation.degree}</h3>
                                    {formation.status === 'current' && (
                                        <span className="formation-status">{currentLabel}</span>
                                    )}
                                </div>
                                <p className="formation-school">{formation.school}</p>
                                <p className="formation-description">{formation.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Formation;
