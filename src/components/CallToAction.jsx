import { useInView } from "react-intersection-observer";
import LinkButton from "./LinkButton";

function CallToAction() {
  const { ref, inView } = useInView();
  return (
    <div className="section-cta">
      <div ref={ref} className="section-cta__grid grid grid-2-cols">
        <div
          className={
            inView
              ? "section-cta__grid-item section-cta__grid-item--text animate delayLong"
              : "section-cta__grid-item section-cta__grid-item--text hidden"
          }
        >
          <h2>Have a question?</h2>
          <h1 className="mb-sm">Want to work with us?</h1>
          <p className="mb-sm">
            We welcome your inquiries and are here to assist you. Please contact
            us to discuss your real estate needs.
          </p>
          <LinkButton
            href="mailto:luxuryhomesinwc@icloud.com"
            bgColor="goldenrod"
            borderColor="goldenrod"
            color="#040608"
          >
            contact us
          </LinkButton>
        </div>
        <div
          className={
            useInView
              ? "section-cta__grid-item animate-photo delayShort"
              : "section-cta__grid-item hidden"
          }
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
