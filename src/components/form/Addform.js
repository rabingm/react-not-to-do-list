import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

const initialFormData = {
  title: "",
  hr: 0,
};

export const Addform = ({ handleOnAddTask }) => {
  const [task, setTask] = useState(initialFormData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
    console.log(handleOnChange);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnAddTask(task);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row>
        <Col className="text-center">
          <h2>Not To Do List</h2>
        </Col>
      </Row>
      <hr />
      <Row className="form-group mt-4">
        <div className="col-md-2">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Task"
            aria-label="Enter Task"
            value={task.title}
            onChange={handleOnChange}
            name="title"
            required
          ></input>
        </div>
        <div className="col-md-2">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Duration"
            aria-label="Enter Duration"
            value={task.hr}
            onChange={handleOnChange}
            name="hr"
            required
          ></input>
        </div>
        <div className="col-md-2">
          <button type="submit" class=" btn btn-light">
            Add Task
          </button>
        </div>
      </Row>
      <hr />
    </Form>
  );
};
