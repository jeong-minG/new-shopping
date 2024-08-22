import React from 'react'
import { Container,Button,Form } from 'react-bootstrap'; 
import { useNavigate } from 'react-router';

const Login = ({setAuthenticate} ) => {
  const navigate = useNavigate();
  const loginUser = (event) =>{
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  }
  return (
    <Container>  
    <Form onSubmit={(event)=>loginUser(event)}>
      {/* form이 매번 리프레시하는걸 막야함 */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit" onSubmit={loginUser}>
        {/* 타입이 submit면 onsubmit 써야함 */}
        Login
      </Button>
    </Form>
    </Container>
  )
}

export default Login 