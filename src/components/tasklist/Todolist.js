import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Todolist = ({
  taskLists,
  handleOnMarkAsNotToDo,
  handleOnDeleteNotToDoList,
  handleOnChange,
}) => {
  // handleOnCheckBox = e =>{
  //   const

  // }
  return (
    <div>
      <h3 className="text-center">Tasklist</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {/* <th size="sm">S/N</th> */}
            <th>Task</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskLists.map((row, i) => (
            <tr>
              <td key={i}>
                <input
                  type="checkbox"
                  defaultValue={i}
                  onChange={handleOnChange}
                />
                {row?.title}
              </td>
              <td>{row?.hr}</td>
              <td>
                <button onClick={() => handleOnMarkAsNotToDo(i)}>
                  {""}
                  -->>Not To Do List
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
