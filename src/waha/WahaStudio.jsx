import { useState } from 'react'
import logo from './waha-logo.png'

// TODO: replace with the real WAHA Studio WhatsApp number (international format, digits only)
const WHATSAPP = 'https://wa.me/962700000000?text=' +
  encodeURIComponent('Hello WAHA Studio, I would like to talk about a landscape project.')

const services = [
  { icon: '🌿', title: 'Garden Design', text: 'Private gardens shaped around how you live: shaded corners, open lawns, and paths that invite you outside.' },
  { icon: '🏛️', title: 'Terraces & Rooftops', text: 'Planters, pergolas and lighting that turn bare concrete into a green room above the city.' },
  { icon: '💧', title: 'Irrigation Systems', text: 'Smart drip irrigation built for a dry climate, so every drop goes to the root.' },
  { icon: '🪨', title: 'Hardscape & Stone', text: 'Natural stone, gravel and timber detailing that ties the planting to the architecture.' },
  { icon: '🌳', title: 'Commercial Landscapes', text: 'Hotel entrances, café courtyards and office grounds that make a first impression.' },
  { icon: '✂️', title: 'Care & Maintenance', text: 'Seasonal pruning, feeding and replanting plans that keep the space alive year after year.' },
]

const steps = [
  { n: '01', title: 'Site Visit', text: 'We walk the space, read the light, soil and wind, and listen to how you want to use it.' },
  { n: '02', title: 'Concept', text: 'A planting palette, layout and mood presented with clear, itemised pricing.' },
  { n: '03', title: 'Build', text: 'Our own team handles earthworks, irrigation, stone and planting, start to finish.' },
  { n: '04', title: 'Grow', text: 'We return each season to make sure the garden matures the way it was designed.' },
]

const projects = [
  { name: 'Olive Courtyard', place: 'Private villa · Dabouq', cls: 'p1' },
  { name: 'Rooftop Retreat', place: 'Residence · Abdoun', cls: 'p2' },
  { name: 'Lobby Garden', place: 'Boutique hotel · Amman', cls: 'p3' },
  { name: 'Café Terrace', place: 'Hospitality · Weibdeh', cls: 'p4' },
]

export default function WahaStudio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <div className="waha">
      <header className="nav">
        <a href="#top" className="logo" onClick={close}>
          <img src={logo} alt="WAHA Studio" />
        </a>
        <button className="burger" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
        <nav className={menuOpen ? 'links open' : 'links'}>
          <a href="#services" onClick={close}>Services</a>
          <a href="#process" onClick={close}>Process</a>
          <a href="#projects" onClick={close}>Projects</a>
          <a href="#contact" onClick={close} className="nav-cta">Get in touch</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-leaves" aria-hidden="true">
          <div className="leaf l1" /><div className="leaf l2" /><div className="leaf l3" />
        </div>
        <div className="hero-inner">
          <p className="eyebrow">Landscape Design · Amman, Jordan</p>
          <h1>Outdoor spaces that <em>breathe</em>.</h1>
          <p className="lead">
            WAHA Studio designs and builds gardens, terraces and courtyards where green
            softens stone, shade cools the afternoon, and every season looks considered.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary">Chat on WhatsApp</a>
            <a href="#projects" className="btn btn-ghost">See our work</a>
          </div>
          <div className="stats">
            <div><strong>120+</strong><span>Gardens built</span></div>
            <div><strong>8</strong><span>Years growing</span></div>
            <div><strong>40%</strong><span>Less water with smart irrigation</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-head">
          <p className="eyebrow">What we do</p>
          <h2>From first sketch to first bloom</h2>
        </div>
        <div className="grid services">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section band" id="process">
        <div className="section-head">
          <p className="eyebrow">How we work</p>
          <h2>Four steps, one team</h2>
        </div>
        <div className="grid steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2>Recent landscapes</h2>
        </div>
        <div className="grid projects">
          {projects.map((p) => (
            <figure className={`project ${p.cls}`} key={p.name}>
              <figcaption>
                <strong>{p.name}</strong>
                <span>{p.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section quote">
        <blockquote>
          “They turned a dusty back yard into the place our whole family ends up every evening.
          The olive trees, the smell after the sprinklers run — it feels like a different city.”
        </blockquote>
        <cite>— Private client, Dabouq</cite>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <img src={logo} alt="" className="contact-logo" />
          <h2>Let’s grow something together.</h2>
          <p>Send us a photo of your space and a rough size. We reply within one working day with ideas and a site-visit slot.</p>
          <p className="ar" dir="rtl">ابعتلنا صورة للمساحة وبنرجعلك بأفكار وموعد زيارة خلال يوم عمل.</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">Message us on WhatsApp</a>
        </div>
      </section>

      <footer className="footer">
        <img src={logo} alt="WAHA Studio" className="footer-logo" />
        <span>Amman, Jordan</span>
        <span>© {new Date().getFullYear()} WAHA Studio</span>
      </footer>
    </div>
  )
}
