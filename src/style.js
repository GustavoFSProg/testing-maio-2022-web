import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export const UlContainer = styled.ul`
  display: flex;
  background: lightcyan;
  list-style: none;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const ContainerInside = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`
