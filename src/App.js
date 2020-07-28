import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ borderStyle: "solid", height: "100vh" }}>
          <div>
            <h1>TO DO LIST</h1>
          </div>
          <div style={{ height: "20px" }}> </div>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
