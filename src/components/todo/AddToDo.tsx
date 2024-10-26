import { Label } from "@radix-ui/react-label"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "../ui/dialog"
import { Input } from "../ui/input"
import { FormEvent, useState } from "react"
import { useAppDispatch } from "../../redux/hook"
import { addTodo } from "../../redux/features/todoSlice"

export const AddToDo = () => {
    const [ tittle, setTittle ] = useState('');
    const [ description, setDescription] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const taskDetails = {
            tittle: tittle,
            description: description,
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
                    </div>
                    <div  className="mx-auto mt-2">
                        <DialogClose asChild>
                            <Button type="submit" className="" >Add</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
