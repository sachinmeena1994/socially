"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
    Badge,
  Bell,
  CalendarCheck,
  Clock,
  Menu,
  PieChart,
  User,
} from "lucide-react"
import ModeToggle from "@/components/ModeToggle"

export default function HomeNavbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full border-b bg-white dark:bg-gray-900 p-4 shadow-md">
      {/* Left: Logo + Mobile Menu */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Trigger */}
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="space-y-4 mt-6">
                <Link
                  href="/timesheets"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <CalendarCheck size={16} />
                  Timesheets
                </Link>
                <Link
                  href="/analytics"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <PieChart size={20} />
                  Analytics
                </Link>
                <Link
                  href="/clock-in"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <Clock size={20} />
                  Clock In
                </Link>
                <Link
                  href="/notifications"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <Bell size={20} />
                  Notifications <Badge>3</Badge>
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <User size={20} />
                  Profile
                </Link>
                <Button className="w-full" asChild>
                  <Link href="/timesheets/fill">Fill Timesheet</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-primary tracking-wider"
        >
          TimesheetApp
        </Link>
      </div>

      {/* Center: Desktop Nav */}
      <div className="hidden lg:flex items-center gap-6">
        <Link
          href="/timesheets"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary"
        >
          <CalendarCheck size={20} />
          <span>Timesheets</span>
        </Link>
        <Link
          href="/analytics"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary"
        >
          <PieChart size={20} />
          <span>Analytics</span>
        </Link>
        <Link
          href="/clock-in"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary"
        >
          <Clock size={20} />
          <span>Clock In</span>
        </Link>
      </div>

      {/* Right: Common to both */}
      <div className="flex items-center gap-4">
        <Link href="/notifications" className="relative hidden lg:block">
          <Bell size={22} className="text-gray-700 dark:text-gray-300 hover:text-primary" />
          <Badge className="absolute -top-2 -right-2 text-white">3</Badge>
        </Link>

        <Link href="/profile" className="hidden lg:block">
          <User size={22} className="text-gray-700 dark:text-gray-300 hover:text-primary" />
        </Link>

        <Button className="hidden lg:block" asChild>
          <Link href="/timesheets/fill">Fill Timesheet</Link>
        </Button>

        {/* <ModeToggle /> */}
      </div>
    </nav>
  )
}
