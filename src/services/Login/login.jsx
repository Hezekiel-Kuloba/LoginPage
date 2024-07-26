import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Stack from "react-bootstrap/Stack";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import customTheme from "../../components/theme";
import "./login.css";

export const Login = () => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container fluid
          style={{ height: "500px", textAlign: "center" }}
        >
          <Row>
            <Col lg={6}>
              <form>
                <Stack gap={1}>
                  <div className="pt-3"></div>
                  <div className="pt-5"></div>
                  <div>
                    <Typography variant="h3">
                      Welcome to blogCommerce
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h3">Login To See All Blogs</Typography>
                  </div>
                  <div>
                    <Typography variant="h4" className="pt-5">
                      Don't you have an account
                      <span>
                        <Button
                          sx={{
                            borderRadius: "16px",
                            marginBottom: "5px",
                            textDecoration: "underline",
                          }}
                          color="black"
                        >
                          <Typography
                            variant="h4"
                            style={{ textDecoration: "underline" }}
                          >
                            Create an account
                          </Typography>
                        </Button>
                      </span>
                    </Typography>
                  </div>

                  <div className="pt-3 d-flex justify-content-center">
                    <Col lg={8}>
                      <TextField
                        style={{ marginBottom: 20 }}
                        className="auth_text_field"
                        type="email"
                        label="Email"
                        color="black"
                        fullWidth
                      />
                    </Col>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Col lg={8}>
                      <TextField
                        style={{ marginBottom: 20 }}
                        className="auth_text_field"
                        type="password"
                        label="Password"
                        color="black"
                        fullWidth
                      />
                    </Col>
                  </div>

                  <div className="pt-1 d-flex justify-content-center">
                    <Col lg={8}>
                      <Button
                        className="authButton"
                        type="submit"
                        variant="contained"
                        color="black"
                        sx={{ borderRadius: "16px", width: "100%", height: 45 }}
                      >
                        <Typography variant="h5">Login</Typography>
                      </Button>
                    </Col>
                  </div>
                  <div className="d-flex justify-content-end pt-3">
                    <Col lg={8}>
                      <Button
                        sx={{
                          borderRadius: "16px",
                          marginBottom: "5px",
                          textDecoration: "underline",
                        }}
                        color="black"
                      >
                          <Typography
                            variant="h4"
                            style={{ textDecoration: "underline" }}
                          >
                            Forgot password
                          </Typography>
                      </Button>
                    </Col>
                  </div>
                </Stack>
              </form>
            </Col>
            <Col className="background-image"></Col>
          </Row>
        </Container>
      </ThemeProvider>
    </>
  );
};
