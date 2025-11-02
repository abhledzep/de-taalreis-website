import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <title>De Taalreis - Bij de Taalreis gaan we samen op een taalrijke ontdekkingsreis!</title>
        <meta name="description" content="Bij de Taalreis gaan we samen op een taalrijke ontdekkingsreis! Nederlandse bijlessen voor studenten." />
      </head>
      <body style={{ fontFamily: '"Calibri Light", Calibri, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
