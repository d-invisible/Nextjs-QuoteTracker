import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";


export default function CreateQuote({ columnId, boardId }: { columnId: string, boardId: string }) {
    return (
        <div>
            <Dialog>
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
                    <form>
                        <div>
                            <div>
                                <div>
                                    <Label htmlFor="name">Name *</Label>
                                    <Input type="text" id="name" name="name" required />
                                </div>
                                <div>
                                    <Label htmlFor="company">Company *</Label>
                                    <Input type="text" id="company" name="company" required />
                                </div>
                                <div>
                                    <Label htmlFor="status">Status *</Label>
                                    <Input type="text" id="status" name="status" required />
                                </div>
                                <div>
                                    <Label htmlFor="address">Address</Label>
                                    <Input type="text" id="address" name="address" />
                                </div>
                                <div>
                                    <Label htmlFor="description">Description</Label>
                                    <Input id="description" name="description"></Input>
                                </div>
                            </div>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}