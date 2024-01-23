import Card from "./Card";
import Hero from "./Hero";
import Navbar from "./Navbar";
import "./styles.css";
import data from "./data";
export default function App() {
  const card = data.map((data) => {
    return (
      <Card
        key={data.id}
        {...data}
        //data={data}
        // img={data.coverImg}
        // rate={data.stats.rating}
        // review={data.stats.reviewCount}
        // location={data.location}
        // title={data.title}
        // price={data.price}

        //openSpots={data.openSpots} //added the letter u to spouts by accident
      />
    );
  });
  // const cards = data.map((item) => {
  //   return (
  //     <Card
  //       img={item.coverImg}
  //       rate={item.stats.rating}
  //       review={item.stats.reviewCount}
  //       location={item.location}
  //       title={item.title}
  //       price={item.price}
  //     />
  //   );
  // });
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <div className="cards">{card}</div>
      </main>
    </>
  );
}
