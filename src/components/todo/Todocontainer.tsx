import { JSX } from "react/jsx-dev-runtime";
// import { useGetTodosQuery } from "../../redux/api/Api";
import { useAppSelector } from "../../redux/hook";
import { Button } from "../ui/button";
import { AddToDo } from "./AddToDo";
import { TodoCard } from "./TodoCard";

const Todocontainer = () => {
    // local storage
    const toDos = useAppSelector(state => state.todos.todos)
    console.log(toDos);

    // //from Server
    // const {data:toDos} = useGetTodosQuery(undefined);

    return (
        <div className="border border-black w-full flex-1 rounded-xl my-6 px-6 py-8 bg-standerd space-y-2">
            <div className="mb-4 flex justify-between items-center ">
                <div className="w-full flex justify-start items-center gap-4">
                    <h1 className="text-xl font-semibold text-white">Aug 10th, 2024 | Sunday</h1>
                    <Button className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>
                    </Button>
                </div>
                <AddToDo></AddToDo>
            </div>
            {
                toDos.length != 0 ?
                    <div className="w-full h-full max-h-[720px] overflow-y-auto pr-1">
                        <div className="grid grid-cols-3 justify-between gap-4">
                            { 
                                toDos?.map((toDo: JSX.IntrinsicAttributes & { id: string; tittle: string; description: string; isComplite?: boolean; }) => <TodoCard {...toDo}/>)
                            }
                        </div>
                    </div>: 
                    <div className="w-full h-full text-center flex justify-center items-center">
                        <h1 className="text-white">NO TASK's AVAILABLE!</h1>
                    </div>
            }
        </div>
    );
};

export default Todocontainer;
