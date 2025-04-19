import { useState } from "react";
import { communities } from "../data";
import CommunityInfo from "./CommunityInfo";
import { useInView } from "react-intersection-observer";
function Communities() {
  const { ref, inView } = useInView();
  const [communityId, setCommunityId] = useState(null);
  const communityInfo = communities.filter((item) => item.id === communityId);

  function handleId(id) {
    setCommunityId(id);
  }

  return (
    <div id="section-communities" className="section-communities">
      {communityId ? (
        <CommunityInfo communityInfo={communityInfo} onhandle={handleId} />
      ) : (
        <div ref={ref} className="section-communities__grid grid grid-2-cols">
          <div
            className={
              inView
                ? "section-communities__title animate delayShort"
                : "section-communities__title hidden"
            }
          >
            <h3>discover your desired area</h3>
            <h2>our featured communities</h2>
          </div>
          {communities.map((com) => (
            <div
              key={com.id}
              className={
                inView
                  ? "section-communities__grid-item animate delayLong"
                  : "section-communities__grid-item hidden"
              }
            >
              <img src={com.img} alt="" />
              <div className="text-box">
                <h2>{com.title}</h2>
                <button onClick={() => handleId(com.id)}>explore</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Communities;
