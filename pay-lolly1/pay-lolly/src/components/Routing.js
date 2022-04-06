import { Routes, Route, Redirect } from 'react-router-dom';
import Tasks from './Tasks';
import NewTask from './NewTask';
import React from "react";
import NewTaskSuccess from './NewTaskSuccess'
import EditTask from './EditTask'
function Routing(props) {
const{taskName,setTaskName,descraption,setDescraption,status,setStatus,date,setDate}=props



    return (
        <div>
            <Routes>
                <Route path="/Tasks" element={<Tasks   taskName={taskName} setTaskName={setTaskName}  descraption={descraption} setDescraption={setDescraption}
        status={status} setStatus={setStatus}
        date={date} setDate={setDate}/>}/>
                <Route path="/NewTask" element={<NewTask />} />
                <Route path="/NewTaskSuccess" element={<NewTaskSuccess />} />
                <Route path="/EditTask:id" element={<EditTask taskName={taskName} setTaskName={setTaskName}  descraption={descraption} setDescraption={setDescraption}
        status={status} setStatus={setStatus}
        date={date} setDate={setDate}/>} />
                <Route path="/*" element={<Tasks />} />
                
            </Routes>
        </div>
    )
}

export default Routing;
