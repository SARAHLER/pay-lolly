import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


export default function NewTask() {
    const [status, setStatus] = useState(['normal', 'Urgent', 'stoppage '])
    const [statusSelect,setStatusSelect]=useState()
    const [nameTask, setNameTask] = useState()
    const [descriptionTask, setDescriptionTask] = useState()
    const [date, setDate] = useState()
    const navigate = useNavigate();

   async function CreateTask() {
   
        const date = new Date() 
        navigate('/NewTaskSuccess')       

         let url="http://localhost:3000"
        try {
            await axios.post(url,
                {
                    nameTask,
                   // descriptionTask,
                    //statusSelect,
                    date,
                    status,
                   // description
                })
                .then((response) => {
navigate('/NewTaskSuccess')                })
                .catch(function (error) {

                })
        } catch (error) {
        }
    }

    return (
        <>
                    <div clas="main-container-c">
                        <div className="base-container-nreq-c  flex column align-center overflow" style={{ height: '512px' }}>
                            <h1 className="title margin-bottom-30 h1Title">Create a new task</h1>
                            <div className="rectangle margin-top-0"></div>
                            <div className="nreq-content ">
                                <div className="NewTask ">

                                    <div>
                                        <div className='' >
                                            <input placeholder="TaskName "
                                                // className='textarea'
                                                value={nameTask}
                                                onChange={e => {
                                                setNameTask(e.target.value) }}
                                                name="text"
                                                type="text"
                                                id="subj-desc"
                                            />
<br></br>
<div >
                                            <textarea placeholder="Descraption Task "
                                                // style={{ float: 'right' }}
                                                // style=
                                                // {{ textalign: 'center' }}
                                                className='textarea'
                                                value={descriptionTask}
                                                onChange={e => {
                                                    setDescriptionTask(e.target.value)
                                                }}
                                                name="text"
                                                type="text"
                                                id="subj-desc"
                                            />

                                        </div>
                                        <br></br>
                                            <select name="" id="select-request"
                                            onChange={e => setStatusSelect(e.target.value)}>
                                              
                                                <option value={statusSelect}>  status</option>
                                                {
                                                    status.map((c, key) =>
                                                        <option key={key} value={c}
                                                         >{c}</option>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                       



                                    </div>
                                </div>
                             
                            </div>
                      

                         
                            <div className="flex justify-space column-reverse margin-mobile">
                                <button
                                    className="left-btn"
                                    type="button"
                                    onClick={CreateTask}
                                >Create a task
                                </button>
                            </div>
                        </div>
                    </div>
              
            )
        </>
    )
}