import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import type { IconType } from 'react-icons'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { FiArrowUpRight, FiCheck, FiShare2 } from 'react-icons/fi'
import tcaLogo from './assets/tca-la-paz-logo.png'
import './App.css'

type SocialLink = {
  name: string
  description: string
  href: string
  icon: IconType
  color: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    description: 'Conoce nuestras actividades',
    href: 'https://www.facebook.com/profile.php?id=61556455592365',
    icon: FaFacebookF,
    color: '#1877f2',
  },
  {
    name: 'Instagram',
    description: 'Sigue el día a día de TCA',
    href: 'https://www.instagram.com/tca.lapaz/',
    icon: FaInstagram,
    color: '#c13584',
  },
  {
    name: 'LinkedIn',
    description: 'Conecta con nuestra comunidad',
    href: 'https://www.linkedin.com/company/the-consulting-academy-la-paz/posts/',
    icon: FaLinkedinIn,
    color: '#0a66c2',
  },
  {
    name: 'Comunidad de WhatsApp',
    description: 'Únete al grupo de TCA La Paz',
    href: 'https://chat.whatsapp.com/HiadhIF6ZX830UWZF7Vlje',
    icon: FaWhatsapp,
    color: '#128c7e',
  },
]

function App() {
  const pageRef = useRef<HTMLElement>(null)
  const frameRef = useRef<number | null>(null)
  const touchTimerRef = useRef<number | null>(null)
  const [shareComplete, setShareComplete] = useState(false)

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
      if (touchTimerRef.current !== null) window.clearTimeout(touchTimerRef.current)
    }
  }, [])

  const updateGradient = (event: PointerEvent<HTMLElement>) => {
    const page = pageRef.current
    if (!page || frameRef.current !== null) return

    const { clientX, clientY } = event
    frameRef.current = requestAnimationFrame(() => {
      const bounds = page.getBoundingClientRect()
      const x = ((clientX - bounds.left) / bounds.width) * 100
      const y = ((clientY - bounds.top) / bounds.height) * 100
      page.style.setProperty('--pointer-x', `${x.toFixed(1)}%`)
      page.style.setProperty('--pointer-y', `${y.toFixed(1)}%`)
      frameRef.current = null
    })
  }

  const pulseGradient = () => {
    const page = pageRef.current
    if (!page) return

    page.dataset.touched = 'true'
    if (touchTimerRef.current !== null) window.clearTimeout(touchTimerRef.current)
    touchTimerRef.current = window.setTimeout(() => {
      delete page.dataset.touched
    }, 480)
  }

  const sharePage = async () => {
    const shareData = {
      title: 'TCA La Paz',
      text: 'Conecta con The Consulting Academy La Paz',
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(window.location.href)
      }
      setShareComplete(true)
      window.setTimeout(() => setShareComplete(false), 2200)
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
    }
  }

  return (
    <main
      ref={pageRef}
      className="social-page"
      onPointerMove={updateGradient}
      onPointerDown={pulseGradient}
    >
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <div className="page-shell">
        <header className="profile-header">
          <div className="top-row">
            <span className="location-chip">TCA · La Paz</span>
            <button
              className="share-button"
              type="button"
              onClick={sharePage}
              aria-label={shareComplete ? 'Enlace copiado' : 'Compartir esta página'}
            >
              {shareComplete ? <FiCheck aria-hidden="true" /> : <FiShare2 aria-hidden="true" />}
              <span>{shareComplete ? 'Copiado' : 'Compartir'}</span>
            </button>
          </div>

          <div className="brand-frame">
            <img
              src={tcaLogo}
              width="922"
              height="503"
              alt="The Consulting Academy La Paz"
            />
          </div>

          <div className="intro-copy">
            <p className="intro-kicker">Aprende. Conecta. Crece.</p>
            <h1>TCA La Paz, a un toque de distancia.</h1>
            <p>
              Encuentra nuestras redes y únete a la comunidad de The Consulting Academy en La Paz.
            </p>
          </div>
        </header>

        <nav className="social-links" aria-label="Redes sociales de TCA La Paz">
          {socialLinks.map(({ name, description, href, icon: Icon, color }, index) => (
            <a
              className="social-link"
              href={href}
              target="_blank"
              rel="noreferrer"
              key={name}
              style={{ '--brand-color': color, '--order': index } as CSSProperties}
              aria-label={`Abrir ${name} de TCA La Paz`}
            >
              <span className="icon-frame" aria-hidden="true">
                <Icon />
              </span>
              <span className="link-copy">
                <strong>{name}</strong>
                <span>{description}</span>
              </span>
              <FiArrowUpRight className="link-arrow" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <footer>
          <span aria-hidden="true" className="footer-mark">
            <i />
            <i />
            <i />
          </span>
          <p>The Consulting Academy · La Paz</p>
        </footer>
      </div>
    </main>
  )
}

export default App
