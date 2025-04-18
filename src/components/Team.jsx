import LinkButton from "./LinkButton";
import { useInView } from "react-intersection-observer";

function Team() {
  const { ref, inView } = useInView();
  return (
    <div id="section-team" className="section-team section-padding">
      <div ref={ref} className="grid grid-2-cols section-team__grid">
        <div
          className={
            inView
              ? "section-team__img-box animate delayShortest"
              : "section-team__img-box hidden"
          }
        >
          <img
            src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ghtq7jtce7tsgdjtosrs/image-025"
            alt="photo of julie"
          />
        </div>
        <div className="section-team__text-box">
          <p className={inView ? "animate delayShortest" : "hidden"}>
            Experienced Realtor
          </p>
          <h2
            className={inView ? "mb-xs animate delayShortest" : "mb-xs hidden"}
          >
            Meet Julie Hansen
          </h2>
          <p className={inView ? "mb-sm animate delayShort" : "mb-sm hidden"}>
            Julie Hansen-Orvis is the Team leader of Hansen Partners at
            J.Rockliff Realtors. She began selling homes at the age of 18 after
            working with her Mother who was a Realtor. Over the last 33 years
            Julie has been succesfull in many areas of Real Estate. She has been
            a top producing Realtor in residential home sales as both a listing
            and selling Agent. An award winning new home sales agent and
            manager. She started her own sales, marketing and development
            services company. Her experience is very broad in the Real Estate
            industry.
          </p>
          <div className={inView ? "animate delayLong" : "hidden"}>
            <LinkButton color="#fff" href="mailto:luxuryhomesinwc@icloud.com">
              contact me
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
