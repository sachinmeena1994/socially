"use client"
import { db } from "@/config/firebase";
import HomePage from "./dashboard/HomePage";
export default function Home() {
  console.log(db)
  return (
    <div >
      <HomePage/>
    </div>
  )
}
