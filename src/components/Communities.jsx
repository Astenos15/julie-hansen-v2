import { useState } from "react";
import { communities } from "../data";
import { useInView } from "react-intersection-observer";

function Communities() {
  const { ref, inView } = useInView();
  const [community, setCommunity] = useState(communities[0]);
  const [isBtnActive, setIsBtnActive] = useState(communities[0].id);

  function handleClick(id, index) {
    setCommunity(communities[index]);
    setIsBtnActive(id);
  }

  return (
    <div ref={ref} className="section-communities section-padding">
      <div className={inView ? "animate delayLong " : "hidden"}>
        <p>Learn more about your desired area</p>
        <h2 className="mb-lg">Our Featured Communities</h2>
      </div>

      <div className="section-communities__grid grid grid-2-cols mb-md">
        <div className="section-communities__text-box">
          <h3 className={inView ? "animate delayShortest" : "hidden"}>
            {community.title}
          </h3>
          <p
            className={
              inView
                ? "mb-sm section-communities__subtitle animate delayShort"
                : "mb-sm section-communities__subtitle hidden"
            }
          >
            {community.subtitle}
          </p>
          <p className={inView ? "animate delayLong" : "hidden"}>
            {community.text}
          </p>
        </div>
        <img
          className={inView ? "animate delayLong" : "hidden"}
          src={community.img}
          alt={community.title}
        />
      </div>
      <ul
        className={
          inView
            ? "section-communities__btn-box animate delayLong"
            : "section-communities__btn-box hidden"
        }
      >
        {communities.map((item, i) => (
          <button
            key={item.id}
            className={
              isBtnActive === item.id
                ? "section-communities__btn active-btn"
                : "section-communities__btn"
            }
            onClick={() => handleClick(item.id, i)}
          >
            {item.title}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default Communities;
