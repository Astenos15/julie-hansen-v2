function FooterFormArea() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="section-footer__form">
      <h2>Newsletter</h2>
      <p className="mb-sm">
        Subscribe to our Newsletter for latest news and updates. Stay tuned!
      </p>
      <form className="mb-md" onSubmit={handleSubmit}>
        <input className="mb-xs" type="text" placeholder="Email address..." />
        <div className="mb-sm">
          <input type="checkbox" />
          <p>
            By providing Julie Hansen Partnership your contact information, you
            acknowledge and agree to our Privacy Policy and consent to receiving
            marketing communications, including through automated calls, texts,
            and emails, some of which may use artificial or prerecorded voices.
            This consent isn’t necessary for purchasing any products or services
            and you may opt out at any time. To opt out from texts, you can
            reply, ‘stop’ at any time. To opt out from emails, you can click on
            the unsubscribe link in the emails. Message and data rates may
            apply.
          </p>
        </div>
        <button>subscribe</button>
      </form>
      <div className="section-footer__form-icon-box">
        <img
          src="https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/zbesma34ygwklawiysod"
          alt=""
        />
        <img
          src="https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/siun2nwoji9w7v0mssvy"
          alt=""
        />
      </div>
    </div>
  );
}

export default FooterFormArea;
