import "./AllTasks.css"
import data from "../data"
import { useState } from "react"


const AllTasks = () =>{


    //delete button

    const [myTask, setMyTask] = useState(data)

    const handleClick = (id) => {
        const newTasks = myTask.filter ( (oneTask) => {
            return oneTask.id !== id
        } )
        setMyTask(newTasks)
    }
 
    //delete button 
    //delete all button

    const handleDeleteAll = () => {
        setMyTask([])
    }
    return (
        <div>
            {
                //map over data 
                myTask.map( (oneTask)=> {
                    //pull from one task of data ID and NAME
                    const {id, name} = oneTask

                    return (
                        <div className="one-task" key={id}>
                            <h4>{name}</h4>
                            <button onClick={() => handleClick(id)}>Delete</button>
                        </div>
                    )
            } )
            }
            <button onClick={handleDeleteAll}>Delete All </button>
        </div>
        )

}

export default AllTasks