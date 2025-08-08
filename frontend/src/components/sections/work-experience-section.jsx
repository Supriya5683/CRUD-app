
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"



export function WorkExperienceSection() {
  const [workExperienceDetails, setWorkExperienceDetails] = useState([
    {
      id: "1",
      company: "Global Corp",
      project: "E-commerce Platform Revamp",
      role: "Full Stack Developer",
      fromDate: "2022-09-01",
      toDate: "2024-01-31",
      location: "New York, NY",
      description: "Led the development of new features for a large-scale e-commerce platform.",
    },
  ])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentEditData, setCurrentEditData] = useState(null)

  const handleAddSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newDetail = {
        id: String(workExperienceDetails.length + 1),
        company: formData.get("company"),
        project: formData.get("project"),
        role: formData.get("role"),
        fromDate: formData.get("fromDate"),
        toDate: formData.get("toDate"),
        location: formData.get("location"),
        description: formData.get("description"),
        }
    setWorkExperienceDetails([...workExperienceDetails, newDetail])
    setIsAddDialogOpen(false)
    e.currentTarget.reset()
  }

  const handleEditClick = (detail) => {
    setCurrentEditData(detail)
    setIsEditDialogOpen(true)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    if (!currentEditData) return

    const formData = new FormData(e.currentTarget)
    const updatedDetail = {
        ...currentEditData,
        company: formData.get("company"),
        project: formData.get("project"),
        role: formData.get("role"),
        fromDate: formData.get("fromDate"),
        toDate: formData.get("toDate"),
        location: formData.get("location"),
        description: formData.get("description"),
        }
    setWorkExperienceDetails(workExperienceDetails.map(d => (d.id === updatedDetail.id ? updatedDetail : d)))
    setIsEditDialogOpen(false)
    setCurrentEditData(null)
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Work Experience</CardTitle>
          <CardDescription>Record your professional work experiences.</CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>Add New Work Experience</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add Work Experience Record</DialogTitle>
                <DialogDescription>Enter the details for your new work experience.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddSubmit} className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="company" className="text-right">Company</Label>
                  <Input id="company" name="company" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="project" className="text-right">Project</Label>
                  <Input id="project" name="project" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="role" className="text-right">Role</Label>
                  <Input id="role" name="role" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="fromDate" className="text-right">From Date</Label>
                  <Input id="fromDate" name="fromDate" type="date" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="toDate" className="text-right">To Date</Label>
                  <Input id="toDate" name="toDate" type="date" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">Location</Label>
                  <Input id="location" name="location" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">Description</Label>
                  <Textarea id="description" name="description" className="col-span-3" required />
                </div>
                <DialogFooter>
                  <Button type="submit">Save Experience</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Work Experience Records</CardTitle>
          <CardDescription>View and manage your work experience details.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>From</TableHead>
                  <TableHead>To</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workExperienceDetails.map((detail) => (
                  <TableRow key={detail.id}>
                    <TableCell>{detail.company}</TableCell>
                    <TableCell>{detail.project}</TableCell>
                    <TableCell>{detail.role}</TableCell>
                    <TableCell>{detail.fromDate}</TableCell>
                    <TableCell>{detail.toDate}</TableCell>
                    <TableCell>{detail.location}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => handleEditClick(detail)}>
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {currentEditData && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Work Experience Record</DialogTitle>
              <DialogDescription>Update the details for this work experience record.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEditSubmit} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-company" className="text-right">Company</Label>
                <Input id="edit-company" name="company" defaultValue={currentEditData.company} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-project" className="text-right">Project</Label>
                <Input id="edit-project" name="project" defaultValue={currentEditData.project} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-role" className="text-right">Role</Label>
                <Input id="edit-role" name="role" defaultValue={currentEditData.role} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-fromDate" className="text-right">From Date</Label>
                <Input id="edit-fromDate" name="fromDate" type="date" defaultValue={currentEditData.fromDate} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-toDate" className="text-right">To Date</Label>
                <Input id="edit-toDate" name="toDate" type="date" defaultValue={currentEditData.toDate} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-location" className="text-right">Location</Label>
                <Input id="edit-location" name="location" defaultValue={currentEditData.location} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-description" className="text-right">Description</Label>
                <Textarea id="edit-description" name="description" defaultValue={currentEditData.description} className="col-span-3" required />
              </div>
              <DialogFooter>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
