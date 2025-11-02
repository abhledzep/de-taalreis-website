export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-100 via-orange-50 to-yellow-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">Contact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-teal-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="prose prose-lg max-w-none text-center mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            🌟 Wil je meer informatie of ben je geïnteresseerd in bijlessen? 
            <br />
            <span className="font-bold text-teal-700">Neem dan contact met me op!</span>
          </p>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">Email</h3>
              <a href="mailto:info@de-taalreis.nl" className="text-lg text-teal-600 hover:text-teal-700 font-medium hover:underline">
                info@de-taalreis.nl
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">Telefoon</h3>
              <a href="tel:+31612345678" className="text-lg text-teal-600 hover:text-teal-700 font-medium hover:underline">
                +31 6 1234 5678
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl hover:shadow-lg transition-all md:col-span-2">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg text-teal-600 hover:text-teal-700 font-medium hover:underline"
              >
                Bekijk mijn LinkedIn profiel →
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              Ik reageer meestal binnen 24 uur! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
