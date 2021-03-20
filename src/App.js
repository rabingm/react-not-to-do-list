import React, { useState } from "react";

import { Container, Row, Col, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Todolist } from "./components/tasklist/Todolist";
import { Nottodolist } from "./components/tasklist/Nottodolist";
import { Addform } from "./components/form/Addform";

import "./App.css";

const App = () => {
  // Creating states

  const [taskLists, setTaskLists] = useState([]);
  const [notToDoList, setnotToDoList] = useState([]);
  const [totalHrs, setTotalHrs] = useState(0);

  // Preventing from exceeding 168 hours
  const handOnExceeding = (frmDt) => {
    if (totalHrs + +frmDt.hr > 168) {
      return alert("Total hous is exceeding than actual hour in a week");
    }
  };

  // Calculating Hours

  const handleOnAddTask = (frmDt) => {
    setTotalHrs(totalHrs + +frmDt.hr);
    setTaskLists([...taskLists, frmDt]);
  };

  // Handling As not to do

  const handleOnMarkAsNotToDo = (index) => {
    const item = taskLists[index];
    // console.log(taskLists);
    const newArg = taskLists.filter((item, i) => i !== index);

    setTaskLists(newArg);
    setnotToDoList([...notToDoList, item]);
  };

  //  Handling Not to do list

  const markAsToDo = (index) => {
    const item = notToDoList[index];
    const newArg = notToDoList.filter((item, i) => i !== index);

    setnotToDoList(newArg);
    setTaskLists([...taskLists, item]);
  };

  const handleAsToDo = (index) => {
    const item = notToDoList[index];
    const newArg1 = notToDoList.filter((item, i) => i !== index);

    setnotToDoList(newArg1);
    setTaskLists([...taskLists, item]);
  };

  // const markAsToDo = index =>{
  //   const item = not

  return (
    <div className="App p-3 mb-2 bg-warning text-dark">
      <header className="App-header">
        <Container>
          {/* /*Handling props as handleOnAddTask */}
          <Addform handleOnAddTask={handleOnAddTask} />
          <Row className="row">
            <Col>
              {/* sending props */}

              <Todolist
                taskLists={taskLists}
                handleOnMarkAsNotToDo={handleOnMarkAsNotToDo}
              />
            </Col>
            <Col>
              <Nottodolist
                notToDoList={notToDoList}
                handleAsToDo={handleAsToDo}
              />
            </Col>
          </Row>

          <Row>Total Hour is {totalHrs}/168</Row>
          <button class="btn btn-danger">Delete</button>
        </Container>
      </header>
    </div>
  );
};

export default App;
