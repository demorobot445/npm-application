import { proxy } from "valtio";

type Store = {
  entryAnimation: () => void;
  reverseEntryAnimation: () => void;
  cameraChange: () => void;
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
  banner: { type: "iframe" | "img"; src: string };
};

export const store = proxy<Store>({
  entryAnimation: () => {},
  reverseEntryAnimation: () => {},
  moveAnimation: () => {},
  cameraChange: () => {},
  floor: 0,
  previousPoistion: undefined,
  isPopupActive: false,
  popupDataValue: 0,
  isCustomer: false,
  banner: {
    src: "https://player.vimeo.com/video/1018038325?h=76ba693cb2&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    type: "iframe",
  },
});
