import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'Please fill all fields before sending.' })
      return
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:karanjkarsourabh58@gmail.com?subject=${subject}&body=${body}`

    setStatus({ type: 'success', message: 'Your mail app has been opened with your message.' })
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="mb-4">Contact</h2>
        <div className="row g-4">
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-card p-4 h-100">
              <h3 className="h5 mb-3">Let us build something solid.</h3>
              <ul className="list-unstyled contact-list mb-0">
                <li>
                  <FaEnvelope /> <a href="mailto:karanjkarsourabh58@gmail.com">karanjkarsourabh58@gmail.com</a>
                </li>
                <li>
                  <FaPhoneAlt /> <a href="tel:+919405121270">+91 9405121270</a>
                </li>
                <li>
                  <FaMapMarkerAlt /> Ahilyanagar, Maharashtra
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3 }}
          >
            <form className="glass-card p-4" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="contact-name">
                    Name
                  </label>
                  <input id="contact-name" name="name" className="form-control" type="text" placeholder="Your name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    className="form-control"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Tell me about your project..."
                  />
                </div>
                {status.message ? (
                  <div className="col-12">
                    <p className={`mb-0 form-status ${status.type === 'error' ? 'is-error' : 'is-success'}`}>{status.message}</p>
                  </div>
                ) : null}
                <div className="col-12">
                  <button type="submit" className="btn btn-info fw-semibold px-4">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
