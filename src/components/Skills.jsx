import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaPython, FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt, FaDatabase,
    FaAws, FaGitAlt, FaGithub, FaCloud
} from 'react-icons/fa';
import {
    SiDjango, SiFastapi, SiTensorflow, SiPytorch, SiOpencv, SiApachespark,
    SiApachehadoop, SiApachekafka, SiGrafana, SiStreamlit, SiSqlite, SiThreedotjs
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { useLanguage } from '../context/LanguageContext';
import { skillsData } from '../data/translations';

const Skills = () => {
    const { t, language } = useLanguage();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Map skill names to icons
    const skillIcons = {
        'Python': <FaPython />,
        'Java': <FaJava />,
        'JavaScript': <FaJs />,
        'React JS': <FaReact />,
        'React Native': <TbBrandReactNative />,
        'Django': <SiDjango />,
        'FastAPI': <SiFastapi />,
        'HTML': <FaHtml5 />,
        'CSS': <FaCss3Alt />,
        'SQL': <FaDatabase />,
        'NLP': <FaDatabase />,
        'TensorFlow': <SiTensorflow />,
        'PyTorch': <SiPytorch />,
        'OpenCV': <SiOpencv />,
        'Spark': <SiApachespark />,
        'Hadoop': <SiApachehadoop />,
        'Kafka': <SiApachekafka />,
        'Git': <FaGitAlt />,
        'GitHub': <FaGithub />,
        'SQLite': <SiSqlite />,
        'Grafana': <SiGrafana />,
        'Streamlit': <SiStreamlit />,
        'Matplotlib': <FaDatabase />,
        'Seaborn': <FaDatabase />,
        'AWS Lambda': <FaAws />,
        'AWS CloudFormation': <FaAws />,
        'Three.js': <SiThreedotjs />,
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    };

    return (
        <section id="skills" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {t('skills.title')}
                </motion.h2>

                {skillsData.categories.map((category, catIndex) => (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                        style={{ marginBottom: '50px' }}
                    >
                        {/* Category Title */}
                        <h3 style={{
                            fontSize: '1.4rem',
                            fontWeight: '700',
                            marginBottom: '24px',
                            color: 'var(--text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                        }}>
                            <span style={{
                                width: '4px',
                                height: '28px',
                                background: 'linear-gradient(180deg, var(--accent-primary), var(--accent-secondary))',
                                borderRadius: '2px',
                            }} />
                            {language === 'fr' ? category.name : category.nameEn}
                        </h3>

                        {/* Skills Grid */}
                        <motion.div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '16px',
                            }}
                            variants={containerVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            {category.skills.length > 0 ? (
                                category.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill}
                                        variants={itemVariants}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.05,
                                            boxShadow: '0 20px 40px var(--shadow-color)',
                                        }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '14px 24px',
                                            background: 'var(--card-bg)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid var(--card-border)',
                                            borderRadius: '14px',
                                            cursor: 'default',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <span style={{
                                            fontSize: '1.4rem',
                                            color: 'var(--accent-primary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                            {skillIcons[skill] || <FaDatabase />}
                                        </span>
                                        <span style={{
                                            fontWeight: '600',
                                            fontSize: '0.95rem',
                                            color: 'var(--text-primary)',
                                        }}>
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))
                            ) : (
                                <span style={{
                                    color: 'var(--text-muted)',
                                    fontStyle: 'italic',
                                }}>
                                    —
                                </span>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
