    import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4 dark:from-gray-900 dark:to-gray-700 md:p-8">
      <Card className="w-full max-w-lg rounded-xl border border-gray-200 bg-white/80 shadow-lg dark:border-gray-700 dark:bg-gray-800/80">
        <CardHeader className="space-y-2 p-6 text-center">
          <CardTitle className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 lg:text-5xl">
            Welcome to the Portal
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
            Your gateway to managing academic, professional, and personal data.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8 p-6 pt-0">
          <div className="grid gap-4">
            <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">User Access</h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/login" >
                <Button className="w-full sm:w-auto px-8 py-3 text-lg">
                  Login as User
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full sm:w-auto px-8 py-3 text-lg" variant="outline">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600" />
            <span className="mx-4 flex-shrink text-gray-500 dark:text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600" />
          </div>
          <div className="grid gap-4">
            <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">Admin Access</h2>
            <div className="flex justify-center">
              <Link to="/admin/login" >
                <Button className="w-full sm:w-auto px-8 py-3 text-lg" variant="secondary">
                  Login as Admin
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
