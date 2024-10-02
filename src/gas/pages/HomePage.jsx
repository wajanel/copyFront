import React from 'react';
import { NavBarComp } from '../components/NavBarComp';
import { Card, Title, Text, Flex  } from '@tremor/react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { useAuthStore } from '../../hooks';
import { NavLink } from 'react-router-dom';

export const HomePage = () => {

  const { user } = useAuthStore();
  return (
    <>
      <NavBarComp />
      <Container fluid className="my-4">
      <Carousel className="my-3">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/img1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Sucursal 1</h3>
                            <p>Ciudad Guatemala, Guatemala</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/img2.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Sucursal 2</h3>
                            <p>Villa Nueva, Guatemala</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/img3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Sucursal 3</h3>
                            <p>Escuintla, Escuintla</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        {(user.role === 'usuario' || user.role === 'admin') && (
        <>
        <Row className="justify-content-center">
          <Col md={10}>
            <Card>
              <Flex justifyContent="center">
                <Title>Bienvenido a la Plataforma de Gestión</Title>
              </Flex>
              <Flex justifyContent="center" className="my-3">
                <Text>
                  Este es el punto central para administrar y supervisar todas las operaciones. Desde aquí, puedes navegar a las distintas secciones usando el menú de arriba.
                </Text>
              </Flex>
              <Row className="text-center">
                <Col md={4} className="my-3">
                  <NavLink to="/income" className="text-decoration-none">
                    <Button variant="primary">
                      Gestión de Ingresos
                    </Button>
                  </NavLink>
                </Col>
                <Col md={4} className="my-3">
                  <NavLink to="/provider" className="text-decoration-none">
                    <Button variant="secondary">
                      Gestión de Proveedores
                    </Button>
                  </NavLink>
                </Col>
                <Col md={4} className="my-3">
                  <NavLink to="/salefuel" className="text-decoration-none">
                    <Button variant="success">
                      Ventas de Combustible
                    </Button>
                  </NavLink>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        </>)}
        {(user.role === 'admin') && (
        <>
        <Row className="justify-content-center mt-4">
          <Col md={5}>
            <Card>
              <Title>Reportes y Gráficas</Title>
              <Text>
                Visualiza y analiza los datos clave de las operaciones.
              </Text>
              <NavLink to='/graficas' className="text-decoration-none">
              <Button variant="info" className="mt-3">
                Ver Gráficas
              </Button>
              </NavLink>
            </Card>
          </Col>
          <Col md={5} className="mt-4 mt-md-0">
            <Card>
              <Title>Configuración del Sistema</Title>
              <Text>
                Administra las configuraciones y usuarios del sistema.
              </Text>
              <NavLink to='/user' className="text-decoration-none">
              <Button variant="warning" className="mt-3">
                Configuración de Usuario
              </Button>
              </NavLink>
            </Card>
          </Col>
        </Row>
        </>
      )}
      </Container>
    </>
  );
};
