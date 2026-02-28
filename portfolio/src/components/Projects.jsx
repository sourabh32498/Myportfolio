import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'Modern portfolio website built with React, Bootstrap, and Framer Motion to showcase skills, projects, and contact details.',
    tags: ['React', 'Bootstrap', 'Framer Motion', 'Vite'],
  },
  {
    title: 'Karanjkar Tailors',
    description: 'Live business website built and deployed to showcase tailoring services and contact information.',
    tags: ['React', 'Bootstrap', 'Live Project'],
    link: 'https://sourabh32498.github.io/karanjkar_tailors-/',
  },
  {
    title: 'Karanjkar Tailors Frontend',
    description: 'Frontend-focused live version of the Karanjkar Tailors website built and deployed with React.',
    tags: ['React', 'Frontend', 'Live Project'],
    link: 'https://sourabh32498.github.io/Karanjkartailorsfrontend/',
  },
  {
    title: 'Student Result Management System',
    description:
      'Web-based application using PHP and MySQL to store student details and manage student results efficiently.',
    tags: ['PHP', 'MySQL', 'Web App'],
  },
  {
    title: 'Old Age Home Management System',
    description:
      'End-to-end web application for old age homes to maintain records of senior citizens with registration-based tracking.',
    tags: ['PHP', 'MySQL', 'Record Management'],
  },
  {
    title: 'Hospital Management System',
    description:
      'Hospital web application that manages doctor and patient information and streamlines healthcare-related workflows.',
    tags: ['PHP', 'MySQL', 'Healthcare'],
  },
  {
    title: 'Library Management System',
    description:
      'Software application built with Python and Django to manage books, users, and borrowing/return operations.',
    tags: ['Python', 'Django', 'Library Automation'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="mb-4">Projects</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="col-lg-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3 }}
            >
              <article className="glass-card project-card p-4 h-100 d-flex flex-column">
                <h3 className="h5">{project.title}</h3>
                <p className="text-soft">{project.description}</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge text-bg-dark border border-secondary-subtle">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    className="btn btn-outline-info btn-sm mt-auto align-self-start"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="btn btn-outline-info btn-sm mt-auto align-self-start disabled">Academic Project</span>
                )}
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
