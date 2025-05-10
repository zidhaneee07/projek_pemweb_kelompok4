import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import Footer from '../components/Footer';

const products = [
  { id: 1, name: 'Cincin Berlian Elegan', price: 'Rp 12.500.000', image: '/images/a1.jpeg' },
  { id: 2, name: 'Cincin Emas Mewah', price: 'Rp 9.800.000', image: '/images/a2.jpeg' },
  { id: 3, name: 'Kalung Berlian Premium', price: 'Rp 15.000.000', image: '/images/a3.jpeg' },
  { id: 4, name: 'Kalung Emas Putih', price: 'Rp 11.500.000', image: '/images/a4.jpeg' },
  { id: 5, name: 'Gelang Berlian Eksklusif', price: 'Rp 10.000.000', image: '/images/a5.jpeg' },
  { id: 6, name: 'Gelang Emas Klasik', price: 'Rp 7.200.000', image: '/images/a6.jpeg' },
  { id: 7, name: 'Anting Berlian Modern', price: 'Rp 6.750.000', image: '/images/a7.jpeg' },
  { id: 8, name: 'Anting Emas Unik', price: 'Rp 5.600.000', image: '/images/a8.jpeg' },
  { id: 9, name: 'Set Perhiasan Lengkap', price: 'Rp 25.000.000', image: '/images/a9.jpeg' },
  { id: 10, name: 'Cincin Tunangan', price: 'Rp 13.300.000', image: '/images/a10.jpeg' },
  { id: 11, name: 'Kalung Berlian Rose Gold', price: 'Rp 10.900.000', image: '/images/a11.jpeg' },
  { id: 12, name: 'Gelang Berlian Elegan', price: 'Rp 8.800.000', image: '/images/a12.jpeg' },
];

function Products() {
  return (
    <>
      <Container className="my-5">
        <h2 className="text-center mb-4">Koleksi Perhiasan</h2>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={product.image} alt={product.name} height="200" style={{ objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-muted">{product.price}</Card.Text>
                  <Button variant="dark" className="w-100">Lihat Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Products;
