import React from 'react';
import styled from '@emotion/styled';
import Logo from 'assets/images/logo.png';
import {useDispatch} from 'react-redux';
import {clearUserPlaylist} from 'redux/modules/userPlaylist/actions';

const HeaderDiv = styled.div`
  background-color: #262727;
  padding: 16px 40px;
  height: 80px;
`;

const HeaderLogoImg = styled.img`
  height: 40px;
`;

const HeaderLogoText = styled.p`
  font-size: 24px;
  color: #fff;
  margin: 0;
  font-weight: 600;
`;

const HeaderButton = styled.button`
  background: #4cea92;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
`;

const Header = () => {
  const dispatch = useDispatch();
  return (
    <HeaderDiv className="header d-flex flex-justify-between flex-items-center">
      <div className="d-flex flex-items-center">
        <HeaderLogoImg src={Logo} alt="" className="d-inline-block" />
        <HeaderLogoText className="d-inline-block">Spotify</HeaderLogoText>
      </div>
      <HeaderButton onClick={() => dispatch(clearUserPlaylist())}>
        Clear my playlists
      </HeaderButton>
    </HeaderDiv>
  );
};
export default Header;
