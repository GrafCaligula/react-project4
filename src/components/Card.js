import { hover } from "@testing-library/user-event/dist/hover";
import locationImg from "./images/location.png";

export default function Card() {
  return (
    <div className="card">
      <img
        src="https://source.unsplash.com/JmuyB_LibRo"
        alt="japan"
        className="card-main-img"
      />
      <div className="card-infos">
        <div className="card-infos-header flex">
          <div className=" card-infos-loc flex">
            <img src={locationImg} alt="loc"></img>
            <span className="card-info-country">Australia</span>
          </div>
          <a 
          href="https://www.bing.com/maps?q=google+Maps+sydney+opera+house&FORM=HDRSC4&cp=-33.869721%7E151.212022&lvl=16.0"
          className="link"
          >
            View on Google Maps
          </a>
        </div>
        <h1>Sydney Opera House</h1>
        <h3>27 May, 2021 - 8 Jun, 2021</h3>
        <p>
          The Sydney Opera House is a multi-venue performing arts centre in
          Sydney. Located on the banks of the Sydney Harbour, it is often
          regarded as one of the 20th century's most famous and distinctive
          buildings
        </p>
      </div>
    </div>
  );
}
