import { Label } from "@radix-ui/react-label"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "../ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Input } from "../ui/input"
import { FormEvent, useState } from "react"
import { useAppDispatch } from "../../redux/hook"
import { updateTodo } from "../../redux/features/todoSlice"

type TTodoObject = {
    id: string;
    tittle: string;
    description:string;
    priority: string;
}

export const UpdateToDo = ({id, tittle, description, priority}: TTodoObject ) => {
    const [ newTittle, setNewTittle ] = useState(tittle);
    const [ newDescription, setNewDescription] = useState(description);
    const [ newPriority, setNewPriority] = useState(priority);
    const dispatch = useAppDispatch();

    const handleUpdate = (e: FormEvent) => {
        e.preventDefault();

        const UpdatedTaskDetails = {
            tittle: newTittle,
            description: newDescription,
            priority: newPriority,
        }
        console.log(UpdatedTaskDetails);
        

        dispatch(updateTodo({id, UpdatedTaskDetails}));
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688 a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] py-10 ">
                <DialogHeader>
                    <DialogTitle>Add Todo</DialogTitle>
                    <DialogDescription> Make sure to set priority level </DialogDescription>
                </DialogHeader>
                <form action="" onSubmit={handleUpdate}>
                    <div className="grid gap-4 ">
                        <div className="grid gap-3">
                            <Label htmlFor="tittle" className="font-semibold">Tittle</Label>
                            <Input id="tittle" defaultValue={tittle} className="bg-base" onBlur={(e) => {setNewTittle(e.target.value)}}/>
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="descreption" className="font-semibold">Descreption</Label>
                            {/* <Input id="descreption" defaultValue="" className="" /> */}
                            <textarea name="" id="descreption" defaultValue={description} className="border rounded-md h-24 p-2 bg-base" onBlur={(e) => {setNewDescription(e.target.value)}} ></textarea>
                        </div>
                        <div className="">
                            <Label htmlFor="priority" className="font-semibold">Priority</Label>
                            <Select name="priority" defaultValue={priority} onValueChange={(value) => { setNewPriority(value) }}>
                                <SelectTrigger className="w-48 bg-base items-end">
                                    <SelectValue placeholder={priority} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Urgent">Urgent</SelectItem>
                                    <SelectItem value="Mandatory">Mandatory</SelectItem>
                                    <SelectItem value="Normal">Normal</SelectItem>
                                    <SelectItem value="Optional">Optional</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    
                    <div  className="w-fit border mx-auto mt-8">
                        <DialogClose className="" asChild>
                            <Button type="submit" className="">Update</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};
