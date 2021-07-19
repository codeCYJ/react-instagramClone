import React from "react";
import styled from "styled-components";
import instaProfile from "../../image/instaProfile.png";

const MyProfileBox = styled.div`
  width: 293px;
  margin: 30px 0 0 30px;
  justify-content: center;
`;
const MyProfile = styled.div`
  height: 56px;
  display: flex;
  margin-top: 18px;
`;
const Img56px = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background: #e0e0e0;
`;
const ProfileBox = styled.div`
  width: 187px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProfileId = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 14px;
`;
const ProfileName = styled.p`
  margin: 0;
  font-size: 14px;
  color: #aaa;
`;
const ProfileChange = styled.button`
  margin: 0;
  font-size: 12px;
  color: #0095f6;
  font-weight: 600;
  padding: 0;
  background: none;
`;
function Profile() {
  return (
    <MyProfileBox>
      <MyProfile>
        <Img56px src={instaProfile} />
        <ProfileBox>
          <ProfileId>Id is None</ProfileId>
          <ProfileName>Name is None</ProfileName>
        </ProfileBox>
        <ProfileChange>전환</ProfileChange>
      </MyProfile>
    </MyProfileBox>
  );
}
export default Profile;
