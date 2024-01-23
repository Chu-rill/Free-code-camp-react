import backImg from "./assets/Property 1=Default.png";
export default function Hero() {
  return (
    <>
      <section className="hero">
        <img src={backImg} alt="" className="hero--photo" />
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind host-all
          without leaving home.
        </p>
      </section>
    </>
  );
}
