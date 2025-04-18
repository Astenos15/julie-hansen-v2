import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
function FooterFormArea() {
  const { ref, inView } = useInView();
  const date = new Date();
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [subscriber, setSubscriber] = useState([]);

  function handleCheck() {
    setIsChecked((isChecked) => !isChecked);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!isChecked) toast.error("please click checkbox.");
    if (!email) toast.error("please input valid email address.");
    if (email && isChecked) {
      const newSubscriber = { id: nanoid(), email };
      setSubscriber((sub) => [...sub, newSubscriber]);
      toast.success("success");
      setEmail("");
      setIsChecked(false);
    }
  }
  return (
    <div ref={ref} className="section-footer__grid-item">
      <div
        className={
          inView
            ? "section-footer__form animate delayLong"
            : "section-footer__form hidden"
        }
      >
        <h2>Newsletter</h2>
        <p className="mb-sm">
          Subscribe to our Newsletter for latest news and updates. Stay tuned!
        </p>
        <form className="mb-md" onSubmit={handleSubmit}>
          <input
            className="mb-sm"
            type="email"
            placeholder="Email address..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mb-sm">
            <div className="checkbox">
              <label className="label" htmlFor="check">
                {isChecked && <FaCheck />}
              </label>
              <input
                type="checkbox"
                id="check"
                value={isChecked}
                onChange={handleCheck}
              />
            </div>

            <p>
              By providing Julie Hansen Partnership your contact information,
              you acknowledge and agree to our Privacy Policy and consent to
              receiving marketing communications, including through automated
              calls, texts, and emails, some of which may use artificial or
              prerecorded voices. This consent isn’t necessary for purchasing
              any products or services and you may opt out at any time. To opt
              out from texts, you can reply, ‘stop’ at any time. To opt out from
              emails, you can click on the unsubscribe link in the emails.
              Message and data rates may apply.
            </p>
          </div>
          <button>subscribe</button>
        </form>
        <p>Website Designed & Developed @{date.getFullYear()}</p>
      </div>
    </div>
  );
}

export default FooterFormArea;
