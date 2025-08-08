import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"


export function AcademicDetailsSection() {
  const [academicDetails, setAcademicDetails] = useState([
    {
      id: "1",
      name: "John Doe",
      username: "johndoe",
      institution: "University A",
      degree: "B.Sc. Computer Science",
      subject: "Software Engineering",
      marks: "85%",
      yearOfPassing: "2022",
    },
  ])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentEditData, setCurrentEditData] = useState(null)

  const handleAddSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newDetail = {
      id: String(academicDetails.length + 1),
      name: formData.get("name"),
      username: formData.get("username") ,
      institution: formData.get("institution"),
      degree: formData.get("degree") ,
      subject: formData.get("subject") ,
      marks: formData.get("marks") ,
      yearOfPassing: formData.get("yearOfPassing"),
    }
    setAcademicDetails([...academicDetails, newDetail])
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
      name: formData.get("name") ,
      username: formData.get("username") ,
      institution: formData.get("institution") ,
      degree: formData.get("degree") ,
      subject: formData.get("subject") ,
      marks: formData.get("marks"),
      yearOfPassing: formData.get("yearOfPassing") ,
    }
    setAcademicDetails(academicDetails.map(d => (d.id === updatedDetail.id ? updatedDetail : d)))
    setIsEditDialogOpen(false)
    setCurrentEditData(null)
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Academic Details</CardTitle>
          <CardDescription>Fill in your academic information.</CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>Add New Academic Record</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add Academic Record</DialogTitle>
                <DialogDescription>Enter the details for your new academic record.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddSubmit} className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">Name</Label>
                  <Input id="name" name="name" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">Username</Label>
                  <Input id="username" name="username" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="institution" className="text-right">Institution</Label>
                  <Input id="institution" name="institution" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="degree" className="text-right">Degree</Label>
                  <Input id="degree" name="degree" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="subject" className="text-right">Subject</Label>
                  <Input id="subject" name="subject" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="marks" className="text-right">Marks</Label>
                  <Input id="marks" name="marks" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="yearOfPassing" className="text-right">Year of Passing</Label>
                  <Input id="yearOfPassing" name="yearOfPassing" className="col-span-3" required />
                </div>
                <DialogFooter>
                  <Button type="submit">Save Record</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Academic Records</CardTitle>
          <CardDescription>View and manage your academic details.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Institution</TableHead>
                  <TableHead>Degree</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Marks</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {academicDetails.map((detail) => (
                  <TableRow key={detail.id}>
                    <TableCell>{detail.name}</TableCell>
                    <TableCell>{detail.username}</TableCell>
                    <TableCell>{detail.institution}</TableCell>
                    <TableCell>{detail.degree}</TableCell>
                    <TableCell>{detail.subject}</TableCell>
                    <TableCell>{detail.marks}</TableCell>
                    <TableCell>{detail.yearOfPassing}</TableCell>
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
              <DialogTitle>Edit Academic Record</DialogTitle>
              <DialogDescription>Update the details for this academic record.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEditSubmit} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">Name</Label>
                <Input id="edit-name" name="name" defaultValue={currentEditData.name} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-username" className="text-right">Username</Label>
                <Input id="edit-username" name="username" defaultValue={currentEditData.username} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-institution" className="text-right">Institution</Label>
                <Input id="edit-institution" name="institution" defaultValue={currentEditData.institution} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-degree" className="text-right">Degree</Label>
                <Input id="edit-degree" name="degree" defaultValue={currentEditData.degree} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-subject" className="text-right">Subject</Label>
                <Input id="edit-subject" name="subject" defaultValue={currentEditData.subject} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-marks" className="text-right">Marks</Label>
                <Input id="edit-marks" name="marks" defaultValue={currentEditData.marks} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-yearOfPassing" className="text-right">Year of Passing</Label>
                <Input id="edit-yearOfPassing" name="yearOfPassing" defaultValue={currentEditData.yearOfPassing} className="col-span-3" required />
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
