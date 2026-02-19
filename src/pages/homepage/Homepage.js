import "./Homepage.css"
import PortfolioGrid from "../../components/PortfolioGrid";
import { useTypewriter } from '../../Hooks/UseTypewriter';
import { useFetch } from '../../Hooks/useFetch'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

const greetings = [
    "Hello",
    "Ẹ ǹlẹ́ o",     // Yoruba
    "Sannu",         // Hausa
    "Ndewo",         // Igbo
    "Bonjour"        // French
];

export default function Homepage() {
    const typedText = useTypewriter(greetings, 100, 60, 1800);
    const { data, isPending, error } = useFetch('http://localhost:3000/projects');

    return (
        <div className="container">
            <section className="hero">
                <div className="hero-content">
                    <motion.div className="welcome-msg"
                        initial={{ y: 500, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8, type: 'tween' }}
                    >
                        &lt; {typedText}!&gt;
                    </motion.div>
                    <motion.h1
                        initial={{ y: 500, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8, type: 'tween' }}
                    ><span>I'm</span>Oluwaseyifunmi</motion.h1>
                    <motion.p
                        initial={{ y: 500, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8, type: 'tween' }}
                    >Frontend Developer building modern web experiences.
                    </motion.p>
                    <motion.div className="hero-buttons"
                        initial={{ y: 500, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8, type: 'tween' }}
                    >
                        <a href="#contact" className="btn holographic-btn">
                            Contact me
                        </a>
                    </motion.div>
                </div>
            </section>
            <section id="about" className="about">
                <div className="about-content">
                    <h2>ABOUT ME</h2>
                    <div className="img-text">
                        <img src="/img/coder.gif" alt="coder.gif" />
                        <div className="aboutMe-text">
                            <p>
                                <span>H</span>ello! I'm Oluwaseyifunmi, a Front-End web Developer based in Igando,Lagos State.
                            </p>

                            <p>
                                My interest in web development was borne out of the fact that I've always had a knack for design right from my younger years.
                                The drawings and the little designs I made younger unlocked the creative side of me. I am a very creative and passionate developer
                                with a keen eye for details, without leaving out the aesthetic part.
                            </p>

                            <p>
                                I am a Mass Communication graduate and that has made me knowledgeable in the art and science of appealing to a heterogeneous set
                                of people which will always come in handy as a web developer.
                            </p>

                            <p>
                                My areas of proficiency are <strong>HTML5, CSS3, JavaScript, GitHub, Tailwind CSS, React.js</strong>.
                            </p>

                            <p>
                                I look forward to working with you.
                            </p>
                        </div>
                    </div>
                    <div className="about-buttons">
                        <a
                            href="/cv/banjo-oluwaseyifunmi-cv.pdf"
                            download
                            className="about-btn holographic-btn"
                        >
                            Download Resume
                        </a>
                        <Link to="/resume" className="about-btn active holographic-btn">
                            Go to Resume page
                        </Link>
                    </div>
                </div>
            </section>
            <section className="portfolio" id="portfolio" >
                <h2 className="portfolio-bg-text">PORTFOLIO</h2>
                <div className="portfolio-content">
                    <div className="text-line">
                        <h2>PORTFOLIO</h2>
                    </div>

                    {error && <p className="error-message">{error}</p>}
                    {isPending && <p className="loading-message">Loading...</p>}

                    {data && <PortfolioGrid projects={data} limit={4} />}

                    <motion.div className="see-more"
                        initial={{ opacity: 0, translateY: "50%" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.35, duration: 0.35, type: 'tween' }}
                    >
                        <Link to="/portfolio" className="view-more holographic-btn horizontal">
                            More →
                        </Link>
                    </motion.div>
                </div>
            </section >

            {/* footer */}

            <section id="contact" className="contact">
                <div className="contact-content">
                    <motion.h2
                        initial={{ opacity: 0, translateY: "-50%" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 0.25, duration: 0.35, type: 'tween' }}
                    >
                        Get in Touch
                    </motion.h2>
                    <div className="contact-grid">
                        <motion.div className="contact-left"
                            initial={{ opacity: 0, translateX: "-100%" }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ delay: 0.35, duration: 0.45, type: 'tween' }}
                        >
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <p className="contact-text">09059545434</p>
                            </div>

                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <p className="contact-text">Bajoseyi2@gmail.com</p>
                            </div>
                        </motion.div>
                        <motion.div className="contact-right"
                            initial={{ opacity: 0, translateX: "100%" }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ delay: 0.35, duration: 0.45, type: 'tween' }}
                        >
                            <p className="contact-cta">Interested in working with me?</p>
                            <p className="contact-subtitle">You can also contact me on these platforms</p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/oluwaseyifunmi-banjo-444867254" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                                </a>
                                <a href="https://x.com/BanjoJesse" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                                </a>
                                <a href="https://github.com/banjoseyi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FontAwesomeIcon icon={faGithub} className="icon" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                    <div className="footer-copyright">
                        <motion.p
                            initial={{ opacity: 0, translateY: "50%" }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ delay: 0.25, duration: 0.35, type: 'tween' }}
                        >
                            © 2026 Banjo Oluwaseyifunmi
                        </motion.p>
                    </div>
                </div>
            </section >
        </div >
    )
}
