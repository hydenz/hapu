import styled from 'styled-components';
import Divider from '../Divider';
import Link from '../Link';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #3d3d3d;
  padding: 4rem 1.6rem 2.4rem;

  @media only screen and (min-width: 864px) {
    padding: 8rem 12.8rem 3.2rem;
  }
`;

export const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 400;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin-top: 7.2rem;
  align-items: center;
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-inline: 5.6rem;
  column-gap: 3.2rem;
  row-gap: 1.7rem;
  margin-block: 3.2rem 2.4rem;

  @media only screen and (min-width: 1200px) {
    margin-block: 0;
  }
`;

export const SocialMediaContainer = styled.span`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  & a:not(:first-child) {
    margin-left: 1.6rem;
  }
`;

export const FooterDivider = styled(Divider)`
  margin: 4rem 0 2.4rem;
  @media only screen and (min-width: 762px) {
    display: none;
  }
`;
