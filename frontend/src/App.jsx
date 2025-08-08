import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import {lazy,Suspense} from 'react'
import WelcomePage from "@/pages/Home"
import UserLoginPage from "@/pages/UserLoginPage"
import UserSignupPage from "@/pages/UserSignupPage"
import AdminLoginPage from "@/pages/AdminLoginPage"
import AdminDashboardPage from "@/pages/protected/AdminDashboardPage"
import UserDashboardPage from "@/pages/protected/UserDashboardPage"

// const WelcomePage = lazy(() => import("@/pages/Home"))
// const UserLoginPage = lazy(() => import("@/pages/UserLoginPage"))
// const UserSignupPage = lazy(() => import("@/pages/UserSignupPage"))
// const AdminLoginPage = lazy(() => import("@/pages/AdminLoginPage"))
// const AdminDashboardPage = lazy(() => import("@/pages/protected/AdminDashboardPage"))
// const UserDashboardPage = lazy(() => import("@/pages/protected/UserDashboardPage"))



function App() {

  return (
    <>
    {/* <Suspense fallback={<h1>loading.....</h1>}> */}

    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/singup" element={<UserSignupPage />} />
        <Route path="/user/dashboard" element={<UserDashboardPage />} />


        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
    {/* </Suspense> */}
    </>
  )
}

export default App
// 0kFUFbwGhB/H