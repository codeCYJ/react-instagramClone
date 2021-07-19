import React from "react";
import styled from "styled-components";
import FollowProfile from "../Follow/FollowProfile";
import FollowRecommend from "../Follow/FollowRecommend";
import FollowBottom from "../Follow/FollowBottom";

const MainBox = styled.div`
  width: 100%;
  margin-top: 20px;
`;

function FollowBox() {
  return (
    <MainBox>
      <FollowProfile />
      <FollowRecommend />
      <FollowBottom />
    </MainBox>
  );
}
export default FollowBox;
