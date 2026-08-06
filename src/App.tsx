import { useCallback, useEffect, useMemo } from 'react'
import { BookPane } from './components/BookPane'
import { ChapterIntro } from './components/ChapterIntro'
import { ChapterOpener } from './components/ChapterOpener'
import { ChapterSpread } from './components/ChapterSpread'
import { ChapterTOC } from './components/ChapterTOC'
import { ContentStubs } from './components/ContentStubs'
import { LearningObjectives } from './components/LearningObjectives'
import { tocItems } from './data/chapter'
import { useActiveSection } from './hooks/useActiveSection'
import './App.css'

function scrollToId(id: string, behavior: ScrollBehavior = 'smooth') {
  const target = document.getElementById(id)
  if (!target) return
  target.scrollIntoView({ behavior, block: 'start' })
}

function App() {
  const sectionIds = useMemo(() => tocItems.map((item) => item.id), [])
  const activeId = useActiveSection(sectionIds)

  const navigateTo = useCallback((id: string) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    scrollToId(id, prefersReduced ? 'auto' : 'smooth')
    history.pushState(null, '', `#${id}`)
  }, [])

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '')
    if (!hash) return
    requestAnimationFrame(() => scrollToId(hash, 'auto'))
  }, [])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ChapterTOC activeId={activeId} onNavigate={navigateTo} />

      <BookPane>
        <ChapterOpener />
        <ChapterSpread>
          <LearningObjectives />
          <ChapterIntro />
        </ChapterSpread>
        <ContentStubs />
        <footer className="book-footer">
          <p>Supply &amp; Demand chapter prototype · template for future digital textbook chapters</p>
        </footer>
      </BookPane>
    </div>
  )
}

export default App
