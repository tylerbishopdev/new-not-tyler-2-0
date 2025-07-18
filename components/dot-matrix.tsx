import type React from "react"
import { cn } from "@/lib/utils"

interface DotMatrixProps {
  pattern: number[][]
  className?: string
  activeColor?: string
  inactiveColor?: string
}

export const DotMatrix: React.FC<DotMatrixProps> = ({
  pattern,
  className,
  activeColor = "bg-cyan-400",
  inactiveColor = "bg-[#2E2E2E]",
}) => {
  const rows = pattern.length
  const cols = pattern[0]?.length || 0

  return (
    <div
      className={cn("grid gap-1 p-1 bg-[#1C1C1C] rounded", className)}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
    >
      {pattern.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-colors duration-300",
              cell === 1 ? activeColor : inactiveColor,
            )}
          />
        )),
      )}
    </div>
  )
}
