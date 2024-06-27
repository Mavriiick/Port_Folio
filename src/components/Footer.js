import { Container, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
          <Col>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sudhirpareek23/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Mavriiick" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/amundaneguy/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
      </Container>
    </footer>
  )
}