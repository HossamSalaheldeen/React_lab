import logo from "./logo.svg";
import "./App.css";
import React from "react";
function App() {
  return (
    <div>
      <Counter />
      
      <Employee/>
    </div>
  );
}

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <span  className="badge badge-primary ml-5 mr-2"><h4>{this.state.count}</h4></span>
        <button className="btn btn-success mt-5 mb-5" onClick={() => this.increase()}><i class="fas fa-plus"></i></button>
        <button className="btn btn-danger mt-5 mb-5" onClick={() => this.decrease()}><i class="fas fa-minus"></i></button>
      </div>
    );
  }
}

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      emp: {
        id: 1,
        jobTitleName: "Developer",
        firstName: "Ahmed",
        lastName: "Ali",
        preferredFullName: "Ahmed Ali",
        employeeCode: "E1",
        region: "CA",
        phoneNumber: "408-1234567",
        emailAddress: "ahmed.ali@gmail.com",
      },
    };
  }

  render() {
    return (
      <div>
        <h1>Employee Date</h1>
        <ul class="list-group">
          <li class="list-group-item">id : {this.state.emp.id}</li>
          <li class="list-group-item">jobTitleName : {this.state.emp.jobTitleName}</li>
          <li class="list-group-item">firstName  :{this.state.emp.firstName}</li>
          <li class="list-group-item">lastName : {this.state.emp.lastName}</li>
          <li class="list-group-item">preferredFullName : {this.state.emp.preferredFullName}</li>
          <li class="list-group-item">employeeCode : {this.state.emp.employeeCode}</li>
          <li class="list-group-item">region : {this.state.emp.region}</li>
          <li class="list-group-item">phoneNumber : {this.state.emp.phoneNumber}</li>
          <li class="list-group-item">emailAddress : {this.state.emp.emailAddress}</li>
        </ul>
      </div>
    );
  }
}

export default App;
