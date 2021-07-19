import React from "react";
import styled from "styled-components";
import MainHeader from "../Main/MainHeader";
import MainText from "../Main/MainText";
import FollowBox from "../Follow/FollowBox";

const MainBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ContentBox = styled.div`
  width: 614px;
  border: 1px solid #e0e0e0;
  margin-top: 30px;
`;
const Picture = styled.img`
  width: 614px;
  height: 614px;
  background-image: url("https://source.unsplash.com/category/nature/614x614");
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentList = styled.div`
  display: flex;
  flex-direction: column;
`;

function Main() {
  return (
    <MainBox>
      <ContentList>
        <ContentBox>
          <MainHeader />
          <Picture />
          <MainText />
        </ContentBox>
        <ContentBox>
          <MainHeader />
          <Picture />
          <MainText />
        </ContentBox>
      </ContentList>
      <ProfileBox>
        <FollowBox />
      </ProfileBox>
    </MainBox>
  );
}
export default Main;
