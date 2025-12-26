import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react"

export default function CVPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <header className="bg-primary text-primary-foreground px-8 py-10">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Sarah Mitchell</h1>
          <p className="text-xl font-medium opacity-90">Senior Software Engineer</p>

          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>sarah.mitchell@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <span>linkedin.com/in/sarahmitchell</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>github.com/sarahmitchell</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>sarahmitchell.dev</span>
            </div>
          </div>
        </header>

        <div className="px-8 py-8">
          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2 mb-4">
              Professional Summary
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Results-driven Senior Software Engineer with 7+ years of experience building scalable web applications and
              leading development teams. Expertise in React, TypeScript, Node.js, and cloud architecture. Proven track
              record of delivering high-impact features that improve user experience and drive business growth. Strong
              advocate for clean code, testing best practices, and agile methodologies.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2 mb-4">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Frontend Development</h3>
                <p className="text-sm text-foreground/80">
                  React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Redux, React Query
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Backend Development</h3>
                <p className="text-sm text-foreground/80">
                  Node.js, Express, Python, Django, REST APIs, GraphQL, PostgreSQL, MongoDB
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cloud & DevOps</h3>
                <p className="text-sm text-foreground/80">
                  AWS, Vercel, Docker, Kubernetes, CI/CD, GitHub Actions, Jenkins
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tools & Methodologies</h3>
                <p className="text-sm text-foreground/80">
                  Git, Agile/Scrum, Jest, Cypress, Figma, JIRA, Test-Driven Development
                </p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2 mb-4">
              Professional Experience
            </h2>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Senior Software Engineer</h3>
                  <p className="text-base font-medium text-muted-foreground">TechCorp Solutions, San Francisco, CA</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">Jan 2021 - Present</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-foreground/80 text-sm">
                <li>
                  Led development of customer-facing dashboard serving 50,000+ users, resulting in 35% increase in user
                  engagement
                </li>
                <li>
                  Architected and implemented microservices architecture using Node.js and AWS, reducing system latency
                  by 40%
                </li>
                <li>Mentored team of 5 junior developers, conducting code reviews and implementing best practices</li>
                <li>
                  Implemented CI/CD pipeline using GitHub Actions, reducing deployment time from 2 hours to 15 minutes
                </li>
                <li>Collaborated with product and design teams to deliver features using agile methodologies</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Software Engineer</h3>
                  <p className="text-base font-medium text-muted-foreground">InnovateTech Inc., San Francisco, CA</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">Jun 2018 - Dec 2020</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-foreground/80 text-sm">
                <li>
                  Developed responsive web applications using React and TypeScript, improving mobile user experience by
                  50%
                </li>
                <li>Built RESTful APIs with Express and PostgreSQL, handling 1M+ requests per day</li>
                <li>Implemented comprehensive test suite with Jest and Cypress, achieving 85% code coverage</li>
                <li>Optimized database queries, reducing average API response time by 60%</li>
                <li>Participated in agile ceremonies and contributed to sprint planning and retrospectives</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Junior Software Developer</h3>
                  <p className="text-base font-medium text-muted-foreground">StartupHub, San Jose, CA</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">Aug 2017 - May 2018</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-foreground/80 text-sm">
                <li>Developed and maintained features for e-commerce platform using JavaScript and Python</li>
                <li>Collaborated with cross-functional teams to implement user-requested features</li>
                <li>Fixed bugs and performed code refactoring to improve application performance</li>
                <li>Participated in daily standups and contributed to technical documentation</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2 mb-4">Education</h2>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Bachelor of Science in Computer Science</h3>
                  <p className="text-base font-medium text-muted-foreground">Stanford University, Stanford, CA</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">2013 - 2017</span>
              </div>
              <p className="text-sm text-foreground/80">
                GPA: 3.8/4.0 | Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2 mb-4">Certifications</h2>
            <ul className="space-y-2">
              <li className="text-foreground/80">
                <span className="font-semibold text-foreground">AWS Certified Solutions Architect - Associate</span> -
                Amazon Web Services, 2022
              </li>
              <li className="text-foreground/80">
                <span className="font-semibold text-foreground">Professional Scrum Master (PSM I)</span> - Scrum.org,
                2021
              </li>
            </ul>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2 mb-4">Notable Projects</h2>

            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground mb-1">
                Open Source Contributor - React Testing Library
              </h3>
              <p className="text-sm text-foreground/80 mb-2">
                Contributed bug fixes and documentation improvements to popular React testing library with 10M+
                downloads
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground mb-1">Personal Finance Tracker App</h3>
              <p className="text-sm text-foreground/80 mb-2">
                Full-stack web application built with Next.js, PostgreSQL, and Plaid API for budget management and
                financial insights
              </p>
            </div>
          </section>

          {/* Awards */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2 mb-4">
              Awards & Recognition
            </h2>
            <ul className="space-y-2">
              <li className="text-foreground/80">
                <span className="font-semibold text-foreground">Employee of the Year</span> - TechCorp Solutions, 2023
              </li>
              <li className="text-foreground/80">
                <span className="font-semibold text-foreground">Hackathon Winner</span> - InnovateTech Internal
                Hackathon, 2019
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
