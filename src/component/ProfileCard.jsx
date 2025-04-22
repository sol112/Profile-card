import React from "react";

function ProfileCard(props) {
  return (
    <>
      <div className="card">
        <div className="container">
          <div className="profileImage">
            <img
              src={props.profileImage}
              alt="Profile"
              className="profileImage"
            />
          </div>
          <div className="name">{props.name}</div>
          <div className="age">{props.age}</div>
          <div className="occupation">{props.occupation}</div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
