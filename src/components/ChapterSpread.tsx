import { type ReactNode } from 'react'
import './ChapterSpread.css'

type ChapterSpreadProps = {
  children: ReactNode
}

/** Stacked opener spread: objectives above intro prose */
export function ChapterSpread({ children }: ChapterSpreadProps) {
  return <div className="spread">{children}</div>
}
