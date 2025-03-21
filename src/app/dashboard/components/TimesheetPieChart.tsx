"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts"

const data = [
  { name: "Completed", value: 8 },
  { name: "Pending", value: 4 },
  { name: "Absence", value: 2 },
]

const COLORS = ["#b9f6ca", "#f0f0f0", "#ffcdd2"] // lighter green, grey, red

const total = data.reduce((sum, item) => sum + item.value, 0)

export default function TimesheetPieChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60} // 👈 makes it a donut chart
            labelLine={false}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            {/* 👇 Center label inside donut */}
            <Label
              value={`${total} Entries`}
              position="center"
              fill="#333"
              fontSize={16}
              fontWeight="bold"
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
