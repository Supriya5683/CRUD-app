"use client"

import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function AdminLoginPage() {
  const router = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    // In a real application, you would send these credentials to your backend for authentication.
    // For this demo, we'll just simulate a successful admin login and redirect.
    // You might have specific admin credentials or a different authentication mechanism.
    if (email === "admin@example.com" && password === "adminpass") { // Dummy admin credentials
      console.log("Admin Login Attempt:", { email, password })
    //   router.push("/admin/dashboard")
    } else {
      setError("Invalid admin credentials.")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Enter your admin credentials to access the admin dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full">
              Login as Admin
            </Button>
          </form>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="font-medium underline" prefetch={false}>
              Back to Welcome
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
