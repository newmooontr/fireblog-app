import React from 'react'
import { PhotoDiv, ProfileCon, ProfileInfo } from "../styled/ProfileStyled"

function Profile() {
  return (
    <div>
      <ProfileCon>
        <PhotoDiv></PhotoDiv>
        <ProfileInfo>
          <p>name</p>
          <p>gender</p>
          <p>age</p>
          <p>address</p>
        </ProfileInfo>
      </ProfileCon>
    </div>
  );
}

export default Profile