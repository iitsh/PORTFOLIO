import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Certifications = () => {
    const { t } = useLanguage();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const certifications = t('certifications.items');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5 }
        },
    };

    return (
        <section id="certifications" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {t('certifications.title')}
                </motion.h2>

                <motion.div
                    className="certs-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card"
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="cert-icon">
                                <FiAward />
                            </div>
                            <div className="cert-info">
                                <h4>{cert.name}</h4>
                                <p>{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
