import { chapter } from '../data/chapter'
import './LearningObjectives.css'

export function LearningObjectives() {
  return (
    <aside className="objectives" id="objectives" aria-labelledby="objectives-heading">
      <h2 id="objectives-heading" className="objectives__lead">
        {chapter.objectivesLead}
      </h2>
      <ul className="objectives__list">
        {chapter.objectives.map((item) => (
          <li key={item.sectionId}>
            <a className="objectives__link" href={`#${item.sectionId}`}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
