import "./Header.scss";
import LOGO from "assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";

const Header = () => {
  const [recentSearch, setRecentSearch] = useState<boolean>(false);
  const handleSearchFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setRecentSearch(true);
  };
  const handleSearchHiddle = () => {
    setRecentSearch(false);
  };
  useEffect(() => {
    setRecentSearch(false);
  }, [setRecentSearch]);

  const activeStyle: React.CSSProperties = {
    fontWeight: "bold",
    color: "#30c1c3",
  };

  return (
    <header className="Header">
      <div className="Header-container">
        <div className="Header-container-top">
          <div className="Header-container-top-links">
            <Link to="">로그인</Link>
            <Link to="">회원가입</Link>
            <Link to="">마이페이지</Link>
            <Link to="">장바구니</Link>
          </div>
        </div>
        <div className="Header-container-search">
          <h1 className="Header-container-search-h1_logo">
            <img src={LOGO} alt="" />
          </h1>
          <div className="Header-container-search-rightSearch">
            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              onFocus={(event) => handleSearchFocus(event)}
            />
            <BsSearch />
            {recentSearch && (
              <div className="Header-container-search-rightSearch-recent">
                <h1>최근검색어</h1>
                {true && <span>최근 검색어가 없습니다.</span>}
                {/* <ul>
                    <li></li>
                </ul> */}
                <div>
                  <button>전체 삭제</button>
                  <button onClick={handleSearchHiddle}>닫기</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="Header-container-gnb">
          <ul>
            <li>
              <NavLink to="/" activeStyle={activeStyle}>
                전체
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeStyle={activeStyle}>
                문구
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeStyle={activeStyle}>
                책
              </NavLink>
            </li>
            <li>
              <NavLink to="/" activeStyle={activeStyle}>
                ㅋㅋ에디션
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
