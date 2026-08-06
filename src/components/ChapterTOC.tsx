import { useCallback, useState } from 'react'
import { chapter, tocItems } from '../data/chapter'
import './ChapterTOC.css'

type ChapterTOCProps = {
  activeId: string
  onNavigate: (id: string) => void
}

export function ChapterTOC({ activeId, onNavigate }: ChapterTOCProps) {
  const [open, setOpen] = useState(false)

  const handleClick = useCallback(
    (id: string) => {
      onNavigate(id)
      setOpen(false)
    },
    [onNavigate],
  )

  return (
    <aside className={`toc ${open ? 'toc--open' : ''}`}>
      <div className="toc__mobile-bar">
        <button
          type="button"
          className="toc__toggle"
          aria-expanded={open}
          aria-controls="chapter-toc-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="toc__toggle-label">Chapter menu</span>
          <span className="toc__toggle-hint" aria-hidden="true">
            {open ? 'Close' : 'Open'}
          </span>
        </button>
      </div>

      <div className="toc__panel" id="chapter-toc-nav">
        <header className="toc__header">
          <p className="toc__eyebrow">
            Chapter {chapter.number}
          </p>
          <p className="toc__title">{chapter.title}</p>
        </header>

        <nav className="toc__nav" aria-label="Chapter table of contents">
          <ul className="toc__list">
            {tocItems.map((item) => {
              const isActive = activeId === item.id
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`toc__link${isActive ? ' is-active' : ''}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
