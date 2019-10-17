import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addReminder, deleteReminder, clearAll } from "../redux/actions/index";
import moment from "moment";

function mapStateToProps(state) {
  return {
    reminders: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addReminder, deleteReminder, clearAll },
    dispatch
  );
}

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: ""
    };
  }

  addReminder() {
    console.log("this.state.dueDate", this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }
  editReminder(id, text) {
    console.log(id + " " + text);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>{reminder.text}</div>
                <div>
                  <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                </div>
              </div>
              <div
                className="list-item delete-button"
                onClick={() => this.deleteReminder(reminder.id)}
              >
                &#x2715;
              </div>
              <div
                className="list-item delete-button"
                onClick={() => this.editReminder(reminder.id, reminder.text)}
              >
                ࡫{" "}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="RenderApp">
        <div className="title">
          <h1>Task Manager</h1>
          <h4>Make Your Life A Bit Easy</h4>
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to ..."
              onChange={event => this.setState({ text: event.target.value })}
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={event => this.setState({ dueDate: event.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Task
          </button>
        </div>
        {this.renderReminders()}
        <div className="btn btn-danger" onClick={() => this.props.clearAll()}>
          Clear All
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App1);
