import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';

//todo list iteration
class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.markDone = this.markDone.bind(this);
  }

  //mark task status done on btn click
  markDone(e) {
    this.props.items[e].status = 'done';
    this.forceUpdate();
  }

  //delete task from list on delete click btn
  delete(e) {
    delete this.props.items[e];
    this.forceUpdate();
  }

  render() {
    return (
      <>
        {this.props.items.map((item, index) => (
          <Alert key={index} variant={(item.status === 'pending') ? 'secondary' : 'success'}>
            {item.text}
            <Button variant="danger" className="float-end btn-sm mx-1" onClick={e => this.delete(e.target.id)} id={index}>Delete</Button>
            {(item.status === 'pending') ? <Button variant="success" className="float-end btn-sm mr-1" onClick={e => this.markDone(e.target.id)} id={index}>Mark Done</Button> : ''}}
          </Alert>
        ))}
      </>
    );
  }
}

//todo list management
class ToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.onTaskEnter = this.onTaskEnter.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  //handel input change event
  onTaskEnter(event) {
    event.preventDefault();
    this.setState({ text: event.target.value });
  }

  //add item to do list
  addToDo(event) {

    event.preventDefault();

    if (this.state.text === '') {
      return;
    }

    const taskList = {
      text: this.state.text,
      status: 'pending',
    };

    this.setState(state => ({
      items: state.items.concat(taskList),
      text: '',
      status : 'pending'
    }));
  }

  render() {
    return (
      <Container>
        <br />
        <Form onSubmit={this.addToDo}>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Task
              </Form.Label>
              <Form.Control
                className="mb-2 form-control-lg"
                id="inlineFormInput"
                placeholder="Enter task"
                value={this.state.text}
                onChange={this.onTaskEnter}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2 btn-lg">
                Add Task
              </Button>
            </Col>
          </Row>
        </Form>
        <br />
        <TodoList items={this.state.items} />
      </Container>
    );
  }
}

export default ToDo;