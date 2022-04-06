import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function NewTaskSuccess()
{
    return(
        <>
        
                <form className="base-container-nreq  flex column align-center">
                    <div className="container-title">
                    Create a new task
                    </div>
                    <div className="line"></div>
                      <div className="req-content margin-top-20">
                        <span className="sub-title2"> </span>
                        The addition task successfully
               </div>

                    <div className="flex-container-nrs column-reverse">
                        <Link to="/NewTask">
                            <button className="left-btn" style={{ float: 'left' }}>Create a New Task</button>
                        </Link>
                        <Link to="/Tasks">
                            <button
                                className="right-btn expan-width right-btn-mobile"
                                style={{ float: 'right' }}
                            >To view all tasks
                            </button>
                        </Link>
                    </div>
                </form>
         
        </>
    )
}