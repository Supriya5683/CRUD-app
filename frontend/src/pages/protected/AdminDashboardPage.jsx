
import { useState } from "react"
import { SidebarProvider,SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminSidebar } from "@/components/admin-sidebar"
import { ViewAllUsersSection } from "@/components/sections/view-all-users-section"
import { ManageUsersSection } from "@/components/sections/manage-users-section"

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("view-all-users")

  return (
    <SidebarProvider>
    <div className="flex min-h-screen w-full">
      <AdminSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <h1 className="text-lg font-semibold md:text-xl">Admin Dashboard</h1>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="view-all-users">View All Users Data</TabsTrigger>
              <TabsTrigger value="manage-users">Manage Users</TabsTrigger>
            </TabsList>
            <TabsContent value="view-all-users">
              <ViewAllUsersSection />
            </TabsContent>
            <TabsContent value="manage-users">
              <ManageUsersSection />
            </TabsContent>
          </Tabs>
        </main>
      </SidebarInset>
    </div>
    </SidebarProvider>
  )
}
