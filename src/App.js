import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import project1Image from './assets/Project1.png';


function App() {
  return (
    <div className="App">
      <header className="bg-dark text-white p-4 text-center">
        <h1>Dhruv Torney</h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="projects" className="p-4">
        <h2>Projects</h2>
        <div className="project">
          <h3>Dublin Finder</h3>
          <p>Date: 5/15/2024 (Computer Science Essentials)</p>
          <img src={project1Image} alt="Dublin Finder" className="img-fluid" />
          <p>I developed this project for my Entrepreneurship project where someone can use this as a digital alternative for traditional lost and founds. I was the head for backend on this project and I worked with Flask and Python for this project. I also needed some basic knowledge of SQL and DBs in order to make this project functional. Over this project's time I learned to better develop my backend skills while working with Flask Applications and learned a lot about collaborating with a partner who did the front end, based on the routes and functions.</p>
          <p>Project Files, Brainstorming, Vision, and Documentation: <a href="https://drive.google.com/drive/folders/18XSskj7Fgjc74bQWQCAUwA1HRrPiyTBa?usp=sharing" target="_blank" rel="noopener noreferrer">View Here</a></p>
          <p>Project Rubric: <a href="https://docs.google.com/document/d/117iznvpsjrzfovstdF51lDp_O8zikt1gFRpcMCdGjyA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Here</a></p>
          <a href="https://github.com/Dhruv0T/FoundWebsite" className="btn btn-primary">View Project</a>
        </div>
      </section>

      <section id="about" className="p-4">
        <h2>About Me</h2>
        <p>Interests and Highlights: I am an Engineering student who enjoys classes about programming, robotics, and A.I. I have been expanding my knowledge of programming for the last two to three years and have been constantly working and developing new projects. Most recently I have been interested in Robotics using CAD but I haven't accomplished much in this field other than research and attend a few club meetings. I am avidly interested in AI and have been developing quite a few projects revolving around it, mainly chatbots.</p>
        <p>Some highlights within my journey include the AI projects I have been working on, including the Emerald High CSP chatbot, which is trained on multiple video transcripts from the AP Classroom CSP cirrciulum and also the syllabus for the class. I also would like to highlight my Entrepreneurship Project for Computer Science Essentials where I developed a website that helps solve the global issue of Lost and Founds using my knowledge of Python and Flask.</p>
        <p>Currently, I am a student at Emerald High taking the class Computer Science Essentials. Throughout the year in this course, we have worked with block-based programming, such as MIT App Inventor, where we built our foundations for future projects. As we progressed, we learned about HTML and CSS and developed websites such as About Me pages. By the end of the semester, I have grown to be more proficient in my skills in HTML, CSS, Python, SQL databases, and worked on projects involving Flask and Django.</p>
      </section>

      <section id="skills" className="p-4">
        <h2>Programming Languages and Skills</h2>
        <ul className="skills-list">
          <li>Python</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Django</li>
          <li>Flask</li>
          <li>SQL Databases</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>CAD (Robotics)</li>
          <li>AI Development</li>
          <li>Lua</li>
          <li>C#</li>
          <li>Keras</li>
        </ul>
      </section>

      <section id="contact" className="p-4">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:torneydhruv@gmail.com" className="contact-email">torneydhruv@gmail.com</a></p>
        <div>
          <a href="https://github.com/Dhruv0T" className="me-3 social-icon">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/dhruv-torney-88b421275/" className="social-icon">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
      </section>

      <footer className="bg-dark text-white text-center p-3">
        <p>&copy; 2024 Dhruv Torney</p>
      </footer>
    </div>
  );
}

export default App;
