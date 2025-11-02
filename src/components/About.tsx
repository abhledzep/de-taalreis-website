export default function About() {
  return (
    <section id="over-de-taalreis" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">Over de Taalreis</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Inhoud */}
          <div>
            <h3 className="text-2xl font-bold text-teal-800 mb-4">Inhoud</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              De Taalreis biedt ondersteuning op het gebied van taal- en leesontwikkeling. Er is specifieke aandacht voor het verbreden van de woordenschat en het verhogen van de spreek-, lees- en luistervaardigheid. Door middel van prenten- en leesboeken, taalspellen, voorwerpen en muziek komt de taalontwikkeling tot leven!
            </p>
          </div>

          {/* Voor wie */}
          <div>
            <h3 className="text-2xl font-bold text-teal-800 mb-4">Voor wie</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              De lessen van de Taalreis zijn bedoeld voor kinderen die ondersteuning nodig hebben in de Nederlandse taal. Dit kan bijvoorbeeld voor kinderen die het Nederlands niet als moedertaal hebben. Ook kan ik hulp bieden bij het leren lezen en het stimuleren van het leesplezier.
            </p>
          </div>

          {/* Aanbod */}
          <div>
            <h3 className="text-2xl font-bold text-teal-800 mb-4">Aanbod</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              De Taalreis is creatief, taalverrijkend en persoonlijk. Hoe de taalreis verloopt, is afhankelijk van de hulpvraag en wat bij het kind past. Eerst maken we kennis, zodat het kind zich op zijn gemak voelt en ik kan bekijken wat het nodig heeft. Hierna neem ik contact op om een verder plan te bespreken.
            </p>
          </div>

          {/* Locatie en tijden */}
          <div>
            <h3 className="text-2xl font-bold text-teal-800 mb-4">Locatie en tijden</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              De ondersteuning vindt buiten schooltijd plaats bij de ruimte van 'De Taalreis' in Amsterdam Zuid (prinses Irenebuurt). Dit kan wekelijks. Helaas is het niet mogelijk om bij een andere locatie te komen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
