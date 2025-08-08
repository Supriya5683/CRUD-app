import { useState } from "react"
import { SidebarProvider,SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserSidebar } from "@/components/user-sidebar"
import { AcademicDetailsSection } from "@/components/sections/academic-details-section"
import { InternshipDetailsSection } from "@/components/sections/internship-details-section"
import { WorkExperienceSection } from "@/components/sections/work-experience-section"
import { CertificatesSection } from "@/components/sections/certificates-section"
import { SkillsSection } from "@/components/sections/skills-section"

export default function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState("academic")

  return (
    <SidebarProvider>

    <div className="flex min-h-screen w-full">
      <UserSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <h1 className="text-lg font-semibold md:text-xl">User Dashboard</h1>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="internship">Internship</TabsTrigger>
              <TabsTrigger value="work-experience">Work Experience</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="academic">
              <AcademicDetailsSection />
            </TabsContent>
            <TabsContent value="internship">
              <InternshipDetailsSection />
            </TabsContent>
            <TabsContent value="work-experience">
              <WorkExperienceSection />
            </TabsContent>
            <TabsContent value="certificates">
              <CertificatesSection />
            </TabsContent>
            <TabsContent value="skills">
              <SkillsSection />
            </TabsContent>
          </Tabs>
        </main>
      </SidebarInset>
    </div>
        </SidebarProvider>

  )
}
