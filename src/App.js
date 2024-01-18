import "./App.css";
import ShopItem from "./components/ShopItem";

const fakeData = {
  brand: "Tiger of Sweden",
  title: "Leonard coat",
  description: "Minimalistic coat in cotton-blend",
  descriptionFull:
    "Men's minimalistic overcont in cotton-blend. Features a stand-up collar, concealed front closure and single back",
  price: 399,
  currency: "£",
};
function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <ShopItem item={fakeData} />
      </div>
    </div>
  );
}

export default App;
