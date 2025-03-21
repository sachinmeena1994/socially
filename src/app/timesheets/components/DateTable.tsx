"use client";

import React, { useState } from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster"; // ✅ Toaster Component
import { useToast } from "@/hooks/use-toast"


type Entry = {
  date: string;
  workDetails: string;
  hours: string;
};

export default function DateTable() {
  const [entries, setEntries] = useState<Entry[]>([{ date: "", workDetails: "", hours: "" }]);
  const { toast } = useToast(); // ✅ Initialize toast

  const handleSubmit = () => {
    if (entries.some((entry) => !entry.date || !entry.workDetails || !entry.hours)) {
      toast({
        title: "Submission Failed",
        description: "Please fill all fields before submitting.",
        variant: "destructive", // ✅ Red-colored error toast
      });
      return;
    }

    toast({
      title: "Timesheet Submitted!",
      description: `You have logged ${entries.length} entries.`,
    });

    console.log("Submitting Timesheet:", entries);
  };

  return (
    <div className="space-y-6 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Enter Timesheet</h2>

      <Table className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
        <TableHeader className="bg-gray-100 dark:bg-gray-900">
          <TableRow>
            <TableHead className="text-lg font-semibold text-gray-700 dark:text-gray-300">Date</TableHead>
            <TableHead className="text-lg font-semibold text-gray-700 dark:text-gray-300">Work Details</TableHead>
            <TableHead className="text-lg font-semibold text-gray-700 dark:text-gray-300">Hours</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry, index) => (
            <TableRow key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <TableCell>
                <Input
                  type="date"
                  value={entry.date}
                  onChange={(e) => setEntries((prev) => {
                    const updated = [...prev];
                    updated[index].date = e.target.value;
                    return updated;
                  })}
                  className="text-lg font-medium p-2 border border-gray-300 dark:border-gray-600 focus:border-primary"
                />
              </TableCell>
              <TableCell>
                <Input
                  placeholder="Describe your work"
                  value={entry.workDetails}
                  onChange={(e) => setEntries((prev) => {
                    const updated = [...prev];
                    updated[index].workDetails = e.target.value;
                    return updated;
                  })}
                  className="text-lg font-medium p-2 border border-gray-300 dark:border-gray-600 focus:border-primary"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  placeholder="Hours"
                  min="0"
                  max="24"
                  value={entry.hours}
                  onChange={(e) => {
                    const hours = parseInt(e.target.value);
                    if (hours > 24) return;
                    setEntries((prev) => {
                      const updated = [...prev];
                      updated[index].hours = e.target.value;
                      return updated;
                    });
                  }}
                  className="text-lg font-medium p-2 border border-gray-300 dark:border-gray-600 focus:border-primary"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex gap-4">
        <Button onClick={handleSubmit} className="text-lg font-semibold bg-black text-white">
          Submit Timesheet
        </Button>
      </div>

      {/* ✅ Toaster Component */}
      <Toaster />
    </div>
  );
}
