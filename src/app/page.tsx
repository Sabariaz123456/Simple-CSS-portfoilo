import Image from "next/image";
import Image1 from "../../../my-app/Images/codergirl.jpeg"
import image2 from "../../../my-app/Images/codergirl.jpeg"
import image3 from "../../../my-app/Images/th.jpeg"
export default function Portfolio() {
  return (
   
    <div className="portfolio-container">
      {/* Intro Section */}
      <section className="intro">
        <div className="intro-content">
          <Image 
            src={Image1} 
            alt="Profile Picture" 
            width={180} 
            height={180} 
            className="profile-picture"
          />
          <h1 className="intro-heading">
            Hello, I m <span className="highlight">Saba Muhammad Riaz</span>
          </h1>
          <p className="intro-description">
            I m a creative developer specializing in front-end development. Check out my work below!
          </p>
          <a href="#projects" className="btn-primary">View Projects</a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2 className="section-title">My Skills</h2>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Next.js</li>
        </ul>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-cards">
          {/* Project 1 */}
          <div className="project-card">
            <Image 
              src={image2} 
              alt="Project 1" 
              width="350" 
              height="350" 
              className="project-image"
            />
            <h3 className="project-title">Project 1</h3>
            <p className="project-description">
              A brief description of my first project goes here.
            </p>
            <a href="https://www.linkedin.com/in/saba-muhammad-riaz-2333512b5/" className="btn-secondary">View on GitHub</a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <Image 
              src={image3} 
              alt="Project 2" 
              width="350" 
              height="350" 
              className="project-image"
            />
            <h3 className="project-title">Project 2</h3>
            <p className="project-description">
              A brief description of my second project goes here.
            </p>
            <a href="https://www.linkedin.com/in/saba-muhammad-riaz-2333512b5/" className="btn-secondary">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          If you would like to connect, feel free to reach out!
        </p>
        <a href="https://www.linkedin.com/in/saba-muhammad-riaz-2333512b5/" className="btn-primary">Contact Me</a>
      </section>
    </div>
  );
}
