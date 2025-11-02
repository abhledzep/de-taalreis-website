export default function Gallery() {
  return (
    <section id="impressie" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-teal-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">Impressie</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-teal-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="prose prose-lg max-w-none text-center mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            🎨 Hier krijg je een indruk van de lessen en de sfeer bij De Taalreis.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            De lessen zijn interactief, persoonlijk en gericht op jouw specifieke leerdoelen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
            <div className="text-5xl mb-4 text-center">📖</div>
            <h3 className="text-2xl font-bold text-teal-800 mb-3 text-center">Persoonlijke begeleiding</h3>
            <p className="text-gray-600 text-lg text-center">
              Elke les is afgestemd op jouw niveau en leerdoelen. We werken samen aan jouw ontwikkeling!
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
            <div className="text-5xl mb-4 text-center">🌈</div>
            <h3 className="text-2xl font-bold text-teal-800 mb-3 text-center">Ontspannen sfeer</h3>
            <p className="text-gray-600 text-lg text-center">
              Leer in een vertrouwde omgeving waar je je op je gemak voelt. Fouten maken mag!
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold text-teal-800 mb-3 text-center">Snelle vooruitgang</h3>
            <p className="text-gray-600 text-lg text-center">
              Met de juiste aanpak en begeleiding zie je snel resultaat in je taalvaardigheid!
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
            <div className="text-5xl mb-4 text-center">🎓</div>
            <h3 className="text-2xl font-bold text-teal-800 mb-3 text-center">Ervaren docent</h3>
            <p className="text-gray-600 text-lg text-center">
              Profiteer van jarenlange ervaring in het lesgeven aan leerlingen met verschillende niveaus.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
