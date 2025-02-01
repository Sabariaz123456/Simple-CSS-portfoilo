import Image from "next/image";
export default function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-content">
          <h2 className="about-heading">Hi, I m Saba Muhammad Riaz</h2>
          <p className="about-description">
            I m a passionate front-end developer with a love for creating interactive, user-friendly web experiences. 
            My main goal is to build responsive, beautiful websites that not only look great but also provide an intuitive experience for users.
          </p>
          <p className="about-description">
            I specialize in modern web technologies like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, 
            and <strong>React/Next.js</strong>. When I m not coding, I enjoy exploring new web design trends, 
            contributing to open-source projects, and learning about the latest developments in the tech world.
          </p>
          <p className="about-description">
            Feel free to check out my projects and get in touch if you’re interested in collaborating!
          </p>
        </div>
      </section>
      
      <div className="about-image">
        <Image 
          src="https://as1.ftcdn.net/v2/jpg/05/93/82/76/1000_F_593827677_uXCPMbS2ztblOlGRIqSklgjElMKFbNuD.jpg" 
          alt="Sabariaz"
          width={280} 
          height={280} 
          className="profile-picture" 
        />
      </div>
    </div>
  );
}


