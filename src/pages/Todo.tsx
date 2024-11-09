import Todocontainer from "../components/todo/Todocontainer";

const Todo = () => {
    return (
        <div className="w-full h-full max-w-6xl mx-auto px-2 flex flex-col"> 
            <h1 className="text-4xl font-bold my-2"> ToDoS</h1>
            <Todocontainer/>
        </div>
    );
};

export default Todo;