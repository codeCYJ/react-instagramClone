import React from "react";
import styled from "styled-components";
import instaProfile from "../../image/instaProfile.png";
import threeDots from "../../image/threeDots.svg";

const Profile = styled.div`
  height: 60px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
const ProfileName = styled.div`
  width: 536px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 14px;
`;
const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border: 1px solid black;
`;
const Img13px = styled.img`
  padding: 9px;
  width: 13px;
  height: 13px;
`;

function MainHeader() {
  return (
    <Profile>
      <ProfileImg src={instaProfile} />
      <ProfileName>
        codeCYJ
        <Img13px src={threeDots} />
      </ProfileName>
    </Profile>
  );
}
export default MainHeader;
