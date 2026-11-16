import { useEffect, useState } from 'react'

const ITEMS = [
  {
    title: 'Realize rapid value',
    text: 'Unlock value from the first use case and start building a repeatable process for decision-making.',
    spread: 62,
  },
  {
    title: 'Never stop improving',
    text: 'Every new data source makes the picture sharper, so your results keep getting better over time.',
    spread: 48,
  },
  {
    title: 'Make faster decisions',
    text: 'Bring the right context to the right people in seconds instead of weeks of manual work.',
    spread: 34,
  },
  {
    title: 'Become resilient and agile',
    text: 'Adapt quickly to change with a foundation that scales across teams and use cases.',
    spread: 72,
  },
]

const RAYS = 42
const FOCAL = { x: 420, y: 200 }

function Rays({ spread }) {
  const lines = Array.from({ length: RAYS }, (_, i) => {
    const t = i / (RAYS - 1) // 0..1
    return {
      angle: -spread + t * spread * 2, // degrees around the focal point
      len: 190 + Math.sin(t * Math.PI) * 60,
      opacity: 0.25 + Math.sin(t * Math.PI) * 0.55,
    }
  })

  return (
    <svg className="rays" viewBox="0 0 520 400" aria-hidden="true">
      <defs>
        <radialGradient id="glow">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="35%" stopColor="#d9c8ff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#7b4fd6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="beam" x1="0" x2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
      </defs>

      {lines.map((l, i) => (
        <line
          key={i}
          className="ray"
          x1={FOCAL.x}
          y1={FOCAL.y}
          x2={FOCAL.x - l.len}
          y2={FOCAL.y}
          style={{ transform: `rotate(${l.angle}deg)` }}
          stroke="#cdb8ff"
          strokeWidth="1"
          strokeOpacity={l.opacity}
        />
      ))}

      <line x1="40" y1={FOCAL.y} x2={FOCAL.x} y2={FOCAL.y} stroke="url(#beam)" strokeWidth="2" />
      <circle cx="40" cy={FOCAL.y} r="5" fill="#fff" />
      <circle className="pulse" cx={FOCAL.x} cy={FOCAL.y} r="60" fill="url(#glow)" />
      <circle cx={FOCAL.x} cy={FOCAL.y} r="6" fill="#fff" />
    </svg>
  )
}

function TopFan() {
  return (
    <svg className="top-fan" viewBox="0 0 100 40" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => {
        const x = 10 + i * (80 / 13)
        return <line key={i} x1={x} y1="0" x2="50" y2="36" stroke="#a98be8" strokeOpacity="0.5" strokeWidth="0.4" />
      })}
      <circle cx="50" cy="37" r="1.4" fill="#a98be8" />
    </svg>
  )
}

export default function App() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive(a => (a + 1) % ITEMS.length), 5000)
    return () => clearInterval(id)
  }, [paused])

  return (
    <div className="page">
      <header className="hero">
        <h1>Gain value from day one</h1>
        <p>
          Teams of every size use Showman to turn scattered information
          <br />
          into clear, confident decisions.
        </p>
      </header>

      <section
        className="panel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <TopFan />

        <ul className="items">
          {ITEMS.map((item, i) => (
            <li key={item.title} className={i === active ? 'item active' : 'item'}>
              <button onClick={() => setActive(i)}>{item.title}</button>
              <div className="body">
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="visual">
          <Rays spread={ITEMS[active].spread} />
        </div>

        <nav className="dots" aria-label="Slides">
          {ITEMS.map((item, i) => (
            <button
              key={item.title}
              className={i === active ? 'dot active' : 'dot'}
              onClick={() => setActive(i)}
              aria-label={item.title}
            />
          ))}
        </nav>
      </section>
    </div>
  )
}
