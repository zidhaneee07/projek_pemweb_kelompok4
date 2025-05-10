import React from 'react';
import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';
import Footer from '../components/Footer';

function Dashboard() {
  const stats = [
    { title: 'Total Penjualan', value: 'Rp 125.000.000', variant: 'success' },
    { title: 'Pesanan Baru', value: '24', variant: 'primary' },
    { title: 'Stok Rendah', value: '5 Produk', variant: 'warning' },
    { title: 'Pengunjung Hari Ini', value: '1.250', variant: 'info' },
  ];

  const recentOrders = [
    { id: 'ORD001', customer: 'Ayu', product: 'Kalung Berlian', status: 'Selesai' },
    { id: 'ORD002', customer: 'Rina', product: 'Cincin Emas', status: 'Menunggu' },
    { id: 'ORD003', customer: 'Dewi', product: 'Anting Berlian', status: 'Dikirim' },
  ];

  return (
    <>
      <Container className="my-5">
        <h2 className="text-center mb-4">Dashboard Toko</h2>

        <Row className="mb-4">
          {stats.map((stat, index) => (
            <Col key={index} md={6} lg={3} className="mb-3">
              <Card className={`text-white bg-${stat.variant} shadow-sm`}>
                <Card.Body>
                  <Card.Title className="fs-6">{stat.title}</Card.Title>
                  <h4 className="fw-bold">{stat.value}</h4>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Card className="shadow-sm">
          <Card.Header><strong>Pesanan Terbaru</strong></Card.Header>
          <Card.Body>
            <Table responsive hover>
              <thead>
                <tr>
                  <th>ID Pesanan</th>
                  <th>Pelanggan</th>
                  <th>Produk</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.product}</td>
                    <td>
                      <Badge bg={
                        order.status === 'Selesai' ? 'success' :
                        order.status === 'Dikirim' ? 'info' :
                        'secondary'
                      }>
                        {order.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard;
