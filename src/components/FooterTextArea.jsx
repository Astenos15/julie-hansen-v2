function FooterTextArea() {
  const date = new Date();
  return (
    <div className="section-footer__grid-item">
      <div className="section-footer__text">
        <h2>Julie Hansen Partnership</h2>
        <p className="mb-sm ">
          An elite group of the East Bay’s most talented and visionary real
          estate professionals believed buyers and sellers deserved more from
          their real estate company. More service. More resources. More
          integrity. More global reach. In a word, more of everything people
          should expect when they buy or sell their homes.
        </p>
        <div className="section-footer__contacts mb-lg">
          <h4 className="mb-xs">address</h4>
          <div className="section-footer__contact mb-sm">
            <p>4733 Chabot Drive #100 Pleasanton, CA 94588</p>
            <p>Julie Hansen-Orvis | CA DRE # 00934447</p>
          </div>
          <h4 className="mb-xs">contact information</h4>
          <div className="section-footer__contact--link mb-sm">
            <a className="mb-xs" href="tel:(925) 553-6707">
              (925) 553-6707
            </a>
            <a href="mailto:luxuryhomesinwc@icloud.com">
              luxuryhomesinwc@icloud.com
            </a>
          </div>
        </div>
        <p>Website Designed & Developed by Author @{date.getFullYear()}</p>
      </div>
    </div>
  );
}

export default FooterTextArea;
