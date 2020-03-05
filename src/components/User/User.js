import React from "react";
import classnames from "classnames";

import styles from "./user.module.scss";

function User(props) {
  const { user } = props;

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img
              src={user.avatar_url}
              alt={user.name + " Github profile picture"}
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{user.name}</strong>{" "}
              <small>
                (
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {user.login}
                </a>
                )
              </small>
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a
                href={user.repos_url}
                className={classnames("is-size-7", styles.userMetaLink)}
                target="_blank"
                rel="noreferrer noopener"
              >
                <strong>{user.public_repos}</strong> Public Repos
              </a>

              <a
                href={user.html_url + "/followers"}
                className={classnames("is-size-7", styles.userMetaLink)}
                target="_blank"
                rel="noreferrer noopener"
              >
                <strong>{user.followers}</strong> Followers
              </a>

              <a
                href={user.html_url + "/following"}
                className={classnames("is-size-7", styles.userMetaLink)}
                target="_blank"
                rel="noreferrer noopener"
              >
                <strong>{user.following}</strong> Following
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
}

export default User;
