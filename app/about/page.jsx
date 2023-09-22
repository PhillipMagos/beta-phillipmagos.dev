import React from "react";
import Image from 'next/image'

const about = () => {
  return (
    <div className="container mx-auto px-8">
      <h1 className="text-center font-bold mb-4 mt-4">Skills</h1>
      <div className="columns-1 border-color-600 ">
        {/* grid grid-cols-2 gap-4 */}
        <div className="">
          <h2 className="text-center font-bold mb-4 mt-4 bg-gray-100">FRONTEND</h2>
        </div>
        <div className="columns-2 ">
          <ul className="list-disc">
            <li>HTML & CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>React.JS</li>
            <li>Responsive Design 🖥️ || 📱</li>
            <li>jQuery 🤏</li>
            <li><a href="#">See Related Projects</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-center font-bold mb-4 mt-4 bg-gray-100">BACKEND</h2>
        </div>
        <div>
          <ul className="columns-2 mb-4 mt-4 list-disc">
            <li>Node.JS</li>
            <li>Express.JS</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>APIs</li>
            <li>JSON</li>
            <li>REST</li>
            <li><a href="#">See Related Projects</a></li>
          </ul></div>
        <div>
          <h2 className="bg-light font-bold text-center mb-4 mt-4  bg-gray-100">RELATED SKILLS</h2>
        </div>
        <div>
          <ul className="columns-2 mb-2 mt-2 list-disc">
            <li>Python</li>
            <li>GIT</li>
            <li>JIRA</li>
            <li>Deployment & Management: Render & Vercel</li>
            <li>Command Line</li>
            <li>Agile Development</li>
            <li>Postman</li>
          </ul></div>
        <div><h2 className="bg-light font-bold p-1 text-center mb-4 mt-4 bg-gray-100">CONTINUOUS LEARNING</h2></div>
        <div>
          <ul className="columns-2 mb-12 mt-2 list-disc">
            <li>Python</li>
            <li>C# - <a href="https://www.codecademy.com/learn">CodeAcademy</a></li>
            <li>Tailwind CSS</li>
            <li>Next.JS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default about;