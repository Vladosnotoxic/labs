import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteFromFriends } from "./../redux/actions";
import Button from "./Button";
import UserAvatar from "./UserAvatar";

const BestFriendCard = (props) => {
  return (
    <div className="userCard">
      <UserAvatar src={props.friend.photo} width={100} height={100} />
      <p>{props.friend.name}</p>
      <p>From {props.friend.from}</p>
      <p>Phone: {props.friend.phone}</p>
      <Button
        label="Удалить из друзей"
        onClick={() => props.deleteFromFriends(props.friend)}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    friends: this.state
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ deleteFromFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BestFriendCard);
