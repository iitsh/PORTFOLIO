import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <motion.div
                    className="nav-logo"
                    whileHover={{ scale: 1.05 }}
                >
                    RB
                </motion.div>

                <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a onClick={() => scrollToSection(item)}>
                                {t(`nav.${item}`)}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <div className="nav-controls">
                    <motion.button
                        className="nav-toggle lang-toggle"
                        onClick={toggleLanguage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {language === 'fr' ? 'EN' : 'FR'}
                    </motion.button>

                    <motion.button
                        className="nav-toggle"
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isDark ? <FiSun /> : <FiMoon />}
                    </motion.button>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <motion.div
                    className="mobile-nav"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: 'var(--card-bg)',
                        backdropFilter: 'blur(20px)',
                        borderBottom: '1px solid var(--card-border)',
                        padding: '20px',
                    }}
                >
                    {navItems.map((item) => (
                        <motion.a
                            key={item}
                            onClick={() => scrollToSection(item)}
                            style={{
                                display: 'block',
                                padding: '12px 0',
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontWeight: 500,
                                cursor: 'pointer',
                            }}
                            whileHover={{ x: 10, color: 'var(--accent-primary)' }}
                        >
                            {t(`nav.${item}`)}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
