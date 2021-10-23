import styled from 'styled-components';

const challengeLink = 'https://github.com/JungleDevs/react-challenge-001FT';

const Link = styled.a.attrs(({ href }) => ({
  href: href || challengeLink,
}))`
  color: ${({ color }) => color || 'inherit'};
  text-decoration: ${({ decoration }) => (decoration ? 'underline' : 'none')};
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: 500;
  display: inline-block;
`;

export default Link;
