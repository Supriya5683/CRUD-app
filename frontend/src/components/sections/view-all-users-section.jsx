
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"


const dummyUsers = [
  {
    id: "user1",
    name: "Alice Smith",
    username: "alice.s",
    email: "alice.s@example.com",
    role: "User",
    academic: [{ institution: "University X", degree: "B.A. English" }],
    internships: [{ company: "Marketing Co.", role: "Marketing Intern" }],
    workExperience: [{ company: "Retail Chain", role: "Sales Associate" }],
    certificates: [{ name: "Digital Marketing" }],
    skills: [{ name: "Communication" }, { name: "Content Creation" }],
  },
  {
    id: "user2",
    name: "Bob Johnson",
    username: "bob.j",
    email: "bob.j@example.com",
    role: "User",
    academic: [{ institution: "Tech Institute", degree: "M.Sc. AI" }],
    internships: [{ company: "AI Labs", role: "Research Intern" }],
    workExperience: [{ company: "Software Solutions", role: "AI Engineer" }],
    certificates: [{ name: "Deep Learning Specialization" }],
    skills: [{ name: "Python" }, { name: "Machine Learning" }],
  },
]

export function ViewAllUsersSection() {
  const [selectedUser, setSelectedUser] = useState(null)
  const [isViewDetailsDialogOpen, setIsViewDetailsDialogOpen] = useState(false)

  const handleViewDetails = (user) => {
    setSelectedUser(user)
    setIsViewDetailsDialogOpen(true)
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>All Registered Users</CardTitle>
          <CardDescription>Overview of all user accounts and their basic information.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => handleViewDetails(user)}>
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {selectedUser && (
        <Dialog open={isViewDetailsDialogOpen} onOpenChange={setIsViewDetailsDialogOpen}>
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Details for {selectedUser.name}</DialogTitle>
              <DialogDescription>Comprehensive profile of the user.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Basic Information</h3>
                  <p><strong>Name:</strong> {selectedUser.name}</p>
                  <p><strong>Username:</strong> {selectedUser.username}</p>
                  <p><strong>Email:</strong> {selectedUser.email}</p>
                  <p><strong>Role:</strong> {selectedUser.role}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Academic Details</h3>
                  {selectedUser.academic.length > 0 ? (
                    <ul>
                      {selectedUser.academic.map((item, index) => (
                        <li key={index}>{item.degree} from {item.institution}</li>
                      ))}
                    </ul>
                  ) : (<p>No academic details.</p>)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Internship Details</h3>
                  {selectedUser.internships.length > 0 ? (
                    <ul>
                      {selectedUser.internships.map((item, index) => (
                        <li key={index}>{item.role} at {item.company}</li>
                      ))}
                    </ul>
                  ) : (<p>No internship details.</p>)}
                </div>
                <div>
                  <h3 className="font-semibold">Work Experience</h3>
                  {selectedUser.workExperience.length > 0 ? (
                    <ul>
                      {selectedUser.workExperience.map((item, index) => (
                        <li key={index}>{item.role} at {item.company}</li>
                      ))}
                    </ul>
                  ) : (<p>No work experience.</p>)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Certificates</h3>
                  {selectedUser.certificates.length > 0 ? (
                    <ul>
                      {selectedUser.certificates.map((item, index) => (
                        <li key={index}>{item.name}</li>
                      ))}
                    </ul>
                  ) : (<p>No certificates.</p>)}
                </div>
                <div>
                  <h3 className="font-semibold">Skills</h3>
                  {selectedUser.skills.length > 0 ? (
                    <ul>
                      {selectedUser.skills.map((item, index) => (
                        <li key={index}>{item.name}</li>
                      ))}
                    </ul>
                  ) : (<p>No skills.</p>)}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
