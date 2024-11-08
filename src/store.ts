import { proxy } from "valtio";

type Store = {
  entryAnimation: () => void;
  reverseEntryAnimation: () => void;
  moveAnimation: (
    x: number,
    z: number,
    floor?: number,
    upper?: number,
    rotateY?: number
  ) => void;
  floor: number;
  previousPoistion:
    | { x: number; y?: number; z: number; rotateY?: number }
    | undefined;
  isPopupActive: boolean;
  popupDataValue: number;
  isCustomer: boolean;
};

export const store = proxy<Store>({
  entryAnimation: () => {},
  reverseEntryAnimation: () => {},
  moveAnimation: () => {},
  floor: 0,
  previousPoistion: undefined,
  isPopupActive: false,
  popupDataValue: 0,
  isCustomer: false,
});
