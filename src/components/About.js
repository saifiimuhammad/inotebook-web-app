import React from "react";

const About = () => {
  return (
    <div class="about-container">
      <h1>About iNotebook</h1>
      <p>
        iNotebook is a secure, fast, and easy-to-use digital notebook that helps
        you organize your thoughts, tasks, and ideas in one place. Designed for
        modern users, it allows you to create, edit, and manage notes from
        anywhere using a clean and responsive interface. Whether you're a
        student, professional, or creative thinker — iNotebook is your smart
        note-taking companion.
      </p>

      <div class="section-title">Key Features:</div>
      <ul>
        <li>Create, edit, and delete notes in real-time</li>
        <li>User authentication and authorization</li>
        <li>Mobile-responsive and intuitive UI</li>
        <li>Cloud storage for persistent data</li>
      </ul>

      <div class="section-title">Tech Stack:</div>
      <ul>
        <li>
          <strong>Frontend:</strong> React.js, Plain CSS, Context API
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express.js
        </li>
        <li>
          <strong>Database:</strong> MongoDB
        </li>
        <li>
          <strong>Authentication:</strong> JWT (JSON Web Tokens)
        </li>
      </ul>
    </div>
  );
};

export default About;
