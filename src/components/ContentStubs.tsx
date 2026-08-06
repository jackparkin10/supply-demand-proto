import { chapter } from '../data/chapter'
import './ContentStubs.css'

export function ContentStubs() {
  return (
    <section className="content-stubs" aria-label="Chapter sections">
      {chapter.sections.map((section) => (
        <article className="stub" id={section.id} key={section.id}>
          <header className="stub__header">
            <p className="stub__num" aria-hidden="true">
              {section.num}
            </p>
            <h3 className="stub__title">
              <span className="visually-hidden">{section.num} </span>
              {section.title}
            </h3>
            <p className="stub__blurb">{section.blurb}</p>
          </header>
          <p className="stub__body">{section.stub}</p>
        </article>
      ))}
    </section>
  )
}
