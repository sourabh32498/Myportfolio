import { motion } from 'framer-motion'

const educationData = [
  {
    title: 'Master of Computer Applications (MCA)',
    note: 'Postgraduate Program',
    detail: 'Focused on advanced application development, backend systems, and practical software projects.',
  },
  {
    title: 'Bachelor of Computer Applications (BCA)',
    note: 'Undergraduate Program',
    detail: 'Built core knowledge in programming, databases, software engineering, and web development.',
  },
]

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="mb-4">Education</h2>
        <div className="row g-3">
          {educationData.map((item) => (
            <motion.div
              key={item.title}
              className="col-lg-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3 }}
            >
              <article className="glass-card p-4 h-100 timeline-card">
                <h3 className="h5 mb-1">{item.title}</h3>
                <p className="timeline-meta mb-2">{item.note}</p>
                <p className="text-soft mb-0">{item.detail}</p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
