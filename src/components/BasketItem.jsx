export function BasketItem({
  item,
  decrementQuantity,
  incrementQuantity,
  removeFromBasket,
}) {
  return (
    <li className="collection-item basket-item dark-bg">
      <div className="item-info">
        <span className="item-name">{item.displayName}</span>
        <div className="quantity-controls">
          <button
            className="btn waves-effect waves-light btn-small minus-button dark-button"
            onClick={() => decrementQuantity(item.mainId)}
          >
            <i className="material-icons">remove</i>
          </button>
          <span className="quantity-value">{item.quantity}</span>
          <button
            className="btn waves-effect waves-light btn-small plus-button dark-button"
            onClick={() => incrementQuantity(item.mainId)}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
        <span className="item-price">
          {item.price.finalPrice * item.quantity} руб.
        </span>
      </div>
      <div className="secondary-content">
        <button
          className="btn-floating btn-small waves-effect waves-light red darken-2"
          onClick={() => removeFromBasket(item.mainId)}
        >
          <i className="material-icons">clear</i>
        </button>
      </div>
    </li>
  );
}