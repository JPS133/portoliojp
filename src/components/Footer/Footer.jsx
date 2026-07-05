import "./Footer.css";

import {

FaGithub,

FaLinkedin,

FaInstagram,

FaHeart

} from "react-icons/fa";

function Footer(){

return(

<footer className="footer">

<h2>

Jai Pratap Singh

</h2>

<p>

Frontend Developer • Java Developer • AI Enthusiast

</p>

<div className="footer-social">

<a
  href="https://github.com/JPS133"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub />
</a>

<a
  href="https://www.linkedin.com/in/jai-pratap-singh-50a255331/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin />
</a>

<a
  href="https://www.instagram.com/theee__jp.effect?igsh=MXhhbTBuemw1NzZtaA=="
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram />
</a>

</div>

<div className="copyright">

Made with

<FaHeart className="heart"/>

by Jai Pratap Singh

</div>

</footer>

)

}

export default Footer;