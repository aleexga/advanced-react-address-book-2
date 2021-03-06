import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <h2>Available users</h2>
      <SearchBar onChange={(value) => {
        this.setState({
          searchText: value
        });
      }} />
      <UserList users={this.getFilteredUserList()} onUserSelect={(selectedUser) => {
        console.log("User selected in app", selectedUser);
        this.setState({
          selectedUserList:[
            ...this.state.selectedUserList,
            selectedUser
          ]
        })
      }}
      <ListOfUsers />
    </div>
  );
}

export default App;
