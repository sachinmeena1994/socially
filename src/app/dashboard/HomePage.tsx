"use client"

import React from "react"
import HomeNavbar from "./components/HomeNavBar"
import HomeMobileNavBar from "./components/MobileHomeNavBar"
import StatsSection from "./components/StatsSection"
import WelcomeCard from "./components/WelcomeCard"
import SummaryChartCard from "./SummaryChartCard"

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Conditionally render navbars */}
      <div className="hidden lg:block">
        <HomeNavbar />
      </div>

      <div className="block lg:hidden">
        <HomeMobileNavBar />
      </div>

      {/* Stats Cards */}
      <div className="hidden lg:block">
      <StatsSection />
      </div>
    

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <WelcomeCard />
        <SummaryChartCard />
      </div>
    </div>
  )
}
