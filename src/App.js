import React, { useState } from "react";

import { Container, Row, Col, Table, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Todolist } from "./components/tasklist/Todolist";
import { Nottodolist } from "./components/tasklist/Nottodolist";
import { Addform } from "./components/form/Addform";

import "./App.css";

const App = () => {
  // Creating states

  const [taskLists, setTaskLists] = useState([]);
  const [notToDoList, setnotToDoList] = useState([]);
  // const [totalHrs, setTotalHrs] = useState(0);

  //States to hold checked item in checkbox

  const [itemToDelete, setItemToDelete] = useState([]);
  const [notToDoItemToDelete, setnotToDoItemToDelete] = useState([]);

  //update the total hours at last
  const toDoTotalHrs = taskLists.reduce((subttl, item) => subttl + +item.hr, 0);
  const notToDoTotalHrs = notToDoList.reduce(
    (subttl, item) => subttl + +item.hr,
    0
  );
  const totalHrs = toDoTotalHrs + notToDoTotalHrs;

  // Preventing from exceeding 168 hours
  const handOnExceeding = (frmDt) => {};

  // Calculating Hours

  const handleOnAddTask = (frmDt) => {
    if (totalHrs + +frmDt.hr > 168) {
      return alert("Total hous is exceeding than actual hour in a week");
    }
    // setTotalHrs(totalHrs + +frmDt.hr);
    setTaskLists([...taskLists, frmDt]);
  };

  // Remove bulk if checkbox is checked

  const handleOnChange = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      return setItemToDelete([...itemToDelete, +value]);
    }

    // Removing from array
    const newList = itemToDelete.filter((item) => item !== value);
    setItemToDelete(newList);
  };

  const handleOnChangeNotToDO = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      return setnotToDoItemToDelete([...notToDoItemToDelete, +value]);
    }

    // Removing from array

    const newList = notToDoItemToDelete.filter((item) => item !== value);
    setnotToDoItemToDelete(newList);
  };

  //Task list
  const deleteFromTaskList = () => {
    console.log(itemToDelete);
    const newArg = taskLists.filter((item, i) => !itemToDelete.includes(i));

    setTaskLists(newArg);
    setItemToDelete([]);
  };
  //Not to do list
  const deleteFromNotToDoTaskList = () => {
    console.log(notToDoItemToDelete);
    const newArg = notToDoList.filter(
      (item, i) => !notToDoItemToDelete.includes(i)
    );

    setnotToDoList(newArg);
    setnotToDoItemToDelete([]);
  };

  //Delete item when button is clicked

  const deleteItem = () => {
    if (window.confirm("Are you sure want to remove these items?")) {
      deleteFromTaskList();
      deleteFromNotToDoTaskList();
    }
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
                handleOnChange={handleOnChange}
              />
            </Col>
            <Col>
              <Nottodolist
                notToDoList={notToDoList}
                handleAsToDo={handleAsToDo}
                totalSavedTime={notToDoTotalHrs}
                handleOnChangeNotToDO={handleOnChangeNotToDO}
              />
            </Col>
          </Row>

          <Row>
            {" "}
            <Alert>Total Hour is {totalHrs}/168</Alert>
          </Row>
          <button onClick={deleteItem} class="btn btn-danger">
            Delete
          </button>
        </Container>
      </header>
    </div>
  );
};

export default App;
