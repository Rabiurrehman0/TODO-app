import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const footerStyle = {
  backgroundColor: '#333',
  padding: '40px 0',
  color: '#f5f5f5',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const contentStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '30px',
};

const sectionStyle = {
  marginBottom: '30px',
};

const headingStyle = {
  fontSize: '20px',
  marginBottom: '10px',
  color: '#f5f5f5',
};

const textStyle = {
  lineHeight: '1.5',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

const listItemStyle = {
  marginBottom: '10px',
};

const linkStyle = {
  color: '#f5f5f5',
  textDecoration: 'none',
};

const iconStyle = {
  marginRight: '5px',
};

const socialIconStyle = {
  fontSize: '24px',
  marginRight: '10px',
  color: '#f5f5f5',
};

const bottomStyle = {
  marginTop: '30px',
  textAlign: 'center',
  borderTop: '1px solid #ccc',
  paddingTop: '20px',
  color: '#999',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>Links</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><a href="#" style={linkStyle}>Home</a></li>
              <li style={listItemStyle}><a href="#" style={linkStyle}>About</a></li>
              <li style={listItemStyle}><a href="#" style={linkStyle}>Products</a></li>
              <li style={listItemStyle}><a href="#" style={linkStyle}>Sign Up</a></li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>Categories</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><a href="#" style={linkStyle}>Electronics</a></li>
              <li style={listItemStyle}><a href="#" style={linkStyle}>Clothing</a></li>
              <li style={listItemStyle}><a href="#" style={linkStyle}></a>WOMENS-JEWELLERY
</li>
              <li style={listItemStyle}><a href="#" style={linkStyle}>Beauty  Health</a></li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>About Us</h3>
            <p style={textStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo lectus eu metus aliquam, vel tempus mauris varius. Sed interdum odio eget dolor tempus, ac cursus felis faucibus.
            </p>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>Contact Us</h3>
            <p style={textStyle}>
              <FaEnvelope style={iconStyle} />
              Email: info@example.com
            </p>
            <p style={textStyle}>
              <FaPhone style={iconStyle} />
              Phone: 123-456-7890
              <div>
              <a href="#" style={socialIconStyle}><FaInstagram /></a>
              <a href="#" style={socialIconStyle}><FaFacebook /></a>
              <a href="#" style={socialIconStyle}><FaTwitter /></a>
              </div>
            </p>
          </div>
        </div>
        <div style={bottomStyle}>
          <p>&copy; 2023 MyStore. All rights reserved.</p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
