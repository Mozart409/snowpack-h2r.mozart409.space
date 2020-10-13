import React from 'react'
function Footer() {
  return (
    <footer className="bg-gray-900">
      <ul className="flex items-center justify-between max-w-4xl p-1 mx-auto text-sm text-white md:p-2">
        <li>
          Created by{' '}
          <a
            href="https://twitter.com/marc_van_sax"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Amadeus Mader
          </a>
        </li>

        <li>
          <a
            href="https://github.com/mozart409/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
