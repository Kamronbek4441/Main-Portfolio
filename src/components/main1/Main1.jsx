import React from "react";
import "./Main1.css";
import hero from "../../assets/hero.jpg"

const Main1 = () => {
  return (
    <div>
      <main class="container">
        <div class="left">
          <img
            className="avatar"
            src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
            alt=""
          />
          <h1>
            Full-stack web and mobile app developer, and amateur astronaut.
          </h1>
          <p>
            I am a backend developer with expertise in Node.js. I have
            experience in building scalable, secure and reliable web
            applications using various frameworks and technologies. I enjoy
            solving complex problems and learning new skills. I am passionate
            about creating high-quality code that follows best practices and
            industry standards. I am always looking for new challenges and
            opportunities to grow as a developer.
          </p>
          <div class="socials">
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-github"></i>
            </a>
            <a href="#">
              <i class="fab fa-stack-overflow"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div class="right">
          <img src={hero} alt="" className="profile-img" />
        </div>
      </main>
      {/* --------------------------------------------------------------------------------------------------- */}
      <section class="projects-section" name="projects">
        <div class="container">
          <h2 class="section-title">My Projects</h2>
          <div class="projects-grid">
            <div class="project-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt=""
                className="project-icon"
              />
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore
                repellendus qui dicta nemo sit deleniti minima.
              </p>
              <a href="#">
                <i class="fas fa-link"></i> View Project
              </a>
            </div>

            <div class="project-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt=""
                className="project-icon"
              />
              <h3>Project 2</h3>
              <p>
                Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore
                repellendus qui dicta nemo sit deleniti minima.
              </p>
              <a href="#">
                <i class="fas fa-link"></i> View Project
              </a>
            </div>

            <div class="project-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt=""
                className="project-icon"
              />
              <h3>Project 3</h3>
              <p>
                Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore
                repellendus qui dicta nemo sit deleniti minima.
              </p>
              <a href="#">
                <i class="fas fa-link"></i> View Project
              </a>
            </div>

            <div class="project-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt=""
                className="project-icon"
              />
              <h3>Project 4</h3>
              <p>
                Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore
                repellendus qui dicta nemo sit deleniti minima.
              </p>
              <a href="#">
                <i class="fas fa-link"></i> View Project
              </a>
            </div>

            <div class="project-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt=""
                className="project-icon"
              />
              <h3>Project 5</h3>
              <p>
                Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore
                repellendus qui dicta nemo sit deleniti minima.
              </p>
              <a href="#">
                <i class="fas fa-link"></i> View Project
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------------------------------- */}
      <section class="main-section" name="articles">
        <div class="container">
          <div class="articles">
            <div class="article">
              <p class="date">| 7 May 2023</p>
              <h3>The Benefits of Cloud Computing</h3>
              <p class="description">
                Cloud computing offers a range of benefits, including cost
                savings and increased flexibility. Find out why more businesses
                are turning to the cloud.
              </p>
              <a href="#" class="read-more">
                Read article <i class="fas fa-arrow-right"></i>
              </a>
            </div>

            <div class="article">
              <p class="date">| 7 May 2023</p>
              <h3>Artificial Intelligence in Healthcare</h3>
              <p class="description">
                AI is transforming the healthcare industry, from improving
                patient outcomes to streamlining operations. Discover the latest
                applications of this game-changing technology.
              </p>
              <a href="#" class="read-more">
                Read article <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div class="work-box">
            <h4>
              <i class="fas fa-briefcase"></i> Work
            </h4>
            <div class="work-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                alt="Facebook"
              />
              <div class="details">
                <strong>Facebook</strong>
                <span>Software Engineer</span>
              </div>
              <span class="year">2025 - Present</span>
            </div>

            <div class="work-item">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                alt="Twitter"
              />
              <div class="details">
                <strong>Twitter</strong>
                <span>Software Engineer</span>
              </div>
              <span class="year">2025 - Present</span>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------------------------------------------------- */}
      
      {/* ------------------------------------------------------------------------------------------------- */}
    </div>
  );
};

export default Main1;
