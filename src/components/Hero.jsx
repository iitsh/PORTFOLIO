import { motion } from 'framer-motion';
import { FiArrowDown, FiMail } from 'react-icons/fi';
import { FaPython, FaReact, FaBrain } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpencv } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="hero" id="home">
            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 1fr',
                        gap: '40px',
                        alignItems: 'center'
                    }}
                >
                    {/* Text Section (Reverted to Left Alignment) */}
                    <div className="hero-text" style={{ textAlign: 'left' }}>
                        <motion.h3 variants={itemVariants}>
                            {t('hero.greeting')}
                        </motion.h3>
                        <motion.h1 variants={itemVariants}>
                            <span className="gradient-text">{t('hero.name')}</span>
                        </motion.h1>
                        <motion.h2 variants={itemVariants}>
                            {t('hero.title')}
                        </motion.h2>
                        <motion.p variants={itemVariants}>
                            {t('hero.subtitle')}
                        </motion.p>
                        <motion.div
                            className="hero-buttons"
                            variants={itemVariants}
                            style={{ justifyContent: 'flex-start' }}
                        >
                            <motion.button
                                className="btn btn-primary"
                                onClick={scrollToProjects}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('hero.cta')}
                                <FiArrowDown />
                            </motion.button>
                            <motion.button
                                className="btn btn-secondary"
                                onClick={scrollToContact}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('hero.contact')}
                                <FiMail />
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* New "Digital Cortex" Visual */}
                    <motion.div
                        className="hero-visual"
                        variants={itemVariants}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            height: '500px', // Increased from 400px
                        }}
                    >
                        {/* Central Glowing Core */}
                        <motion.div
                            style={{
                                width: '150px', // Increased from 120px
                                height: '150px', // Increased from 120px
                                background: 'radial-gradient(circle at 30% 30%, var(--accent-primary), var(--bg-secondary))',
                                borderRadius: '50%',
                                boxShadow: '0 0 60px var(--accent-primary)',
                                position: 'relative',
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '5rem', // Increased from 4rem
                                color: 'white',
                            }}
                            animate={{
                                scale: [1, 1.1, 1],
                                boxShadow: [
                                    '0 0 60px var(--accent-primary)',
                                    '0 0 100px var(--accent-secondary)', // Increased glow
                                    '0 0 60px var(--accent-primary)',
                                ]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaBrain />
                        </motion.div>

                        {/* Orbit Ring 1 (Horizontal) */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '400px', // Increased from 300px
                                height: '400px', // Increased from 300px
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '50%',
                                transform: 'rotateX(70deg)',
                            }}
                            animate={{ rotateZ: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '50%',
                                    width: '50px', // Increased from 40px
                                    height: '50px', // Increased from 40px
                                    background: 'var(--bg-card)',
                                    borderRadius: '50%',
                                    border: '1px solid var(--accent-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-primary)',
                                    fontSize: '1.5rem', // Increased font
                                    transform: 'translate(-50%, -50%) rotateX(-70deg)',
                                    boxShadow: '0 0 25px var(--accent-primary)',
                                }}
                            >
                                <SiTensorflow />
                            </motion.div>
                        </motion.div>

                        {/* Orbit Ring 2 (Tilted) */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '340px', // Increased from 260px
                                height: '340px', // Increased from 260px
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '50%',
                            }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: -25, // Adjusted offset
                                    width: '50px', // Increased
                                    height: '50px', // Increased
                                    background: 'var(--bg-card)',
                                    borderRadius: '50%',
                                    border: '1px solid var(--accent-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-secondary)',
                                    fontSize: '1.5rem',
                                    transform: 'rotate(90deg)',
                                    boxShadow: '0 0 25px var(--accent-secondary)',
                                }}
                            >
                                <FaPython />
                            </motion.div>
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: -25, // Adjusted offset
                                    width: '50px',
                                    height: '50px',
                                    background: 'var(--bg-card)',
                                    borderRadius: '50%',
                                    border: '1px solid var(--accent-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-secondary)',
                                    fontSize: '1.5rem',
                                    transform: 'rotate(90deg)',
                                    boxShadow: '0 0 25px var(--accent-secondary)',
                                }}
                            >
                                <FaReact />
                            </motion.div>
                        </motion.div>

                        {/* Orbit Ring 3 (Vertical-ish) */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '280px', // Increased from 220px
                                height: '280px', // Increased from 220px
                                border: '1px dashed rgba(255, 255, 255, 0.05)',
                                borderRadius: '50%',
                                transform: 'rotateY(60deg)',
                            }}
                            animate={{ rotateZ: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: '50%',
                                    width: '45px', // Increased from 36px
                                    height: '45px', // Increased from 36px
                                    background: 'var(--bg-card)',
                                    borderRadius: '50%',
                                    border: '1px solid var(--text-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-primary)',
                                    fontSize: '1.2rem',
                                    transform: 'translate(-50%, 50%) rotateY(-60deg)',
                                    boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                                }}
                            >
                                <SiPytorch />
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </div>

            {/* Mobile Responsive Styles */}
            <style>{`
                @media (max-width: 968px) {
                    .hero-content {
                        grid-template-columns: 1fr !important;
                        text-align: center !important;
                    }
                    .hero-text {
                        text-align: center !important;
                        order: 2;
                    }
                    .hero-buttons {
                        justify-content: center !important;
                    }
                    .hero-visual {
                        order: 1;
                        height: 300px !important;
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
