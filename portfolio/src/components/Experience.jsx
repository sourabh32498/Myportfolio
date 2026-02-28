import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Business Development Executive',
    company: 'Prem View Media and Technology',
    duration: 'January 2024 - July 2024',
    points: [
      'Supported client communication and requirement gathering for digital solutions.',
      'Coordinated with internal teams to improve delivery timelines and customer follow-up.',
      'Contributed to lead conversion efforts through structured outreach and reporting.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="mb-4">Work Experience</h2>
        {experiences.map((item) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            className="glass-card p-4 p-md-5 timeline-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3 }}
          >
            <p className="timeline-meta mb-2">{item.duration}</p>
            <h3 className="h4 mb-1">{item.role}</h3>
            <p className="text-info mb-3">{item.company}</p>
            <ul className="mb-0 timeline-list">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Experience
