import React from "react";
import PropTypes from "prop-types";

function UserDetail(props) {
  return (
    <div>
      <p>{props.lastName} {props.firstName}</p>
    </div>
  );
}

UserDetail.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
};

export default UserDetail;
