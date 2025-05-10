import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Container className="my-5">
        <h2 className="text-center mb-4">Hubungi Kami</h2>
        <Row>
          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <h4>Kirim Pesan</h4>
              <Form>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="text" placeholder="Masukkan nama Anda" />
                </Form.Group>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Masukkan email Anda" />
                </Form.Group>

                <Form.Group controlId="message" className="mb-3">
                  <Form.Label>Pesan</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Tulis pesan Anda di sini..." />
                </Form.Group>

                <Button variant="dark" type="submit">Kirim</Button>
              </Form>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <h4>Informasi Toko</h4>
              <p><strong>Alamat:</strong> Jl. Berlian Indah No. 88, Jakarta</p>
              <p><strong>Email:</strong> kontak@tokoperhiasan.id</p>
              <p><strong>Telepon:</strong> (021) 1234 5678</p>
              <p><strong>Jam Operasional:</strong> Senin - Sabtu, 09.00 - 18.00</p>

              <div className="mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.467737772237!2d108.52867907524251!3d-6.712630893283141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee2197888043d%3A0x6e3589ac1bc43faf!2sStikom%20-%20Poltek%20Cirebon!5e0!3m2!1sid!2sid!4v1746845380671!5m2!1sid!2sid"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
