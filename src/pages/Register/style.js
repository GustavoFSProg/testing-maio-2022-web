import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    margin: 0px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto 300';
  font-size: 1.1rem;

  align-items: center;

  justify-content: center;
  width: 35%;
  color: #009900;

  @media screen and (max-width: 800px) {
    width: 85%;
    font-size: 1rem;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  background: #e6ffe6;
  border: 1px solid #b3ffb3;
  border-radius: 3rem;
  margin-top: 8px;
  padding-left: 17px;
  font-size: 1.1rem;
  color: #008000;

  @media screen and (max-width: 800px) {
    font-size: 0.9rem;
  }
`

export const Button = styled.button`
  width: 105%;

  height: auto;
  background: #99ff99;
  margin-top: 8px;
  border: 1px solid lightcyan;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: ease 0.5s;
  color: darkgreen;
  font-size: 1.1rem;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 10px;
  padding-right: 2px;

  &:hover {
    background: #00e600;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`
export const Span = styled.span`
  margin-left: 15px;
  margin-bottom: 2px;
  font-family: 'Arial';
`
