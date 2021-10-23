import styled from 'styled-components';

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 3.2rem;

  @media only screen and (min-width: 1400px) {
    font-size: ${({ xxlFontSize }) => xxlFontSize};
  }
`;

export default Heading;
