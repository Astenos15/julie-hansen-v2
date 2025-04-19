import { useInView } from "react-intersection-observer";
function About({ about }) {
  const { ref, inView } = useInView();
  return (
    <li id="section-about" ref={ref} className="section-about__list-item">
      <span className={inView ? "animate delayShortest mb-xs" : "mb-xs hidden"}>
        {about.icon}
      </span>
      <h3 className={inView ? "animate delayShort" : "mb-xs hidden"}>
        {about.title}
      </h3>
      <p className={inView ? "animate delayLong " : " hidden"}>{about.text}</p>
    </li>
  );
}

export default About;
