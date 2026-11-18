import logo from './waha-logo.png'

// Temporary holding page — WAHA Studio (Master Brand Reference 2.0).
// Rule: no invented projects, testimonials, statistics or photos presented as WAHA work.
// The previous landscaping page is preserved on branch `archive/landscaping-page-2026-11`.

// Set the real WAHA WhatsApp number (international format, digits only, e.g. '9627XXXXXXXX').
// While empty, the contact buttons are hidden instead of pointing at a placeholder.
const WHATSAPP_NUMBER = ''
const WHATSAPP = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=` +
    encodeURIComponent('Hello WAHA Studio, I would like to ask about a project.')
  : null

const offers = [
  {
    name: 'Moss art',
    ar: 'لوحات الطحالب المحفوظة',
    text: 'Custom preserved moss pieces composed for a specific wall, room and light — texture, structure and negative space.',
  },
  {
    name: 'Plant styling',
    ar: 'تنسيق النباتات',
    text: 'A defined scope: site assessment, plant and planter selection, placement, installation and a practical handover.',
  },
  {
    name: 'Moss features for brands',
    ar: 'تصاميم الطحالب للمساحات التجارية',
    text: 'Reception and branded moss features for offices, clinics, cafés and boutiques, scoped to the space and budget.',
  },
]

export default function WahaStudio() {
  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <img src={logo} alt="WAHA Studio" className="hero-logo" />
          <p className="kicker">Moss Design &amp; Plant Styling · Amman, Jordan</p>
          <h1>Nature, preserved. Spaces, styled.</h1>
          <p className="ar" lang="ar" dir="rtl">واحة ستوديو — تصميم بالطحالب المحفوظة وتنسيق النباتات في عمّان</p>
        </div>
      </header>

      <main>
        <section className="intro">
          <p className="kicker">The studio</p>
          <p className="lead">
            A nature-led design studio creating moss features, plant styling and spatial installations
            that integrate with interiors rather than sit on top of them.
          </p>
        </section>

        <section>
          <p className="kicker">What we make</p>
          <div className="offers">
            {offers.map((o) => (
              <article key={o.name} className="card">
                <h3>{o.name}</h3>
                <p className="ar-small" lang="ar" dir="rtl">{o.ar}</p>
                <p>{o.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact">
          <p className="kicker">Enquiries</p>
          <h2>The studio is opening in Amman.</h2>
          <p>Our portfolio and full website are on the way.</p>
          <p className="ar" lang="ar" dir="rtl">الموقع الكامل قريباً.</p>
          {WHATSAPP && (
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn">
              Message us on WhatsApp · راسلنا على واتساب
            </a>
          )}
        </section>
      </main>

      <footer>
        <span>WAHA Studio · واحة ستوديو</span>
        <span>Amman, Jordan</span>
      </footer>
    </>
  )
}
