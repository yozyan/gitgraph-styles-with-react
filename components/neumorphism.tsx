"use client"

import { useState } from "react"

export function Neumorphism() {
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
    <div className="neumorphism min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Neuro Card */}
        <div className="bg-gray-200 rounded-3xl p-8 mb-8 shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff]">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Git Graph Visualization</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Neumorphism design with soft, inset and outset shadows
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-200 rounded-full p-2 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gray-200 text-blue-600 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]"
                    : "text-gray-600 hover:text-blue-600 bg-gray-200 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff]"
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
                className={`p-4 rounded-2xl text-left transition-all duration-300 min-w-[160px] bg-gray-200 ${
                  activeNav === item.id
                    ? "text-blue-600 shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]"
                    : "text-gray-700 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]"
                }`}
              >
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm opacity-70">{item.subtitle}</div>
              </button>
            ))}
          </div>

          {/* Graph Container */}
          <div className="flex-1 bg-gray-200 rounded-3xl shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] overflow-hidden">
            <div className="p-8">
              <div className="bg-gray-200 rounded-2xl p-8 shadow-[inset_12px_12px_24px_#bebebe,inset_-12px_-12px_24px_#ffffff]">
                {/* Git Graph Visualization */}
                <div className="relative">
                  <svg width="600" height="400" className="w-full">
                    <defs>
                      <linearGradient id="neuroGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4F46E5" />
                        <stop offset="100%" stopColor="#3730A3" />
                      </linearGradient>
                    </defs>

                    <line x1="50" y1="50" x2="50" y2="350" stroke="url(#neuroGradient)" strokeWidth="4" />

                    {/* Commits */}
                    {[80, 140, 200, 260, 320].map((y, i) => (
                      <g key={i}>
                        <circle
                          cx="50"
                          cy={y}
                          r="16"
                          fill="#e5e7eb"
                          className="hover:fill-gray-300 transition-colors cursor-pointer"
                          style={{
                            filter: "drop-shadow(4px 4px 8px #bebebe) drop-shadow(-4px -4px 8px #ffffff)",
                          }}
                        />
                        <circle
                          cx="50"
                          cy={y}
                          r="8"
                          fill="#4F46E5"
                          style={{
                            filter: "drop-shadow(inset 2px 2px 4px #3730A3)",
                          }}
                        />
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
