import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks'
import NewTask from './components/NewTask'
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './components/Routing';
import  React ,{ useState } from 'react';

function App() {

const [taskName,setTaskName]=useState()
const [descraption,setDescraption]=useState()
const [status,setStatus]=useState()
const [date,setDate]=useState()



  return (
    <>
      <Router>
        <Routing taskName={taskName} setTaskName={setTaskName}
        descraption={descraption} setDescraption={setDescraption}
        status={status} setStatus={setStatus}
        date={date} setDate={setDate}
        />
      </Router>
    </>
  );
}

export default App;
