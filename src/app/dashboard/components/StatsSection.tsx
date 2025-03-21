import React from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { CalendarClock,Clock9,FileClock} from "lucide-react"
  
export default function StatsSection() {
  return (
<div className="flex w-full gap-x-6">
  <Card className="flex-1">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Fill Timesheet</CardTitle>
      <CalendarClock className="h-5 w-5 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <Button size="sm" className="w-full">Submit Today’s Timesheet</Button>
    </CardContent>
  </Card>

  <Card className="flex-1">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
      <Clock9 className="h-5 w-5 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">42 hrs</div>
      <p className="text-xs text-muted-foreground">This week</p>
    </CardContent>
  </Card>

  <Card className="flex-1">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
      <FileClock className="h-5 w-5 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">3</div>
      <p className="text-xs text-muted-foreground">Manager review pending</p>
    </CardContent>
  </Card>
</div>

  )
}
