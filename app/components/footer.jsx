import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="flex justify-center grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 ">

        <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Pages</h2>
            <ul className="text-gray-400 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Home</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">About</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Contact</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Developments</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Socials</h2>
            <ul className="text-gray-400 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Github</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">LinkedIn</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">IRL</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">L&D Platforms</h2>
            <ul className="text-gray-400 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="https://www.freecodecamp.org/fcce3e0d5dc-32a3-422c-b23f-65eb462680e9" className="hover:underline">freeCodeCamp</a>
                </li>
                <li className="mb-4">
                    <a href="https://www.codewars.com/users/PhillipMagos" className="hover:underline">Codewars</a>
                </li>
                <li className="mb-4">
                    <a href="https://codedamn.com/user/fillup" className="hover:underline">codedamn</a>
                </li>
                <li className="mb-4">
                    <a href="https://www.codecademy.com/profiles/arcRockstar77118" className="hover:underline">codecademy</a>
                </li>
                {/* <li className="mb-4">
                    <a href="#" className="hover:underline">LeetCode</a>
                </li> */}
                <li className="mb-4">
                    <a href="https://www.hackerrank.com/phillipmagos" className="hover:underline">HackerRank</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-gray-900 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://phillipmagos.dev/">phillipmagos.dev</a>. All Rights Reserved.
        </span>
      </div>
    </div>
</footer>
  )
}

export default Footer