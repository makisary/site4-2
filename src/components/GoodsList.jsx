import { GoodsItem } from "./GoodsItem";
import { useState } from "react";
import { Alert } from "./Alert";

export function GoodsList({ goods = [], addToBasket }) {
  const [alertItem, setAlertItem] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToBasket = (item) => {
    addToBasket(item);
    setAlertItem(item);
    setShowAlert(true);
  };

  if (!goods.length) {
    return <h3>Not found</h3>;
  }

  return (
    <div className="goods">
      {showAlert && (
        <Alert 
          name={alertItem?.displayName || ""} 
          closeAlert={() => setShowAlert(false)} 
        />
      )}
      
      {goods.map((item, index) => (
        <GoodsItem 
          key={index} 
          {...item} 
          addToBasket={() => handleAddToBasket(item)} 
        />
      ))}
    </div>
  );
}