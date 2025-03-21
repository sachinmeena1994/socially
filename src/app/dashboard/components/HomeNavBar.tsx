"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge, Bell, CalendarCheck, Clock, PieChart, User } from "lucide-react";
import ModeToggle from "@/components/ModeToggle";
import MobileHomeNavBar from "./MobileHomeNavBar"

export default function HomeNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
       

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
        <Link href="/" className="text-xl font-bold text-primary tracking-wider">
          TimesheetApp
        </Link>
          <Link href="/timesheets" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary">
            <CalendarCheck size={20} />
            <span>Timesheets</span>
          </Link>

          <Link href="/analytics" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary">
            <PieChart size={20} />
            <span>Analytics</span>
          </Link>

          <Link href="/clock-in" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary">
            <Clock size={20} />
            <span>Clock In</span>
          </Link>

          <Link href="/notifications" className="relative">
            <Bell size={22} className="text-gray-700 dark:text-gray-300 hover:text-primary" />
            <Badge className="absolute -top-2 -right-2 text-white">3</Badge>
          </Link>

          <Link href="/profile">
            <User size={22} className="text-gray-700 dark:text-gray-300 hover:text-primary" />
          </Link>

          <Button className="ml-2" asChild>
            <Link href="/timesheets/fill">Fill Timesheet</Link>
          </Button>

          <ModeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <MobileHomeNavBar />
        </div>
      </div>
    </nav>
  );
}
