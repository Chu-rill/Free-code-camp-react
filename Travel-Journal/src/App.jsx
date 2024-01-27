import Header from "./Header";
import Card from "./Card";
import "./styles.css";
import data from "./data";
export default function App() {
  let cards = data.map((data) => {
    return <Card {...data} />;
  });
  return (
    <>
      <main>
        <Header />
        <div className="card">{cards}</div>
      </main>
    </>
  );
}
