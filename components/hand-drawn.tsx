"use client"

import { useState } from "react"

export function HandDrawn() {
  const [isLoading, setIsLoading] = useState(false)

  const commits = [
    { id: 1, message: "Initial project setup", tool: "bash", time: "2024-01-15 14:30" },
    { id: 2, message: "Add authentication system", tool: "task", time: "2024-01-15 10:45" },
    { id: 3, message: "Implement user dashboard", tool: "read", time: "2024-01-15 08:20" },
    { id: 4, message: "Fix responsive layout issues", tool: "edit", time: "2024-01-15 06:15" },
    { id: 5, message: "Add dark mode support", tool: "create", time: "2024-01-15 04:10" },
  ]

  const handleLoadData = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  return (
    <div className="hand-drawn min-h-screen bg-amber-50 relative w-full">
      {/* Paper texture background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4a574' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='13' cy='43' r='1'/%3E%3Ccircle cx='47' cy='17' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-center mb-8">
          <button
            onClick={handleLoadData}
            disabled={isLoading}
            className="bg-yellow-300 hover:bg-yellow-400 disabled:bg-yellow-200 text-gray-900 font-bold px-6 py-3 border-3 border-gray-800 transition-all duration-300 transform hover:rotate-[1deg] hover:scale-105 disabled:opacity-50"
            style={{
              fontFamily: "Comic Sans MS, cursive, sans-serif",
              borderRadius: "15px 20px 18px 16px",
              boxShadow: "3px 3px 0px #d4a574, 6px 6px 0px #b8956a",
            }}
          >
            {isLoading ? "Loading... ⏳" : "Refresh Data 🔄"}
          </button>
        </div>

        <div
          className="bg-white rounded-lg border-3 border-gray-800 shadow-lg overflow-hidden transform rotate-[0.3deg]"
          style={{
            borderRadius: "20px 25px 18px 22px",
            boxShadow: "4px 4px 0px #d4a574, 8px 8px 0px #b8956a",
          }}
        >
          <div className="p-8">
            {/* Git Graph Visualization */}
            <div className="relative">
              <svg width="800" height={80 + commits.length * 140 + 40} className="w-full">
                <defs>
                  <filter id="roughPaper" x="0%" y="0%" width="100%" height="100%">
                    <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                  </filter>
                  <filter id="sketchy" x="0%" y="0%" width="100%" height="100%">
                    <feTurbulence baseFrequency="0.02" numOctaves="2" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
                  </filter>
                </defs>

                {/* Sketchy main branch line */}
                <path
                  d="M80,60 Q82,150 78,240 Q82,330 80,420 Q78,510 80,600 Q82,630 80,640"
                  stroke="#2563eb"
                  strokeWidth="4"
                  fill="none"
                  filter="url(#roughPaper)"
                  strokeLinecap="round"
                />

                {/* Sketchy feature branch line */}
                <path
                  d="M160,220 Q162,280 158,320 Q162,350 160,360"
                  stroke="#059669"
                  strokeWidth="4"
                  fill="none"
                  filter="url(#roughPaper)"
                  strokeLinecap="round"
                />

                {/* Branch out path */}
                <path
                  d="M80,220 Q100,218 120,222 Q140,218 160,220"
                  stroke="#059669"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#sketchy)"
                  strokeLinecap="round"
                  strokeDasharray={isLoading ? "5,5" : "0"}
                  className="transition-all duration-1000 ease-out"
                />

                {/* Merge back path */}
                <path
                  d="M160,360 Q140,362 120,358 Q100,362 80,360"
                  stroke="#059669"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#sketchy)"
                  strokeLinecap="round"
                />

                {commits.map((commit, i) => {
                  let x = 80 + Math.sin(i) * 3
                  let y = 80 + i * 140 + Math.cos(i) * 2

                  if (i === 1) {
                    x = 160 + Math.sin(i) * 3
                    y = 220 + Math.cos(i) * 2
                  } else if (i === 2) {
                    x = 80 + Math.sin(i) * 3
                    y = 360 + Math.cos(i) * 2
                  } else if (i === 3) {
                    x = 80 + Math.sin(i) * 3
                    y = 500 + Math.cos(i) * 2
                  } else if (i === 4) {
                    x = 80 + Math.sin(i) * 3
                    y = 640 + Math.cos(i) * 2
                  }

                  return (
                    <g key={commit.id}>
                      <circle
                        cx={x}
                        cy={y}
                        r="16"
                        fill="#fbbf24"
                        stroke="#92400e"
                        strokeWidth="3"
                        filter="url(#roughPaper)"
                        className="hover:fill-yellow-300 transition-colors cursor-pointer"
                      />
                      <circle cx={x} cy={y} r="8" fill={i === 1 ? "#059669" : "#2563eb"} filter="url(#sketchy)" />
                    </g>
                  )
                })}
              </svg>

              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {commits.map((commit, i) => {
                  let x = 120
                  let y = 80 + i * 140

                  if (i === 1) {
                    x = 200
                    y = 220
                  } else if (i === 2) {
                    x = 120
                    y = 360
                  } else if (i === 3) {
                    x = 120
                    y = 500
                  } else if (i === 4) {
                    x = 120
                    y = 640
                  }

                  const getToolEmoji = (tool: string) => {
                    switch (tool) {
                      case "bash":
                        return "💻"
                      case "task":
                        return "✅"
                      case "read":
                        return "📖"
                      case "edit":
                        return "✏️"
                      case "create":
                        return "➕"
                      default:
                        return "💻"
                    }
                  }

                  return (
                    <div
                      key={`info-${commit.id}`}
                      className="absolute pointer-events-auto"
                      style={{
                        left: `${x}px`,
                        top: `${y - 30}px`,
                        width: "600px",
                        zIndex: 20,
                      }}
                    >
                      <div
                        className={`group relative bg-white p-4 border-3 border-gray-800 transition-all duration-300 hover:scale-[1.02] transform hover:rotate-[0.5deg] ${
                          isLoading && i === 4 ? "animate-pulse bg-yellow-50" : ""
                        }`}
                        style={{
                          fontFamily: "Comic Sans MS, cursive, sans-serif",
                          borderRadius: `${15 + i}px ${20 + i}px ${18 + i}px ${16 + i}px`,
                          boxShadow: "3px 3px 0px #d4a574, 6px 6px 0px #b8956a",
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="flex-shrink-0 w-8 h-8 bg-yellow-200 rounded-lg flex items-center justify-center border-2 border-gray-800 text-lg"
                            style={{
                              borderRadius: "8px 12px 10px 6px",
                              boxShadow: "2px 2px 0px #d4a574",
                            }}
                          >
                            {isLoading && i === 4 ? "⏳" : getToolEmoji(commit.tool)}
                          </div>

                          <div className="flex-1 text-gray-900 font-bold text-lg">
                            {isLoading && i === 4 ? (
                              <div className="flex items-center gap-3">
                                <span className="text-2xl animate-bounce">🔄</span>
                                <span className="text-gray-700">Loading commit data...</span>
                              </div>
                            ) : (
                              `${commit.message} ✨`
                            )}
                          </div>

                          <div
                            className="flex-shrink-0 text-xs text-gray-600 font-bold bg-blue-100 px-2 py-1 border-2 border-gray-800"
                            style={{
                              borderRadius: "6px 8px 7px 5px",
                              boxShadow: "1px 1px 0px #d4a574",
                            }}
                          >
                            {isLoading && i === 4 ? "..." : commit.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
