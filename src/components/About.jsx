import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });



    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="about" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {t('about.title')}
                </motion.h2>

                <motion.div
                    className="about-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div
                        className="about-text"
                        variants={itemVariants}
                    >
                        <p>{t('about.description')}</p>
                    </motion.div>

                    <motion.div
                        className="about-visual"
                        variants={itemVariants}
                    >
                        {/* Abstract Neural Network Visualization */}
                        <div className="neural-network">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="neural-node"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                    style={{
                                        left: `${30 + i * 20}%`,
                                        top: `${20 + (i % 2) * 40}%`
                                    }}
                                />
                            ))}
                            <motion.div
                                className="neural-connection"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <svg width="100%" height="100%" viewBox="0 0 200 200">
                                    <path d="M60 40 L100 120 L140 40" stroke="var(--accent-primary)" strokeWidth="2" fill="none" opacity="0.5" />
                                </svg>
                            </motion.div>
                        </div>
                    </motion.div>


                </motion.div>
            </div>
        </section>
    );
};

export default About;
