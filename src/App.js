import logo from "./logo.svg";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App p-3 mb-2 bg-warning text-dark">
      <header className="App-header">
        <Container>
          <Row>
            <Col className="text-center">Not To Do List</Col>
          </Row>
          <Row className="form-group mt-4">
            <div className="col-md-2">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Task"
                aria-label="Enter Task"
              ></input>
            </div>
            <div className="col-md-2">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Duration"
                aria-label="Enter Duration"
              ></input>
            </div>
            <div className="col-md-2">
              <button type="button" class=" btn btn-light">
                Add Task
              </button>
            </div>
          </Row>
          <Row className="row">
            <Col>1 1</Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
