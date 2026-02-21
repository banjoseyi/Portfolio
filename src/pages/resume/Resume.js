import "./Resume.css";

export default function Resume() {
  return (
    <section className="resume">
      <div className="resume-container">

        {/* LEFT SIDEBAR */}
        <aside className="resume-sidebar">
          <div className="resume-block">
            <h3>CONTACT</h3>
            <p>Lagos State, Nigeria</p>
            <p>Phone: +234 704 768 0784</p>
            <p>Email: banjoseyi2@gmail.com</p>
            <p>Portfolio:<br />oluwaseyifunmi-banjo.netlify.app</p>
            <p>GitHub: banjoseyi</p>
          </div>

          <div className="resume-block">
            <h3>TECHNICAL SKILLS</h3>
            <p>HTML5, CSS3, Tailwind CSS</p>
            <p>JavaScript</p>
            <p>Git, GitHub, Netlify</p>
            <p>Figma (Basic)</p>
          </div>

          <div className="resume-block">
            <h3>SOFT SKILLS</h3>
            <p>Problem solving</p>
            <p>Team collaboration</p>
            <p>Attention to detail</p>
            <p>Effective communication</p>
          </div>

          <div className="resume-block">
            <h3>LANGUAGE</h3>
            <p>English (Fluent)</p>
          </div>

          <div className="resume-block">
            <h3>HOBBIES</h3>
            <p>Reading</p>
            <p>Travelling</p>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="resume-content">
          <header className="resume-header">
            <h1>OLUWASEYIFUNMI OLUWATUNMISE BANJO</h1>
            <span>Frontend Web Developer</span>
          </header>

          <section>
            <h2>PROFESSIONAL SUMMARY</h2>
            <p>
              Frontend Web Developer with 1+ year experience building responsive,
              user-friendly web interfaces. Skilled in modern frontend tools and
              expanding into product design with Figma.
            </p>
          </section>

          <section>
            <h2>WORK EXPERIENCE</h2>

            <div className="experience">
              <div className="exp-header">
                <h4>720 Degree Innovation Hub</h4>
                <span>Feb 2022 – Dec 2022</span>
              </div>
              <p className="role">Frontend Developer Intern</p>

              <div className="experience-grid">
                <p>Responsive website development</p>
                <p>HTML, CSS, JavaScript</p>
                <p>Debugging & troubleshooting</p>
                <p>Student instruction</p>
                <p>Team collaboration</p>
                <p>Tech event presentations</p>
              </div>
            </div>
          </section>

          <section>
            <h2>KEY ACHIEVEMENTS</h2>
            <div className="experience-grid">
              <p>Built secure, maintainable websites</p>
              <p>Guided students to build responsive web pages</p>
            </div>
          </section>

          <section>
            <h2>EDUCATION</h2>
            <p>
              <strong>Yaba College of Technology</strong><br />
              HND Computer Science (2024 – 2026)
            </p>
            <p>
              <strong>Osun State Polytechnic, Iree</strong><br />
              OND Computer Science (2019 – 2021)
            </p>
          </section>

          <section>
            <h2>PROFESSIONAL CERTIFICATION</h2>
            <p>ALX Software Engineering Program – Frontend Development</p>
          </section>

          <section>
            <h2>CORE COMPETENCE</h2>
            <div className="experience-grid">
              <p>Service management</p>
              <p>Problem solving</p>
              <p>Team collaboration</p>
              <p>IT troubleshooting</p>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}