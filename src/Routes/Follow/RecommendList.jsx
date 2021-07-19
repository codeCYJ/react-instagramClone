import React from "react";
import styled from "styled-components";
import instaProfile from "../../image/instaProfile.png";

const RecommendListBox = styled.div`
  height: 48px;
  display: flex;
  padding: 2px 4px;
`;
const Img32px = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background: #e0e0e0;
`;
const RecommendProfile = styled.div`
  width: 201px;
  height: 32px;
  padding: 0 0 0 18px;
  display: flex;
  flex-direction: column;
`;
const RecommendId = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
`;
const RecommendFollow = styled.p`
  margin: 0;
  font-size: 13px;
  color: #aaa;
`;
const ProfileChange = styled.button`
  margin: 0;
  width: 40px;
  height: 32px;
  font-size: 12px;
  color: #0095f6;
  font-weight: 600;
  padding: 0;
  background: none;
`;
function RecommendList() {
  return (
    <RecommendListBox>
      <Img32px src={instaProfile} />
      <RecommendProfile>
        <RecommendId>Name is None</RecommendId>
        <RecommendFollow>회원님을 팔로우합니다.</RecommendFollow>
      </RecommendProfile>
      <ProfileChange>팔로우</ProfileChange>
    </RecommendListBox>
  );
}
export default RecommendList;
