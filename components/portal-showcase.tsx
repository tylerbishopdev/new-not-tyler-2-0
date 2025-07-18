"use client"

import { useRef } from "react"
import { CosmicPortal, type PortalHandle } from "./cosmic-portal"
import { Button } from "@/components/ui/button"

export default function PortalShowcase() {
  const cosmicPortalRef = useRef<PortalHandle>(null)

  const activatePortal = () => {
    cosmicPortalRef.current?.activatePortal()
  }

  const shiftDimensions = () => {
    cosmicPortalRef.current?.shiftDimensions()
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-6 sm:py-9">
      <div className="h-[28rem] w-full flex flex-col overflow-clip gap-4">
        <div className="w-full h-full rounded-lg overflow-hidden border border-[#2E2E2E]">
          <CosmicPortal ref={cosmicPortalRef} />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            onClick={activatePortal}
            className="bg-transparent text-white border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Activate Portal
          </Button>
          <Button
            variant="outline"
            onClick={shiftDimensions}
            className="bg-transparent text-white border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Shift Dimensions
          </Button>
        </div>
      </div>
    </div>
  )
}
