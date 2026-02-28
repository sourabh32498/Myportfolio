import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="row g-4 align-items-stretch"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.28 }}
        >
          <div className="col-lg-7">
            <div className="glass-card h-100 p-4 p-md-5">
              <h2 className="mb-3">About Me</h2>
              <p className="mb-0 text-soft">
                I enjoy building products that are fast, clear, and useful. My workflow combines design sensitivity
                with practical engineering, from reusable component systems to performance-friendly rendering and
                maintainable structure.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="glass-card h-100 p-4">
              <h3 className="h5 mb-3">Quick Snapshot</h3>
              <ul className="list-unstyled about-list mb-0">
                <li>Based in India</li>
                <li>Focused on React and UI engineering</li>
                <li>Comfortable with Bootstrap and Framer Motion</li>
                <li>Strong interest in full-stack growth</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
