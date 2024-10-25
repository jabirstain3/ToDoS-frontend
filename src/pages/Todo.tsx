import Todocontainer from "../components/todo/Todocontainer";

const Todo = () => {
    return (
        <div className=" w-full max-w-6xl mt-10 mx-auto px-2"> 
            <h1 className="text-4xl font-bold my-2"> ToDoS</h1>
            <Todocontainer/>
        </div>
    );
};

export default Todo;