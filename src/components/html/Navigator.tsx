import { useSnapshot } from "valtio";
import { store } from "../../store";

const Navigator = () => {
  const { moveAnimation, floor, reverseEntryAnimation, isPopupActive } =
    useSnapshot(store);

  let backDoorCondition =
    floor === 6 ||
    floor === 4.1 ||
    floor === 4.2 ||
    floor === 3.1 ||
    floor === 3.2 ||
    floor === 1.1;

  const handleBackDoor = () => {
    if (floor === 3.1 || floor === 3.2) {
      moveAnimation(0.1, 1.7, 3, 1.7, Math.PI * 0.4);
    } else if (floor === 4.1 || floor === 4.2) {
      moveAnimation(-1.5, -12.5, 4, 2.8, 0.64);
    } else if (floor === 5.2) {
      moveAnimation(2.2, 14.2, 5, 3.3, 2.04);
    } else if (floor === 1.1) {
      moveAnimation(24.2, 0, 1, 1, 1.6);
    } else if (floor === 6) {
      moveAnimation(-59.3, 13.2, 7, 5, 5.67);
    }
  };

  // const handleCustomer = () => {
  //   store.isCustomer = !isCustomer;
  // };

  return (
    <>
      {/* {floor === 0 && (
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
      )} */}
      <button
        onClick={handleBackDoor}
        data-active={backDoorCondition}
        className="outDoor"
      ></button>
      <div
        style={{ pointerEvents: isPopupActive ? "none" : "auto" }}
        className="buttonBox"
      >
        <button
          data-active={floor === 1 || floor === 2 || floor === 2.1}
          onClick={() => {
            store.isPopupActive = false;
            moveAnimation(24.2, 0, 1, 1, 1.6);
          }}
        >
          Eingang / Foyer
        </button>
        <button
          data-active={floor === 5 || floor === 5.3}
          onClick={() => {
            store.isPopupActive = false;
            moveAnimation(2.2, 14.2, 5, 3.3, 2.04);
          }}
        >
          Kunststofftechnik
        </button>
        <button
          data-active={floor === 3 || floor === 3.3 || floor === 3.2}
          onClick={() => {
            store.isPopupActive = false;
            moveAnimation(0.1, 1.7, 3, 1.7, Math.PI * 0.4);
          }}
        >
          Fertigung
        </button>
        <button
          data-active={
            floor === 4 ||
            floor === 4.1 ||
            floor === 3.4 ||
            floor === 4.2 ||
            floor === 4.3
          }
          onClick={() => {
            store.isPopupActive = false;
            moveAnimation(-1.5, -12.5, 4, 2.8, 0.64);
          }}
        >
          Maschinenbau
        </button>
        <button
          data-active={floor === 1.1 || floor === 3.1}
          onClick={() => {
            store.isPopupActive = false;
            moveAnimation(18.2, 0.7, 1.1, 3.7, Math.PI * 1.7);
          }}
        >
          Verwaltung & GF
        </button>
        <button
          data-active={floor === 7}
          onClick={() => {
            store.isPopupActive = false;
            moveAnimation(-59.3, 13.2, 7, 5, 5.67);
          }}
        >
          Logistik
        </button>
        <button data-active={floor === 0} onClick={reverseEntryAnimation}>
          Vorderansicht
        </button>
      </div>
    </>
  );
};

export default Navigator;
