import Joke from "./Joke";

export default function App() {
  return (
    <>
      <Joke
        setup="I got my daugther a fridge for her birthday"
        punchline="I can't wait to see her face light up when she opens it"
      />
      <Joke />
      <Joke />
      <Joke />
      <Joke />
    </>
  );
}
