import world from "./assets/earth-americas-solid.svg";
export default function Header() {
  return (
    <>
      <header>
        <img src={world} alt="" />
        <p>My Travel Journal</p>
      </header>
    </>
  );
}
