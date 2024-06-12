import { useContext } from 'react';
import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthContext';

export function Register() {
  const { registerInfo, updateResInfo, registerUser, registerError, isrRegisterLoading } = useContext(AuthContext);
  return (
    <Form onSubmit={registerUser}>
      <Row style={{
        height: "100vh",
        justifyContent: "center",
        paddingTop: "20%"
      }}>
        <Col xs={6}>
          <Stack gap={3}>
            <h2>Register</h2>
            <Form.Control type="text" placeholder="Name" onChange={(e) => updateResInfo({ ...registerInfo, name: e.target.value })} />
            <Form.Control type="email" placeholder="Email" onChange={(e) => updateResInfo({ ...registerInfo, email: e.target.value })} />
            <Form.Control type="password" placeholder="Password" onChange={(e) => updateResInfo({ ...registerInfo, password: e.target.value })} />
            <Button variant='primary' type='submit'>
              {isrRegisterLoading ? "Creating your account" : "Register"}
            </Button>
            {
              registerError?.error &&
              <Alert variant='danger'><p>{registerError?.message}</p></Alert>
            }
          </Stack>
        </Col>
      </Row>
    </Form>
  );
}