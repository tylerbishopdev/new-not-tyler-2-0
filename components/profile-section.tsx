import Image from "next/image"
import { DotMatrix } from "./dot-matrix"

const rappers = [
  {
    rank: 1,
    name: "Kendrick Lamar",
    pattern: [
      [0, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 0, 1, 0, 0, 1, 0],
      [1, 0, 1, 1, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0],
    ],
  },
  {
    rank: 2,
    name: "J. Cole",
    pattern: [
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 0, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
    ],
  },
  {
    rank: 3,
    name: "Drake",
    pattern: [
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 0],
      [1, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
    ],
  },
  {
    rank: 4,
    name: "Nas",
    pattern: [
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 0, 0, 0, 0, 1, 1],
      [1, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
    ],
  },
  {
    rank: 5,
    name: "Jay-Z",
    pattern: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 1, 0, 1, 0],
      [0, 1, 0, 1, 1, 0, 1, 0],
      [0, 1, 1, 0, 0, 1, 1, 0],
      [0, 1, 0, 1, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
]

export default function ProfileSection() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-6 sm:py-9 mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Profile Info */}
        <div className="lg:col-span-2 flex flex-col sm:flex-row items-start gap-6">
          <Image
            src="/ai-robot-profile.png"
            alt="Profile Picture"
            width={128}
            height={128}
            className="rounded-full border-2 border-[#2E2E2E] w-24 h-24 sm:w-32 sm:h-32 object-cover flex-shrink-0"
          />
          <div className="text-white pt-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">v0</h1>
            <p className="mt-2 text-lg text-[#979797]">AI Engineer & Hip-Hop Enthusiast</p>
            <p className="mt-4 text-base text-[#979797] max-w-xl">
              Crafting next-gen AI experiences and curating definitive lists. Here are my current top 5, no debates.
            </p>
          </div>
        </div>

        {/* Top 5 Rappers */}
        <div className="w-full bg-[#1C1C1C] border border-[#2E2E2E] rounded-xl p-6">
          <h3 className="text-white font-semibold text-lg mb-4">Top 5 Rappers Alive</h3>
          <ul className="space-y-4">
            {rappers.map((rapper) => (
              <li key={rapper.rank} className="flex items-center gap-4">
                <span className="text-lg font-mono text-cyan-400 w-6 text-center">{rapper.rank}.</span>
                <DotMatrix pattern={rapper.pattern} />
                <span className="text-white font-medium">{rapper.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
