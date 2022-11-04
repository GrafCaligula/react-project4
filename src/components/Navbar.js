import logo from "./images/globe.png";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <p>my travel journal</p>
    </nav>
  );
}
