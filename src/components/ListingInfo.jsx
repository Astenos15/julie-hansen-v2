import LinkButton from "./LinkButton";
import { useInView } from "react-intersection-observer";
export default function ListingInfo({ listing, onSet }) {
  const { ref, inView } = useInView();
  function handleSet() {
    onSet(null);
  }
  return (
    <div ref={ref} className="listing-info listing-info__grid grid grid-2-cols">
      <div
        className={
          inView
            ? "listing-info___grid-item animate delayShort"
            : "listing-info___grid-item hidden"
        }
      >
        <div className="listing-info__photo">
          <img src={listing.img} alt="house photo" />
        </div>

        <p className="listing-info__price">${listing.price}</p>
        <p className="listing-info__address mb-sm">{listing.address}</p>
        <div className="details">
          <p>
            per sqft: <span>{listing.perSqft}</span>
          </p>
          <p>
            built in: <span>{listing.builtIn}</span>
          </p>
          <p>
            garages: <span>{listing.garages}</span>
          </p>
          <p>
            type: <span>{listing.type}</span>
          </p>
        </div>
      </div>

      <div
        className={
          inView
            ? "listing-info__grid-item animate delayLong"
            : "listing-info__grid-item hidden"
        }
      >
        <h3>interior features</h3>
        <p className="mb-sm">{listing.interior.map((item) => `${item},`)}</p>
        <h3>exterior features</h3>
        <p className="mb-sm">{listing.exterior.map((item) => `${item},`)}</p>
        <h3>parking</h3>
        <p className="mb-sm">{listing.parking.map((item) => `${item},`)}</p>
        <div className="buttons">
          <LinkButton color="#fff" href="mailto:#">
            contact agent
          </LinkButton>
          <button onClick={handleSet}>return to listings</button>
        </div>

        <div className="listing-info__grid-item-reg">
          <img
            className="listing-info__grid-item-logo"
            src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/krxcekotrcfbsc76fdbi/2024-idx-logo_bayeast"
            alt="logo"
          />
          <p>MLS@reg # {listing.mls}</p>
        </div>
      </div>
    </div>
  );
}
