import React, { useCallback, useState } from "react";

function UserSearch(props) {
  const [username, setUsername] = useState("");
  const onSubmit = useCallback(event => {
    event.preventDefault();

    props.onSubmit({ fields: { username } });
  });

  return (
    <form onSubmit={onSubmit}>
      <input
        id="username"
        name="username"
        placeholder="username"
        type="text"
        onChange={event => setUsername(event.target.value)}
      />

      <button type="submit" disabled={!username.length}>
        Search
      </button>
    </form>
  );
}

export default UserSearch;
