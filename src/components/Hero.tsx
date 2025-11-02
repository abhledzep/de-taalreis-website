import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-teal-50 via-orange-50 to-yellow-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-teal-300 rounded-full opacity-20 animate-pulse delay-75"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Image at top - centered */}
          <div className="mb-8 md:mb-12">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-orange-400 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <Image
                  src="/hero-image.png"
                  alt="De Taalreis - Teacher with students on a language journey"
                  width={600}
                  height={600}
                  className="rounded-2xl w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Buttons only - no text */}
          <div className="w-full">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Neem Contact Op
              </Link>
              <Link
                href="/over-de-taalreis"
                className="bg-white hover:bg-gray-50 text-teal-700 border-2 border-teal-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Lees Meer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}
