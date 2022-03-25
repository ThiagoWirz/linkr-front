import styled from "styled-components";

const TopBar = styled.div`
  width: 100%;
  height: 72px;
  background: #151515;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  @media (max-width: 635px) {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 10px;
  left: 28px;
  font-family: "Passion One";
  font-weight: 700;
  font-size: 49px;
  line-height: 54px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    color: #1877f2;
  }

  @media (max-width: 635px) {
    position: fixed;
    top: 13px;
    left: 17px;
    font-size: 45px;
    line-height: 50px;
  }
`;

const Photo = styled.img`
  cursor: pointer;
  position: fixed;
  top: 10px;
  right: 17px;
  width: 53px;
  height: 53px;
  border-radius: 26.5px;
  @media (max-width: 635px) {
    position: fixed;
    top: 12px;
    right: 14px;
    width: 44px;
    height: 44px;
  }
`;

const Arrow = styled.div`
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 85px;

  @media (max-width: 635px) {
    position: fixed;
    top: 20px;
    right: 70px;
  }
`;

const LogoutButton = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 133px;
  height: 47px;
  padding-top: 9px;
  background: #171717;
  border-radius: 0px 0px 0px 20px;
  font-family: "Lato";
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  position: fixed;
  top: 72px;
  right: 0px;
  @media (max-width: 635px) {
    height: 43px;
    padding-top: 10px;
    font-size: 15px;
  }
`;

const SearchContainer = styled.div`
  position: fixed;
  left: calc((100vw - 350px) / 2);
  top: 16px;

  width: 350px;
  height: 45px;

  font-family: "Lato";
  font-size: 19px;
  line-height: 22.8px;

  @media (max-width: 635px) {
    //position: aboslute;
    top: 72px;
    left: 0;

    width: 100vw;
    height: 65px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #333333;

    border: none;
    outline: none;
    //width: calc((100vw - 20px));
  }
`;

const SearchInput = styled.input`
  background-color: #ffffff;

  width: 350px;
  height: 45px;

  //border-radius: 8px;
  padding-left: 17px;
  z-index: 3;

  &::placeholder {
    font-size: 19px;
    line-height: 22.8px;
    color: #c6c6c6;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 635px) {
    width: calc((100vw - 30px));
  }
`;

const SearchIcon = styled.div`
  color: #c6c6c6;
  position: absolute;
  top: 11px;
  right: 15px;

  &:hover {
    cursor: pointer;
    color: #1877f2;
  }

  @media (max-width: 635px) {
    top: 22px;
    right: 30px;
    z-index: 4;
  }
`;

const FoundUsers = styled.div`
  width: 350px;
  background-color: #e7e7e7;
  //border-radius: 8px;
  position: absolute;
  top: 45px;
  right: 0;
  z-index: 1;
  display: ${(props) => (props.isSearching ? "inherit" : "none")};

  @media (max-width: 635px) {
    width: calc((100vw - 30px));
    right: 15px;
    top: 55px;

    flex-direction: column;
  }
`;

const SingleUser = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  color: #515151;

  p {
    font-size: 19px;
    font-family: "Lato";
    margin-left: 30px;
    word-break: break-word;

    cursor: pointer;
  }

  span {
    color: #c5c5c5;
    font-size: 19px;
    font-family: "Lato";
  }
`;

const SingleUserAvatar = styled.div`
  width: 39px;
  height: 39px;
  margin-bottom: 5px;
  margin-left: 10px;

  cursor: pointer;

  img {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    top: calc((45px - 39px) / 2);
    left: 17px;
  }
`;

export {
  TopBar,
  Logo,
  Photo,
  Arrow,
  LogoutButton,
  SearchContainer,
  SearchInput,
  SearchIcon,
  FoundUsers,
  SingleUser,
  SingleUserAvatar,
};
