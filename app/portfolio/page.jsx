"use client"
//import ContactForm from '@/components/contact'\
//import ContactForm from '../components/contact'
import React from 'react';
import { PiTerminalWindowThin } from "react-icons/pi";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiRender, SiExpress, SiVite, SiThreedotjs, SiVercel } from "react-icons/si"

export default function portfolio() {


  return (
    <div>
    <div class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
       {/* <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
             <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Jumbotron component was launched! See what's new</span> 
             <svg class="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
             </svg>
         </a> */}
         <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Full Stack & Complete Webapps</h1>
         <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Here, you'll find minimally viable products and fully functional webapps.</p>
         {/* <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}

     </div>
{/* <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-16 left-0 z-1"></div> */}
 </div>
    <div class="album py-5 bg-light">
    <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    {/* <img class="w-full h-56" src="https://www.trinka.ai/blog/wp-content/uploads/2021/09/28.png" alt="" /> */}

    <div class="col">
  <div class="bg-white rounded-lg shadow-sm p-4">
  <img class="w-full h-56" src="https://www.trinka.ai/blog/wp-content/uploads/2021/09/28.png" alt="" />
      <title>Placeholder</title>
      {/* <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text> */}
    <div class="mt-4">
      <h2 class="text-xl font-semibold mb-2">512unes</h2>
      <p class="text-gray-800">Using the MEN stack, we created a platform that offers Austinite-unique experiences to its inhabitants and wannabe inhabitants. 512unes is charged with marketing Austin's local bands nationally and internationally as a premier business and leisure destination, thus enriching our community's overall quality of life.</p>
      <div class="flex justify-between items-center mt-2">
        <div class="space-x-2">
          <a href="https://five12unes-01.onrender.com/">
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Website</button></a>
          <a href="https://github.com/ACCSoftwareBootcamp/CodeBusters"><button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Repository</button></a>
        </div>
        <div className="grid grid-cols-4 gap-2">
				<SiMongodb className="text-green-700 text-2xl"/>
				<SiExpress className="text-black-700 text-2xl"/>
				<FaNodeJs className="text-green-500 text-2xl" />
				<SiRender className="text-green-300 text-2xl" />
			</div>
      </div>
    </div>
  </div>
</div>
    <div class="col">
  <div class="bg-white rounded-lg shadow-sm p-4">
  <img class="w-full h-56" src="https://www.trinka.ai/blog/wp-content/uploads/2021/09/28.png" alt="" />
      <title>Placeholder</title>
      {/* <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text> */}
    <div class="mt-4">
      <h2 class="text-xl font-semibold mb-2">512unes</h2>
      <p class="text-gray-800">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div class="flex justify-between items-center mt-2">
        <div class="space-x-2">
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Website</button>
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Repository</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
				<SiMongodb className="text-green-700 text-2xl border-green-400 border-2"/>
				<FaNodeJs className="text-yellow text-2xl" />
				<SiRender className="text-green-400 text-2xl" />
			</div>
      </div>
    </div>
  </div>
</div>
    <div class="col">
  <div class="bg-white rounded-lg shadow-sm p-4">
  <img class="w-full h-56" src="https://www.trinka.ai/blog/wp-content/uploads/2021/09/28.png" alt="" />
      <title>Placeholder</title>
      {/* <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text> */}
    <div class="mt-4">
      <h2 class="text-xl font-semibold mb-2">512unes</h2>
      <p class="text-gray-800">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div class="flex justify-between items-center mt-2">
        <div class="space-x-2">
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Website</button>
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Repository</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
				<SiMongodb className="text-green-700 text-2xl border-green-400 border-2"/>
				<FaNodeJs className="text-yellow text-2xl" />
				<PiTerminalWindowThin className="text-black text-2xl" />
			</div>
      </div>
    </div>
  </div>
</div>
    <div class="col">
  <div class="bg-white rounded-lg shadow-sm p-4">
	<a href="https://project-promptopia-lac.vercel.app/">
  <img class="w-full h-56" src="https://www.trinka.ai/blog/wp-content/uploads/2021/09/28.png" alt="" />
  </a>
      <title>Placeholder</title>
      {/* <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text> */}
    <div class="mt-4">
      <h2 class="text-xl font-semibold mb-2">https://phillipzmagos.com/</h2>
      <p class="text-gray-800">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div class="flex justify-between items-center mt-2">
        <div class="space-x-2">
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Website</button>
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Repository</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
				<SiMongodb className="text-green-700 text-2xl border-green-400 border-2"/>
				<FaNodeJs className="text-yellow text-2xl" />
				<PiTerminalWindowThin className="text-black text-2xl" />
			</div>
      </div>
    </div>
  </div>
</div>

<div class="col">
  <div class="bg-white rounded-lg shadow-sm p-4">
    <svg class="w-full h-56 text-gray-500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c"/>
      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
    </svg>

    <div class="mt-4">
    <h2 class="text-xl font-semibold mb-2">https://phillipmagos.com/</h2>
      <p class="text-gray-800">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div class="flex justify-between items-center mt-2">
        <div class="space-x-2">
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Website</button>
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Repository</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
				<SiMongodb className="text-green-700 text-2xl border-green-400 border-2"/>
				<FaNodeJs className="text-yellow text-2xl" />
				<PiTerminalWindowThin className="text-black text-2xl" />
			</div>
      </div>
    </div>
  </div>
</div>
<div class="col">
  <div class="bg-white rounded-lg shadow-sm p-4">
    <svg class="w-full h-56 text-gray-500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c"/>
      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
    </svg>

    <div class="mt-4">
    <h2 class="text-xl font-semibold mb-2">M-Tech</h2>
      <p class="text-gray-800">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div class="flex justify-between items-center mt-2">
        <div class="space-x-2">
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">View</button>
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Edit</button>
        </div>
        <small class="text-gray-400">9 mins</small>
      </div>
    </div>
  </div>
</div>
<div class="col">
  <div class="bg-white rounded-lg shadow-sm p-4">
    <svg class="w-full h-36 text-gray-500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c"/>
      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Propmtopia</text>
    </svg>

    <div class="mt-4">
      <p class="text-gray-800">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div class="flex justify-between items-center mt-2">
        <div class="space-x-2">
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">View</button>
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Edit</button>
        </div>
        <small class="text-gray-400">9 mins</small>
      </div>
    </div>
  </div>
</div>
<div class="col">
  <div class="bg-white rounded-lg shadow-sm p-4">
    <svg class="w-full h-36 text-gray-500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c"/>
      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
    </svg>
{/* //https://solar-system-chi-ashen.vercel.app/ */}
    <div class="mt-4">
      <p class="text-gray-800">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div class="flex justify-between items-center mt-2">
        <div class="space-x-2">
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">View</button>
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Edit</button>
        </div>
        <small class="text-gray-400">9 mins</small>
      </div>
    </div>
  </div>
</div>

<div class="col">
  <div class="bg-white rounded-lg shadow-sm p-4">
  <img class="w-full h-56" src="https://www.trinka.ai/blog/wp-content/uploads/2021/09/28.png" alt="" />
      <title>Placeholder</title>
      {/* <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text> */}
    <div class="mt-4">
      <h2 class="text-xl font-semibold mb-2">3D Space</h2>
      <p class="text-gray-800">Using the MEN stack, we created a platform that offers Austinite-unique experiences to its inhabitants and wannabe inhabitants. 512unes is charged with marketing Austin's local bands nationally and internationally as a premier business and leisure destination, thus enriching our community's overall quality of life.</p>
      <div class="flex justify-between items-center mt-2">
        <div class="space-x-2">
          <a href="https://solar-system-chi-ashen.vercel.app/">
          <button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Website</button></a>
          <a href="https://github.com/PhillipMagos/solar-system"><button type="button" class="px-2 py-1 text-sm border border-gray-400 rounded text-gray-600 hover:bg-gray-100 transition duration-300">Repository</button></a>
        </div>
        <div className="grid grid-cols-3 gap-2">
				<SiVite className="text-violet-700 text-2xl"/>
				<SiThreedotjs className="text-black-700 text-2xl"/>
				<SiVercel className="text text-2xl" />
			</div>
      </div>
    </div>
  </div>
</div>








    {/* <div class="col">
      <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        <div class="card-body">
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        <div class="card-body">
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        <div class="card-body">
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div> */}

    {/* <div class="col">
      <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        <div class="card-body">
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        <div class="card-body">
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        <div class="card-body">
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div> */}
  </div>
    </div>
  </div>
  </div>
  )
}