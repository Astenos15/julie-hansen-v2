import { useState } from "react";
import { testimonials } from "../data";
import { SiComma } from "react-icons/si";
import { useInView } from "react-intersection-observer";

function Testimonials() {
  const { ref, inView } = useInView();
  const [index, setIndex] = useState(0);
  const testimonial = testimonials.at(index);

  function handlePrevious() {
    if (index > 0) setIndex((index) => index - 1);
  }

  function handleNext() {
    if (index < testimonials.length - 1) setIndex((index) => index + 1);
  }

  return (
    <div className="section-testimonials section-padding">
      <div ref={ref} className="section-testimonials__box">
        <p
          className={
            inView
              ? "section-testimonials__box-icon animate-spinner delayLong"
              : "section-testimonials__box-icon  hidden"
          }
        >
          <SiComma />
        </p>
        <p className={inView ? "animate delayShort" : "hidden"}>
          Hear from our clients
        </p>
        <h2 className={inView ? "mb-md animate delayShortest" : "hidden"}>
          What they say about us
        </h2>
        <div
          className={
            inView
              ? "section-testimonials__btn-box mb-sm animate delayShort"
              : "section-testimonials__btn-box mb-sm hidden"
          }
        >
          <button onClick={handlePrevious}>&larr;</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>
        <div className="section-testimonials__grid">
          <div className="section-testimonials__grid-item">
            <div
              className={
                inView
                  ? "section-testimonials__card animate delayShort"
                  : "section-testimonials__card hidden"
              }
            >
              <div className="section-testimonials__img-box mb-sm">
                <img src={testimonial.img} alt={testimonial.author} />
              </div>
              <div>
                <p className="section-testimonials__author">
                  {testimonial.author}
                </p>
              </div>
            </div>
          </div>

          <div className="section-testimonials__grid-item">
            <p className={inView ? "mb-md animate delayShort" : "mb-md hidden"}>
              "{testimonial.text}"
            </p>
            <div
              className={
                inView
                  ? "section-testimonials__counter mb-sm animate delayShort"
                  : "section-testimonials__counter mb-sm"
              }
            >
              {index + 1}/{testimonials.length}
            </div>
            <div
              className={
                inView
                  ? "section-testimonials__authors animate delayLong"
                  : "section-testimonials__authors hidden"
              }
            >
              {testimonials
                .filter((item) => item.id !== testimonial.id)
                .map((item) => (
                  <img key={item.id} src={item.img} alt={item.author} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
