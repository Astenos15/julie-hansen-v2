import { listings, communities } from "../data";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "./Card";
import ListingInfo from "./ListingInfo";

function Listings() {
  const { ref, inView } = useInView();
  const [area, setArea] = useState("livermore");
  const [listIndex, setListIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(null);
  const searchedListing = listings.filter((item) =>
    item.address.toLowerCase().includes(value?.toLowerCase())
  );
  const listing = listings.filter((item) => item.id === listIndex);
  const results = listings.filter((item) => item.area === area).length;
  const searchedResults = searchedListing.length;
  const total = results || searchedResults;

  function handleIndex(area) {
    setArea(area);
    setValue(null);
  }

  function handleToggle(itemId) {
    setListIndex(itemId);
    setValue(null);
    setArea("livermore");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setValue(search);
    setSearch("");
    setArea("");
  }

  return (
    <div
      id="section-listings"
      ref={ref}
      className="section-listings section-padding"
    >
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
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="search address"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <button>search</button>
            </form>

            <p>{total} results</p>
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
                  className={item.title === area ? "btn-active" : ""}
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
            {value
              ? searchedListing.map((item) => (
                  <Card onClick={handleToggle} key={item.id} item={item} />
                ))
              : listings
                  .filter((item) => item.area === area)
                  .map((item) => (
                    <Card onClick={handleToggle} key={item.id} item={item} />
                  ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Listings;
