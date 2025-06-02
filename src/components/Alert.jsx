import { useEffect } from "react";

export function Alert({ name = "", closeAlert = Function.prototype }) {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => clearTimeout(timerId);
  }, [closeAlert]);

  return (
    <div className="custom-alert grey darken-1 white-text">
      <div className="alert-content valign-wrapper">
        <i className="material-icons">check_circle</i>
        <span className="alert-message">{name} добавлен в корзину</span>
        <button className="alert-close btn-flat white-text" onClick={closeAlert}>
          <i className="material-icons">close</i>
        </button>
      </div>
    </div>
  );
}