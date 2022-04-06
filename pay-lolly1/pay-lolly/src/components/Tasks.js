import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Css.css'
import axios from 'axios';
import moment, { today } from 'moment';
import dateFormat from 'dateformat';

import { FaEdit, FaTimes, FaFilter, FaSortAmountDown } from 'react-icons/fa';


export default function Tasks(props) {
  const { taskName, setTaskName, descraption, setDescraption, status, setStatus, date, setDate } = props
  const navigate = useNavigate();
  const [listTask, setListTask] = useState([{ id: "1", taskName: "bb", descraption: "dd", status: "normal", date: "02.04.2022" }
    , { id: "2", taskName: "aa", descraption: "cc", status: "aal", date: '01.04.2022' }])
  const data = [...listTask];
  const [filterListTask, setFilterListTask] = useState()
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  function addTask() {
    navigate('/NewTask')
  }
  useEffect(async () => {
    await GetTask()

  }, [])
  async function GetTask() {
    let url = "http://localhost:3000/get"
    try {
      await axios.get(url,
      )
        .then((response) => {
          setListTask(response.data.payload.list)
        })
        .catch(function (error) {

        })
    } catch (error) {

    }
  }

  async function DeleteTask(id, date) {
    var dateNow = new Date();
    let now = dateFormat(dateNow, "mm/dd/yyyy")
    var then = date;
    var ms = moment(now, "DD/MM/YYYY").diff(moment(then, "DD/MM/YYYY "));
    var d = moment.duration(ms);
    if ((d.days() + 6) > 6) {

      
      let url = "http://localhost:3000/delete:id"
      try {
        await axios.delete(url, { id }
        )
          .then((response) => {
            setListTask(response.data.payload.list)
          })
          .catch(function (error) {
          })
      } catch (error) {

      }
    }
    else {
      setErrorMessage("You can not delete a task that has a deadline of less than 6 days")
      

    }
  }


  function sort(color, name_col) {
    function compare(arrayA, arrayB) {
      if (arrayA[name_col] < arrayB[name_col]) {
        return -1;
      }
      if (arrayA[name_col] > arrayB[name_col]) {
        return 1;
      }
      return 0;
    }

    data.sort(compare);
    if (color === 'green')
      data.sort((arrayA, arrayB) => (arrayA[name_col] > arrayB[name_col]) ? 1 : ((arrayB[name_col] > arrayA[name_col]) ? -1 : 0))
    else
      data.sort((arrayB, arrayA) => (arrayA[name_col] > arrayB[name_col]) ? 1 : ((arrayB[name_col] > arrayA[name_col]) ? -1 : 0))
    setListTask(data)
  }

  const filter = (e, name_col) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = listTask.filter((user) => {
        return user[name_col].toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFilterListTask(results);

    } else {
      setFilterListTask(listTask);
    }
    setName(keyword);
  };

  return (
    <>
      <div clas="main-container">

        <div className="base-container-reqs flex column align-center">
          <button className='addTask' onClick={addTask}>addTask</button>
          <h1 className="title h1Title padding-mobile title-mobile">Tasks</h1>

          <div className="rectangle margin-top-30 hide-mobile" style={{ marginTop: '15px' }}></div>

          <table class="ds-table">
            <tr >
              <th>#</th>
              <th >Tasks Name</th>
              <th>Descraption
                <FaSortAmountDown />
                <th>
                  <input className="filter" type="text" placeholder="filter"
                    onChange={(e) => { filter(e, 'descraption') }} />
                </th>
              </th>
              <th>
                Status
                <FaSortAmountDown />
                <td >
                  <input className="filter" type="text" placeholder="filter"
                    onChange={(e) => { filter(e, "status") }} />
                </td>
                <button
                  className="sort"
                  onClick={(e) => {
                    sort('green', 'date')
                  }}>
                  <FaFilter className='FaFilter' />
                </button>
              </th>
              <th>

                Date  <FaSortAmountDown />
                <td >
                  <input className="filter" type="text" placeholder="filter"
                    onChange={(e) => { filter(e, "date") }} />
                </td>
                <button
                  className="sort"
                  onClick={(e) => {
                    sort('green', 'date')
                  }}>
                  <FaFilter className='FaFilter' />
                </button>
              </th>
            </tr>


            {filterListTask ?
              filterListTask.map((c) => (
                < tr >
                  <td value="">{c.id}</td>
                  <td value="">{c.taskName}</td>
                  <td value="">{c.descraption}</td>
                  <td value="">{c.status}</td>
                  <td value="">{c.date}</td>
                  <td> <button className='btn_delete' onClick={(e) => DeleteTask(c.id, c.date)}><FaTimes /></button></td>

                  <Link to={`/EditTask:${c.id}`}>
                    <button className='btn_edit' onClick={(e) => {
                      setTaskName(c.taskName)
                      setStatus(c.status)
                      setDescraption(c.descraption)

                    }}> <FaEdit /> </button>
                  </Link>
                </tr>
              )) : ""
            }
            {!filterListTask && listTask && listTask.length > 0 ? (
              listTask.map((c, key) =>
                < tr key={key}>
                  <td value="">{c.id}</td>
                  <td value="">{c.taskName}</td>
                  <td value="" >{c.descraption}</td>
                  <td value="">{c.status}</td>
                  <td value="">{c.date}</td>

                  <td> <button className='btn_delete' onClick={DeleteTask(c.id, c.date)}><FaTimes /></button></td>
                  <td>
                    <Link to={`/EditTask:${c.id}`}>
                      <button className='btn_edit' onClick={(e) => {
                        setTaskName(c.taskName)
                        setStatus(c.status)
                        setDescraption(c.descraption)

                      }}> <FaEdit /> </button>
                    </Link>
                  </td>
                </tr>
              )
            ) : ""}
          </table>
        </div>
      </div>
      );

    </>
  )
}