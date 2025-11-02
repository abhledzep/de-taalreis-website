'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-purple-200 shadow-md sticky top-0 z-50 border-b-2 border-purple-300" style={{ fontFamily: 'var(--font-quicksand)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-purple-900 hover:text-purple-700 transition-colors">
              De Taalreis ⛵
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                href="/"
                className="text-purple-900 hover:text-purple-700 px-3 py-2 text-base font-medium transition-colors hover:bg-purple-100 rounded-lg"
              >
                Home
              </Link>
              <Link
                href="/over-de-taalreis"
                className="text-purple-900 hover:text-purple-700 px-3 py-2 text-base font-medium transition-colors hover:bg-purple-100 rounded-lg"
              >
                Over de Taalreis
              </Link>
              <Link
                href="/impressie"
                className="text-purple-900 hover:text-purple-700 px-3 py-2 text-base font-medium transition-colors hover:bg-purple-100 rounded-lg"
              >
                Impressie
              </Link>
              <Link
                href="/over-mij"
                className="text-purple-900 hover:text-purple-700 px-3 py-2 text-base font-medium transition-colors hover:bg-purple-100 rounded-lg"
              >
                Over mij
              </Link>
              <Link
                href="/contact"
                className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-full text-base font-semibold transition-all hover:shadow-lg"
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-900 hover:text-purple-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-200 border-t border-purple-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-purple-900 hover:text-purple-700 hover:bg-purple-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/over-de-taalreis"
              onClick={() => setIsOpen(false)}
              className="block text-purple-900 hover:text-purple-700 hover:bg-purple-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Over de Taalreis
            </Link>
            <Link
              href="/impressie"
              onClick={() => setIsOpen(false)}
              className="block text-purple-900 hover:text-purple-700 hover:bg-purple-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Impressie
            </Link>
            <Link
              href="/over-mij"
              onClick={() => setIsOpen(false)}
              className="block text-purple-900 hover:text-purple-700 hover:bg-purple-100 px-3 py-2 rounded-md text-base font-medium"
            >
              Over mij
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block bg-purple-600 text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-semibold"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
