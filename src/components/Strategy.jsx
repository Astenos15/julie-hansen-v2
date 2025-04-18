import { strategies } from "../data";
import { useInView } from "react-intersection-observer";
function Strategy() {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="section-strategy section-padding">
      <div className={inView ? "title animate delayShortest" : "title hidden"}>
        <h4>Our Online Marketing Strategy</h4>
        <h2 className="mb-md">We Market Your Home to The World</h2>
      </div>

      <div
        className={
          inView
            ? "section-strategy__grid grid grid-3-cols animate delayShort"
            : "section-strategy__grid grid grid-3-cols hidden"
        }
      >
        {strategies.map((item) => (
          <div key={item.id} className="section-strategy__grid-item">
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Strategy;
