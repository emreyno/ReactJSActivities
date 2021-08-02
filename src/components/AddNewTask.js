
import '../component-css/taskAddNew.css';
import { useState } from 'react';








const AddNewTask = ({addTask,tasks})=>{
    const [taskname,setTaskName] = useState('');
    const [status,setStatus] = useState('pending');
    const [errorMessage,setErrorMessage]= useState('')
    const index = tasks.findIndex( task => task.taskName === taskname);
    const isnull =() =>{
                if(taskname===''){
                    setErrorMessage("oooppss you didn't enter a task!");
                  
                }
                else if(index>=0){
                    setTaskName("");
                    setErrorMessage("Task already Exist");
                }
                else{
                    onClickAddTask();
                }
        
            }
            
    const onClickAddTask=(e) =>{
               
        let task = {
            taskName:taskname,
            status: status
            }
        addTask(task);
    }

    
    return(
            <div className="input-form">
                <input className="input-Task"type="Text" name="taskname" value={taskname} onChange={(e)=>setTaskName(e.target.value)} placeholder={errorMessage}></input>
                <br/>
                <button className="add-btn"type="button" onClick={isnull}>Add Task</button>
        
            </div>
    )
}

export default AddNewTask;