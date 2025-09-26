"use client"

import { useState } from "react"
import { Terminal, CheckSquare, BookOpen, Edit3, Plus, Clock } from "lucide-react"

export function Glassmorphism() {
  const [activeTab, setActiveTab] = useState("demo")
  const [activeNav, setActiveNav] = useState("reverse")
  const [isLoading, setIsLoading] = useState(false)

  const tabs = [
    { id: "claudecode-2", name: "ClaudeCode - 2" },
    { id: "claudecode-1", name: "ClaudeCode - 1" },
    { id: "demo", name: "demo" },
  ]

  const navItems = [
    { id: "static", name: "Static", subtitle: "(Bottom-Up)" },
    { id: "reverse", name: "Static Reverse", subtitle: "(Top-Down)" },
  ]

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
    <div className="glassmorphism bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 relative overflow-hidden min-h-screen w-full">
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-center mb-8">
          <button
            onClick={handleLoadData}
            disabled={isLoading}
            className="bg-white/50 backdrop-blur-md rounded-full px-6 py-3 border border-white/60 shadow-lg shadow-black/5 hover:bg-white/60 transition-all duration-300 text-gray-800 font-medium disabled:opacity-50"
          >
            {isLoading ? "Loading..." : "Refresh Data"}
          </button>
        </div>

        <div className="bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-lg shadow-black/5 overflow-hidden">
          <div className="p-8">
            {/* Git Graph Visualization */}
            <div className="relative">
              <svg width="800" height={80 + commits.length * 140 + 40} className="w-full">
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.1)" />
                  </filter>
                  <filter id="pulse">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <line
                  x1="80"
                  y1="60"
                  x2="80"
                  y2="500"
                  stroke="url(#blueGradient)"
                  strokeWidth="4"
                  filter="url(#glow)"
                  opacity="0.8"
                />

                <line
                  x1="160"
                  y1="220"
                  x2="160"
                  y2="360"
                  stroke="url(#greenGradient)"
                  strokeWidth="4"
                  filter="url(#glow)"
                  opacity="0.8"
                />

                <path
                  d="M 80 220 Q 120 220 160 220"
                  stroke="url(#greenGradient)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  opacity="0.8"
                  strokeDasharray={isLoading ? "3,3" : "0"}
                  className="transition-all duration-1000 ease-out"
                />

                <path
                  d="M 160 360 Q 120 360 80 360"
                  stroke="url(#greenGradient)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  opacity="0.8"
                />

                <line
                  x1="80"
                  y1="360"
                  x2="80"
                  y2="640"
                  stroke="url(#blueGradient)"
                  strokeWidth="4"
                  filter="url(#glow)"
                  opacity="0.8"
                />

                {commits.map((commit, i) => {
                  let x = 80 // Default to main branch
                  let y = 80 + i * 140
                  let circleColor = "#3b82f6" // Default blue for main branch

                  // Position commits based on branching logic
                  if (i === 1) {
                    // "Add authentication system" - on feature branch
                    x = 160
                    y = 220
                    circleColor = "#10b981" // Green for feature branch
                  } else if (i === 2) {
                    // "Implement user dashboard" - merge point
                    x = 80
                    y = 360
                    circleColor = "#3b82f6" // Blue for main branch
                  } else if (i === 3) {
                    // "Fix responsive layout issues"
                    x = 80
                    y = 500
                  } else if (i === 4) {
                    // "Add dark mode support"
                    x = 80
                    y = 640
                  }

                  return (
                    <g key={commit.id}>
                      <circle
                        cx={x}
                        cy={y}
                        r="18"
                        fill="rgba(59, 130, 246, 0.08)"
                        stroke="rgba(59, 130, 246, 0.2)"
                        strokeWidth="1"
                        filter="url(#shadow)"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="12"
                        fill={i === 1 ? "rgba(16, 185, 129, 0.25)" : "rgba(59, 130, 246, 0.25)"}
                        stroke={i === 1 ? "rgba(16, 185, 129, 0.6)" : "rgba(59, 130, 246, 0.6)"}
                        strokeWidth="2"
                        filter="url(#shadow)"
                        className="hover:fill-blue-500/40 transition-all cursor-pointer"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="6"
                        fill={circleColor}
                        opacity={isLoading && i === 4 ? "0.6" : "0.9"}
                        filter="url(#glow)"
                        className={isLoading && i === 4 ? "animate-pulse" : ""}
                      />
                    </g>
                  )
                })}
              </svg>

              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {commits.map((commit, i) => {
                  let x = 120 // Default offset from main branch
                  let y = 80 + i * 140

                  if (i === 1) {
                    // "Add authentication system" - on feature branch
                    x = 200 // Offset from feature branch position
                    y = 220
                  } else if (i === 2) {
                    // "Implement user dashboard" - merge point
                    x = 120
                    y = 360
                  } else if (i === 3) {
                    // "Fix responsive layout issues"
                    x = 120
                    y = 500
                  } else if (i === 4) {
                    // "Add dark mode support"
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
                        className={`group relative bg-white/20 backdrop-blur-xl rounded-xl p-4 border border-white/30 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:bg-white hover:scale-[1.02] hover:border-white/40 overflow-hidden ${
                          isLoading && i === 4 ? "animate-pulse bg-white/30" : "animate-float-up"
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {isLoading && i === 4 && (
                          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        )}

                        <div className="relative z-10 flex items-center gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-white/40 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/50 shadow-sm">
                            {isLoading && i === 4 ? (
                              <Clock className="w-4 h-4 text-gray-600 animate-pulse" />
                            ) : (
                              getToolIcon(commit.tool)
                            )}
                          </div>

                          <div className="flex-1 text-gray-800 font-semibold text-lg leading-tight drop-shadow-sm">
                            {isLoading && i === 4 ? (
                              <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-blue-500/80 rounded-full animate-pulse"></div>
                                <div
                                  className="w-3 h-3 bg-blue-500/80 rounded-full animate-pulse"
                                  style={{ animationDelay: "0.3s" }}
                                ></div>
                                <div
                                  className="w-3 h-3 bg-blue-500/80 rounded-full animate-pulse"
                                  style={{ animationDelay: "0.6s" }}
                                ></div>
                                <span className="ml-2 text-gray-600">Loading commit data...</span>
                              </div>
                            ) : (
                              commit.message
                            )}
                          </div>

                          <div className="flex-shrink-0 text-xs text-gray-500 opacity-60 font-mono bg-white/20 px-2 py-1 rounded-md">
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
