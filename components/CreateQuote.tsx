import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { createQuote } from "@/lib/actions/quotesRelated";


export default function CreateQuote({ columnId, boardId }: { columnId: string, boardId: string }) {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        location: "",
        salary: "",
        jobUrl: "",
        tags: "",
        description: "",
        notes: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await createQuote({ ...formData, columnId, boardId })
            if (res.status === "success") {
                setFormData({
                    company: "",
                    position: "",
                    location: "",
                    salary: "",
                    jobUrl: "",
                    tags: "",
                    description: "",
                    notes: "",
                })

                setOpen(false)
                alert('quotes creadted sunccessfully')

            } else {
                console.log(res);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" className="w-full"><Plus />Create Quote</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create Quote</DialogTitle>
                        <DialogDescription>
                            Create a new quote
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="company">Company *</Label>
                                <Input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="position">Position *</Label>
                                <Input type="text" id="position" name="position" required value={formData.position} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="location">Location</Label>
                                <Input type="text" id="location" name="location" required value={formData.location} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="salary">Salary</Label>
                                <Input type="text" id="salary" name="salary" value={formData.salary} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="mt-4 grid grid-cols-1 gap-4">
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="jobUrl">jobUrl</Label>
                                <Input type="text" id="jobUrl" name="jobUrl" value={formData.jobUrl} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="tags">Tags ( comma-separated )</Label>
                                <Input type="text" id="tags" name="tags" value={formData.tags} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="notes">Notes</Label>
                                <Input type="text" id="notes" name="notes" value={formData.notes} onChange={handleChange} />
                            </div>
                        </div>

                        <DialogFooter className="grid grid-cols-2">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Create</Button>
                        </DialogFooter>



                    </form>


                </DialogContent>


            </Dialog>
        </div>
    )
}