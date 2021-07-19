import React from "react";
import styled from "styled-components";
import RecommendList from "../Follow/RecommendList";

const RecommendBox = styled.div`
  width: 293px;
  margin: 30px 0 0 30px;
  justify-content: center;
`;
const RecommendTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
`;
const RecommendTitle = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 14px;
  color: gray;
`;
const RecommendMore = styled.button`
  background: none;
  font-weight: 600;
  font-size: 13px;
`;
function FollowBox() {
  return (
    <RecommendBox>
      <RecommendTitleBox>
        <RecommendTitle>회원님을 위한 추천</RecommendTitle>
        <RecommendMore>모두 보기</RecommendMore>
      </RecommendTitleBox>
      <RecommendList />
      <RecommendList />
      <RecommendList />
      <RecommendList />
      <RecommendList />
    </RecommendBox>
  );
}
export default FollowBox;
