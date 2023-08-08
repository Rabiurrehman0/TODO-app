import  { useState } from 'react';
import Swal from 'sweetalert2';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
  

    if (password.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Please enter a password with at least 8 characters',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
    } else {
  
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'You have successfully logged in!',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
      
      });
    }
  };

  return (
    <Container fluid style={loginContainerStyle}>
      <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Col md={6}>
          <h2 className="text-center">Welcome to 2HR.</h2>
          <h4 className="text-center">Login</h4>
          <h5 className="text-center">Enter your credentials below to securely log in to your account.</h5>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="dark" onClick={login}>
              Login
            </Button>
          </Form>
        </Col>
        <Col md={6} className="text-center">
          <img
            src="public/Images/undraw_Login_re_4vu2.png"
            alt="login Image"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

const loginContainerStyle = {
  backgroundColor: '#d2b48c', 

};


export default LoginPage;

