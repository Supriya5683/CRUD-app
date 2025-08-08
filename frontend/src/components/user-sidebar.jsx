
import {Link} from "react-router-dom"
import { Book, Briefcase, GraduationCap, Award, Lightbulb, Home, LogOut } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export function UserSidebar() {
  const navItems = [
    {
      label: "Dashboard",
      icon: Home,
      to: "/user/dashboard",
    },
    {
      label: "Academic Details",
      icon: GraduationCap,
      to: "/user/dashboard?tab=academic",
    },
    {
      label: "Internship Details",
      icon: Briefcase,
      to: "/user/dashboard?tab=internship",
    },
    {
      label: "Work Experience",
      icon: Book,
      to: "/user/dashboard?tab=work-experience",
    },
    {
      label: "Certificates",
      icon: Award,
      to: "/user/dashboard?tab=certificates",
    },
    {
      label: "Skills",
      icon: Lightbulb,
      to: "/user/dashboard?tab=skills",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <Link to="/user/dashboard" className="flex items-center gap-2 px-2 py-4 text-lg font-semibold">
          <GraduationCap className="h-6 w-6" />
          <span>User Portal</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <Link to={item.to}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Separator className="my-2" />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
