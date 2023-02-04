import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's"
            h3="First card's"/>
      <Card h2="Second card's"
            h3="Second card's"/>
      <Card h2="Third card's"
            h3="Third card's"/>
    </div>
  );
}

export default App;
