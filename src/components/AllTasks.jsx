import "./AllTasks.css"
import data from "../data"



const AllTasks = () => {
    return (
        <div>
            {
                data.map( (e)=>{
                    //make map over each item 
                    //save item to const 
                    const {id, name} = e
                    
                    return <div className="one-item">
                                    <h4>{name}</h4>
                                </div>
                    
             } )
            }
        </div>
    )
}
export default AllTasks