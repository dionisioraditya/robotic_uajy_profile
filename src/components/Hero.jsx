import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Image - Fixed for Parallax Effect */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}>
                <img
                    src={heroBg}
                    alt="KSR Team"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
                {/* Dark Overlay with Gradient Fade */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 80%, #050505 100%)',
                }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                >
                    <h1 style={{
                        fontSize: '4rem',
                        lineHeight: '1.1',
                        marginBottom: '20px',
                        background: 'linear-gradient(45deg, #fff, #aaa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 20px rgba(0, 243, 255, 0.3)'
                    }}>
                        KSR <span style={{ color: 'var(--primary-color)', WebkitTextFillColor: 'initial', textShadow: '0 0 20px rgba(0, 243, 255, 0.5)' }}>UAJY</span>
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', color: 'var(--text-secondary)' }}>
                        Kelompok Studi Robotik
                    </h2>
                    <p style={{ marginBottom: '40px', lineHeight: '1.6', fontSize: '1.1rem', margin: '0 auto 40px', maxWidth: '600px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                        Exploring the frontiers of <span style={{ color: 'var(--primary-color)' }}>Robotics</span>, <span style={{ color: 'var(--accent-green)' }}>IoT</span>, and <span style={{ color: 'var(--secondary-color)' }}>AI</span>.
                        Developing the future of autonomous systems.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <a
                            href="https://www.instagram.com/p/DONWIU6D3bB/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{
                                boxShadow: '0 0 15px rgba(0, 243, 255, 0.3)',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}
                        >
                            JOIN US
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
