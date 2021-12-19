import React from "react";
import UserAvatar from "./UserAvatar";
import Button from "./Button";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToFriends } from "./../redux/actions";

const UserCard = (props) => {
  return (
    <div className="userCard">
      <UserAvatar src={props.user.picture.large} width={100} height={100} />
      <p>
        {props.user.name.first} {props.user.name.last}
      </p>
      <p>From {props.user.location.city}</p>
      <p>Phone: {props.user.phone}</p>
      <Button
        onClick={() => props.addToFriends(props.user)}
        label={"Добавить в друзья"}
      />
    </div>
  );
};

function mapStateToProps(statea) {
  return {
    friends: this.state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addToFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserCard);
