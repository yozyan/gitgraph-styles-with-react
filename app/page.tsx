"use client"

import { useState } from "react"
import { MaterialDesign } from "@/components/material-design"
import { Glassmorphism } from "@/components/glassmorphism"
import { Neumorphism } from "@/components/neumorphism"
import { HandDrawn } from "@/components/hand-drawn"

const styles = [
  { id: "material", name: "Material Design", component: MaterialDesign },
  { id: "glass", name: "Glassmorphism", component: Glassmorphism },
  { id: "neuro", name: "Neumorphism", component: Neumorphism },
  { id: "hand", name: "Hand-drawn", component: HandDrawn },
]

export default function GitGraphStyles() {
  const [activeStyle, setActiveStyle] = useState("glass")

  const ActiveComponent = styles.find((s) => s.id === activeStyle)?.component || Glassmorphism

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center">
            <div className="flex gap-2">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setActiveStyle(style.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeStyle === style.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] py-8">
        <ActiveComponent />
      </div>
    </div>
  )
}
