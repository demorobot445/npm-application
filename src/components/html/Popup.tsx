import { useSnapshot } from "valtio";
import { store } from "../../store";
import PopupData from "./PopupData";
import CustomerButton from "./Data/CustomerButton";

const Popup = () => {
  const {
    previousPoistion,
    moveAnimation,
    banner,
    isPopupActive,
    popupDataValue,
  } = useSnapshot(store);

  const handleClose = () => {
    store.isPopupActive = false;
    if (previousPoistion) {
      moveAnimation(
        previousPoistion.x,
        previousPoistion.z,
        undefined,
        previousPoistion.y,
        previousPoistion.rotateY
      );
    }
  };

  return (
    <div data-active={isPopupActive} className="popup">
      <button onClick={handleClose} className="popup_close">
        <svg
          fill="#ffffff"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.5,0-8-3.5-8-8s3.5-8,8-8s8,3.5,8,8
		S16.5,20,12,20z"
            />
            <polygon points="15.5,7.1 12,10.6 8.5,7.1 7.1,8.5 10.6,12 7.1,15.5 8.5,16.9 12,13.4 15.5,16.9 16.9,15.5 13.4,12 16.9,8.5 	" />
          </g>
          <rect style={{ fill: "none" }} width="24" height="24" />
        </svg>
      </button>
      <div className="popup_video">
        {banner.type === "iframe" ? (
          <iframe
            src={banner.src}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="NMH Final"
          ></iframe>
        ) : (
          <img src={banner.src} alt="img" />
        )}
      </div>
      <PopupData />
      {popupDataValue !== 13 &&
        popupDataValue !== 14 &&
        popupDataValue !== 10 &&
        popupDataValue !== 15 &&
        popupDataValue !== 2 &&
        popupDataValue !== 8 &&
        popupDataValue !== 9 &&
        popupDataValue !== 7 &&
        popupDataValue !== 6 &&
        popupDataValue !== 12 &&
        popupDataValue !== 11 && <CustomerButton />}
    </div>
  );
};

export default Popup;
