
import Swal from 'sweetalert2';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function SignupPage() {
  const signUp = () => {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'You have successfully signed up!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    })
    // .then((result) => {
   
    // });
  };

  return (
    <Container fluid style={loginContainerStyle}>
      <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Col md={6}>
          <h2 className="text-center">Welcome to 2HR.</h2>
          <h4 className="text-center">Sign Up</h4>
          <h5 className="text-center">Get ready to shop till you drop! Sign up now and access a wide selection of products just for you.</h5>

          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Col>
              <Col>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGridConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="dark" onClick={signUp}>
              Sign Up
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <img
            src="public/Images/WhatsApp Image 2023-06-26 at 08.34.26.jpg"
            alt="signup Image"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

const loginContainerStyle = {
  backgroundColor: '#faf2e8',
};

export default SignupPage;

