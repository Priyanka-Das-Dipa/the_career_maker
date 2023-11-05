import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10  text-base-content">
  <aside>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="" fillRule="evenodd" clipRule="evenodd" className="fill-current">
        <img src="https://i.ibb.co/C170S8d/logo.png" alt="" />
    </svg>
    <p>The Career Maker<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  );
};

export default Footer;
