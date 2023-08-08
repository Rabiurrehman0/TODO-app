import React from 'react';

const AboutUs = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>About 2HR.</h2>
        <p style={paragraphStyle}>
          Welcome to our online store! We are passionate about providing you with the best shopping experience, offering a wide range of high-quality products at affordable prices.
        </p>
        <p style={paragraphStyle}>
          Our mission is to make online shopping convenient, enjoyable, and secure for our customers. We carefully curate our product selection to ensure we only offer items that meet our strict quality standards. From trendy fashion accessories to innovative gadgets, we've got you covered.
        </p>
        <p style={paragraphStyle}>
          We take pride in our excellent customer service. Our dedicated support team is here to assist you every step of the way, from helping you find the perfect product to resolving any issues or concerns you may have. Your satisfaction is our top priority.
        </p>
        <p style={paragraphStyle}>
          Thank you for choosing 2HR. We look forward to serving you and providing you with an exceptional shopping experience.
        </p>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '40px 0',
  backgroundColor: '#121010',
  color: 'white',
};

const containerStyle = {
  maxWidth: '960px',
  margin: '0 auto',
  padding: '0 20px',
};

const headingStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const paragraphStyle = {
  fontSize: '16px',
  marginBottom: '10px',
};

export default AboutUs;
