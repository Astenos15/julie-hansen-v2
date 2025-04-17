import heroImg from "../assets/images/hero.svg";
import LinkButton from "./LinkButton";
import { useInView } from "react-intersection-observer";

function Hero() {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="section-hero section-padding">
      <img className="section-hero__img" src={heroImg} alt="" />
      <div className="section-hero__cta">
        <h4 className="heading-subheading">&nbsp;</h4>
        <h1
          className={
            inView
              ? "animate delayShortest heading-primary mb-xs"
              : "heading-primary hidden mb-xs"
          }
        >
          Julie Hansen Partnership
        </h1>
        <p
          className={
            inView
              ? "animate delayShort mb-md hero-txt"
              : "mb-sm hidden hero-txt"
          }
        >
          Julie Hansen-Orvis | CA DRE# 00934447
        </p>
        <div
          className={
            inView
              ? "animate delayLong section-hero__btn-box"
              : "section-hero__btn-box hidden"
          }
        >
          <LinkButton bgColor="transparent" borderColor="#fff">
            search for homes
          </LinkButton>
          <LinkButton
            bgColor="goldenrod"
            borderColor="goldenrod"
            color="#000"
            href="#section-team"
          >
            meet the team
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export default Hero;
