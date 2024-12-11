import { useSnapshot } from "valtio";
import { store } from "../../../store";

const CustomerButton = () => {
  const { isCustomer } = useSnapshot(store);

  const handleCustomer = () => {
    store.isCustomer = !isCustomer;
  };

  return (
    <div className="buttonInside">
      <button onClick={handleCustomer} data-active={isCustomer}>
        {isCustomer ? (
          <span>Lösungen bei NMH</span>
        ) : (
          <span>Karriere bei NMH</span>
        )}
      </button>
    </div>
  );
};

export default CustomerButton;
