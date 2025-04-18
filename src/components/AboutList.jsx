import { aboutUs } from "../data";
import About from "./About";

function AboutList() {
  return (
    <div className="section-about section-padding">
      <ul className="section-about__list grid grid-4-cols ">
        {aboutUs.map((about) => (
          <About about={about} key={about.id} />
        ))}
      </ul>
    </div>
  );
}

export default AboutList;
