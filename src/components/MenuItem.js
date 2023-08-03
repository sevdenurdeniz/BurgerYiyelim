function MenuItem({ image, name, price, content }) {
  return (
    <div className="col-12 col-lg-4 my-2 text-center">
      <div className="card p-3">
        <img src={image} />
        <h3>{name}</h3>
        <p>{content}</p>
        <h2>{price} ₺</h2>
      </div>
    </div>
  );
}

export default MenuItem;
