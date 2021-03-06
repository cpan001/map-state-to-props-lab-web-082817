import React, { Component } from "react";
import { connect } from "react-redux";

export class Users extends Component {
  render() {
    // debugger;
    return (
      <div>
        <ul>
          {this.props.users.map(user => (
            <li>{user.userName + "|" + user.hometown}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users, primaryUser: state.users[0] };
}
export const ConnectedUsers = connect(mapStateToProps)(Users); // aren't we supposed to be connecting something around here?
