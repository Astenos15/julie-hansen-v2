import { listings, communities } from "../data";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "./Card";
import ListingInfo from "./ListingInfo";
function Listings() {
  const { ref, inView } = useInView();
  const [index, setIndex] = useState("livermore");
  const results = listings.filter((item) => item.area === index).length;
  const [listIndex, setListIndex] = useState(null);
  const listing = listings[listIndex];

  function handleIndex(area) {
    setIndex(area);
  }

  function handleToggle(itemId) {
    setListIndex(itemId + 1);
  }

  return (
    <div ref={ref} className="section-listings section-padding">
      {listIndex ? (
        <ListingInfo listing={listing} onSet={setListIndex} />
      ) : (
        <div className="section-listings___box mb-lg">
          <div
            className={
              inView
                ? "section-listings__nav mb-sm animate delayShortest"
                : "section-listings__nav mb-sm hidden"
            }
          >
            <h2>Real Estate & Homes for Sale</h2>
            <input type="search" placeholder="search address" />
            <p>{results} results</p>
          </div>
          <div
            className={
              inView
                ? "section-listings__nav-btn animate delayShort"
                : "section-listings__nav-btn hidden"
            }
          >
            <ul className={inView ? "mb-lg animate delayLong" : "mb-lg hidden"}>
              {communities.map((item) => (
                <button
                  className={item.title === index ? "btn-active" : ""}
                  key={item.id}
                  onClick={() => handleIndex(item.title)}
                >
                  {item.title}
                </button>
              ))}
            </ul>
          </div>

          <div
            className={
              inView
                ? "section-listings__grid grid grid-3-cols animate delayLong"
                : "section-listings__grid grid grid-3-cols hidden"
            }
          >
            {listings.map(
              (item, i) =>
                item.area === index && (
                  <Card
                    onClick={handleToggle}
                    key={item.id}
                    i={i}
                    item={item}
                  />
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Listings;
