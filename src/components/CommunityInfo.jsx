import { useInView } from "react-intersection-observer";
export default function CommunityInfo({ communityInfo, onhandle }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="community-info section-padding">
      <div
        className={
          inView
            ? "community-info-text animate delayShort"
            : "community-info-text hidden"
        }
      >
        <h2>{communityInfo.at(0).title}</h2>
        <h3 className="mb-sm">{communityInfo.at(0).subtitle}</h3>
        <p className="mb-sm">{communityInfo.at(0).text}</p>
        <button onClick={() => onhandle(null)}>return to communities</button>
      </div>
    </div>
  );
}
