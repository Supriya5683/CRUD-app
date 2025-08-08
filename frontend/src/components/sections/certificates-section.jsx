"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"



export function CertificatesSection() {
const [certificates, setCertificates] = useState([
    {
        id: "1",
        certificateName: "AWS Certified Solutions Architect",
        domain: "Cloud Computing",
    },
    {
        id: "2",
        certificateName: "Google Project Management",
        domain: "Project Management",
    },
])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentEditData, setCurrentEditData] = useState(null)

  const handleAddSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newCertificat = {
      id: String(certificates.length + 1),
      certificateName: formData.get("certificateName"),
      domain: formData.get("domain") ,
    }
    setCertificates([...certificates, newCertificat])
    setIsAddDialogOpen(false)
    e.currentTarget.reset()
  }

  const handleEditClick = (certificate) => {
    setCurrentEditData(certificate)
    setIsEditDialogOpen(true)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    if (!currentEditData) return

    const formData = new FormData(e.currentTarget)
    const updatedCertificate = {
      ...currentEditData,
      certificateName: formData.get("certificateName") ,
      domain: formData.get("domain"),
    }
    setCertificates(certificates.map(c => (c.id === updatedCertificate.id ? updatedCertificate : c)))
    setIsEditDialogOpen(false)
    setCurrentEditData(null)
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Certificate</CardTitle>
          <CardDescription>Add your professional certifications.</CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>Add New Certificate</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Certificate</DialogTitle>
                <DialogDescription>Enter the details for your new certificate.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddSubmit} className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="certificateName" className="text-right">Certificate Name</Label>
                  <Input id="certificateName" name="certificateName" className="col-span-3" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="domain" className="text-right">Domain</Label>
                  <Input id="domain" name="domain" className="col-span-3" required />
                </div>
                <DialogFooter>
                  <Button type="submit">Save Certificate</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Certificates</CardTitle>
          <CardDescription>View and manage your certificates.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Certificate Name</TableHead>
                  <TableHead>Domain</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certificates.map((certificate) => (
                  <TableRow key={certificate.id}>
                    <TableCell>{certificate.certificateName}</TableCell>
                    <TableCell>{certificate.domain}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => handleEditClick(certificate)}>
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
              <DialogTitle>Edit Certificate</DialogTitle>
              <DialogDescription>Update the details for this certificate.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEditSubmit} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-certificateName" className="text-right">Certificate Name</Label>
                <Input id="edit-certificateName" name="certificateName" defaultValue={currentEditData.certificateName} className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-domain" className="text-right">Domain</Label>
                <Input id="edit-domain" name="domain" defaultValue={currentEditData.domain} className="col-span-3" required />
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
