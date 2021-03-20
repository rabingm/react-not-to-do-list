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
            <th size="sm">S/N</th>
            <th>Task</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskLists.map((item, i) => (
            <tr>
              <td>
                <input
                  type="checkbox"
                  defaultValue={i}
                  onChange={handleOnChange}
                />
              </td>
              <td>{item?.title}</td>
              <td>{item?.hr}</td>
              <td>
                <button onClick={() => handleOnMarkAsNotToDo(i)}>
                  {""}
                  Mark As Not To Do
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
