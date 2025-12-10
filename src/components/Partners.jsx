import React from 'react';
import { motion } from 'framer-motion';
import atmiLogo from '../assets/logo-atmi-surakarta.png';
import kemendiktisaintekLogo from '../assets/logo-kemendiktisaintek.png';
import rsPantiRapihLogo from '../assets/logo-rspantirapih.png';
import stikesPantiRapihLogo from '../assets/logo-stikes-panti-rapih.png';
import undipLogo from '../assets/logo-universitas_dipenogoro.png';

const logos = [
    { src: atmiLogo, alt: 'ATMI Surakarta' },
    { src: kemendiktisaintekLogo, alt: 'Kemendiktisaintek' },
    { src: rsPantiRapihLogo, alt: 'RS Panti Rapih' },
    { src: stikesPantiRapihLogo, alt: 'STIKES Panti Rapih' },
    { src: undipLogo, alt: 'Universitas Diponegoro' },
];

const Partners = () => {
    return (
        <section id="partners" style={{
            padding: '100px 0',
            background: 'var(--bg-dark)',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '80px', fontSize: '2.5rem' }}
                >
                    OUR <span className="text-gradient">PARTNERS</span>
                </motion.h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '40px'
                }}>
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, filter: 'brightness(1.2)' }}
                            style={{
                                width: '180px',
                                height: '120px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '15px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '15px'
                            }}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                    filter: 'grayscale(0%)' // Keep original colors as requested, or can toggle to grayscale
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
