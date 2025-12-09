import React from 'react';
import { motion } from 'framer-motion';
import basicsVideo from '../assets/activity_basics.mp4';
import compImg from '../assets/activity_competition.jpeg';
import rndImg1 from '../assets/activity_research_1.jpeg';
import rndImg2 from '../assets/activity_research_2.jpeg';

const FeatureBlock = ({ title, description, mediaSrc, mediaType = 'image', isReversed, delay }) => {
    // Helper to render media content
    const renderMedia = () => {
        if (mediaType === 'video') {
            return (
                <video
                    src={mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            );
        } else if (Array.isArray(mediaSrc)) {
            // Handle multiple images (e.g. for Research)
            return (
                <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                    {mediaSrc.map((src, index) => (
                        <div key={index} style={{ flex: 1, height: '100%', borderLeft: index > 0 ? '1px solid #000' : 'none' }}>
                            <img
                                src={src}
                                alt={`${title} ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <img
                    src={mediaSrc}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            );
        }
    };

    // Animation constants
    const textInitial = isReversed ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 };
    const mediaInitial = isReversed ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: isReversed ? 'row-reverse' : 'row',
                alignItems: 'center',
                minHeight: '500px',
                background: 'var(--bg-dark)',
                overflow: 'hidden',
                flexWrap: 'wrap'
            }}
            className="feature-block"
        >
            {/* Text Content */}
            <motion.div
                initial={textInitial}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: delay }}
                style={{
                    flex: '1',
                    minWidth: '350px',
                    padding: '60px',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <h3 style={{
                    fontSize: '3rem',
                    marginBottom: '20px',
                    lineHeight: '1.2',
                    fontFamily: 'var(--font-display)',
                    textTransform: 'uppercase'
                }}>
                    {title}
                </h3>
                <p style={{
                    color: '#aaa',
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    marginBottom: '40px',
                    maxWidth: '500px'
                }}>
                    {description}
                </p>

            </motion.div>

            {/* Media Content */}
            <motion.div
                initial={mediaInitial}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: delay }}
                style={{
                    flex: '1',
                    minWidth: '350px',
                    height: '500px',
                    position: 'relative'
                }}
            >
                {renderMedia()}

                {/* Overlay for aesthetic */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, #050505 0%, transparent 30%)',
                    pointerEvents: 'none'
                }} />
            </motion.div>
        </div>
    );
};

const FocusAreas = () => {
    return (
        <section id="focus-areas" style={{ position: 'relative', zIndex: 10, background: 'var(--bg-dark)', paddingBottom: '100px' }}>
            {/* Header */}
            <div className="container" style={{ padding: '100px 20px 50px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <h2 style={{ fontSize: '4rem', marginBottom: '20px' }}>
                    OUR <span style={{ color: 'var(--primary-color)' }}>ACTIVITIES</span>
                </h2>
                <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: '#888' }}>
                    Pushing the boundaries of what is possible with autonomous machines.
                </p>
            </div>

            {/* Feature Blocks */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FeatureBlock
                    title="Fundamentals & IoT"
                    description="Building the bedrock of robotics. We master the core principles of electronics, PCB design, CAD, and C/C++ programming to create intelligent connected devices."
                    mediaSrc={basicsVideo}
                    mediaType="video"
                    isReversed={false}
                    delay={0}
                />

                <FeatureBlock
                    title="National Competitions"
                    description="Our learning goes beyond the lab. We actively challenge ourselves in national-scale competitions, specifically the Indonesian Robot Contest (KRI). Participating in these events allows us to benchmark our research against the best universities in Indonesia and push the boundaries of what our robots can do."
                    mediaSrc={compImg}
                    mediaType="image"
                    isReversed={true}
                    delay={0.1}
                />

                <FeatureBlock
                    title="Advanced R&D"
                    description="Exploring the future with SLAM, Computer Vision, and Autonomous Navigation. Our AMR and AGV units are designed for real-world application."
                    mediaSrc={[rndImg1, rndImg2]}
                    mediaType="image"
                    isReversed={false}
                    delay={0.1}
                />
            </div>
        </section>
    );
};

export default FocusAreas;
