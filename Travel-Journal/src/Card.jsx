import location from "./assets/location-dot-solid.svg";
export default function Card(props) {
  return (
    <>
      <section>
        <div className="img">
          <img src={props.img} alt="" />
        </div>
        <div className="content">
          <div className="top">
            <img src={location} alt="" />
            <h4>{props.location}</h4>
            <a href={props.google_maps_url}>View on Google Maps</a>
          </div>
          <h1>{props.location}</h1>
          <h4>
            {props.startDate} - {props.endDate}
          </h4>
          <p>{props.description}</p>
        </div>
      </section>
    </>
  );
}
