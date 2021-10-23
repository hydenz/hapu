import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
  max-width: 75ch;

  @media only screen and (min-width: 1400px) {
    max-width: ${({ xxlMaxWidth }) => xxlMaxWidth};
    font-size: ${({ xxlFontSize }) => xxlFontSize};
  }
`;

export default Paragraph;
