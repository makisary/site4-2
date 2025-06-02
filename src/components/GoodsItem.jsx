export function GoodsItem({
  mainId,
  displayName,
  displayDescription,
  price,
  displayAssets,
  addToBasket,
}) {
  const backgroundImage = displayAssets.length
    ? displayAssets[0].full_background
    : displayName;

  return (
    <div className="card">
      <div className="card-image">
        <img src={backgroundImage} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn waves-effect waves-light"
          onClick={addToBasket}
        >
          Купить
        </button>
        <span className="price">{price.finalPrice} ₽</span>
      </div>
    </div>
  );
}