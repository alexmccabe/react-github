import axios from "axios";

class GitHubService {
  constructor() {
    this.baseUrl = "https://api.github.com";
  }

  fetchUserByUsername(username) {
    return axios
      .get(this._getEndpoint(`users/${username}`))
      .then(response => response.data);
  }

  _getEndpoint(pathname = "") {
    return `${this.baseUrl}/${pathname}`;
  }
}

export default GitHubService;
