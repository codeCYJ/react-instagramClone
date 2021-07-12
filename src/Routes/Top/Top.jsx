import React, { useState } from "react";
import styled from "styled-components";
import instagramTitle from "../../image/instagramTitle.png";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink as Link } from "react-router-dom";

const MainBox = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 975px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IntagramTitleImage = styled.img`
  height: 29px;
  width: 103px;
`;
const SearchBox = styled.div`
  width: 215px;
  height: 28px;
  padding: 7px;
  box-sizing: border-box;
  background-color: #fafafa;
  border: solid 1px rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchInput = styled.input`
  width: 160px;
  text-align: center;
`;

function Top() {
  // const [isOpenAddLargeMenu, setIsOpenAddLargeMenu] = useState(false);
  // const [smallMenuBackup, setSmallMenuBackup] = useState();
  const [isSearch, setIsSearch] = useState(false);

  return (
    <MainBox>
      <Main>
        <IntagramTitleImage src={instagramTitle} />
        <SearchBox>
          <span onClick={() => setIsSearch(true)}>
            <FontAwesomeIcon icon={faSearch} color="#ccc" />
            <SearchInput placeholder="검색" />
          </span>
        </SearchBox>
        <div className="top_nav">
          <div className="top_nav_A">
            <Link to="/home"></Link>
            <Link
              to="/payment"
              className="payment"
              activeStyle={{ color: "#fade4b" }}
            >
              결제관리
            </Link>
            <Link
              to="/consulting"
              className="consulting"
              activeStyle={{ color: "#fade4b" }}
            >
              상담관리
            </Link>
          </div>
          {"asd" === undefined ? (
            <div className="top_nav_B logouttopmenu">
              <Link to="/" className="signin">
                Sign In
              </Link>
            </div>
          ) : (
            <div className="top_nav_B logintopmenu">
              <div className="passwordchange">
                <Link to="/passwordchange">Password Change</Link>
              </div>
              <div className="signout">Sign Out</div>
            </div>
          )}
        </div>
      </Main>
    </MainBox>
  );
}

export default Top;
