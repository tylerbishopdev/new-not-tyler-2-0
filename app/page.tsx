"use client"

import BentoGrid from "../components/features-grid"
import ProfileSection from "../components/profile-section"


export default function Page() {
  return (
    <div className="min-h-screen">

      <ProfileSection />
      <BentoGrid />
    </div>
  )
}
