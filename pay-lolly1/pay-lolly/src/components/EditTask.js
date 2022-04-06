import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function EditTask(props) {
    const location = useLocation();
    const { taskName, setTaskName, descraption, setDescraption, status, setStatus, date, setDate } = props
    const [statusList, setStatusList] = useState(['normal', 'Urgent', 'stoppage '])
    const [nameTask, setNameTask] = useState()
    const [descriptionTask, setDescriptionTask] = useState()
    let id = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);

    const navigate = useNavigate();
    async function EditTask() {

        const date = new Date()
        navigate('/Tasks')

        let url = "http://localhost:3000/put"
        try {
            await axios.put(url,
                {
                    id, 
                    status,
                    // nameTask,
                    // description,
                })
                .then((response) => {
                    navigate('/Tasks')
                })
                .catch(function (error) {

                })
        } catch (error) {
        }
    }

    return (
        <>
            <div clas="main-container-c">
                <div className="base-container-nreq-c  flex column align-center overflow" style={{ height: '512px' }}>
                    <h1 className="title margin-bottom-30 h1Title">Edit a new task</h1>
                    <div className="rectangle margin-top-0"></div>
                    <div className="nreq-content ">
                        <div className="editNewTask ">

                            <div>
                                <div className='TaskName' >
                                    <input placeholder="TaskName "
                                        value={taskName}
                                        onChange={e => {
                                            setTaskName(e.target.value)
                                        }}
                                        name="text"
                                        type="text"
                                        id="subj-desc"
                                    />
<br></br>
                                    <div  className='TaskDescription'>
                                    <input placeholder="Description"
                                        value={descraption}
                                        onChange={e => {
                                            setDescraption(e.target.value)
                                        }}
                                        name="text"
                                        type="text"
                                    />
                                </div>
                                <br></br>

                                    <select name="" id="select-request"
                                        onChange={e => setStatus(e.target.value)}>
                                        <option value={status}>  status</option>
                                        {
                                            statusList.map((c, key) =>
                                                <option key={key} value={c}
                                                >{c}</option>)
                                        }
                                    </select>
                                </div>
                                <br></br>
                              
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div className="flex justify-space column-reverse margin-mobile">
                        <button
                            className="left-btn"
                            type="button"
                            onClick={EditTask}
                        >edit
                        </button>
                    </div>
                </div>
            </div>
            )
        </>
    )
}