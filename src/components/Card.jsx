export function Card({ item, onClick, i }) {
  return (
    <div className="card" onClick={() => onClick(i)}>
      <div className="card__img-box">
        <img src={item.img} alt="house listing" />
      </div>
      <div className="card__txt-box">
        <h2>${item.price.toLocaleString()}</h2>
        <div className="card__txt-box-desc mb-sm">
          <span>3bd</span>
          <span>3ba</span>
          <span>300sqft</span>
        </div>
        <h3 className="mb-sm">{item.address}</h3>
        <div className="card__txt-box-reg">
          <img
            src="https://bayeast.org/wp-content/uploads/IDX-Logo.jpg"
            alt="logo"
          />
          <p>{item.mls}</p>
        </div>
      </div>
    </div>
  );
}
