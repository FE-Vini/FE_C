import { GridPatternCard, GridPatternCardBody } from "./grid-pattern-card"

export function GridPatternCardDemo() {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <GridPatternCard>
        <GridPatternCardBody>
          <h3 className="text-lg font-bold mb-1 text-foreground">
            Grid Pattern with Ellipsis
          </h3>
          <p className="text-wrap text-sm text-foreground/60">
            A sophisticated pattern combining grid layout with ellipsis dots. 
            Perfect for creating depth and visual interest while maintaining 
            readability and modern aesthetics.
          </p>
        </GridPatternCardBody>
      </GridPatternCard>
    </div>
  )
}