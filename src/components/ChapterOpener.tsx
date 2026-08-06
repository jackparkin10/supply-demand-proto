import avoHero from '../assets/avo.png'
import { chapter } from '../data/chapter'
import './ChapterOpener.css'

export function ChapterOpener() {
  return (
    <section className="opener" id="top" aria-labelledby="chapter-title">
      <div className="hero">
        <img
          className="hero__image"
          src={avoHero}
          alt={chapter.heroAlt}
          width={1024}
          height={682}
          decoding="async"
        />
        <p className="hero__banner">
          <span className="hero__banner-part">{chapter.part}</span>{' '}
          <span className="hero__banner-title">{chapter.partTitle}</span>
        </p>
      </div>

      <header className="opener__header">
        <div className="opener__heading">
          <span className="opener__number" aria-hidden="true">
            {chapter.number}
          </span>
          <h1 id="chapter-title" className="opener__title">
            {chapter.title}
          </h1>
        </div>
        <div className="opener__rule" aria-hidden="true">
          <span className="opener__rule-line" />
          <span className="opener__rule-diamond" />
        </div>
      </header>
    </section>
  )
}
