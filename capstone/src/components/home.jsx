import React from "react";

const Home = () => {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lucy's Portfolio</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="mediaqueries.css" />
      </head>
      <body>
        <nav id="desktop-nav">
          <div class="logo">Lucy Mutunga</div>
          <div>
            <ul class="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#contact"></a>
              </li>
            </ul>
          </div>
        </nav>
        <nav id="hamburger-nav">
          <div class="logo">
            <img src="" alt="Logo" />
          </div>
          <div class="hamburger-menu">
            <div class="hamburger-icon" onclick="toggleMenu()">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="menu-links">
              <li>
                <a href="#about" onclick="toggleMenu()">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" onclick="toggleMenu()">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" onclick="toggleMenu()">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onclick="toggleMenu()">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" onclick="toggleMenu()">
                  More
                </a>
              </li>
            </div>
          </div>
        </nav>
        <section id="profile">
          <div class="section__pic-container">
            <img src="./profile-pic.png" alt="lucy's profile" />
          </div>
          <div class="section__text">
            <p class="section__text__p1">Hello, I'm</p>
            <h1 class="title">Lucy Mutunga</h1>
            <p class="section__text__p2">Frontend Developer</p>
            <div class="btn-container">
              <button
                class="btn btn-color-2"
                onclick="window.open('./resume.pdf')"
              >
                Download CV
              </button>
              <button
                class="btn btn-color-1"
                onclick="location.href='./#contact'"
              >
                Contact Info
              </button>
            </div>
            <div id="socials-container">
              <img
                src="./linkedin.jpg"
                alt="My LinkedIn profile"
                class="icon"
                onclick="location.href='https://linkedin.com/'"
              />
              <img
                src="./github.jpg"
                alt="My Github profile"
                class="icon"
                onclick="location.href='https://github.com/'"
              />
            </div>
          </div>
        </section>
        <section id="about">
          <p class="section__text__p1">Get To Know More</p>
          <h1 class="title">About Me</h1>
          <div class="section-container">
            <div class="section__pic-container">
              {/* <img
                src="./about-pic.png"
                alt="Profile picture"
                class="about-pic"
              /> */}
            </div>
            <div class="about-details-container">
              <div class="about-containers">
                <div class="details-container">
                  <img
                    src="./experience.png"
                    alt="Experience icon"
                    class="icon"
                  />
                  <h3>Experience</h3>
                  <p>
                    2+ years <br />
                    Frontend Development
                  </p>
                </div>
                <div class="details-container">
                  <img
                    src="./education.png"
                    alt="Education icon"
                    class="icon"
                  />
                  <h3>Education</h3>
                  <p>
                    B.Sc. Bachelors Degree
                    <br />
                    Business Information Technology
                  </p>
                </div>
              </div>
              <div class="text-container">
                <p>
                  Motivated individual with problem solving, Innovation,
                  excellence, and teamwork as my core competencies with great
                  attention to detail. I am A lifelong learner with
                  exceptionally soft and technical skills. My passion lies in
                  utilizing the latest development in business and technology to
                  generate innovative concepts and create accurate solutions in
                  the area of business information technology
                </p>
              </div>
            </div>
          </div>
          <img
            src="./arrow.png"
            alt="Arrow icon"
            class="icon arrow"
            onclick="location.href='./#experience'"
          />
        </section>
        <section id="experience">
          <p class="section__text__p1">Explore My</p>
          <h1 class="title">Experience</h1>
          <div class="experience-details-container">
            <div class="about-containers">
              <div class="details-container">
                <h2 class="experience-sub-title">Frontend Development</h2>
                <div class="article-container">
                  <article>
                    <img
                      src="./checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>HTML</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>CSS</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>React</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>JavaScript</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Responsive Web Design</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>UI Design</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                </div>
              </div>
              <div class="details-container">
                <h2 class="experience-sub-title">Frontend Development</h2>
                <div class="article-container">
                  <article>
                    <img
                      src="./checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>PostgreSQL</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Node JS</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Express JS</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="./checkmark.png"
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Git</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <img
            src="./arrow.png"
            alt="Arrow icon"
            class="icon arrow"
            onclick="location.href='./#projects'"
          />
        </section>
        <section id="projects">
          <p class="section__text__p1">Browse My Recent</p>
          <h1 class="title">Projects</h1>
          <div class="experience-details-container">
            <div class="about-containers">
              <div class="details-container color-container">
                <div class="article-container">
                  <img
                    src="./project-1.jpg"
                    alt="Project 1"
                    class="project-img"
                  />
                </div>
                <h2 class="experience-sub-title project-title">Project One</h2>
                <div class="btn-container">
                  <button
                    class="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/lucymutunga/SocialMediaApp'"
                  >
                    Github
                  </button>
                  <button
                    class="btn btn-color-2 project-btn"
                    onclick="location.href='https://tujuanesocials.netlify.app/'"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
              <div class="details-container color-container">
                <div class="article-container">
                  <img
                    src="./project-2.jpg"
                    alt="Project 2"
                    class="project-img"
                  />
                </div>
                <h2 class="experience-sub-title project-title">Project Two</h2>
                <div class="btn-container">
                  <button
                    class="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/lucymutunga/Ecommerce-site-fts-API'"
                  >
                    Github
                  </button>
                  <button
                    class="btn btn-color-2 project-btn"
                    onclick="location.href='https://closetmate.netlify.app/'"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
              <div class="details-container color-container">
                <div class="article-container">
                  <img
                    src="./project-3.jpg"
                    alt="Project 3"
                    class="project-img"
                  />
                </div>
                <h2 class="experience-sub-title project-title">
                  Project Three
                </h2>
                <div class="btn-container">
                  <button
                    class="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/lucymutunga/Expense-tracker'"
                  >
                    Github
                  </button>
                  <button
                    class="btn btn-color-2 project-btn"
                    onclick="location.href='https://trackingyourexpense.netlify.app/'"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            src="./arrow.png"
            alt="Arrow icon"
            class="icon arrow"
            onclick="location.href='./#contact'"
          />
        </section>
        <section id="contact">
          <p class="section__text__p1">Get in Touch</p>
          <h1 class="title">Contact Me</h1>
          <div class="contact-info-upper-container">
            <div class="contact-info-container">
              <img
                src="./email.png"
                alt="Email icon"
                class="icon contact-icon email-icon"
              />
              <p>
                <a href="mailto:lucyalphonce18@gmail.com">Email</a>
              </p>
            </div>
            <div class="contact-info-container">
              <img
                src="./linkedin.jpg"
                alt="LinkedIn icon"
                class="icon contact-icon"
              />
              <p>
                <a href="https://www.linkedin.com/in/lucy-alphonce-480a5a205/">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </section>
        <footer>
          <nav>
            <div class="nav-links-container">
              <ul class="nav-links">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <p>Copyright &#169; 2023 Lucy Mutunga. All Rights Reserved.</p>
        </footer>
        <script src="./script.js"></script>
      </body>
    </>
  );
};
export default Home;
