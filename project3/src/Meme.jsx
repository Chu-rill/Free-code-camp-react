export default function Meme() {
  function HandleClick() {
    console.log("I was clicked");
  }
  function handleHover() {
    alert("hoverded the button");
  }
  return (
    <main>
      <form className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button className="form--button">Get a new meme image </button>
      </form>
      <button onMouseEnter={handleHover} className="form--button">
        Click me
      </button>
    </main>
  );
}
