import Image from 'next/image'
import { BsDatabase } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { PiTerminalWindowThin } from "react-icons/pi";
import Carousel from './components/carousel';
// Initialization for ES Users
// import { Carousel } from 'tw-elements';

// initTE({ Carousel });

export default function Home() {
  return (
    <div>

      <section className="bg-center bg-no-repeat bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="test mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">Hello there, I'm Phillip.</h1>
          <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-48">I absolutely love software engineering. It's my passion and creative outlet, allowing me to transform ideas into real-world solutions and continuously learn and grow in a dynamic field.</p>
          <p className="mb-8 text-lg font-normal text-gray-700 2xl:text-white lg:text-xl sm:px-16 lg:px-48">I can develop websites that are responsive to all sorts of devices....</p>
          <p className="mb-8 text-lg font-normal text-gray-700 lg:text-white lg:text-xl sm:px-16 lg:px-48">Including screen sizes of laptop screens...</p>
          <p className="mb-8 text-lg font-normal text-gray-700 md:text-white lg:text-xl sm:px-16 lg:px-48">Screen sizes of tablets..</p>
          <p className="mb-8 text-lg font-normal text-gray-700 sm:text-white lg:text-xl sm:px-16 lg:px-48">And even mobile dvices.</p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#skills" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              See my Skills
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            {/* <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>   */}
          </div>
        </div>
      </section>

      <section className="grid grid-rows-1 grid-flow-col gap-4">

        <div id="skills" className="max-w-sm p-6 bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center">
            <AiOutlineLaptop className="text-white text-2xl" />
            <h5 className="ml-2 text-2xl font-bold tracking-tight text-white dark:text-white">Frontend</h5>
          </div>
          <ul className="mb-3 font-normal text-gray-400 dark:text-gray-400 list-disc pl-6">
            <li>Focuses on Layout, animations, content organization, navigation & graphics.</li>
            <li>Bootstrap & Tailwind</li>
            <li>HTML5 and CSS3</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>

        <div className="max-w-sm p-6 bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center">
            <BsDatabase className="text-white text-2xl" />

            <h5 className="ml-2 text-2xl font-bold tracking-tight text-white dark:text-white">Backend</h5>
          </div>
          <ul className="mb-3 font-normal text-gray-400 dark:text-gray-400 list-disc pl-6">
            <li>Building code, debugging, database managament.</li>
            <li>Node.JS</li>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>

        <div className="max-w-sm p-6 bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center">
            <PiTerminalWindowThin className="text-white text-2xl" />
            <h5 className="ml-2 text-2xl font-bold tracking-tight text-white dark:text-white">Weekend</h5>

          </div>

          <ul className="mb-3 font-normal text-gray-400 dark:text-gray-400 list-disc pl-6">
            <li>There's more to it than the weekday grind:</li>
            <li>Growing Vegetables</li>
            <li>Jui-Jitsu</li>
            <li>Hiking with my dogs and cats</li>
          </ul>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>



        {/* There's three cards titles frontend, backend and weekend. A fly lands on the first cart (frontend)...enticing the user swat the bug. Upon hover, the card unviels a short list of frontend related skills. */}

      </section>



<Carousel />

      <br></br>

      <section>
        {/* Somthing like a popup shows at the end. This is for a contact form. We don't want to redirect the user to the contact page. */}


      </section>

      <section>
        {/* Maybe put all the site into dark mode, have a light or sun arched over the site according to the time of the day. */}
      </section>

    </div>

  )
}
