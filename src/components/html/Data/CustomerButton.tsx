import { useSnapshot } from "valtio";
import { store } from "../../../store";

const CustomerButton = () => {
  const { isCustomer } = useSnapshot(store);

  const handleCustomer = () => {
    store.isCustomer = !isCustomer;
  };

  return (
    <button
      onClick={handleCustomer}
      data-active={isCustomer}
      className="buttonInside"
    >
      {isCustomer ? (
        <span>Lösungen bei NMH</span>
      ) : (
        <span>Karriere bei NMH</span>
      )}
    </button>
  );
};

export default CustomerButton;
