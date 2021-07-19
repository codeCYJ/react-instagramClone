import React from "react";
import styled from "styled-components";

const BottomBox = styled.div`
  width: 293px;
  margin: 15px 0 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MenuList = styled.p`
  margin: 0 0 3px 0;
  font-size: 11px;
  color: #aaa;
`;
const CopyLight = styled.p`
  margin: 15px 0 0 0;
  font-size: 11px;
  color: #aaa;
`;
function FollowBottom() {
  return (
    <BottomBox>
      <MenuList>소개. 도움말. 홍보센터. API. 채용정보.</MenuList>
      <MenuList>
        개인정보처리방침. 약관. 위치. 인기 계정. 해시태그. 언어
      </MenuList>
      <CopyLight>2021 INSTAGRAM FROM FACEBOOK</CopyLight>
    </BottomBox>
  );
}
export default FollowBottom;
