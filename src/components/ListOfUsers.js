import React from "react";
import UserDetail from "./UserDetail";
import users from "../users";
import PropTypes from "prop-types";

function ListOfUsers() {
  const allUsers = users.map(printUsers);
  return (
    <div>{allUsers}</div>
  );
}

function printUsers(props) {
  const userDetail = UserDetail(props);
  return (
    <div id="showDetail">
      {userDetail}
    </div>
  );
}

printUsers.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
};

export default ListOfUsers;
