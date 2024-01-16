import email from "./assets/envelope-solid.svg";
import link from "./assets/linkedin.svg";
export default function Button() {
  return (
    <>
      <button>
        <img src={email} alt="" />
        Email
      </button>
      <button>
        <img src={link} alt="" />
        linkedin
      </button>
    </>
  );
}
