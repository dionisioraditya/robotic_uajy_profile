import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" style={{
            background: '#020202',
            padding: '50px 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '30px', fontSize: '2rem' }}>Connect With Us</h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
                    <a href="https://instagram.com/robotic_uajy" target="_blank" rel="noopener noreferrer"
                        style={{
                            color: '#fff',
                            fontSize: '1.2rem',
                            padding: '10px 20px',
                            border: '1px solid #333',
                            borderRadius: '30px'
                        }}
                        className="hover-glow"
                    >
                        Instagram
                    </a>
                    <a href="https://www.linkedin.com/company/robotic-uajy/" target="_blank" rel="noopener noreferrer"
                        style={{
                            color: '#fff',
                            fontSize: '1.2rem',
                            padding: '10px 20px',
                            border: '1px solid #333',
                            borderRadius: '30px'
                        }}
                        className="hover-glow"
                    >
                        LinkedIn
                    </a>
                </div>

                <p style={{ color: '#555', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Kelompok Studi Robotik UAJY. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
