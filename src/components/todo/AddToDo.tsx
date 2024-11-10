import { Label } from "@radix-ui/react-label"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "../ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Input } from "../ui/input"
import { FormEvent, useState } from "react"
import { useAppDispatch } from "../../redux/hook"
import { addTodo } from "../../redux/features/todoSlice"

export const AddToDo = () => {
    const [ tittle, setTittle ] = useState('');
    const [ description, setDescription] = useState('');
    const [ priority, setPriority] = useState('Normal');
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const randomString = Math.random().toString(36).substring(2,7);

        const taskDetails = {
            id: randomString,
            tittle: tittle,
            description: description,
            priority: priority,
        }
        // console.log(taskDetails);

        dispatch(addTodo(taskDetails));
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] py-10 ">
                <DialogHeader>
                    <DialogTitle>Add Todo</DialogTitle>
                    <DialogDescription> Make sure to set priority level </DialogDescription>
                </DialogHeader>
                <form action="" onSubmit={handleSubmit}>
                    <div className="grid gap-4 ">
                        <div className="grid gap-3">
                            <Label htmlFor="tittle" className="font-semibold">Tittle</Label>
                            <Input id="tittle" defaultValue="" className="bg-base" onBlur={(e) => {setTittle(e.target.value)}}/>
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="descreption" className="font-semibold">Descreption</Label>
                            {/* <Input id="descreption" defaultValue="" className="" /> */}
                            <textarea name="" id="descreption" className="border rounded-md h-24 p-2 bg-base" onBlur={(e) => {setDescription(e.target.value)}} ></textarea>
                        </div>
                        <div className="">
                            <Label htmlFor="priority" className="font-semibold">Priority</Label>
                            <Select name="priority" onValueChange={(value) => {
                                setPriority(value)
                                console.log(value);
                            }}>
                                <SelectTrigger className="w-48 bg-base items-end">
                                    <SelectValue placeholder="Normal" />
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
                            <Button type="submit" className="">Add</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
