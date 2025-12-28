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
                        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                    >
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>{t('about.description')}</p>
                    </motion.div>


                </motion.div>
            </div>
        </section>
    );
};

export default About;
