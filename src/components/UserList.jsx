import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users`).then((res) => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <ol>
        {this.state.users.map((user) => (
          <li>{user.login}</li>
        ))}
      </ol>
    );
  }
}
