import React, { useCallback, useState } from "react";

function UserSearch(props) {
  const [username, setUsername] = useState("");
  const onSubmit = useCallback(
    event => {
      event.preventDefault();

      props.onSubmit({ fields: { username } });
    },
    [props, username]
  );

  return (
    <form onSubmit={onSubmit}>
      <div className="field has-addons">
        <div className="control has-icons-left">
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <input
            className="input"
            id="username"
            name="username"
            placeholder="username"
            type="text"
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <p className="control">
          <button type="submit" className="button" disabled={!username.length}>
            Search
          </button>
        </p>
      </div>
    </form>
  );
}

export default UserSearch;
