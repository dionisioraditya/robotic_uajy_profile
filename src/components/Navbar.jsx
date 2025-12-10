import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '20px 0',
                zIndex: 1000,
                background: 'rgba(5, 5, 5, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: 'var(--glass-border)'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <img src={logo} alt="KSR Logo" style={{ height: '50px' }} />
                    <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'var(--primary-color)'
                    }}>
                        ROBOTIC UAJY
                    </span>
                </div>
                <ul style={{ display: 'flex', gap: '30px' }}>
                    {['About', 'Focus Areas', 'Partners', 'Contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`} style={{
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
