import { chapter } from '../data/chapter'
import './ChapterIntro.css'

function emphasizeWords(text: string, words: readonly string[]) {
  const sorted = [...words].sort((a, b) => b.length - a.length)
  const pattern = new RegExp(`\\b(${sorted.map(escapeRegExp).join('|')})\\b`, 'gi')
  const parts = text.split(pattern)
  return parts.map((part, i) => {
    const match = sorted.some((w) => w.toLowerCase() === part.toLowerCase())
    if (match) {
      return <em key={`${part}-${i}`}>{part}</em>
    }
    return <span key={`${part}-${i}`}>{part}</span>
  })
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function ChapterIntro() {
  const { intro } = chapter

  return (
    <section className="intro" id="intro" aria-label={intro.kicker}>
      <div className="intro__body">
        {intro.paragraphs.map((p, index) => (
          <p key={p.slice(0, 28)}>
            {index === 0 ? emphasizeWords(p, intro.emphasize) : p}
          </p>
        ))}
        <p className="intro__note">
          {emphasizeWords(intro.note, ['Economics in the News'])}
        </p>
      </div>
    </section>
  )
}
