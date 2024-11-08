import { useSnapshot } from "valtio";
import { store } from "../../store";
import { FertigungCustomer, FertigungNotCustomer } from "./Data/FertigungData";
import { BackCustomer } from "./Data/BackData";
import { EingangCustomer } from "./Data/EingangData";
import {
  KunststoffCustomer,
  KunststoffNotCustomer,
} from "./Data/KuntstoffData";
import { MaschineCustomer, MaschineNotCustomer } from "./Data/MaschineData";
import { BuroCustomer, BuroNotCustomer } from "./Data/BuroData";

const PopupData = () => {
  const { popupDataValue, isCustomer } = useSnapshot(store);
  if (isCustomer) {
    return (
      <>
        <FertigungCustomer value={popupDataValue} />
        <BackCustomer value={popupDataValue} />
        <EingangCustomer value={popupDataValue} />
        <KunststoffCustomer value={popupDataValue} />
        <MaschineCustomer value={popupDataValue} />
        <BuroCustomer value={popupDataValue} />
      </>
    );
  } else {
    return (
      <>
        <FertigungNotCustomer value={popupDataValue} />
        <BackCustomer value={popupDataValue} />
        <EingangCustomer value={popupDataValue} />
        <KunststoffNotCustomer value={popupDataValue} />
        <MaschineNotCustomer value={popupDataValue} />
        <BuroNotCustomer value={popupDataValue} />
      </>
    );
  }
};

export default PopupData;
