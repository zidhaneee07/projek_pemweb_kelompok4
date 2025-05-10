import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Footer from '../components/Footer';

function Home() {
  // State untuk galeri perhiasan
  const [galleryItems] = useState([
    {
      title: 'Cincin Berlian',
      image: '/images/a13.jpeg',
    },
    {
      title: 'Kalung Emas',
      image: '/images/a14.jpeg',
    },
    {
      title: 'Gelang Mewah',
      image: '/images/a15.jpeg',
    },
  ]);

  return (
    <div>
      {/* Hero Section */}
      <div style={{ backgroundColor: '#fdf6f0', padding: '60px 0', textAlign: 'center' }}>
        <Container>
          <h1 style={{ color: '#b2967d' }}>Selamat Datang di Aurora Jewelry</h1>
          <p className="lead">Temukan koleksi perhiasan terbaik kami yang elegan dan menawan.</p>
          <Button variant="outline-dark" href="/products">Lihat Koleksi</Button>
        </Container>
      </div>

      {/* Tentang Kami */}
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h2 style={{ color: '#b2967d' }}>Tentang Kami</h2>
            <p style={{ textAlign: 'justify' }}>
              Aurora Jewelry adalah toko perhiasan terpercaya yang menawarkan cincin, gelang, kalung, dan perhiasan custom
              dengan kualitas terbaik. Kami mengutamakan keindahan, keaslian, dan pelayanan pelanggan yang ramah.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Aurora Jewelry adalah destinasi utama bagi pecinta perhiasan yang menghargai keindahan, keaslian, dan kualitas tinggi. Kami menawarkan koleksi eksklusif cincin, gelang, kalung, dan perhiasan custom yang dirancang dengan detail dan keahlian terbaik. Setiap perhiasan kami mencerminkan keanggunan dan keunikan, menjadikan momen istimewa Anda semakin berkesan.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Dengan komitmen terhadap keaslian dan kualitas, Aurora Jewelry memastikan setiap produk memiliki sertifikasi resmi dan standar tinggi. Tim kami yang profesional dan ramah siap membantu Anda menemukan perhiasan yang sempurna sesuai keinginan dan kebutuhan. Kami percaya bahwa setiap perhiasan memiliki cerita; biarkan Aurora Jewelry menjadi bagian dari kisah indah Anda.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="/images/a16.jpeg"
              alt="Jewelry"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>

      {/* Galeri */}
      <Container className="my-5">
        <h2 className="text-center mb-4" style={{ color: '#b2967d' }}>Galeri Perhiasan</h2>
        <Row>
          {galleryItems.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="mb-3">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Video Promosi */}
      <Container className="my-5">
        <h2 className="text-center mb-4" style={{ color: '#b2967d' }}>Video Promosi</h2>
        <div className="text-center">
          <video width="80%" height="400" controls>
            <source src="/videos/promo.mp4" type="video/mp4" />
            Browser Anda tidak mendukung video.
          </video>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
