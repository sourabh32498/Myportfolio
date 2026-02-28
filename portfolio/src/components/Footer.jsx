import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <p className="mb-0">&copy; {new Date().getFullYear()} Sourabh. All rights reserved.</p>
        <div className="d-flex gap-3 footer-links">
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
        </div>
        <p className="mb-0 small footer-note">Designed and built with React</p>
      </div>
    </footer>
  )
}

export default Footer
