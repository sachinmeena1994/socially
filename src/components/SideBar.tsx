"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  CalendarDays,
  Folder,
  CheckCircle,
  PieChart,
  Clock,
  Bell,
  User,
  Settings,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SignOutButton } from "@clerk/nextjs"

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "My Timesheet", icon: Folder, href: "/timesheets/details" },
  { label: "Fill Timesheets", icon: CalendarDays, href: "/timesheets" },
  { label: "Approvals", icon: CheckCircle, href: "/approvals" },
  { label: "Reports", icon: PieChart, href: "/reports/timesheet" },
  { label: "Clock In / Out", icon: Clock, href: "/clock-in" },
  { label: "Notifications", icon: Bell, href: "/notifications" },
  { label: "Profile", icon: User, href: "/profile" },
  { label: "Settings", icon: Settings, href: "/settings" },
]

export default function SidebarMenu() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen border-r bg-white dark:bg-gray-900 px-4 py-6 space-y-4">
      {menuItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href)

        return (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-2 text-gray-700 dark:text-gray-300 hover:bg-muted",
                isActive && "bg-primary text-white hover:bg-primary dark:bg-primary"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          </Link>
        )
      })}

      <div className="mt-auto">
        <SignOutButton>
          <Button variant="destructive" className="w-full justify-start gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </SignOutButton>
      </div>
    </aside>
  )
}
