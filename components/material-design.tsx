"use client"

import { useState } from "react"
import { Terminal, CheckSquare, BookOpen, Edit3, Plus, Clock } from "lucide-react"

export function MaterialDesign() {
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
    <div className="material-design min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 w-full">
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-center mb-8">
          <button
            onClick={handleLoadData}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 font-medium elevation-2"
          >
            {isLoading ? "Loading..." : "Refresh Data"}
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden elevation-8">
          <div className="p-8">
            {/* Git Graph Visualization */}
            <div className="relative">
              <svg width="800" height={80 + commits.length * 140 + 40} className="w-full">
                <defs>
                  <linearGradient id="materialBlueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2196F3" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1976D2" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="materialGreenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#388E3C" stopOpacity="0.6" />
                  </linearGradient>
                  <filter id="materialShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="rgba(0,0,0,0.2)" />
                  </filter>
                </defs>

                {/* Main branch line */}
                <line
                  x1="80"
                  y1="60"
                  x2="80"
                  y2="500"
                  stroke="url(#materialBlueGradient)"
                  strokeWidth="4"
                  filter="url(#materialShadow)"
                />

                {/* Feature branch line */}
                <line
                  x1="160"
                  y1="220"
                  x2="160"
                  y2="360"
                  stroke="url(#materialGreenGradient)"
                  strokeWidth="4"
                  filter="url(#materialShadow)"
                />

                {/* Branch out path */}
                <path
                  d="M 80 220 Q 120 220 160 220"
                  stroke="url(#materialGreenGradient)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#materialShadow)"
                  strokeDasharray={isLoading ? "4,4" : "0"}
                  className="transition-all duration-1000 ease-out"
                />

                {/* Merge back path */}
                <path
                  d="M 160 360 Q 120 360 80 360"
                  stroke="url(#materialGreenGradient)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#materialShadow)"
                />

                {/* Continue main branch */}
                <line
                  x1="80"
                  y1="360"
                  x2="80"
                  y2="640"
                  stroke="url(#materialBlueGradient)"
                  strokeWidth="4"
                  filter="url(#materialShadow)"
                />

                {commits.map((commit, i) => {
                  let x = 80
                  let y = 80 + i * 140
                  let circleColor = "#2196F3"

                  if (i === 1) {
                    x = 160
                    y = 220
                    circleColor = "#4CAF50"
                  } else if (i === 2) {
                    x = 80
                    y = 360
                  } else if (i === 3) {
                    x = 80
                    y = 500
                  } else if (i === 4) {
                    x = 80
                    y = 640
                  }

                  return (
                    <g key={commit.id}>
                      <circle
                        cx={x}
                        cy={y}
                        r="16"
                        fill={i === 1 ? "#E8F5E8" : "#E3F2FD"}
                        stroke={i === 1 ? "#4CAF50" : "#2196F3"}
                        strokeWidth="2"
                        filter="url(#materialShadow)"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="8"
                        fill={circleColor}
                        className="hover:opacity-80 transition-all cursor-pointer"
                        filter="url(#materialShadow)"
                      />
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

                  const getToolIcon = (tool: string) => {
                    switch (tool) {
                      case "bash":
                        return <Terminal className="w-4 h-4 text-gray-700" />
                      case "task":
                        return <CheckSquare className="w-4 h-4 text-gray-700" />
                      case "read":
                        return <BookOpen className="w-4 h-4 text-gray-700" />
                      case "edit":
                        return <Edit3 className="w-4 h-4 text-gray-700" />
                      case "create":
                        return <Plus className="w-4 h-4 text-gray-700" />
                      default:
                        return <Terminal className="w-4 h-4 text-gray-700" />
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
                        className={`group relative bg-white rounded-lg p-4 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] elevation-4 hover:elevation-8 ${
                          isLoading && i === 4 ? "animate-pulse bg-blue-50" : ""
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-200">
                            {isLoading && i === 4 ? (
                              <Clock className="w-4 h-4 text-blue-600 animate-pulse" />
                            ) : (
                              getToolIcon(commit.tool)
                            )}
                          </div>

                          <div className="flex-1 text-gray-900 font-semibold text-lg">
                            {isLoading && i === 4 ? (
                              <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                <div
                                  className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                                  style={{ animationDelay: "0.3s" }}
                                ></div>
                                <div
                                  className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                                  style={{ animationDelay: "0.6s" }}
                                ></div>
                                <span className="ml-2 text-gray-600">Loading commit data...</span>
                              </div>
                            ) : (
                              commit.message
                            )}
                          </div>

                          <div className="flex-shrink-0 text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
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
