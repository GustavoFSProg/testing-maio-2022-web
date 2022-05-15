import React from 'react'
import { useState } from 'react'
import { Container, Input, Button, Form, Span } from './style'
import api from '../../api'

import { Link } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function cadastro(e) {
    e.preventDefault()

    try {
      const data = { name, email, password }

      await api.post('/register', data)

      alert('Cadastro efetuado com sucesso!!')

      // return data
    } catch (error) {
      return alert('ERRO!!!')
    }
  }
  return (
    <Container>
      <Link to="/">Home</Link>
      <br />
      <br />
      <Form onSubmit={cadastro}>
        <Span>Nome:</Span>
        <Input name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <br />
        <Span>Email:</Span>
        <Input
          name="email"
          id="email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <Span>Password:</Span>
        <Input
          name="password"
          value={password}
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  )
}

export default Register
