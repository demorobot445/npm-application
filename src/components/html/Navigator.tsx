import { useSnapshot } from "valtio";
import { store } from "../../store";
``;

const Navigator = () => {
  const { moveAnimation, floor, isCustomer, reverseEntryAnimation } =
    useSnapshot(store);

  let backDoorCondition =
    floor === 6 ||
    floor === 5.2 ||
    floor === 4.1 ||
    floor === 4.2 ||
    floor === 3.1 ||
    floor === 3.2 ||
    floor === 1.1;

  const handleBackDoor = () => {
    if (floor === 3.1 || floor === 3.2) {
      moveAnimation(0.1, 1.7, 3, 1.7, Math.PI * 0.4);
    } else if (floor === 4.1 || floor === 4.2) {
      moveAnimation(2.8, -12.8, 4, 2.6, 0.84);
    } else if (floor === 5.2) {
      moveAnimation(2.2, 14.2, 5, 3.3, 2.04);
    } else if (floor === 1.1) {
      moveAnimation(24.2, 0, 1, 1, 1.6);
    } else if (floor === 6) {
      moveAnimation(-59.3, 13.2, 7, 5, 5.67);
    }
  };

  const handleCustomer = () => {
    store.isCustomer = !isCustomer;
  };

  return (
    <>
      {floor === 0 && (
        <button
          onClick={handleCustomer}
          data-active={isCustomer}
          className="buttonSlide"
        >
          {isCustomer ? (
            <span>Lösungen bei NMH</span>
          ) : (
            <span>Karriere bei NMH</span>
          )}
        </button>
      )}
      <button
        onClick={handleBackDoor}
        data-active={backDoorCondition}
        className="outDoor"
      ></button>
      <div className="buttonBox">
        <button onClick={() => moveAnimation(24.2, 0, 1, 1, 1.6)}>
          Eingang / Foyer
        </button>
        <button onClick={() => moveAnimation(2.2, 14.2, 5, 3.3, 2.04)}>
          Kunststofftechnik
        </button>
        <button onClick={() => moveAnimation(0.1, 1.7, 3, 1.7, Math.PI * 0.4)}>
          Fertigung
        </button>
        <button onClick={() => moveAnimation(2.8, -12.8, 4, 2.6, 0.84)}>
          Maschinenbau
        </button>
        <button onClick={() => moveAnimation(19, 0.7, 1.1, 4, -0.36)}>
          Verwaltung & GF
        </button>
        <button onClick={() => moveAnimation(-59.3, 13.2, 7, 5, 5.67)}>
          Logistik
        </button>
        <button onClick={reverseEntryAnimation}>Vorderansicht</button>
      </div>
    </>
  );
};

export default Navigator;
