import React from "react";
import Image from 'next/image'

const about = () => {
  return (

    <div class="grid grid-cols-2 gap-4">
      <div><h2 className="text-center bg-light">FRONTEND</h2></div>
      <div><ul>
        <li>HTML & CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>React.JS</li>
      </ul>
        <ul>
          <li>Responsive Design 🖥️ || 📱</li>
          <li>jQuery 🤏</li>
          <li><a href="#">See Related Projects</a></li>
        </ul></div>
      <div><h2 className="text-center bg-light">BACKEND</h2></div>
      <div><ul>
        <li>Node.JS</li>
        <li>Express.JS</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>APIs</li>
        <li>JSON</li>
        <li>REST</li>
        <li><a href="#">See Related Projects</a></li>
      </ul></div>
      <div><h2 className="bg-light text-center">RELATED SKILLS</h2></div>
      <div>            
        <ul>
        <li>Python</li>
        <li>GIT</li>
        <li>JIRA</li>
        <li>Webapp Deployment & Management: Render, Vercel & Wordpress</li>
        <li>Command Line</li>
        <li>Agile Development</li>
        <li>Postman</li>
      </ul></div>
      <div><h2 className="bg-light p-1 mt-4 text-center">CONTINUOUS LEARNING</h2></div>
      <div>         
        <ul className="row">
        <li>Python</li>
        <li>C# - <a href="https://www.codecademy.com/learn">CodeAcademy</a></li>
        <li>Tailwind CSS</li>
        <li>Nest.JS</li>
      </ul></div>
      <div>09</div>
    </div>
  )
}

export default about;