import { useState } from 'react'

const profileImage =
  'https://placehold.co/520x520/06224a/ffffff?text=George+Aguiar'

const projectOptions = ['Software', 'Video Games', 'Plugins']

const projects = [
  {
    title: 'LimaGroup',
    category: 'Software',
    image: 'https://placehold.co/720x420/06224a/ffffff?text=LimaGroup',
    description:
      'A clean business website sample with simple navigation, service sections, and a contact-focused layout.',
  },
  {
    title: 'Waspee',
    category: 'Software',
    image: 'https://placehold.co/720x420/06224a/ffffff?text=Waspee',
    description:
      'A sample productivity dashboard concept designed for clear tasks, quick decisions, and reliable data display.',
  },
  {
    title: 'LetsFindPeople',
    category: 'Software',
    image: 'https://placehold.co/720x420/06224a/ffffff?text=LetsFindPeople',
    description:
      'A people-search interface sample with structured cards, profile summaries, and simple filtering ideas.',
  },
]

const education = [
  {
    role: 'Computer Systems Technician',
    entity: 'Escola Secundária de Santo André',
    date: '2023 - 2026',
  },
]

const experience = [
  {
    role: 'Software Developer',
    entity: 'LimaGroup Consulting - Internship',
    date: 'Jun 2025 - Jul 2025',
  },
]

const skillIcons = [
  ['JavaScript', 'bi-filetype-js'],
  ['Python', 'bi-filetype-py'],
  ['Java', 'bi-filetype-java'],
  ['HTML', 'bi-filetype-html'],
  ['CSS', 'bi-filetype-css'],
  ['React', 'bi-filetype-jsx'],
  ['Node.js', 'bi-server'],
  ['Express', 'bi-diagram-3'],
  ['Django', 'bi-braces'],
  ['MySQL', 'bi-database-fill'],
  ['PostgreSQL', 'bi-database'],
  ['MongoDB', 'bi-database-check'],
  ['GitHub', 'bi-github'],
]

function Home() {
  const [selectedProjectOption, setSelectedProjectOption] =
    useState('Software')

  const visibleProjects =
    selectedProjectOption === 'Software'
      ? projects
      : projects.filter((project) => project.category === selectedProjectOption)

  return (
    <main>
      <section id="home" className="bg-white text-primary">
        <div className="container py-5">
          <div className="row align-items-center g-5 py-lg-5">
            <div className="col-lg-7">
              <h1 className="display-3 fw-bold lh-1 mb-4">
                Welcome to George Aguiar's Portfolio
              </h1>
              <p className="lead fw-semibold mb-4">
                Passionate about software development, artificial intelligence, and robotics. Aiming to build a fully automated world.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  className="btn btn-lg bg-primary text-white border-primary fw-semibold"
                  href="#projects"
                >
                  View Projects
                </a>
                <a
                  className="btn btn-lg border border-2 border-primary text-primary fw-semibold"
                  href="#contact"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <img
                src={profileImage}
                className="img-fluid rounded-circle border border-5 border-primary"
                alt="Sample profile portrait for George Aguiar"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-primary text-white">
        <div className="container py-5">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
            <div>
              <h2 className="display-6 fw-bold mb-0 text-white">Projects</h2>
            </div>
            <select
              className="form-select w-auto fw-semibold text-center"
              aria-label="Select project category"
              value={selectedProjectOption}
              onChange={(event) => setSelectedProjectOption(event.target.value)}
            >
              {projectOptions.map((option) => (
                <option className="text-center" value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="row g-4">
            {visibleProjects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.title}>
                <article className="card h-100 border border-white bg-white text-primary">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={`${project.title} sample project preview`}
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="h4 fw-bold">{project.title}</h3>
                    <p className="fw-semibold mb-4">{project.description}</p>
                    <a
                      className="btn bg-primary text-white border-primary fw-semibold mt-auto"
                      href="#contact"
                    >
                      Ask About This
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="bg-white text-primary">
        <div className="container pt-5 pb-5">
          <div className="row g-5">
            <div className="col-lg-4">
              <h2 className="display-6 fw-bold text-center mb-4">Education</h2>
              {education.map((item) => (
                <article
                  className="card border-0 bg-white text-primary h-100"
                  key={item.role}
                >
                  <div className="card-body p-0">
                    <div className="row align-items-center">
                      <div className="col-md-4 text-center">
                        <img
                          src="https://placehold.co/220x220/06224a/ffffff?text=AESA"
                          className="img-fluid"
                          alt="Sample AESA education logo"
                        />
                      </div>
                      <div className="col-md-8">
                        <h3 className="h4 fw-bold mb-3">{item.role}</h3>
                        <p className="fs-5 fw-bold mb-2">{item.entity}</p>
                        <p className="fw-semibold mb-0">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="col-lg-4" id="experience">
              <h2 className="display-6 fw-bold text-center mb-4">
                Work Experience
              </h2>
              {experience.map((item) => (
                <article
                  className="card border-0 bg-white text-primary h-100"
                  key={item.role}
                >
                  <div className="card-body p-0">
                    <div className="row align-items-center">
                      <div className="col-md-4 text-center">
                        <img
                          src="https://placehold.co/220x220/06224a/ffffff?text=LimaGroup"
                          className="img-fluid"
                          alt="Sample LimaGroup work logo"
                        />
                      </div>
                      <div className="col-md-8">
                        <h3 className="h4 fw-bold mb-3">{item.role}</h3>
                        <p className="fs-5 fw-bold mb-2">{item.entity}</p>
                        <p className="fw-semibold mb-0">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="col-lg-4">
              <h2 className="display-6 fw-bold text-center mb-4">Skills</h2>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {skillIcons.map(([label, icon]) => (
                  <i
                    className={`bi ${icon} fs-2`}
                    aria-label={label}
                    title={label}
                    key={label}
                  ></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
