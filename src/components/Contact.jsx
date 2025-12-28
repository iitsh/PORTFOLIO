import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const email = t('contact.email');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="contact" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {t('contact.title')}
                </motion.h2>

                <motion.div
                    className="contact-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.p variants={itemVariants}>
                        {t('contact.subtitle')}
                    </motion.p>

                    {/* Contact Cards */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        flexWrap: 'wrap',
                        marginTop: '40px',
                    }}>
                        {/* Email Card */}
                        <motion.a
                            href={`mailto:${email}`}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                padding: '28px 40px',
                                background: 'var(--card-bg)',
                                backdropFilter: 'blur(20px)',
                                border: '2px solid var(--card-border)',
                                borderRadius: '20px',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <div
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.6rem',
                                }}
                            >
                                <FiMail />
                            </div>
                            <div>
                                <p style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '0.9rem',
                                    marginBottom: '4px'
                                }}>
                                    Email
                                </p>
                                <p style={{
                                    color: 'var(--accent-primary)',
                                    fontSize: '1.1rem',
                                    fontWeight: '600'
                                }}>
                                    {email}
                                </p>
                            </div>
                        </motion.a>

                        {/* GitHub Card */}
                        <motion.a
                            href="https://github.com/iitsh"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                padding: '28px 40px',
                                background: 'var(--card-bg)',
                                backdropFilter: 'blur(20px)',
                                border: '2px solid var(--card-border)',
                                borderRadius: '20px',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <div
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '1.6rem',
                                }}
                            >
                                <FiGithub />
                            </div>
                            <div>
                                <p style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '0.9rem',
                                    marginBottom: '4px'
                                }}>
                                    GitHub
                                </p>
                                <p style={{
                                    color: 'var(--accent-primary)',
                                    fontSize: '1.1rem',
                                    fontWeight: '600'
                                }}>
                                    github.com/iitsh
                                </p>
                            </div>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
