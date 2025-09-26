"use client"

import { useState } from "react"

export function HandDrawn() {
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
    <div className="hand-drawn min-h-screen bg-amber-50 relative">
      {/* Paper texture background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4a574' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='13' cy='43' r='1'/%3E%3Ccircle cx='47' cy='17' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header Sketchy Card */}
        <div
          className="bg-white rounded-lg p-8 mb-8 relative transform rotate-[-0.5deg] shadow-lg border-2 border-gray-800"
          style={{
            borderRadius: "15px 25px 20px 18px",
            boxShadow: "3px 3px 0px #d4a574, 6px 6px 0px #b8956a",
          }}
        >
          <h1
            className="text-4xl font-bold text-gray-900 mb-4 text-center transform rotate-[0.3deg]"
            style={{
              fontFamily: "Comic Sans MS, cursive, sans-serif",
              textShadow: "2px 2px 0px #d4a574",
            }}
          >
            Git Graph Visualization ✨
          </h1>
          <p
            className="text-lg text-gray-700 text-center max-w-2xl mx-auto transform rotate-[-0.2deg]"
            style={{
              fontFamily: "Comic Sans MS, cursive, sans-serif",
            }}
          >
            Hand-drawn style with organic, sketchy aesthetic 🎨
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div
            className="bg-white rounded-full p-3 transform rotate-[0.5deg] border-3 border-gray-800 shadow-lg"
            style={{
              borderRadius: "25px 30px 28px 22px",
              boxShadow: "2px 2px 0px #d4a574",
            }}
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-bold transition-all duration-300 border-2 border-gray-800 ${
                  activeTab === tab.id
                    ? "bg-yellow-300 text-gray-900 transform rotate-[-1deg] scale-105"
                    : "bg-white text-gray-700 hover:bg-yellow-100 hover:transform hover:rotate-[0.5deg]"
                }`}
                style={{
                  fontFamily: "Comic Sans MS, cursive, sans-serif",
                  borderRadius:
                    index === 0 ? "15px 20px 18px 16px" : index === 1 ? "18px 16px 20px 15px" : "20px 18px 16px 20px",
                  marginRight: index < tabs.length - 1 ? "8px" : "0",
                  boxShadow: activeTab === tab.id ? "2px 2px 0px #b8956a" : "1px 1px 0px #d4a574",
                }}
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
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`p-4 text-left transition-all duration-300 min-w-[160px] bg-white border-3 border-gray-800 font-bold ${
                  activeNav === item.id
                    ? "bg-pink-200 text-gray-900 transform rotate-[-1deg] scale-105"
                    : "text-gray-700 hover:bg-blue-100 hover:transform hover:rotate-[0.5deg]"
                }`}
                style={{
                  fontFamily: "Comic Sans MS, cursive, sans-serif",
                  borderRadius: index === 0 ? "12px 18px 15px 20px" : "20px 15px 18px 12px",
                  boxShadow: activeNav === item.id ? "3px 3px 0px #b8956a" : "2px 2px 0px #d4a574",
                }}
              >
                <div className="font-bold">{item.name}</div>
                <div className="text-sm opacity-70">{item.subtitle}</div>
              </button>
            ))}
          </div>

          {/* Graph Container */}
          <div
            className="flex-1 bg-white rounded-lg border-3 border-gray-800 shadow-lg overflow-hidden transform rotate-[0.3deg]"
            style={{
              borderRadius: "20px 25px 18px 22px",
              boxShadow: "4px 4px 0px #d4a574, 8px 8px 0px #b8956a",
            }}
          >
            <div className="p-8">
              <div
                className="bg-blue-50 rounded-lg p-8 border-2 border-blue-300 transform rotate-[-0.2deg]"
                style={{
                  borderRadius: "15px 20px 18px 16px",
                  boxShadow: "inset 2px 2px 0px #bfdbfe",
                }}
              >
                {/* Git Graph Visualization */}
                <div className="relative">
                  <svg width="600" height="400" className="w-full">
                    <defs>
                      <filter id="roughPaper" x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
                      </filter>
                    </defs>

                    {/* Sketchy branch line */}
                    <path
                      d="M50,50 Q52,100 48,150 Q52,200 50,250 Q48,300 50,350"
                      stroke="#2563eb"
                      strokeWidth="4"
                      fill="none"
                      filter="url(#roughPaper)"
                      strokeLinecap="round"
                    />

                    {/* Commits */}
                    {[80, 140, 200, 260, 320].map((y, i) => (
                      <g key={i}>
                        {/* Sketchy commit circle */}
                        <circle
                          cx={50 + Math.sin(i) * 2}
                          cy={y + Math.cos(i) * 2}
                          r="14"
                          fill="#fbbf24"
                          stroke="#92400e"
                          strokeWidth="3"
                          filter="url(#roughPaper)"
                          className="hover:fill-yellow-300 transition-colors cursor-pointer"
                        />
                        <circle cx={50 + Math.sin(i) * 2} cy={y + Math.cos(i) * 2} r="6" fill="#92400e" />
                        {/* Sketchy text */}
                        <text
                          x="80"
                          y={y + 5}
                          className="text-sm font-bold fill-gray-800"
                          style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
                          transform={`rotate(${Math.sin(i) * 2} 80 ${y + 5})`}
                        >
                          Commit {i + 1}: Feature implementation ✏️
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
