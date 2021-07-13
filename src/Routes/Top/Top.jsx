import React, { useState } from "react";
import styled from "styled-components";
import instagramTitle from "../../image/instagramTitle.png";
import instaAdd from "../../image/instaAdd.png";
import instaDM from "../../image/instaDM.png";
import instaHome from "../../image/instaHome.png";
import instaLike from "../../image/instaLike.png";
import instaPoisition from "../../image/instaPosition.png";
import instaProfile from "../../image/instaProfile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink as Link } from "react-router-dom";

const MainBox = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
`;

const Main = styled.div`
  width: 975px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;
const TopNav = styled.div`
  display: flex;
  align-items: center;
`;
const TopNavA = styled.div`
  width: 266px;
  padding: 0 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InstagramTitleImage = styled.img`
  height: 29px;
  width: 103px;
`;
const InstaImage = styled.img`
  height: 20px;
  width: 20px;
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
        <InstagramTitleImage src={instagramTitle} />
        <SearchBox>
          <span onClick={() => setIsSearch(true)}>
            <FontAwesomeIcon icon={faSearch} color="#ccc" />
            <SearchInput placeholder="검색" />
          </span>
        </SearchBox>
        <TopNav>
          <TopNavA>
            <Link to="/home">
              <InstaImage src={instaHome} />
            </Link>
            <Link to="/payment">
              <InstaImage src={instaDM} />
            </Link>
            <Link to="/payment">
              <InstaImage src={instaAdd} />
            </Link>
            <Link to="/payment">
              <InstaImage src={instaPoisition} />
            </Link>
            <Link to="/payment">
              <InstaImage src={instaLike} />
            </Link>
            <Link to="/payment">
              <InstaImage src={instaProfile} />
            </Link>
          </TopNavA>
          {/* {"asd" === undefined ? (
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
          )} */}
        </TopNav>
      </Main>
    </MainBox>
  );
}

export default Top;
