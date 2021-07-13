import React, { useState } from "react";
import styled from "styled-components";
import instaProfile from "../../image/instaProfile.png";
import threeDots from "../../image/threeDots.svg";
import instaLike from "../../image/instaLike.png";
import instaBook from "../../image/instaBook.png";
import instaChat from "../../image/instaChat.png";
import instaDM from "../../image/instaDM.png";
import instaImo from "../../image/instaImo.png";

import { NavLink as Link } from "react-router-dom";

const MainBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const PictureBox = styled.div`
  width: 614px;
  border: 1px solid #e0e0e0;
  margin-top: 30px;
`;
const Profile = styled.div`
  height: 60px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;
const ProfileName = styled.div`
  width: 536px;
  height: 60px;
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
const Picture = styled.img`
  width: 614px;
  height: 614px;
  background-image: url("https://source.unsplash.com/category/nature/614x614");
`;
const ContentBox = styled.div`
  height: 197px;
`;
const ContentIconBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 0 16px;
`;
const ContentIcon1 = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  width: 120px;
  align-items: center;
`;
const ContentIcon2 = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;
const Img24px = styled.img`
  width: 24px;
  height: 24px;
`;
const ContentLikeBox = styled.div`
  height: 18px;
  display: flex;
  padding: 0 16px;
  margin: 0 0 8px;
  font-size: 14px;
`;
const ContentWritten = styled.div`
  height: 18px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;
const ContentWriter = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const ContentText = styled.div`
  font-size: 14px;
  margin-left: 10px;
`;
const CommentBox = styled.div`
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 4px;
`;
const CommentWritten = styled.div`
  display: flex;
`;
const CommentWriter = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const CommentText = styled.div`
  font-size: 14px;
  margin-left: 10px;
`;
const CommentLike = styled.img`
  width: 12px;
  height: 12px;
`;
const WrittenDate = styled.div`
  color: #828282;
  font-size: 10px;
  padding: 0 16px;
  margin: 4px 0;
  height: 18px;
`;
const CommentWriteBox = styled.div`
  padding: 0 16px;
  height: 56px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e0e0e0;
`;
const CommentInput = styled.input`
  padding-left: 16px;
  width: 514px;
`;
const CommentButton = styled.button`
  color: #0095f6;
  font-weight: 600;
  font-size: 14px;
  background-color: white;
  width: 50px;
`;
const FollowBox = styled.div`
  width: 293px;
`;

function Main() {
  const [isOpenAddLargeMenu, setIsOpenAddLargeMenu] = useState(false);
  const [smallMenuBackup, setSmallMenuBackup] = useState();

  return (
    <MainBox>
      <PictureBox>
        <Profile>
          <ProfileImg src={instaProfile} />
          <ProfileName>
            codeCYJ
            <Img13px src={threeDots} />
          </ProfileName>
        </Profile>
        <Picture />
        <ContentBox>
          <ContentIconBox>
            <ContentIcon1>
              <Img24px src={instaLike} />
              <Img24px src={instaChat} />
              <Img24px src={instaDM} />
            </ContentIcon1>
            <ContentIcon2>
              <Img24px src={instaBook} />
            </ContentIcon2>
          </ContentIconBox>
          <ContentLikeBox>좋아요 4개</ContentLikeBox>
          <ContentWritten>
            <ContentWriter>CodeCYJ</ContentWriter>
            <ContentText>안녕하세요</ContentText>
          </ContentWritten>
          <CommentBox>
            <CommentWritten>
              <CommentWriter>John</CommentWriter>
              <CommentText>Nice!</CommentText>
            </CommentWritten>
            <CommentLike src={instaLike} />
          </CommentBox>
          <WrittenDate>5월 13일</WrittenDate>
          <CommentWriteBox>
            <Img24px src={instaImo} />
            <CommentInput placeholder="댓글 달기..." />
            <CommentButton>게시</CommentButton>
          </CommentWriteBox>
        </ContentBox>
      </PictureBox>
      <FollowBox></FollowBox>
    </MainBox>
  );
}
export default Main;
