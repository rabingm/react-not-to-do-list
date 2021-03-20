import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Nottodolist = ({ notToDoList, handleAsToDo }) => {
  const totalSavedTime = notToDoList.reduce((subTtl, item) => {
    return subTtl + +item.hr;
  }, 0);

  return (
    <div>
      <h3 className="text-center">Not To Do List</h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Task</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notToDoList.map((row, i) => (
            <tr key={i}>
              <td>{row.title}</td>
              <td>{row.hr}</td>
              <td>
                <button onClick={() => handleAsToDo(i)}>
                  Mark As Not To Do
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>You saved {totalSavedTime}</p>
    </div>
  );
};
