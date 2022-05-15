import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from './api'
import { Container, ContainerInside, UlContainer } from './style'

function App() {
  const [users, setUsers] = useState([])

  async function getUsers() {
    const { data } = await api.get('/')

    setUsers(data)
    return users
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Container>
      <br />
      <br />
      <Link to="/reg">Cadastro</Link>
      <h1>Lista de Usuarios</h1>
      <ContainerInside>
        {users.map((user) => {
          return (
            <UlContainer key={user.id}>
              <li>{user.name}</li>
              <br />
              <li>{user.email}</li>
            </UlContainer>
          )
        })}
      </ContainerInside>
    </Container>
  )
}

export default App
