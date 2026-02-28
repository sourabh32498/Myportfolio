import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="container">
        <div className="row g-4 hero-layout align-items-start">
          <motion.aside
            className="col-lg-4"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.32 }}
          >
            <div className="glass-card p-4 hero-sidebar">
              <div className="profile-avatar" aria-hidden="true">
                SK
              </div>
              <h2 className="h5 mb-1 sidebar-name">Sourabh Karanjkar</h2>
              <p className="text-soft mb-3">Frontend Developer</p>
              <p className="premium-pill mb-4">Available for freelance and full-time roles</p>

              <div className="hero-metrics sidebar-metrics mb-4">
                <div>
                  <strong>10+</strong>
                  <span>Projects</span>
                </div>
                <div>
                  <strong>2+</strong>
                  <span>Years</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Responsive</span>
                </div>
              </div>

              <nav className="sidebar-links mb-4" aria-label="Section shortcuts">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </nav>

              <div className="d-flex gap-3 social-links">
                <a href="https://github.com/sourabh32498" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/sourabh-karanjkar-0b8b96201"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a href="mailto:karanjkarsourabh58@gmail.com" aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.aside>

          <motion.div
            className="col-lg-8 hero-main"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32 }}
          >
            <p className="eyebrow mb-2">Crafting clean UI, interactions, and performance</p>
            <h1 className="display-5 fw-bold hero-title">Building smooth, modern, and high-performing web experiences.</h1>
            <p className="lead text-soft mt-3 hero-lead">
              I am Sourabh, focused on React interfaces with clean architecture, polished UI, and motion that supports
              user flow.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-4">
              <a className="btn btn-info fw-semibold px-4" href="#projects">
                View Projects
              </a>
              <a className="btn btn-outline-info px-4" href="/Sourabh-Resume.pdf" target="_blank" rel="noreferrer">
                Download Resume
              </a>
              <a className="btn btn-outline-light px-4" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="row g-3 mt-3 highlight-list">
              <div className="col-sm-6">
                <div className="highlight-item">
                  <p className="mb-1 fw-semibold">UI Engineering</p>
                  <p className="mb-0 text-soft">Reusable React components with maintainable structure.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="highlight-item">
                  <p className="mb-1 fw-semibold">Motion with Purpose</p>
                  <p className="mb-0 text-soft">Framer Motion transitions that guide attention.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="highlight-item">
                  <p className="mb-1 fw-semibold">Responsive by Default</p>
                  <p className="mb-0 text-soft">Layouts that scale cleanly from mobile to desktop.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="highlight-item">
                  <p className="mb-1 fw-semibold">Performance Focus</p>
                  <p className="mb-0 text-soft">Lean UI and smooth rendering for fast experiences.</p>
                </div>
              </div>
            </div>

            <div className="hero-card premium-focus p-4 p-md-5 mt-4">
              <p className="mb-1 text-info fw-semibold">Current Focus</p>
              <h3 className="h4 mb-3">React + Motion UI</h3>
              <p className="mb-0 text-soft">
                Crafting responsive pages with Bootstrap layout, reusable components, and modern animations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
