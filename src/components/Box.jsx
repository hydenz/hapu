import styled from 'styled-components';

const Box = styled.div`
  margin: ${({ margin }) => margin};

  @media only screen and (min-width: 768px) {
    margin: ${({ mdMargin }) => mdMargin};
  }

  @media only screen and (min-width: 992px) {
    margin: ${({ lgMargin }) => lgMargin};
  }
`;

export default Box;
