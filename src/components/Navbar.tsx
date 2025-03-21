'use client';

import Link from "next/link";
import ModeToggle from "@/components/ModeToggle";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
  UserButton,
  useUser
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function NavBar() {
  const { user, isSignedIn } = useUser();

  return (
    <nav className="sticky top-0 w-full border-b bg-white dark:bg-gray-900 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
            Socially
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm">Sign Up</Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              {user?.fullName && (
                <span className="text-sm text-gray-500">Hi, {user.fullName}</span>
              )}
              <UserButton />
              <SignOutButton>
                <Button variant="ghost" size="sm">Sign Out</Button>
              </SignOutButton>
            </SignedIn>
          </div>

          {/* Mobile Nav using Sheet */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription className="text-xs text-gray-500">
                    Navigate and manage your session
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-6 flex flex-col gap-4">
                  <ModeToggle />

                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button variant="outline" className="w-full">Sign In</Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button className="w-full">Sign Up</Button>
                    </SignUpButton>
                  </SignedOut>

                  <SignedIn>
                    {user?.fullName && (
                      <span className="text-sm text-gray-500">Hi, {user.fullName}</span>
                    )}
                    <UserButton />
                    <SignOutButton>
                      <Button variant="ghost" className="w-full">Sign Out</Button>
                    </SignOutButton>
                  </SignedIn>
                </div>

                <SheetFooter className="mt-10">
                  <SheetClose asChild>
                    <Button variant="secondary" className="w-full">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
