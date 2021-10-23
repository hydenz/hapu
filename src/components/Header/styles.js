import styled from 'styled-components';
import HeaderBgMobile from '../../assets/HeaderBgMobile.png';
import HeaderBgDesktop from '../../assets/HeaderBgDesktop.png';
import Link from '../Link';

export const Container = styled.header`
  background-image: url(${HeaderBgMobile}),
    linear-gradient(314.72deg, #c86dd7 -1.5%, #7e49c3 39.43%, #5912ac 86.02%);
  min-height: 540px;
  color: #fff;
  background-position: center;

  @media only screen and (min-width: 361px) {
    background-size: cover;
  }

  @media only screen and (min-width: 680px) {
    background-image: url(${HeaderBgDesktop}),
      linear-gradient(314.72deg, #c86dd7 -1.5%, #7e49c3 39.43%, #5912ac 86.02%);
    min-height: 616px;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  padding-inline: 1.6rem;

  @media only screen and (min-width: 864px) {
    padding-inline: 2rem;
  }
`;

export const TopInner = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  justify-content: flex-end;
  width: 100%;
  font-size: 1.4rem;

  @media only screen and (min-width: 864px) {
    justify-content: space-between;
  }
`;

export const Nav = styled.nav`
  margin-left: 0.8rem;
  display: none;

  @media only screen and (min-width: 864px) {
    display: flex;
  }
`;

export const NavLink = styled(Link)`
  margin-left: 3.2rem;
`;

export const SignInLink = styled(Link)`
  margin-inline: 2.3rem 1.2rem;
  display: none;

  @media only screen and (min-width: 864px) {
    display: inline;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 1.6rem;
  margin-top: 8.8rem;
  text-align: center;

  @media only screen and (min-width: 400px) {
    padding-inline: calc(2rem + 0.4vw);
  }

  @media only screen and (min-width: 1200px) {
    padding-inline: 0;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: left;
    margin-top: 10.6rem;
  }
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: calc(2.4rem + 1.1vw);
  line-height: 3.2rem;
  max-width: 15ch;

  @media only screen and (min-width: 410px) {
    max-width: 20ch;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
  margin-top: 1.6rem;

  @media only screen and (min-width: 500px) {
    max-width: 50ch;
  }
  @media only screen and (min-width: 864px) {
    max-width: 53ch;
  }
`;

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 1200px) {
    align-items: flex-start;
  }
`;

export const ContentVideo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6.6rem;

  @media only screen and (min-width: 768px) {
    margin-top: 4rem;
  }
`;

export const VideoButtonContainer = styled.a`
  background: #00a870;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 1.6rem;

  & svg {
    margin-left: 0.4rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
  padding-block: 3.2rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.6rem;

  @media screen and (min-width: 864px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const DividerLink = styled(Link)`
  margin: 1.6rem 0 1.2rem 0;
  max-width: 20ch;
  @media only screen and (min-width: 456px) {
    max-width: initial;
  }

  @media only screen and (min-width: 864px) {
    margin: 0 0.2rem 0 3.2rem;
  }
`;

export const DividerText = styled.p`
  font-size: 1.4rem;
`;
