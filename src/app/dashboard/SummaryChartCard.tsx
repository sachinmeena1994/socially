import React from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
  } from "@/components/ui/card"
import TimesheetPieChart from './components/TimesheetPieChart'
export default function SummaryChartCard() {
  return (
    <Card>
          <CardHeader>
            <CardTitle>Monthly Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <TimesheetPieChart />
          </CardContent>
        </Card>
  )
}
