import { motion } from 'framer-motion'

const courses = [
  {
    title: 'Full Stack Development',
    provider: 'Certificate Course',
    focus: 'Frontend and backend development using modern web technologies and deployment workflows.',
  },
  {
    title: 'MS-CIT',
    provider: 'Maharashtra State Certificate',
    focus: 'Fundamental IT literacy, office productivity tools, and practical digital skills.',
  },
  {
    title: 'Power BI',
    provider: 'Data Visualization Certificate',
    focus: 'Interactive dashboards, data modeling, and business reporting with Power BI.',
  },
  {
    title: 'PHP and MySQL Development',
    provider: 'Practical Project Learning',
    focus: 'Built multiple management systems using PHP with MySQL database integration.',
  },
  {
    title: 'Python and Django Development',
    provider: 'Practical Project Learning',
    focus: 'Developed a complete library management web application with Django.',
  },
]

function Courses() {
  return (
    <section id="courses" className="section">
      <div className="container">
        <h2 className="mb-4">Courses & Certifications</h2>
        <div className="row g-3">
          {courses.map((course) => (
            <motion.div
              key={course.title}
              className="col-lg-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3 }}
            >
              <article className="glass-card p-4 h-100 course-card">
                <h3 className="h5 mb-1">{course.title}</h3>
                <p className="course-provider mb-2">{course.provider}</p>
                <p className="text-soft mb-0">{course.focus}</p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
