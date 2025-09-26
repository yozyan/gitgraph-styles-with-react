"use client"

import { useState } from "react"
import { Terminal, CheckSquare, BookOpen, Edit3, Plus, Clock } from "lucide-react"

export function Neumorphism() {
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
    <div className="neumorphism min-h-screen bg-gray-200 w-full">
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-center mb-8">
          <button
            onClick={handleLoadData}
            disabled={isLoading}
            className="bg-gray-200 rounded-full px-6 py-3 font-medium transition-all duration-300 text-gray-800 disabled:opacity-50 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]"
          >
            {isLoading ? "Loading..." : "Refresh Data"}
          </button>
        </div>

        <div className="bg-gray-200 rounded-3xl shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] overflow-hidden">
          <div className="p-8">
            {/* Git Graph Visualization */}
            <div className="relative">
              <svg width="800" height={80 + commits.length * 140 + 40} className="w-full">
                <defs>
                  <linearGradient id="neuroBlueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3730A3" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="neuroGreenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#059669" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#047857" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Main branch line */}
                <line x1="80" y1="60" x2="80" y2="500" stroke="url(#neuroBlueGradient)" strokeWidth="4" />

                {/* Feature branch line */}
                <line x1="160" y1="220" x2="160" y2="360" stroke="url(#neuroGreenGradient)" strokeWidth="4" />

                {/* Branch out path */}
                <path
                  d="M 80 220 Q 120 220 160 220"
                  stroke="url(#neuroGreenGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={isLoading ? "4,4" : "0"}
                  className="transition-all duration-1000 ease-out"
                />

                {/* Merge back path */}
                <path d="M 160 360 Q 120 360 80 360" stroke="url(#neuroGreenGradient)" strokeWidth="3" fill="none" />

                {/* Continue main branch */}
                <line x1="80" y1="360" x2="80" y2="640" stroke="url(#neuroBlueGradient)" strokeWidth="4" />

                {commits.map((commit, i) => {
                  let x = 80
                  let y = 80 + i * 140

                  if (i === 1) {
                    x = 160
                    y = 220
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
                        r="18"
                        fill="#e5e7eb"
                        style={{
                          filter: "drop-shadow(4px 4px 8px #bebebe) drop-shadow(-4px -4px 8px #ffffff)",
                        }}
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="10"
                        fill={i === 1 ? "#059669" : "#4F46E5"}
                        className="hover:opacity-80 transition-all cursor-pointer"
                        style={{
                          filter: "drop-shadow(inset 2px 2px 4px rgba(0,0,0,0.2))",
                        }}
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
                        className={`group relative bg-gray-200 rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] ${
                          isLoading && i === 4 ? "animate-pulse" : ""
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
                            {isLoading && i === 4 ? (
                              <Clock className="w-4 h-4 text-gray-600 animate-pulse" />
                            ) : (
                              getToolIcon(commit.tool)
                            )}
                          </div>

                          <div className="flex-1 text-gray-800 font-semibold text-lg">
                            {isLoading && i === 4 ? (
                              <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                                <div
                                  className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"
                                  style={{ animationDelay: "0.3s" }}
                                ></div>
                                <div
                                  className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"
                                  style={{ animationDelay: "0.6s" }}
                                ></div>
                                <span className="ml-2 text-gray-600">Loading commit data...</span>
                              </div>
                            ) : (
                              commit.message
                            )}
                          </div>

                          <div className="flex-shrink-0 text-xs text-gray-500 font-mono bg-gray-200 px-2 py-1 rounded shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff]">
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
