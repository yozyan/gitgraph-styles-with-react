"use client"

import { useState } from "react"

export function MaterialDesign() {
  const [activeTab, setActiveTab] = useState("demo")
  const [activeNav, setActiveNav] = useState("reverse")

  const tabs = [
    { id: "claudecode-2", name: "ClaudeCode - 2" },
    { id: "claudecode-1", name: "ClaudeCode - 1" },
    { id: "demo", name: "demo" },
  ]

  const navItems = [
    { id: "static", name: "Static", subtitle: "(Bottom-Up)" },
    { id: "reverse", name: "Static Reverse", subtitle: "(Top-Down)" },
  ]

  return (
    <div className="material-design min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Git Graph Visualization</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Interactive visualization of Git commit history with Material Design principles
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-2 shadow-md border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-md transform scale-105"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Navigation */}
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 min-w-[160px] ${
                  activeNav === item.id
                    ? "bg-blue-600 text-white shadow-lg transform translate-y-[-2px]"
                    : "bg-white text-gray-700 shadow-md hover:shadow-lg hover:transform hover:translate-y-[-1px] border border-gray-100"
                }`}
              >
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm opacity-80">{item.subtitle}</div>
              </button>
            ))}
          </div>

          {/* Graph Container */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                {/* Git Graph Visualization */}
                <div className="relative">
                  <svg width="600" height="400" className="w-full">
                    {/* Branch Lines */}
                    <defs>
                      <linearGradient id="branchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#1E40AF" />
                      </linearGradient>
                      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.1" />
                      </filter>
                    </defs>

                    <line
                      x1="50"
                      y1="50"
                      x2="50"
                      y2="350"
                      stroke="url(#branchGradient)"
                      strokeWidth="4"
                      filter="url(#shadow)"
                    />

                    {/* Commits */}
                    {[80, 140, 200, 260, 320].map((y, i) => (
                      <g key={i}>
                        <circle
                          cx="50"
                          cy={y}
                          r="12"
                          fill="#3B82F6"
                          filter="url(#shadow)"
                          className="hover:fill-blue-700 transition-colors cursor-pointer"
                        />
                        <circle cx="50" cy={y} r="6" fill="white" />
                        <text x="80" y={y + 5} className="text-sm font-medium fill-gray-700">
                          Commit {i + 1}: Feature implementation
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
