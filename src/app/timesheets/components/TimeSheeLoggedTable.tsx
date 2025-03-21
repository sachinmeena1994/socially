'use client'

import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

export default function TimeSheeLoggedTable() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleDateClick = (value: Date) => {
    setSelectedDate(value)
    setModalOpen(true)
  }

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Logged Timesheet Overview
      </h2>

      <div className="w-full max-w-5xl mx-auto">
        <Calendar
          onClickDay={handleDateClick}
          value={selectedDate || new Date()}
          className="mx-auto w-full"
          tileClassName={({ date, view }) => {
            if (view === 'month') {
              if (date.getDate() === 10) return 'bg-green-200';  // Example: Logged
              if (date.getDate() === 15) return 'bg-red-200';    // Example: Leave
              if (date.getDate() === 20) return 'bg-yellow-200'; // Example: Pending
            }
            return '';
          }}
        />
      </div>

      {/* Modal Dialog to fill timesheet */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Fill Timesheet - {selectedDate?.toDateString()}</DialogTitle>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <Input placeholder="Enter task description..." />
            <Input type="number" placeholder="Hours worked" />
            <Button type="submit">Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
