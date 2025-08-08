
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"


export function SkillsSection() {
  const [skills, setSkills] = useState([
    { id: "1", skillName: "React.js" },
    { id: "2", skillName: "Node.js" },
    { id: "3", skillName: "TypeScript" },
    { id: "4", skillName: "SQL" },
  ])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentEditData, setCurrentEditData] = useState(null)

  const handleAddSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newSkill = {
      id: String(skills.length + 1),
      skillName: formData.get("skillName"),
    }
    setSkills([...skills, newSkill])
    setIsAddDialogOpen(false)
    e.currentTarget.reset()
  }

  const handleEditClick = (skill) => {
    setCurrentEditData(skill)
    setIsEditDialogOpen(true)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    if (!currentEditData) return

    const formData = new FormData(e.currentTarget)
    const updatedSkill = {
      ...currentEditData,
      skillName: formData.get("skillName"),
    }
    setSkills(skills.map(s => (s.id === updatedSkill.id ? updatedSkill : s)))
    setIsEditDialogOpen(false)
    setCurrentEditData(null)
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Skill</CardTitle>
          <CardDescription>Add your technical and soft skills.</CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>Add New Skill</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Skill</DialogTitle>
                <DialogDescription>Enter the name of your new skill.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddSubmit} className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="skillName" className="text-right">Skill Name</Label>
                  <Input id="skillName" name="skillName" className="col-span-3" required />
                </div>
                <DialogFooter>
                  <Button type="submit">Save Skill</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Skills</CardTitle>
          <CardDescription>View and manage your skills.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Skill Name</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {skills.map((skill) => (
                  <TableRow key={skill.id}>
                    <TableCell>{skill.skillName}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => handleEditClick(skill)}>
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
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Skill</DialogTitle>
              <DialogDescription>Update the name of this skill.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEditSubmit} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-skillName" className="text-right">Skill Name</Label>
                <Input id="edit-skillName" name="skillName" defaultValue={currentEditData.skillName} className="col-span-3" required />
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
