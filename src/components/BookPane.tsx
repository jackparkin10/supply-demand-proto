import { type ReactNode } from 'react'
import './BookPane.css'

type BookPaneProps = {
  children: ReactNode
}

export function BookPane({ children }: BookPaneProps) {
  return (
    <section className="book" aria-label="Chapter reading pane">
      <div className="book__frame">
        <article className="book__page" id="main">
          {children}
        </article>
      </div>
    </section>
  )
}
