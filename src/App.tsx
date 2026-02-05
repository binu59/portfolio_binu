type SkillItem = {
  label: string
  iconUrl?: string
}

type SkillCategory = {
  title: string
  items: SkillItem[]
  note?: string
}

type Project = {
  title: string
  description: string
  techStack: string[]
  github: string
  image: string
}

type Experience = {
  title: string
  org: string
  timeframe: string
  impact: string[]
}

type Certification = {
  name: string
  org: string
  date: string
  badge: string
  image: string
  imageAlt?: string
  focus?: string
  verifyUrl?: string
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Data Science Tools',
    items: [
      { label: 'ML / Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { label: 'NumPy', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { label: 'Pandas', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { label: 'scikit-learn', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { label: 'Matplotlib', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
      { label: 'R', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
    ],
  },
  {
    title: 'Languages',
    items: [
      { label: 'C', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { label: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { label: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { label: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { label: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { label: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { label: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { label: 'Tailwind', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { label: 'Streamlit', iconUrl: 'https://streamlit.io/images/brand/streamlit-mark-color.svg' },
      { label: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { label: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
    
  },
  {
    title: 'Backend',
    items: [
      { label: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { label: 'Express.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { label: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    ],
    note: 'API and server-side development.',
  },
  {
    title: 'Database',
    items: [
      { label: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { label: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { label: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { label: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { label: 'Streamlit Cloud', iconUrl: 'https://streamlit.io/images/brand/streamlit-mark-color.svg' },
      { label: 'Power BI', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
      { label: 'Jupyter Notebook', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
      { label: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ],
  },
]

const projects: Project[] = [
  {
    title: 'Car Price Prediction System',
    description: 'A machine learning web app that predicts used car prices based on vehicle features.',
    techStack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Streamlit'],
    github: 'https://github.com/binu59/car_prediction.git',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Patient Data Analysis Dashboard',
    description: 'Interactive Power BI dashboard revealing trends and patterns across key healthcare metrics.',
    techStack: ['Power BI', 'DAX', 'Excel'],
    github: 'https://github.com/binu59/first-dash.git',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Airline Delay Analysis',
    description: 'A data analytics project focused on extracting insights from raw data using analysis and visualization techniques.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Excel'],
    github: 'https://github.com/binu59/airline-delay-analysis.git',
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Calculator',
    description: 'A Python-based calculator covering core arithmetic operations with a clean CLI workflow.',
    techStack: ['Python'],
    github: 'https://github.com/binu59/calculator.git',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Giraffe Cabs Service Application',
    description:
      'A multi-module cab service platform supporting ride booking, vehicle rental, tour management, cargo booking, and financial tracking.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Rajarathne/Giraffe-Cabs-ITP.git',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Recipe Search Web Application',
    description: 'A web application that allows users to search recipes using ingredients or keywords.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    github: 'https://github.com/binu59/Recipe-App.git',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Habit Flow – Android Application',
    description: 'An Android application to track daily habits, mood, and water intake.',
    techStack: ['Android', 'Java', 'Kotlin'],
    github: 'https://github.com/binu59/Habitflow.git',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
  },
]

const experiences: Experience[] = [
  {
    title: 'Data Science Undergraduate',
    org: 'SLIIT',
    timeframe: 'Present',
    impact: [
      'Applying Python, SQL, and ML coursework to personal projects and dashboards.',
      'Seeking internships / entry-level DS or ML Engineer roles to ship production-grade work.',
    ],
  },
]

const certifications: Certification[] = [
  {
    name: 'AI/ML Stage 1',
    org: 'SLIIT',
    date: '2025',
    badge: 'ML',
    image: '/Binu%20Mewanya%20-%202025-12-20%20(1).pdf',
    imageAlt: 'Binu Mewanya AI/ML certificate PDF',
    verifyUrl: 'https://code.sliit.org/certificates/gtwhidv2pw',
  },
  {
    name: 'Python Programming',
    org: 'University of Moratuwa',
    date: '2025',
    badge: 'PY',
    image: '/Python_Programming_E-Certificate.pdf',
    imageAlt: 'Python Programming certificate from University of Moratuwa',
    verifyUrl: 'https://open.uom.lk/verify',
  },
  
  
  
]

const learning: string[] = [
  'GenAI workflows for data apps.',
  'Power BI dashboards and storytelling.',
  'Model deployment and monitoring best practices.',
]

const socials = {
  email: 'mewanya@gmail.com',
  github: 'https://github.com/binu59',
  linkedin: 'https://www.linkedin.com/in/binu-mewanya-09a36229a/',
  phone: '0707479213',
  resume: '/Binu%20Mewanya_cv.pdf',
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  highlight,
}: {
  eyebrow?: string
  title: string
  description?: string
  highlight?: boolean
}) => (
  <div className="flex flex-col gap-2">
    {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
    <h2
      className={
        highlight
          ? 'font-display text-3xl font-semibold bg-gradient-to-r from-primary via-cyan-300 to-secondary bg-clip-text text-transparent drop-shadow md:text-4xl'
          : 'font-display text-3xl font-semibold text-white md:text-4xl'
      }
    >
      {title}
    </h2>
    {description ? <p className="max-w-3xl text-base text-muted">{description}</p> : null}
  </div>
)

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-border/70 bg-white/5 px-4 py-3 text-sm text-muted">
    <div className="text-xs uppercase tracking-[0.15em] text-primary/80">{label}</div>
    <div className="mt-1 text-lg font-semibold text-white">{value}</div>
  </div>
)

const SkillCard = ({ category }: { category: SkillCategory }) => (
  <div className="rounded-3xl bg-gradient-to-r from-purple-500/80 via-fuchsia-500/70 to-cyan-400/60 p-[2px] shadow-lg shadow-primary/20 transition duration-200 hover:-translate-y-1 hover:shadow-primary/30">
    <div className="flex h-full flex-col gap-3 rounded-[20px] border border-border/60 bg-black/70 p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
          {category.note ? <p className="text-sm text-muted">{category.note}</p> : null}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {category.items.map((item) => (
          <div
            key={`${category.title}-${item.label}`}
            className="rounded-2xl bg-gradient-to-r from-purple-500/70 via-fuchsia-500/70 to-cyan-400/60 p-[2px] shadow-lg shadow-primary/15"
          >
            <div className="group flex h-full w-full flex-col items-center gap-1.5 rounded-[14px] bg-black/70 px-3 py-2.5 ring-1 ring-border/60 transition duration-200 hover:-translate-y-0.5 hover:ring-primary/70 hover:shadow-primary/25">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/70 ring-1 ring-border/70 transition duration-200 group-hover:scale-105 group-hover:ring-primary/70">
                {item.iconUrl ? (
                  <img
                    src={item.iconUrl}
                    alt={item.label}
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                    style={item.label.toLowerCase().includes('express') ? { filter: 'invert(1) brightness(2)' } : undefined}
                  />
                ) : (
                  <span className="text-sm text-muted">{item.label}</span>
                )}
              </div>
              <span className="text-xs text-white">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-white/5 shadow-lg shadow-primary/10 transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-primary/20">
    <div className="relative h-52 overflow-hidden">
      <img
        src={project.image}
        alt={`${project.title} thumbnail`}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" aria-hidden />
      <div className="absolute bottom-4 left-4 flex flex-col gap-1">
        <span className="eyebrow">Featured Project</span>
        <h3 className="text-xl font-semibold text-white drop-shadow-sm">{project.title}</h3>
      </div>
    </div>

    <div className="flex flex-1 flex-col gap-4 p-6">
      <p className="text-sm text-muted">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={`${project.title}-${tech}`}
            className="rounded-full border border-border/60 bg-black/60 px-3 py-1 text-xs text-muted transition duration-200 hover:border-primary/70 hover:text-primary"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-2">
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition duration-200 hover:text-secondary"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          View Code
          <span aria-hidden className="text-base">
            →
          </span>
        </a>
      </div>
    </div>
  </article>
)

const CertificationCard = ({ certification }: { certification: Certification }) => (
  <article className="group flex flex-col gap-4 overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-black/70 p-[2px] shadow-lg shadow-primary/10 transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-primary/25">
    <div className="flex h-full flex-col gap-4 rounded-[22px] bg-base/90 p-5">
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-white/5">
        {certification.image.toLowerCase().endsWith('.pdf') ? (
          <object
            data={certification.image}
            type="application/pdf"
            className="h-36 w-full"
            aria-label={certification.imageAlt ?? certification.name}
          >
            <div className="flex h-36 items-center justify-center bg-black/70 text-sm text-white/80">
              PDF preview not supported. <a className="ml-2 text-primary underline" href={certification.image} target="_blank" rel="noreferrer">Open certificate</a>
            </div>
          </object>
        ) : (
          <img
            src={certification.image}
            alt={certification.imageAlt ?? certification.name}
            className="h-36 w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" aria-hidden />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/80 via-cyan-400/80 to-secondary/80 text-sm font-bold text-black shadow-lg shadow-primary/20 ring-1 ring-white/20">
            {certification.badge}
          </div>
          <span className="rounded-full bg-black/60 px-2 py-1 text-[11px] font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur-sm">
            {certification.org}
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{certification.name}</h3>
          <p className="text-sm text-muted">{certification.org}</p>
        </div>
        <span className="pill text-xs bg-white/5 text-white/90">{certification.date}</span>
      </div>

      {certification.focus ? <p className="text-sm text-muted">{certification.focus}</p> : null}

      <div className="mt-auto flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-muted">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_12px_rgba(56,189,248,0.6)]" aria-hidden />
          <span>Verified learning track</span>
        </div>
        {certification.verifyUrl ? (
          <a
            className="inline-flex items-center gap-2 font-semibold text-primary transition duration-200 hover:text-secondary"
            href={certification.verifyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Verify
            <span aria-hidden className="text-base">
              →
            </span>
          </a>
        ) : (
          <span className="text-xs text-muted">Link on request</span>
        )}
      </div>
    </div>
  </article>
)

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.1),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.08),_transparent_30%),#0d1117] pb-16 text-white">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-base/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-secondary" />
            <div>
              <div className="font-display text-lg font-semibold">B.A. Binu Mewanya</div>
              <div className="text-xs text-muted">Data Science Undergraduate</div>
            </div>
          </div>
          <nav className="hidden items-center gap-4 text-sm text-muted md:flex">
            <a className="hover:text-primary" href="#about">
              About
            </a>
            <a className="hover:text-primary" href="#skills">
              Skills
            </a>
            <a className="hover:text-primary" href="#projects">
              Projects
            </a>
            <a className="hover:text-primary" href="#certifications">
              Certifications
            </a>
            <a className="hover:text-primary" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              className="pill hidden md:inline-flex border-primary/60 text-primary hover:border-primary"
              href={socials.resume}
              download="Binu_Mewanya_Resume.pdf"
            >
              Download Resume
            </a>
            <a
              className="pill border-secondary/60 text-secondary hover:border-secondary"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-10">
        {/* Hero */}
        <section className="section-shell relative overflow-hidden px-8 py-10 md:px-10">
          <div className="absolute inset-0 bg-grid-dots opacity-40" aria-hidden />
          <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <div className="flex flex-col gap-6">
              <p className="eyebrow">Data Science | ML</p>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
                <span className="text-white">Hi, I'm</span> <br />
                <span className="text-6xl md:text-7xl bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">Binu Mewanya</span>
              </h1>
              <p className="max-w-2xl text-lg text-muted">
                Data Science undergraduate focusing on Python, SQL, and scikit-learn. Building and deploying
                ML projects, dashboards, and learning GenAI + Power BI to deliver production-ready insights.
              </p>
            </div>

            <div className="section-shell relative grid gap-4 bg-white/5 p-6">
              <div className="absolute inset-0 rounded-3xl border border-border/70" aria-hidden />
              <div className="relative flex flex-col items-center justify-center h-full">
                <img
                  src="/Binu%20Mewanya.jpeg"
                  alt="Portrait of Binu Mewanya"
                  className="w-full max-w-sm aspect-[3/4] rounded-2xl object-cover ring-1 ring-border/70 shadow-lg shadow-primary/15"
                  loading="lazy"
                />
                {/* Image file expected at public/Binu Mewanya.jpeg */}
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-shell px-8 py-10 md:px-10">
          <div className="flex flex-col w-full">
            <div className="text-center mb-6">
              <p className="eyebrow">About</p>
              <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">About Me</h2>
            </div>
            <div className="w-full">
              <p className="text-lg text-muted">
                I'm a Data Science undergraduate at SLIIT passionate about transforming raw data into meaningful insights through machine learning and analytics. My journey spans Python, SQL, and modern ML frameworks—tools I use to build predictive models, create interactive dashboards, and derive actionable intelligence from complex datasets. I believe the best data science combines technical rigor with practical storytelling to drive real decisions.

Beyond coursework, I'm a hands-on learner who builds personal and academic projects to experiment with emerging tools, validate concepts, and understand how AI systems perform in production environments. I'm particularly drawn to the intersection of feature engineering, model optimization, and deployment—where theory meets real-world constraints. My projects range from car price prediction models to analytics dashboards, each an opportunity to refine both technical and communication skills.

Currently, I'm deepening my expertise in GenAI patterns, Power BI visualization, and model deployment best practices while actively seeking internships or entry-level roles in data science and machine learning. I approach every challenge with curiosity, persistence, and a commitment to writing clean, reproducible code. My goal is to become a versatile data professional who not only builds reliable intelligent systems but also communicates their impact clearly to stakeholders.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Learning */}
        <section className="grid gap-6">
          <div className="section-shell flex flex-col gap-4 px-8 py-8">
            <div className="flex flex-col gap-4 items-center text-center">
              <SectionHeader
                eyebrow="Education"
                title="Academic Background"
              />
            </div>
            <div className="grid gap-3 md:grid-cols-2 text-sm text-muted">
              <div className="rounded-xl border border-border/70 bg-white/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/80">University</div>
                <p className="mt-1 font-medium text-white">BSc in Information Technology</p>
                <p className="text-white/75">Sri Lanka Institute of Information Technology (SLIIT)</p>
                <p className="mt-4 text-white/90">Currently pursuing undergraduate studies with exposure to software development, data-driven technologies, and modern IT concepts.</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-white/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/80">Secondary Education</div>
                <p className="mt-1 font-medium text-white">Anula Vidyalaya</p>
                <p className="mt-4 text-white/90">Completed secondary education with a strong academic foundation in core subjects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Skills"
            title="Technical Skills"
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skillCategories.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <SectionHeader
              title="FEATURED PROJECTS"
              highlight
            />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <SectionHeader
              eyebrow="Certifications"
              title="Proof of practice"
              highlight
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} certification={cert} />
            ))}
          </div>
        </section>

        {/* Experience / Activities */}
        <section className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Experience & Activities"
            title="How I collaborate"
            description="Academic projects and roles that show momentum toward applied data science."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {experiences.map((exp) => (
              <div key={exp.title} className="section-shell flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-sm text-muted">{exp.org}</p>
                  </div>
                  <span className="pill text-xs">{exp.timeframe}</span>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {exp.impact.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="section-shell flex flex-col gap-3 p-6">
              <h3 className="text-xl font-semibold text-white">Opportunities</h3>
              <p className="text-sm text-muted">
                Open to internships and entry-level roles in Data Science or ML Engineering. I enjoy collaborating with
                cross-functional teams, translating business questions into data-driven experiments, and deploying
                models that are easy to maintain.
              </p>
              <a className="pill w-fit bg-primary/10 border-primary/60 text-primary" href="#contact">
                Let&apos;s talk
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-shell flex flex-col gap-6 px-8 py-8">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something"
            description="Reach out for internships, project collaborations, or referrals."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 text-sm text-muted">
              <div className="rounded-xl border border-border/70 bg-white/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/80">Email</div>
                <a className="mt-2 block text-lg text-white" href={`mailto:${socials.email}`}>
                  {socials.email}
                </a>
              </div>
              <div className="rounded-xl border border-border/70 bg-white/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/80">Phone</div>
                <p className="mt-2 text-lg text-white">{socials.phone}</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted">
              <div className="rounded-xl border border-border/70 bg-white/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/80">Links</div>
                <div className="mt-2 flex flex-wrap gap-3">
                  <a className="pill" href={socials.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a className="pill" href={socials.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="pill" href={socials.resume} download="Binu_Mewanya_Resume.pdf">
                    Resume
                  </a>
                </div>
              </div>
              <div className="rounded-xl border border-border/70 bg-white/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary/80">Availability</div>
                <p className="mt-2 text-white/90">
                  Based in Sri Lanka (IST offset). Open to remote or on-site internships and entry-level roles.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-10 flex max-w-6xl items-center justify-between px-6 pb-10 text-sm text-muted">
        <span>© {new Date().getFullYear()} B.A. Binu Mewanya</span>
      </footer>
    </div>
  )
}

export default App
