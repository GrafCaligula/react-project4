import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";



export default function App() {
const cardData = data.map(item => {
  return (
    <Card 
      key={item.id}
      {...item}
    />
  )
});

  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="cards-wrapper">
        {cardData}
      </div>
    </div>
  );
}