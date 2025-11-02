export default function AboutMe() {
  return (
    <section id="over-mij" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">Over mij</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-gradient-to-br from-teal-50 via-white to-orange-50 p-8 md:p-12 rounded-3xl shadow-xl">
          <div className="prose prose-lg max-w-none">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/Simone.png"
                    alt="Simone - Docent bij De Taalreis"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  <span className="text-2xl font-bold text-teal-700">Hallo!</span>
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mijn naam is <span className="font-bold text-teal-700">Simone</span> en ik woon in Amsterdam met mijn vriend en kater. Na mijn opleidingen Cultureel Erfgoed en Docent NT2 aan Anderstaligen heb ik volwassenen lesgegeven op diverse taalscholen. Ik vond het heerlijk om hierbij mijn liefde voor taal en creativiteit in te zetten.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Enkele jaren later ervaarde ik dit ook met meertalige kinderen in het basisonderwijs. Hierbij sloot ik soms aan op de methoden in de klas, maar gebruikte ik ook veel (prenten)boeken en eigen materiaal. Het blijft voor mij bijzonder om te zien wat taalontwikkeling doet voor het zelfvertrouwen van het kind. Hier draag ik graag aan bij!
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Al lang had ik het idee om taallessen te geven vanuit mijn eigen plekje. En nu is de Taalreis hier! In een fijne ruimte met een volle kast aan (prenten)boeken en taalmateriaal, een (voor)leesstoel en.. mijn lieve kater Ginger die zo nu en dan van zich laat horen. 🐱
                </p>
                
                <p className="text-xl text-gray-700 leading-relaxed font-semibold text-teal-700">
                  Hopelijk tot snel!
                </p>
              </div>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                <div className="text-5xl mb-3">📚</div>
                <div className="text-xl font-bold text-teal-800">Taal & Creativiteit</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                <div className="text-5xl mb-3">❤️</div>
                <div className="text-xl font-bold text-teal-800">Met passie</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                <div className="text-5xl mb-3">🐱</div>
                <div className="text-xl font-bold text-teal-800">+ kater Ginger</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
