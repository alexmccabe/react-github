import React from "react";

function User(props) {
  return (
    <div>
      <pre>{JSON.stringify(props.user)}</pre>
    </div>
  );
}

export default User;
