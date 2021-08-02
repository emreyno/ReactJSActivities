
import '../component-css/task.css';


const TaskRow = (props)=>{

    const deleteItem=()=>{
                props.deleteTask(props.Task);
            }

    const doneTask =()=>{
               props.doneTask(props.Task);
            }

    let done =false;

    if(props.Task.status==="done"){
        done=true;
    }

    return(
            <tr>
               
                <td className="task-td">
                      {props.Task.taskName}
                      <button className="imgBtn" onClick={()=>deleteItem()}><img className="img-action"src="https://image.flaticon.com/icons/png/512/1632/1632602.png" alt="delete"></img></button>

                      {done?null:<button className="imgBtn" onClick={()=>doneTask()}><img className="img-action"src="https://image.flaticon.com/icons/png/512/1632/1632596.png" alt="done"></img></button>}

                     

                      
                </td>
               
            </tr>
    )
}


export default TaskRow;