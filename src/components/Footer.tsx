export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-800 to-teal-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-lg font-semibold mb-1">De Taalreis ⛵</p>
            <p className="text-sm text-teal-200">
              © {new Date().getFullYear()} De Taalreis. Alle rechten voorbehouden.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <a href="#impressum" className="text-teal-200 hover:text-white transition-colors hover:underline">
              Impressum
            </a>
            <a href="#privacyverklaring" className="text-teal-200 hover:text-white transition-colors hover:underline">
              Privacyverklaring
            </a>
            <a href="#cookie-instellingen" className="text-teal-200 hover:text-white transition-colors hover:underline">
              Cookie-instellingen
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
