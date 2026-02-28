import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Courses', href: '#courses' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <motion.header
      className="navbar navbar-expand-lg fixed-top app-navbar"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      <div className="container">
        <a className="navbar-brand fw-semibold" href="#home" aria-label="Go to home section">
          Sourabh<span className="premium-brand-dot">.dev</span>
        </a>
        <button
          className="navbar-toggler premium-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <nav id="mainNav" className="collapse navbar-collapse justify-content-end" aria-label="Main navigation">
          <ul className="navbar-nav gap-lg-2 mt-3 mt-lg-0">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a
                className="btn btn-sm btn-info ms-lg-3 mt-2 mt-lg-0 fw-semibold premium-nav-cta"
                href="/Sourabh-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar
