import React, { useState } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const MainBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: powderblue;
`;
const Main2 = styled.div`
  width: 975px;
  background-color: #d8d0d0;
`;



function Main() {
  const [isOpenAddLargeMenu, setIsOpenAddLargeMenu] = useState(false);
  const [smallMenuBackup, setSmallMenuBackup] = useState();

  return (
    <MainBox>
      <Main2>
      </Main2>
    </MainBox>
  );
}
export default Main;
