import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
    <Container className="py-5">
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <Image
            src="/images/a17.jpeg"
            alt="Toko Perhiasan"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <h1>Tentang Kami</h1>
          <p style={{ textAlign: 'justify' }}>
            Kami adalah toko perhiasan yang berdedikasi dalam menyediakan perhiasan berkualitas tinggi dengan desain elegan dan modern. 
            Berdiri sejak 2010, kami telah menjadi pilihan utama pelanggan untuk cincin pertunangan, kalung, gelang, dan banyak lagi.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Dengan koleksi eksklusif dan layanan pelanggan yang ramah, kami siap membantu Anda menemukan perhiasan yang sempurna untuk setiap momen istimewa.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Kenapa Memilih Kami?</h3>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Kualitas Premium</Card.Title>
              <Card.Text style={{ textAlign: 'justify' }}>
                Setiap produk dibuat dengan bahan terbaik dan melalui proses seleksi ketat untuk menjamin kualitas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Desain Elegan</Card.Title>
              <Card.Text style={{ textAlign: 'justify' }}>
                Koleksi kami selalu mengikuti tren terbaru, namun tetap mempertahankan sentuhan klasik.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Layanan Profesional</Card.Title>
              <Card.Text style={{ textAlign: 'justify' }}>
                Tim kami selalu siap membantu Anda menemukan perhiasan yang sesuai dengan kebutuhan dan selera Anda.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer />
    
    </div>
  );
   
}

export default About;
