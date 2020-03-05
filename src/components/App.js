import React, { Component } from "react";

import { GitHubService } from "../services";

import User from "./User/User";
import UserError from "./User/UserError";
import UserSearch from "./User/UserSearch";
import Loader from "./Loader/Loader";

import "../styles/global.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
      isLoading: false,
      user: null
    };

    this.gitHubService = new GitHubService();
    this._bindMethods();
  }

  _bindMethods() {
    this.fetchUser = this.fetchUser.bind(this);
  }

  fetchUser(formData) {
    this.setState({ isLoading: true });

    this.gitHubService
      .fetchUserByUsername(formData.fields.username)
      .then(response => {
        this.setState({ isLoading: false, user: response });
      })
      .catch(error => {
        this.setState({ error, isLoading: false, user: null });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <Loader isVisible={true}></Loader>;
    }

    return (
      <div>
        <UserSearch onSubmit={this.fetchUser}></UserSearch>

        {this.state.error && <UserError error={this.state.error}></UserError>}
        {this.state.user && <User user={this.state.user}></User>}
      </div>
    );
  }
}

export default App;
