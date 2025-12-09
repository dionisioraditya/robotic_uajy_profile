import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{
            padding: '150px 0 100px',
            background: 'linear-gradient(to bottom, rgba(5,5,5,0) 0%, #050505 150px, #050505 100%)',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem' }}
                >
                    ABOUT <span className="text-gradient">KSR</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        background: 'var(--glass-bg)',
                        border: 'var(--glass-border)',
                        padding: '40px',
                        borderRadius: '20px',
                        boxShadow: 'var(--glass-shadow)',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}
                >
                    <p style={{ marginBottom: '20px', lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc' }}>
                        The Robotics Study Group (KSR) serves as a dedicated platform for students at Universitas Atma Jaya Yogyakarta (UAJY)
                        specifically within the Faculty of Industrial Technology (FTI) to explore the realms of <strong>Robotics</strong> and <strong>Internet of Things (IoT)</strong>.
                    </p>
                    <p style={{ marginBottom: '20px', lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc' }}>
                        Going beyond the scope of standard academic coursework, KSR offers immersive challenges and hands-on practical experience.
                        Our members progress from the fundamentals of electronics and microcontroller programming (<strong>C/C++</strong>) to
                        the development of advanced autonomous systems.
                    </p>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#ccc' }}>
                        We are driven by innovation in <strong>Artificial Intelligence (AI)</strong> and <strong>Self-Driving Robots (AGV/AMR)</strong>,
                        while actively demonstrating our capabilities in prestigious national competitions such as the Indonesian Robot Contest (KRI).
                    </p>
                </motion.div>
            </div >
        </section >
    );
};

export default About;
