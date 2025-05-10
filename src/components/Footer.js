import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f3ef', padding: '40px 0', marginTop: '50px' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5 style={{ color: '#b2967d' }}>Aurora Jewelry</h5>
            <p>Toko perhiasan terpercaya sejak 2001. Menyediakan perhiasan berkualitas tinggi dengan pelayanan terbaik.</p>
          </Col>
          <Col md={4}>
            <h5 style={{ color: '#b2967d' }}>Navigasi</h5>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li><a href="/" style={{ color: '#333', textDecoration: 'none' }}>Beranda</a></li>
              <li><a href="/about" style={{ color: '#333', textDecoration: 'none' }}>Tentang</a></li>
              <li><a href="/products" style={{ color: '#333', textDecoration: 'none' }}>Koleksi</a></li>
              <li><a href="/contact" style={{ color: '#333', textDecoration: 'none' }}>Kontak</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={{ color: '#b2967d' }}>Kontak</h5>
            <p>Email: info@aurorajewelry.com</p>
            <p>Telepon: +62 812-3456-7890</p>
            <p>Instagram: @aurorajewelry</p>
          </Col>
        </Row>
        <hr />
        <p className="text-center text-muted">© {new Date().getFullYear()} Aurora Jewelry. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
