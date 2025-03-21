"use client"

import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function WelcomeCard() {
  return (
    <Card className="lg:col-span-2 flex flex-col justify-between h-full">
      <div>
        <CardHeader>
          <CardTitle>Welcome back, 👋</CardTitle>
          <CardDescription>
            Your weekly timesheet insights at a glance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You have <span className="font-semibold text-primary">3 timesheets pending</span>. Don’t forget to submit them before Friday.
          </p>
        </CardContent>
      </div>

      <CardFooter className="mt-auto">
        <Button asChild variant="default" className="w-full">
          <Link href="/reports/timesheet">
            <Download className="w-4 h-4 mr-2" />
            View Timesheet Report
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
