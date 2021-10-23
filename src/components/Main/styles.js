import styled from 'styled-components';

export const Container = styled.main`
  background: #f2f2f2;
  padding-inline: 4.45vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 576px) {
    padding-inline: 0rem;
  }
`;

export const Section = styled.section`
  padding-block: 6.4rem;
  color: #3d3d3d;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 576px) {
    padding: 6.4rem 3.4rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 6.4rem 4.2rem;
  }

  @media only screen and (min-width: 992px) {
    flex-direction: ${({ lgFlexDirection }) => lgFlexDirection};
    text-align: ${({ lgTextAlign }) => lgTextAlign};
    align-items: ${({ lgAlignItems }) => lgAlignItems};
    padding: 6.4rem 8rem;
  }

  @media only screen and (min-width: 1200px) {
    padding: ${({ xlPadding }) => xlPadding};
  }

  @media only screen and (min-width: 1400px) {
    padding: ${({ xxlPadding }) => xxlPadding};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 472px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  background: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 1.4rem 2rem;
  width: 100%;
  font-family: inherit;

  &:not(:first-of-type) {
    margin: 1rem 0 1.8rem;
  }

  @media only screen and (min-width: 472px) {
    max-width: 232px;
    &:not(:first-of-type) {
      margin: 0 1.2rem;
    }
  }
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  border-radius: 4px;
  background: #00a870;
  color: #fff;
  padding-block: 1.4rem;
  border: none;
  width: 100%;
  font-weight: 500;
  font-family: inherit;
  height: 46px;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: grey;
  }

  @media only screen and (min-width: 472px) {
    max-width: 96px;
  }
`;
