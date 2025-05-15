"use client"

import { useEffect, useState } from "react"

export function ActiveDeliveryMap() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-full w-full bg-slate-200">
      {!isLoaded ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      ) : (
        <div className="h-full w-full">
          {/* This would be replaced with an actual map component in a real implementation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p>Interactive map would be displayed here</p>
              <p className="text-sm">Showing route from 123 Main St to 456 Oak Ave</p>
            </div>
          </div>
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="Map placeholder"
            className="h-full w-full object-cover opacity-30"
          />
        </div>
      )}
    </div>
  )
}
