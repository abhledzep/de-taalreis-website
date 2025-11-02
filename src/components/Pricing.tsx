export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Tarieven</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transparante Prijzen
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Geen verborgen kosten. Geen inschrijfgeld. Gewoon eerlijke prijzen voor kwaliteitsonderwijs.
          </p>
        </div>

        <div className="mt-10 max-w-lg mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden border-2 border-blue-500">
            <div className="px-6 py-8 bg-blue-50">
              <h3 className="text-2xl font-semibold text-gray-900 text-center">Standaard Les</h3>
              <div className="mt-4 flex items-center justify-center">
                <span className="text-5xl font-extrabold text-gray-900">€35</span>
                <span className="ml-3 text-xl font-medium text-gray-500">/ uur</span>
              </div>
            </div>
            <div className="px-6 pt-6 pb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-base text-gray-700">Persoonlijke één-op-één begeleiding</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-base text-gray-700">Lessen bij jou thuis</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-base text-gray-700">Aangepast lesmateriaal</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-base text-gray-700">Flexibele planning</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-base text-gray-700">Contact tussen lessen door (WhatsApp)</span>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Neem Contact Op
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-2">Kortingen</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Pakket van 5 lessen: 5% korting</li>
              <li>• Pakket van 10 lessen: 10% korting</li>
              <li>• Eerste proefles halve prijs (€17,50)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

