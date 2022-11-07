import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="cards-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
