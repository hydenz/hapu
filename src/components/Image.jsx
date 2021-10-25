import styled from 'styled-components';

const Image = styled.img.attrs({ loading: 'lazy' })`
  width: ${({ mobileWidth }) => mobileWidth};
  display: ${({ xlVisible }) => xlVisible && 'none'};
  max-width: ${({ maxWidth }) => maxWidth};
  @media only screen and (min-width: 1200px) {
    display: ${({ xlVisible }) => xlVisible && 'inline-block'};
    width: ${({ xlWidth }) => xlWidth};
  }
`;

export default Image;
