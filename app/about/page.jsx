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
      <div><h2 className="text-center bg-light">FRONTEND</h2></div>
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


/* <div className="container mx-auto align-items: center">
  <div className="flex justify-center mt-5 border ">
    <div className="w-full md:w-9/12 mt-5">
      <h1 className="text-center mt-5">Summary</h1>
      <article className="">
        <p>Phillip Magos is a full-stack web developer with a background in marketing and a passion for creating. He is a graduate of the University of Texas at Austin's Full Stack Web Development Bootcamp. He is currently working as a freelance web developer and is open to new opportunities.</p>
        <h2 className="text-center bg-light">FRONTEND</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <p className="col-span-full md:col-span-1">
            I have a strong skill set in web development, encompassing proficiency in HTML & CSS for creating well-structured web pages, utilizing the Bootstrap framework to efficiently build responsive websites, leveraging JavaScript to develop dynamic and interactive web experiences, employing React.js to create scalable and reusable UI components, implementing responsive design principles to ensure seamless user experiences across devices, and utilizing jQuery to streamline DOM manipulation and create engaging web interactions.
          </p>
          <div className="col-span-full md:col-span-1">
            <ul>
              <li>HTML & CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React.JS</li>
            </ul>
            <ul>
              <li>Responsive Design 🖥️ || 📱</li>
              <li>jQuery 🤏</li>
              <li><a href="#">See Related Projects</a></li>
            </ul>
          </div>
        </div>

        <h2 className="text-center bg-light">BACKEND</h2>
        <p className="col-span-full">
          I possess a comprehensive skill set in backend web development, encompassing expertise in Node.js for building scalable server-side applications, utilizing Express.js to create robust and RESTful APIs, working with SQL for efficient data management, leveraging MongoDB for flexible NoSQL database solutions, designing and implementing APIs for seamless system communication, proficiently handling JSON for data interchange, and adhering to RESTful principles for scalable web service architectures.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-full md:col-span-1">
            <ul>
              <li>Node.JS</li>
              <li>Express.JS</li>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="col-span-full md:col-span-1">
            <ul>
              <li>APIs</li>
              <li>JSON</li>
              <li>REST</li>
              <li><a href="#">See Related Projects</a></li>
            </ul>
          </div>
        </div>

        <h2 className="bg-light text-center">RELATED SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-full md:col-span-1">
            <ul>
              <li>Python</li>
              <li>GIT</li>
              <li>JIRA</li>
              <li>Webapp Deployment & Management: Render, Vercel & Wordpress</li>
            </ul>
          </div>
          <div className="col-span-full md:col-span-1">
            <ul>
              <li>Command Line</li>
              <li>Agile Development</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>

        <h2 className="bg-light p-1 mt-4 text-center">CONTINUOUS LEARNING</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="col-span-full md:col-span-1">
            <li>Python</li>
            <li>C# - <a href="https://www.codecademy.com/learn">CodeAcademy</a></li>
            <li>Tailwind CSS</li>
            <li>Nest.JS</li>
          </ul>
        </div>

        <h3 className="text-center">Book an interview today <a href="/contact">Book an interview today</a></h3>
      </article>
    </div>
  </div>
</div>  */



//     <div className="container">
//   <div className="row mt-5 justify-content-center">
//     <div className="col-md-9 row mt-5">
//       {/* <!-- bootstrap class used in h1 tag centers the header text. For some reason, the bootstrap from the parent div won't center the h1 tag. -->
//       <!-- <h1 className="row mt-5 justify-content-center">Summary</h1> --> */}
//       <article>
//         {/* <!-- <p>Phillip Magos is a full-stack web developer with a background in marketing and a passion for creating. He is a graduate of the University of Texas at Austin's Full Stack Web Development Bootcamp. He is currently working as a freelance web developer and is open to new opportunities.</p> --> */}
//         <h2 className="text-center bg-light">FRONTEND</h2>
//         <div className="row">
//           <p className="col-12">I have a strong skill set in web development, encompassing proficiency in HTML & CSS for creating well-structured web pages, utilizing the Bootstrap framework to efficiently build responsive websites, leveraging JavaScript to develop dynamic and interactive web experiences, employing React.js to create scalable and reusable UI components, implementing responsive design principles to ensure seamless user experiences across devices, and utilizing jQuery to streamline DOM manipulation and create engaging web interactions.</p>
//           <div className="container">
//           <ul className="row bg">
//             <div className="col">
//             <li>HTML & CSS</li>
//             <li>Bootstrap</li>
//             <li>JavaScript</li>
//             <li>React.JS</li>
//           </div>
//           <div className="col">
//             <li>Responsive Design 🖥️ || 📱</li>
//             <li>jQuery 🤏</li>
//             <li><a href="#">See Related Projects</a></li>
//           </div>
//           </ul>
//         </div>

//       </div>
//         <h2 className="text-center bg-light">BACKEND</h2>
//         <p className="col-12">I possess a comprehensive skill set in backend web development, encompassing expertise in Node.js for building scalable server-side applications, utilizing Express.js to create robust and RESTful APIs, working with SQL for efficient data management, leveraging MongoDB for flexible NoSQL database solutions, designing and implementing APIs for seamless system communication, proficiently handling JSON for data interchange, and adhering to RESTful principles for scalable web service architectures.</p>
//         <div className="container">
//         <ul className="row">
//           <div className="col">
//           <li>Node.JS</li>
//           <li>Express.JS</li>
//           <li>SQL</li>
//           <li>MongoDB</li>
//         </div>
//         <div className="col">
//           <li>APIs</li>
//           <li>JSON</li>
//           <li>REST</li>
//           <li><a href="#">See Related Projects</a></li>
//         </div>
//         </ul>
//       </div>
//         <h2 className="bg-light text-center">RELATED SKILLS</h2>
//         <div className="container">
//         <ul className="row">
//         <div className="col">
//         <li>Python</li>
//         <li>GIT</li>
//         <li>JIRA</li>
//         <li>Webapp Deployment & Management: Render, Vercel & Wordpress</li>
//       </div>
//       <div className="col">
//         <li>Command Line</li>
//         <li>Agile Development</li>
//         <li>Postman</li>
//       </div>
//       </ul>
//     </div>

//         <h2 className="bg-light p-1 mt-4 text-center">CONTINUOUS LEARNING</h2>
//         <div className="container">
//         <ul className="row">
//           <li>Python</li>
//           <li>C# - <a href="https://www.codecademy.com/learn">CodeAcademy</a></li>
//           <li>Tailwind CSS</li>
//           <li>Nest.JS</li>
//         </ul>
//       </div>
//         <h3 className="justify-content-center">Book an interview today <a href="/contact">Book an interview today</a></h3>

//       </article>
//     </div>
//   </div>
// </div>
// <div className="row-10"></div>
  )
}

export default about;