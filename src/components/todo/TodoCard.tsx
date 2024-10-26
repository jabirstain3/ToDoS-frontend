import { Button } from "../ui/button"

type TTodoObject = {
    // id: string;
    tittle: string;
    description:string;
}

export const TodoCard = ({tittle, description}: TTodoObject) => {
    // console.log(todoObject);

    console.log(tittle, description);
    
    return (
        <div className="w-full rounded-lg bg-sole text-white">
            <div className="p-2 rounded-t-lg flex justify-between items-center gap-2 bg-base">
                <input type="checkbox" name="complet" id="" className="size-5"/>
                <Button className="">Priority</Button>
                <div className="flex gap-2">
                    <Button className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </Button>
                    <Button className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </Button>
                </div>
                
            </div>
            <div className="w-full min-h-40 p-2 ">
                <h1 className="text-lg font-medium">{tittle}</h1>
                <h3 className="text-sm opacity-70">Time: {}</h3>
                <p className="my-1">{description}</p>
            </div>
            <div className="flex justify-center">
                <Button className="my-2 bg-standerd">Details</Button>
            </div>
        </div>
    )
}
