
import TaskRow from './TaskRow';
import '../component-css/taskDisplay.css';
import AddNewTask from './AddNewTask';
import { useState } from 'react';
const TaskDisplay = () =>{

    const [tasks,setTasks] = useState([
        {
        id:1,
        taskName: "eat",
        status: "pending"
        }
    ]);


     const addTask = (task) =>{
          task.id = tasks.length + 1;
          let taskCopy = [...tasks];
          taskCopy.push(task);

          setTasks(taskCopy);

      }
     const deleteTask = (task) =>{
        let taskCopy = [...tasks];
        taskCopy = taskCopy.filter(i => i.id !== task.id);

        setTasks(taskCopy);

      }
      const doneTask=(task)=>{
            let taskCopy = [...tasks];
            let index = taskCopy.findIndex(i=>i.id===task.id);
            taskCopy[index].status = "done";
          
        setTasks(taskCopy);
      }





        //filter before passing to Taskrow

        const pending =  tasks.filter(Status => Status.status==="pending").map(filteredTask =>
            <TaskRow
             key={filteredTask.id}
             Task={filteredTask}
             deleteTask={deleteTask}
             doneTask={doneTask}
            />
        )


        const done =  tasks.filter(Status => Status.status==="done").map(filteredTask =>
            <TaskRow
             key={filteredTask.id}
             Task={filteredTask}
             deleteTask={deleteTask}
            />
        )


        return(
           <div className="task-wrapper">
               {/* header part */}

               <div className="header-task">
                   <div>
                   <h1>TASK</h1>
                   </div>


                   <div className="form-container">
                   <AddNewTask
                    addTask={addTask}
                    tasks={tasks}
                   />
                   </div>

               </div>

            {/* pending Task part */}
               {pending.length===0?<table className="task-Table">
                    <thead>
                        <tr>
                            <th className="task-th">No Pending Task</th>
                        </tr>
                    </thead>

                    <tbody>
                        <td>Add New Task</td>
                    </tbody>


                </table> : <table className="task-Table">
                    <thead>
                        <tr>
                            <th className="task-th">Pending Task</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pending}
                    </tbody>


                </table>}

            {/* done task part */}

            {done.length===0?null: <table className="done-Table">
                <thead>
                    <tr>
                        <th className="task-th">Done Task</th>
                    </tr>
                </thead>

                <tbody>
                    {done}
                </tbody>


            </table>}

            </div>

        );
    
}

export default TaskDisplay;
