import { motion } from 'framer-motion'
import { FaCss3Alt, FaDatabase, FaHtml5, FaJava, FaJs, FaPython, FaReact } from 'react-icons/fa'
import { SiDjango, SiPhp } from 'react-icons/si'

const skills = [
  { name: 'PHP', level: 86, icon: SiPhp },
  { name: 'MySQL', level: 84, icon: FaDatabase },
  { name: 'Django', level: 80, icon: SiDjango },
  { name: 'Python', level: 82, icon: FaPython },
  { name: 'React', level: 88, icon: FaReact },
  { name: 'JavaScript', level: 85, icon: FaJs },
  { name: 'HTML', level: 90, icon: FaHtml5 },
  { name: 'CSS', level: 86, icon: FaCss3Alt },
  { name: 'Java', level: 75, icon: FaJava },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="mb-4">Skills</h2>
        <p className="text-soft mb-4">Core focus: PHP + MySQL projects, with Python/Django and modern frontend tools.</p>
        <div className="row g-3">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                className="col-md-6"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.28 }}
              >
                <div className="glass-card p-3 h-100">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <Icon className="skill-icon" />
                      <span>{skill.name}</span>
                    </div>
                    <span className="small text-soft">{skill.level}%</span>
                  </div>
                  <div className="progress bg-dark-subtle" role="progressbar" aria-label={`${skill.name} proficiency`}>
                    <motion.div
                      className="progress-bar bg-info"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45 }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
