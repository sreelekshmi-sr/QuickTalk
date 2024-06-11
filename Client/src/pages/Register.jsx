import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';

export function Register() {
  return (
    <Form>
      <Row style={{
        height: "100vh",
        justifyContent: "center",
        paddingTop: "20%"
      }}>
        <Col xs={6}>
          <Stack gap={3}>
            <h2>Register</h2>
            <Form.Control type="text" placeholder="Name" />
            <Form.Control type="email" placeholder="Email"  />
            <Form.Control type="password" placeholder="Password"  />
            <Button variant='primary' type='submit'>
              Register
            </Button>

            <Alert variant='danger'><p>Error occured</p></Alert>
          </Stack>
        </Col>
      </Row>
    </Form>
  );
}