
import {Link} from "react-router-dom"
import { Users, LayoutDashboard, LogOut } from 'lucide-react'

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

export function AdminSidebar() {
  const navItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      to: "/admin/dashboard",
    },
    {
      label: "View All Users",
      icon: Users,
      to: "/admin/dashboard?tab=view-all-users",
    },
    {
      label: "Manage Users",
      icon: Users,
      to: "/admin/dashboard?tab=manage-users",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <Link to="/admin/dashboard" className="flex items-center gap-2 px-2 py-4 text-lg font-semibold">
          <LayoutDashboard className="h-6 w-6" />
          <span>Admin Portal</span>
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
