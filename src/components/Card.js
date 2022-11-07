import locationImg from "./images/location.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={props.imageURL}
        alt="img of loc"
        className="card-main-img"
      />
      <div className="card-infos">
        <div className="card-infos-header flex">
          <div className=" card-infos-loc flex">
            <img src={locationImg} alt="loc"></img>
            <span className="card-info-country">{props.location}</span>
          </div>
          <a 
          href={props.linkMaps}
          className="link"
          >
            View on Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <h3>{props.startDate} - {props.endDate}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
 