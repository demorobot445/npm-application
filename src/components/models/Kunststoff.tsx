import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube008: THREE.Mesh;
    Cube008_1: THREE.Mesh;
    Cube008_2: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube009_1: THREE.Mesh;
    Cube009_2: THREE.Mesh;
    Cube154: THREE.Mesh;
    Cube154_1: THREE.Mesh;
    Cube184: THREE.Mesh;
    Cylinder022: THREE.Mesh;
    Cube505: THREE.Mesh;
    Cube505_1: THREE.Mesh;
    Cube505_2: THREE.Mesh;
    Cube513: THREE.Mesh;
    Cube513_1: THREE.Mesh;
    Cube513_2: THREE.Mesh;
    Cube524: THREE.Mesh;
    Cube524_1: THREE.Mesh;
    Cube525: THREE.Mesh;
    Cube525_1: THREE.Mesh;
    Cube525_2: THREE.Mesh;
    Untitled034: THREE.Mesh;
    Untitled034_1: THREE.Mesh;
    Cube529: THREE.Mesh;
    Cube529_1: THREE.Mesh;
    Cube529_2: THREE.Mesh;
    Cube529_3: THREE.Mesh;
    Cube529_4: THREE.Mesh;
    Cube529_5: THREE.Mesh;
    Cube540: THREE.Mesh;
    Cube540_1: THREE.Mesh;
    Cube540_2: THREE.Mesh;
    Cube558: THREE.Mesh;
    Cube558_1: THREE.Mesh;
    Untitled035: THREE.Mesh;
    Untitled035_1: THREE.Mesh;
    Cube535: THREE.Mesh;
    Cube535_1: THREE.Mesh;
    Cube535_2: THREE.Mesh;
    Cube535_3: THREE.Mesh;
    Cube535_4: THREE.Mesh;
    Cube535_5: THREE.Mesh;
    Cube559: THREE.Mesh;
    Cube559_1: THREE.Mesh;
    Cube565: THREE.Mesh;
    Cube565_1: THREE.Mesh;
    Cube565_2: THREE.Mesh;
    Untitled036: THREE.Mesh;
    Untitled036_1: THREE.Mesh;
    Cube600: THREE.Mesh;
    Cube600_1: THREE.Mesh;
    Cube501: THREE.Mesh;
    Cube501_1: THREE.Mesh;
    Cube501_2: THREE.Mesh;
    Cube502: THREE.Mesh;
    Cube502_1: THREE.Mesh;
    Cube502_2: THREE.Mesh;
    Cube509: THREE.Mesh;
    Cube509_1: THREE.Mesh;
    Cube509_2: THREE.Mesh;
    Cube367: THREE.Mesh;
    Cube367_1: THREE.Mesh;
    Cube479: THREE.Mesh;
    Cube479_1: THREE.Mesh;
    Cube479_2: THREE.Mesh;
    Cube479_3: THREE.Mesh;
    Cube479_4: THREE.Mesh;
    Cube479_5: THREE.Mesh;
    Cube479_6: THREE.Mesh;
    Cube479_7: THREE.Mesh;
    Cube479_8: THREE.Mesh;
    Cube495: THREE.Mesh;
    Cube495_1: THREE.Mesh;
    Cube498: THREE.Mesh;
    Cube498_1: THREE.Mesh;
    Cube506: THREE.Mesh;
    Cube506_1: THREE.Mesh;
    Cube508: THREE.Mesh;
    Cube508_1: THREE.Mesh;
    Cube325: THREE.Mesh;
    Cube325_1: THREE.Mesh;
    Cube081: THREE.Mesh;
    Cube081_1: THREE.Mesh;
    Cube511: THREE.Mesh;
    Cube511_1: THREE.Mesh;
    Cube103: THREE.Mesh;
    Cube482: THREE.Mesh;
    Cube482_1: THREE.Mesh;
    Cube284: THREE.Mesh;
    Cube499: THREE.Mesh;
    Cube499_1: THREE.Mesh;
    Cube503: THREE.Mesh;
    Cube503_1: THREE.Mesh;
    Cube287: THREE.Mesh;
    Cube571: THREE.Mesh;
    Cube571_1: THREE.Mesh;
    Cube571_2: THREE.Mesh;
    Cube571_3: THREE.Mesh;
    Cube571_4: THREE.Mesh;
    Cube571_5: THREE.Mesh;
    Cube571_6: THREE.Mesh;
    Cube571_7: THREE.Mesh;
    Cube571_8: THREE.Mesh;
    Cube572: THREE.Mesh;
    Cube572_1: THREE.Mesh;
    Cube572_2: THREE.Mesh;
    Cube572_3: THREE.Mesh;
    Cube572_4: THREE.Mesh;
    Cube572_5: THREE.Mesh;
    Cube572_6: THREE.Mesh;
    Cube572_7: THREE.Mesh;
    Cube572_8: THREE.Mesh;
    Cube574: THREE.Mesh;
    Cube574_1: THREE.Mesh;
    Cube574_2: THREE.Mesh;
    Cube574_3: THREE.Mesh;
    Cube574_4: THREE.Mesh;
    Cube574_5: THREE.Mesh;
    Cube574_6: THREE.Mesh;
    Cube574_7: THREE.Mesh;
    Cube574_8: THREE.Mesh;
    Cube575: THREE.Mesh;
    Cube575_1: THREE.Mesh;
    Cube575_2: THREE.Mesh;
    Cube575_3: THREE.Mesh;
    Cube575_4: THREE.Mesh;
    Cube575_5: THREE.Mesh;
    Cube575_6: THREE.Mesh;
    Cube575_7: THREE.Mesh;
    Cube575_8: THREE.Mesh;
    Cube581: THREE.Mesh;
    Cube581_1: THREE.Mesh;
    Cube581_2: THREE.Mesh;
    Cube596: THREE.Mesh;
    Cube596_1: THREE.Mesh;
    Cube596_2: THREE.Mesh;
    Cube629: THREE.Mesh;
    Cube629_1: THREE.Mesh;
    Cube629_2: THREE.Mesh;
    Cylinder052: THREE.Mesh;
    Cylinder052_1: THREE.Mesh;
    Cylinder052_2: THREE.Mesh;
    Cylinder052_3: THREE.Mesh;
    Cylinder053: THREE.Mesh;
    Cylinder053_1: THREE.Mesh;
    Cylinder053_2: THREE.Mesh;
    Cylinder053_3: THREE.Mesh;
    Cylinder054: THREE.Mesh;
    Cylinder054_1: THREE.Mesh;
    Cylinder054_2: THREE.Mesh;
    Cylinder054_3: THREE.Mesh;
    Cylinder049: THREE.Mesh;
    Cylinder049_1: THREE.Mesh;
    Cylinder049_2: THREE.Mesh;
    Cylinder049_3: THREE.Mesh;
    Cube116: THREE.Mesh;
    Cube118: THREE.Mesh;
    Cube119: THREE.Mesh;
    Cube120: THREE.Mesh;
    Cube121: THREE.Mesh;
    Cube122: THREE.Mesh;
    Cube123: THREE.Mesh;
    Cube124: THREE.Mesh;
    Cube127: THREE.Mesh;
    Cube128: THREE.Mesh;
    Cube130: THREE.Mesh;
    Cube272: THREE.Mesh;
    Cube272_1: THREE.Mesh;
    Cube272_2: THREE.Mesh;
    Cube103_1: THREE.Mesh;
    Cube103_2: THREE.Mesh;
    Cube103_3: THREE.Mesh;
    Cylinder032: THREE.Mesh;
    Cylinder033: THREE.Mesh;
    Cube051: THREE.Mesh;
    Cube051_1: THREE.Mesh;
    Cube079: THREE.Mesh;
    Cube079_1: THREE.Mesh;
    wandstreben001: THREE.Mesh;
    wandstreben002: THREE.Mesh;
    wandstreben003: THREE.Mesh;
    Cube164: THREE.Mesh;
    Cube164_1: THREE.Mesh;
    Cube548: THREE.Mesh;
    Cube548_1: THREE.Mesh;
    Cube548_2: THREE.Mesh;
    Cube548_3: THREE.Mesh;
    Cube550: THREE.Mesh;
    Cube550_1: THREE.Mesh;
    Cube550_2: THREE.Mesh;
    Cube550_3: THREE.Mesh;
    Cube550_4: THREE.Mesh;
    Cube296: THREE.Mesh;
    Cube296_1: THREE.Mesh;
    Cube296_2: THREE.Mesh;
    Cube296_3: THREE.Mesh;
    Cube297_1: THREE.Mesh;
    Cube297_2: THREE.Mesh;
    Cube297_3: THREE.Mesh;
    Cube297_4: THREE.Mesh;
    Cube297_5: THREE.Mesh;
    Cube306_1: THREE.Mesh;
    Cube306_2: THREE.Mesh;
    Cube306_3: THREE.Mesh;
    Cube306_4: THREE.Mesh;
    Cube308_1: THREE.Mesh;
    Cube308_2: THREE.Mesh;
    Cube308_3: THREE.Mesh;
    Cube308_4: THREE.Mesh;
    Cube308_5: THREE.Mesh;
    Cube538: THREE.Mesh;
    Cube538_1: THREE.Mesh;
    Cube538_2: THREE.Mesh;
    Cube538_3: THREE.Mesh;
    Cube592: THREE.Mesh;
    Cube592_1: THREE.Mesh;
    Cube592_2: THREE.Mesh;
    Cube592_3: THREE.Mesh;
    Cube592_4: THREE.Mesh;
    Cube593: THREE.Mesh;
    Cube593_1: THREE.Mesh;
    Cube593_2: THREE.Mesh;
    Cube593_3: THREE.Mesh;
    Cube603: THREE.Mesh;
    Cube603_1: THREE.Mesh;
    Cube603_2: THREE.Mesh;
    Cube603_3: THREE.Mesh;
    Cube603_4: THREE.Mesh;
    Cube604: THREE.Mesh;
    Cube604_1: THREE.Mesh;
    Cube604_2: THREE.Mesh;
    Cube604_3: THREE.Mesh;
    Cube607: THREE.Mesh;
    Cube607_1: THREE.Mesh;
    Cube607_2: THREE.Mesh;
    Cube607_3: THREE.Mesh;
    Cube607_4: THREE.Mesh;
    Cube609: THREE.Mesh;
    Cube609_1: THREE.Mesh;
    Cube609_2: THREE.Mesh;
    Cube609_3: THREE.Mesh;
    Cube614: THREE.Mesh;
    Cube614_1: THREE.Mesh;
    Cube614_2: THREE.Mesh;
    Cube614_3: THREE.Mesh;
    Cube614_4: THREE.Mesh;
    Cube627: THREE.Mesh;
    Cube627_1: THREE.Mesh;
    Cube627_2: THREE.Mesh;
    Cube627_3: THREE.Mesh;
    Cube628: THREE.Mesh;
    Cube628_1: THREE.Mesh;
    Cube628_2: THREE.Mesh;
    Cube628_3: THREE.Mesh;
    Cube628_4: THREE.Mesh;
    Cube631: THREE.Mesh;
    Cube631_1: THREE.Mesh;
    Cube631_2: THREE.Mesh;
    Cube631_3: THREE.Mesh;
    Cube632: THREE.Mesh;
    Cube632_1: THREE.Mesh;
    Cube632_2: THREE.Mesh;
    Cube632_3: THREE.Mesh;
    Cube632_4: THREE.Mesh;
    Cube634: THREE.Mesh;
    Cube634_1: THREE.Mesh;
    Cube634_2: THREE.Mesh;
    Cube634_3: THREE.Mesh;
    Cube635: THREE.Mesh;
    Cube635_1: THREE.Mesh;
    Cube635_2: THREE.Mesh;
    Cube635_3: THREE.Mesh;
    Cube635_4: THREE.Mesh;
    Cube664: THREE.Mesh;
    Cube664_1: THREE.Mesh;
    Cube664_2: THREE.Mesh;
    Cube664_3: THREE.Mesh;
    Cube666: THREE.Mesh;
    Cube666_1: THREE.Mesh;
    Cube666_2: THREE.Mesh;
    Cube666_3: THREE.Mesh;
    Cube666_4: THREE.Mesh;
    Cube672: THREE.Mesh;
    Cube672_1: THREE.Mesh;
    Cube672_2: THREE.Mesh;
    Cube672_3: THREE.Mesh;
    Cube673: THREE.Mesh;
    Cube673_1: THREE.Mesh;
    Cube673_2: THREE.Mesh;
    Cube673_3: THREE.Mesh;
    Cube673_4: THREE.Mesh;
    Cube675: THREE.Mesh;
    Cube675_1: THREE.Mesh;
    Cube675_2: THREE.Mesh;
    Cube675_3: THREE.Mesh;
    Cube676: THREE.Mesh;
    Cube676_1: THREE.Mesh;
    Cube676_2: THREE.Mesh;
    Cube676_3: THREE.Mesh;
    Cube676_4: THREE.Mesh;
    Cube677: THREE.Mesh;
    Cube677_1: THREE.Mesh;
    Cube677_2: THREE.Mesh;
    Cube677_3: THREE.Mesh;
    Cube708: THREE.Mesh;
    Cube708_1: THREE.Mesh;
    Cube708_2: THREE.Mesh;
    Cube708_3: THREE.Mesh;
    Cube708_4: THREE.Mesh;
    Cube709: THREE.Mesh;
    Cube709_1: THREE.Mesh;
    Cube709_2: THREE.Mesh;
    Cube709_3: THREE.Mesh;
    Cube710: THREE.Mesh;
    Cube710_1: THREE.Mesh;
    Cube710_2: THREE.Mesh;
    Cube710_3: THREE.Mesh;
    Cube710_4: THREE.Mesh;
    Cube711: THREE.Mesh;
    Cube711_1: THREE.Mesh;
    Cube711_2: THREE.Mesh;
    Cube711_3: THREE.Mesh;
    Cube713: THREE.Mesh;
    Cube713_1: THREE.Mesh;
    Cube713_2: THREE.Mesh;
    Cube713_3: THREE.Mesh;
    Cube713_4: THREE.Mesh;
    Cube714: THREE.Mesh;
    Cube714_1: THREE.Mesh;
    Cube714_2: THREE.Mesh;
    Cube714_3: THREE.Mesh;
    Cube716: THREE.Mesh;
    Cube716_1: THREE.Mesh;
    Cube716_2: THREE.Mesh;
    Cube716_3: THREE.Mesh;
    Cube716_4: THREE.Mesh;
    Cube717: THREE.Mesh;
    Cube717_1: THREE.Mesh;
    Cube717_2: THREE.Mesh;
    Cube717_3: THREE.Mesh;
    Cube718: THREE.Mesh;
    Cube718_1: THREE.Mesh;
    Cube718_2: THREE.Mesh;
    Cube718_3: THREE.Mesh;
    Cube718_4: THREE.Mesh;
    Cube636: THREE.Mesh;
    Cube636_1: THREE.Mesh;
    Cube636_2: THREE.Mesh;
    Cube636_3: THREE.Mesh;
    Cube636_4: THREE.Mesh;
    Cube636_5: THREE.Mesh;
    Cube636_6: THREE.Mesh;
    Cube636_7: THREE.Mesh;
    Cube636_8: THREE.Mesh;
    Cube636_9: THREE.Mesh;
    Cube636_10: THREE.Mesh;
    Cube636_11: THREE.Mesh;
    Cube191: THREE.Mesh;
    Cube191_1: THREE.Mesh;
    Cube191_2: THREE.Mesh;
    Cube191_3: THREE.Mesh;
    Cube191_4: THREE.Mesh;
    Cube191_5: THREE.Mesh;
    Cube191_6: THREE.Mesh;
    Cube191_7: THREE.Mesh;
    Cube191_8: THREE.Mesh;
    Cube191_9: THREE.Mesh;
    Cube191_10: THREE.Mesh;
    Cube191_11: THREE.Mesh;
    Cube191_12: THREE.Mesh;
    Cube191_13: THREE.Mesh;
    Cube191_14: THREE.Mesh;
    Cube191_15: THREE.Mesh;
    Cube191_16: THREE.Mesh;
    Cube191_17: THREE.Mesh;
    Cube191_18: THREE.Mesh;
    Cube046: THREE.Mesh;
    Cube046_1: THREE.Mesh;
    Cube046_2: THREE.Mesh;
    Cube046_3: THREE.Mesh;
    Cube046_4: THREE.Mesh;
    Cube046_5: THREE.Mesh;
    Cube046_6: THREE.Mesh;
    Cube143: THREE.Mesh;
    Cube143_1: THREE.Mesh;
    Cube143_2: THREE.Mesh;
    Cube143_3: THREE.Mesh;
    Cube143_4: THREE.Mesh;
    Cube143_5: THREE.Mesh;
    Cube143_6: THREE.Mesh;
    Cube169: THREE.Mesh;
    Cube169_1: THREE.Mesh;
    Cube169_2: THREE.Mesh;
    Cube169_3: THREE.Mesh;
    Cube169_4: THREE.Mesh;
    Cube169_5: THREE.Mesh;
    Cube169_6: THREE.Mesh;
    Cube169_7: THREE.Mesh;
    Cube169_8: THREE.Mesh;
    Cube169_9: THREE.Mesh;
    Cube169_10: THREE.Mesh;
    Cube169_11: THREE.Mesh;
    Cube169_12: THREE.Mesh;
    Cube169_13: THREE.Mesh;
    Cube169_14: THREE.Mesh;
    Cube169_15: THREE.Mesh;
    Cube169_16: THREE.Mesh;
    Cube169_17: THREE.Mesh;
    Cube169_18: THREE.Mesh;
    Cube169_19: THREE.Mesh;
    Cube169_20: THREE.Mesh;
    Cube227: THREE.Mesh;
    Cube227_1: THREE.Mesh;
    Cube227_2: THREE.Mesh;
    Cube227_3: THREE.Mesh;
    Cube227_4: THREE.Mesh;
    Cube227_5: THREE.Mesh;
    Cube227_6: THREE.Mesh;
    Cube227_7: THREE.Mesh;
    Cube227_8: THREE.Mesh;
    Cube227_9: THREE.Mesh;
    Cube227_10: THREE.Mesh;
    Cube227_11: THREE.Mesh;
    Cube227_12: THREE.Mesh;
    Cube227_13: THREE.Mesh;
    Cube227_14: THREE.Mesh;
    Cube227_15: THREE.Mesh;
    Cube227_16: THREE.Mesh;
    Cube227_17: THREE.Mesh;
    Cube227_18: THREE.Mesh;
    Cube227_19: THREE.Mesh;
    Cube227_20: THREE.Mesh;
    Cube244: THREE.Mesh;
    Cube244_1: THREE.Mesh;
    Cube244_2: THREE.Mesh;
    Cube244_3: THREE.Mesh;
    Cube244_4: THREE.Mesh;
    Cube244_5: THREE.Mesh;
    Cube244_6: THREE.Mesh;
    Cube244_7: THREE.Mesh;
    Cube244_8: THREE.Mesh;
    Cube244_9: THREE.Mesh;
    Cube244_10: THREE.Mesh;
    Cube244_11: THREE.Mesh;
    Cube244_12: THREE.Mesh;
    Cube244_13: THREE.Mesh;
    Cube244_14: THREE.Mesh;
    Cube244_15: THREE.Mesh;
    Cube244_16: THREE.Mesh;
    Cube244_17: THREE.Mesh;
    Cube244_18: THREE.Mesh;
    Cube245: THREE.Mesh;
    Cube245_1: THREE.Mesh;
    Cube245_2: THREE.Mesh;
    Cube245_3: THREE.Mesh;
    Cube245_4: THREE.Mesh;
    Cube245_5: THREE.Mesh;
    Cube245_6: THREE.Mesh;
    Cube245_7: THREE.Mesh;
    Cube245_8: THREE.Mesh;
    Cube245_9: THREE.Mesh;
    Cube245_10: THREE.Mesh;
    Cube245_11: THREE.Mesh;
    Cube245_12: THREE.Mesh;
    Cube245_13: THREE.Mesh;
    Cube245_14: THREE.Mesh;
    Cube245_15: THREE.Mesh;
    Cube245_16: THREE.Mesh;
    Cube245_17: THREE.Mesh;
    Cube245_18: THREE.Mesh;
    Cube245_19: THREE.Mesh;
    Cube630: THREE.Mesh;
    Cube630_1: THREE.Mesh;
    Cube630_2: THREE.Mesh;
    Cube630_3: THREE.Mesh;
    Cube630_4: THREE.Mesh;
    Cube630_5: THREE.Mesh;
    Cube630_6: THREE.Mesh;
    Cube630_7: THREE.Mesh;
    Cube630_8: THREE.Mesh;
    Cube630_9: THREE.Mesh;
    Cube630_10: THREE.Mesh;
    Cube630_11: THREE.Mesh;
    Cube630_12: THREE.Mesh;
    Cube630_13: THREE.Mesh;
    Cube630_14: THREE.Mesh;
    Cube630_15: THREE.Mesh;
    Cube630_16: THREE.Mesh;
    Cube630_17: THREE.Mesh;
    Cube630_18: THREE.Mesh;
    Cube640: THREE.Mesh;
    Cube640_1: THREE.Mesh;
    Cube640_2: THREE.Mesh;
    Cube640_3: THREE.Mesh;
    Cube640_4: THREE.Mesh;
    Cube640_5: THREE.Mesh;
    Cube640_6: THREE.Mesh;
    Cube640_7: THREE.Mesh;
    Cube640_8: THREE.Mesh;
    Cube640_9: THREE.Mesh;
    Cube640_10: THREE.Mesh;
    Cube640_11: THREE.Mesh;
    Cube640_12: THREE.Mesh;
    Cube640_13: THREE.Mesh;
    Cube640_14: THREE.Mesh;
    Cube640_15: THREE.Mesh;
    Cube640_16: THREE.Mesh;
    Cube640_17: THREE.Mesh;
    Cube640_18: THREE.Mesh;
    Cube640_19: THREE.Mesh;
    Cube640_20: THREE.Mesh;
    Cube640_21: THREE.Mesh;
    Cube651: THREE.Mesh;
    Cube651_1: THREE.Mesh;
    Cube651_2: THREE.Mesh;
    Cube651_3: THREE.Mesh;
    Cube651_4: THREE.Mesh;
    Cube651_5: THREE.Mesh;
    Cube651_6: THREE.Mesh;
    Cube651_7: THREE.Mesh;
    Cube651_8: THREE.Mesh;
    Cube651_9: THREE.Mesh;
    Cube651_10: THREE.Mesh;
    Cube651_11: THREE.Mesh;
    Cube651_12: THREE.Mesh;
    Cube651_13: THREE.Mesh;
    Cube651_14: THREE.Mesh;
    Cube651_15: THREE.Mesh;
    Cube651_16: THREE.Mesh;
    Cube651_17: THREE.Mesh;
    Cube651_18: THREE.Mesh;
    Cube651_19: THREE.Mesh;
    Cube657: THREE.Mesh;
    Cube657_1: THREE.Mesh;
    Cube657_2: THREE.Mesh;
    Cube657_3: THREE.Mesh;
    Cube048: THREE.Mesh;
    Cube048_1: THREE.Mesh;
    Cube048_2: THREE.Mesh;
    Cube048_3: THREE.Mesh;
    Cube048_4: THREE.Mesh;
    Cube048_5: THREE.Mesh;
    Cube048_6: THREE.Mesh;
    Cube048_7: THREE.Mesh;
    Cube048_8: THREE.Mesh;
    Cube048_9: THREE.Mesh;
    Cube048_10: THREE.Mesh;
    Cube048_11: THREE.Mesh;
    Cube048_12: THREE.Mesh;
    Cube048_13: THREE.Mesh;
    Cube048_14: THREE.Mesh;
    Cube230: THREE.Mesh;
    Cube230_1: THREE.Mesh;
    Cube230_2: THREE.Mesh;
    Cube230_3: THREE.Mesh;
    Cube230_4: THREE.Mesh;
    Cube230_5: THREE.Mesh;
    Cube230_6: THREE.Mesh;
    Cube230_7: THREE.Mesh;
    Cube230_8: THREE.Mesh;
    Cube230_9: THREE.Mesh;
    Cube230_10: THREE.Mesh;
    Cube230_11: THREE.Mesh;
    Cube230_12: THREE.Mesh;
    Cube230_13: THREE.Mesh;
    Cube230_14: THREE.Mesh;
    Cube230_15: THREE.Mesh;
    Cube230_16: THREE.Mesh;
    Cube230_17: THREE.Mesh;
    Cube230_18: THREE.Mesh;
    Cube230_19: THREE.Mesh;
    Cube230_20: THREE.Mesh;
    Cube230_21: THREE.Mesh;
    Cube243: THREE.Mesh;
    Cube243_1: THREE.Mesh;
    Cube243_2: THREE.Mesh;
    Cube243_3: THREE.Mesh;
    Cube243_4: THREE.Mesh;
    Cube243_5: THREE.Mesh;
    Cube243_6: THREE.Mesh;
    Cube243_7: THREE.Mesh;
    Cube243_8: THREE.Mesh;
    Cube243_9: THREE.Mesh;
    Cube243_10: THREE.Mesh;
    Cube243_11: THREE.Mesh;
    Cube243_12: THREE.Mesh;
    Cube243_13: THREE.Mesh;
    Cube243_14: THREE.Mesh;
    Cube243_15: THREE.Mesh;
    Cube243_16: THREE.Mesh;
    Cube243_17: THREE.Mesh;
    Cube243_18: THREE.Mesh;
    Cube243_19: THREE.Mesh;
    Cube243_20: THREE.Mesh;
    Cube243_21: THREE.Mesh;
    Cube552: THREE.Mesh;
    Cube552_1: THREE.Mesh;
    Cube552_2: THREE.Mesh;
    Cube552_3: THREE.Mesh;
    Cube552_4: THREE.Mesh;
    Cube552_5: THREE.Mesh;
    Cube552_6: THREE.Mesh;
    Cube552_7: THREE.Mesh;
    Cube552_8: THREE.Mesh;
    Cube552_9: THREE.Mesh;
    Cube552_10: THREE.Mesh;
    Cube552_11: THREE.Mesh;
    Cube552_12: THREE.Mesh;
    Cube552_13: THREE.Mesh;
    Cube552_14: THREE.Mesh;
    Cube557: THREE.Mesh;
    Cube557_1: THREE.Mesh;
    Cube557_2: THREE.Mesh;
    Cube557_3: THREE.Mesh;
    Cube557_4: THREE.Mesh;
    Cube557_5: THREE.Mesh;
    Cube557_6: THREE.Mesh;
    Cube557_7: THREE.Mesh;
    Cube557_8: THREE.Mesh;
    Cube557_9: THREE.Mesh;
    Cube557_10: THREE.Mesh;
    Cube557_11: THREE.Mesh;
    Cube557_12: THREE.Mesh;
    Cube557_13: THREE.Mesh;
    Cube557_14: THREE.Mesh;
    Cube633: THREE.Mesh;
    Cube633_1: THREE.Mesh;
    Cube633_2: THREE.Mesh;
    Cube633_3: THREE.Mesh;
    Cube246: THREE.Mesh;
    Cube246_1: THREE.Mesh;
    Cube246_2: THREE.Mesh;
    Cube246_3: THREE.Mesh;
    Cube252_1: THREE.Mesh;
    Cube252_2: THREE.Mesh;
    Cube252_3: THREE.Mesh;
    Cube252_4: THREE.Mesh;
    Cube363: THREE.Mesh;
    Cube363_1: THREE.Mesh;
    Cube363_2: THREE.Mesh;
    Cube363_3: THREE.Mesh;
    Palette1022: THREE.Mesh;
    Palette1023: THREE.Mesh;
    Palette1024: THREE.Mesh;
    Palette1025: THREE.Mesh;
    Cube137: THREE.Mesh;
    Cube137_1: THREE.Mesh;
    Cube137_2: THREE.Mesh;
    Cube674: THREE.Mesh;
    Cube674_1: THREE.Mesh;
    Cube674_2: THREE.Mesh;
    Cube699: THREE.Mesh;
    Cube699_1: THREE.Mesh;
    Cube699_2: THREE.Mesh;
    Cube701: THREE.Mesh;
    Cube701_1: THREE.Mesh;
    Cube701_2: THREE.Mesh;
    Cube702: THREE.Mesh;
    Cube702_1: THREE.Mesh;
    Cube702_2: THREE.Mesh;
    Cube690: THREE.Mesh;
    Cube690_1: THREE.Mesh;
    Cube690_2: THREE.Mesh;
    Cube081_2: THREE.Mesh;
    Cube081_3: THREE.Mesh;
    Cube142: THREE.Mesh;
    Cube142_1: THREE.Mesh;
    Cube142_2: THREE.Mesh;
    Cube417: THREE.Mesh;
    Cube417_1: THREE.Mesh;
    Cube417_2: THREE.Mesh;
    Cube417_3: THREE.Mesh;
    Cube417_4: THREE.Mesh;
    Cube417_5: THREE.Mesh;
    Cube417_6: THREE.Mesh;
    Cube418: THREE.Mesh;
    Cube418_1: THREE.Mesh;
    Cube440: THREE.Mesh;
    Cube440_1: THREE.Mesh;
    Cube849: THREE.Mesh;
    Cube849_1: THREE.Mesh;
    Cube849_2: THREE.Mesh;
    Cube854: THREE.Mesh;
    Cube854_1: THREE.Mesh;
    Cube854_2: THREE.Mesh;
    Cube864: THREE.Mesh;
    Cube864_1: THREE.Mesh;
    Cube864_2: THREE.Mesh;
    Cube866: THREE.Mesh;
    Cube866_1: THREE.Mesh;
    Cube866_2: THREE.Mesh;
    Untitled019: THREE.Mesh;
    Untitled019_1: THREE.Mesh;
    Cube867: THREE.Mesh;
    Cube867_1: THREE.Mesh;
    Cube867_2: THREE.Mesh;
    Cube868: THREE.Mesh;
    Cube868_1: THREE.Mesh;
    Cube868_2: THREE.Mesh;
    Cube869: THREE.Mesh;
    Cube869_1: THREE.Mesh;
    Cube869_2: THREE.Mesh;
    Cube870: THREE.Mesh;
    Cube870_1: THREE.Mesh;
    Cube870_2: THREE.Mesh;
    Untitled020: THREE.Mesh;
    Untitled020_1: THREE.Mesh;
    Cube871: THREE.Mesh;
    Cube871_1: THREE.Mesh;
    Cube871_2: THREE.Mesh;
    Cube872: THREE.Mesh;
    Cube872_1: THREE.Mesh;
    Cube872_2: THREE.Mesh;
    Cube873: THREE.Mesh;
    Cube873_1: THREE.Mesh;
    Cube873_2: THREE.Mesh;
    Cube874: THREE.Mesh;
    Cube874_1: THREE.Mesh;
    Untitled021: THREE.Mesh;
    Untitled021_1: THREE.Mesh;
    Cube875: THREE.Mesh;
    Cube875_1: THREE.Mesh;
    Cube875_2: THREE.Mesh;
    Cube876: THREE.Mesh;
    Cube876_1: THREE.Mesh;
    Cube876_2: THREE.Mesh;
    Cube877: THREE.Mesh;
    Cube877_1: THREE.Mesh;
    Cube877_2: THREE.Mesh;
    Cube878: THREE.Mesh;
    Cube878_1: THREE.Mesh;
    Cube878_2: THREE.Mesh;
    Untitled022: THREE.Mesh;
    Untitled022_1: THREE.Mesh;
    Cube879: THREE.Mesh;
    Cube879_1: THREE.Mesh;
    Cube879_2: THREE.Mesh;
    Cube882: THREE.Mesh;
    Cube882_1: THREE.Mesh;
    Cube882_2: THREE.Mesh;
    Cube883: THREE.Mesh;
    Cube883_1: THREE.Mesh;
    Cube883_2: THREE.Mesh;
    Cube888: THREE.Mesh;
    Cube888_1: THREE.Mesh;
    Untitled023: THREE.Mesh;
    Untitled023_1: THREE.Mesh;
    Cube889: THREE.Mesh;
    Cube889_1: THREE.Mesh;
    Cube889_2: THREE.Mesh;
    Cube890: THREE.Mesh;
    Cube890_1: THREE.Mesh;
    Cube890_2: THREE.Mesh;
    Cube891: THREE.Mesh;
    Cube891_1: THREE.Mesh;
    Cube891_2: THREE.Mesh;
    Cube892: THREE.Mesh;
    Cube892_1: THREE.Mesh;
    Untitled024: THREE.Mesh;
    Untitled024_1: THREE.Mesh;
    Cube897: THREE.Mesh;
    Cube897_1: THREE.Mesh;
    Cube897_2: THREE.Mesh;
    Cube897_3: THREE.Mesh;
    Cube897_4: THREE.Mesh;
    Cube897_5: THREE.Mesh;
    Cube898: THREE.Mesh;
    Cube898_1: THREE.Mesh;
    Cube899: THREE.Mesh;
    Cube899_1: THREE.Mesh;
    Cube899_2: THREE.Mesh;
    Untitled026: THREE.Mesh;
    Untitled026_1: THREE.Mesh;
    Cube442: THREE.Mesh;
    Cube442_1: THREE.Mesh;
    Cube444: THREE.Mesh;
    Cube444_1: THREE.Mesh;
    Cube444_2: THREE.Mesh;
    Untitled017: THREE.Mesh;
    Untitled017_1: THREE.Mesh;
    Cube658: THREE.Mesh;
    Cube658_1: THREE.Mesh;
    Cube667: THREE.Mesh;
    Cube667_1: THREE.Mesh;
    Cube669: THREE.Mesh;
    Cube669_1: THREE.Mesh;
    Cube669_2: THREE.Mesh;
    Cube480: THREE.Mesh;
    Cube480_1: THREE.Mesh;
    Cube480_2: THREE.Mesh;
    Plane: THREE.Mesh;
    Cylinder030: THREE.Mesh;
    Cylinder076: THREE.Mesh;
    Cylinder077: THREE.Mesh;
    Cylinder078: THREE.Mesh;
    Cylinder079: THREE.Mesh;
    Cylinder080: THREE.Mesh;
    Cylinder081: THREE.Mesh;
    Cylinder082: THREE.Mesh;
    Cylinder064: THREE.Mesh;
    Cylinder083: THREE.Mesh;
    Cylinder084: THREE.Mesh;
    Cylinder085: THREE.Mesh;
    Cylinder086: THREE.Mesh;
    Cylinder087: THREE.Mesh;
    Cylinder088: THREE.Mesh;
    Cylinder089: THREE.Mesh;
    Cylinder090: THREE.Mesh;
    Cylinder091: THREE.Mesh;
    Cylinder092: THREE.Mesh;
  };
  materials: {
    ["hblaugrau.001"]: THREE.MeshStandardMaterial;
    ["Lampe.001"]: THREE.MeshStandardMaterial;
    ["dgrau.001"]: THREE.MeshStandardMaterial;
    hblaugrau: THREE.MeshStandardMaterial;
    ["schwarz.014"]: THREE.MeshStandardMaterial;
    ["schwarz.011"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Haut.002"]: THREE.MeshStandardMaterial;
    ["schwarz.013"]: THREE.MeshStandardMaterial;
    ["weiss.014"]: THREE.MeshStandardMaterial;
    ["braun.014"]: THREE.MeshStandardMaterial;
    ["weiß-metall.006"]: THREE.MeshStandardMaterial;
    ["Rzo_Hair.002"]: THREE.MeshStandardMaterial;
    ["Haut.002"]: THREE.MeshStandardMaterial;
    ["dblau.012"]: THREE.MeshStandardMaterial;
    ["Haut.001"]: THREE.MeshStandardMaterial;
    ["weiss.013"]: THREE.MeshStandardMaterial;
    ["braun.013"]: THREE.MeshStandardMaterial;
    ["schwarz.010"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["weiß-metall.005"]: THREE.MeshStandardMaterial;
    ["Rzo_Hair.001"]: THREE.MeshStandardMaterial;
    ["Haut.001"]: THREE.MeshStandardMaterial;
    ["weiss.001"]: THREE.MeshStandardMaterial;
    braun: THREE.MeshStandardMaterial;
    schwarz: THREE.MeshStandardMaterial;
    Glas: THREE.MeshPhysicalMaterial;
    ["weiss.004"]: THREE.MeshStandardMaterial;
    ["metall.002"]: THREE.MeshStandardMaterial;
    ["schwarz.007"]: THREE.MeshStandardMaterial;
    ["weiß-metall.001"]: THREE.MeshStandardMaterial;
    ["Bildschirmleuchten.002"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["dblau.stoff.001"]: THREE.MeshStandardMaterial;
    ["schwarz.023"]: THREE.MeshStandardMaterial;
    ["schwarz.018"]: THREE.MeshStandardMaterial;
    Bildschirmleuchten: THREE.MeshStandardMaterial;
    ["graublau.hell"]: THREE.MeshStandardMaterial;
    brick: THREE.MeshStandardMaterial;
    metall: THREE.MeshStandardMaterial;
    Holz: THREE.MeshStandardMaterial;
    Pullover_rot: THREE.MeshStandardMaterial;
    ["metall-weiß"]: THREE.MeshStandardMaterial;
    ["schwarz.002"]: THREE.MeshStandardMaterial;
    drot: THREE.MeshStandardMaterial;
    weiss: THREE.MeshStandardMaterial;
    ["metall-weiß.002"]: THREE.MeshStandardMaterial;
    ["metall-grau"]: THREE.MeshStandardMaterial;
    ["Plasti.weiß.001"]: THREE.MeshPhysicalMaterial;
    ["orange.002"]: THREE.MeshStandardMaterial;
    dblau: THREE.MeshStandardMaterial;
    graublau: THREE.MeshStandardMaterial;
    ["metall.007"]: THREE.MeshStandardMaterial;
    ["schwarz.001"]: THREE.MeshStandardMaterial;
    NMHblau: THREE.MeshStandardMaterial;
    ["gruen.001"]: THREE.MeshStandardMaterial;
    ["graublau.001"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["braun.003"]: THREE.MeshStandardMaterial;
    ["dblau.003"]: THREE.MeshStandardMaterial;
    ["dgrau.003"]: THREE.MeshStandardMaterial;
    fenster: THREE.MeshStandardMaterial;
    ["Plastik-weiss"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["schwarz.005"]: THREE.MeshStandardMaterial;
    ["metall.010"]: THREE.MeshStandardMaterial;
    ["Gitter-blau"]: THREE.MeshStandardMaterial;
    ["Maschine innen"]: THREE.MeshStandardMaterial;
    ["braun.001"]: THREE.MeshStandardMaterial;
    ["NMHblau.003"]: THREE.MeshStandardMaterial;
    ["metall-grau.001"]: THREE.MeshStandardMaterial;
    ["dblau.006"]: THREE.MeshStandardMaterial;
    ["scheinwerfer.003"]: THREE.MeshStandardMaterial;
    ["rueckleuchten.001"]: THREE.MeshStandardMaterial;
    ["metall.008"]: THREE.MeshStandardMaterial;
    jeans: THREE.MeshStandardMaterial;
    ["hblaugrau.Fertigung.001"]: THREE.MeshStandardMaterial;
    ["dblau.metal"]: THREE.MeshStandardMaterial;
    boden: THREE.MeshStandardMaterial;
    ["gelb.002"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
  };
};

export function Kunststoff(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/kunststoff.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[143.509, 0.111, -147.388]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.356, 0.946, 0.552]}
      >
        <mesh geometry={nodes.Cube658.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube658_1.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[113.193, 0.141, -140.883]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[5.273, 1, 0.092]}
      >
        <mesh
          geometry={nodes.Cube667.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube667_1.geometry}
          material={materials["hblaugrau.Fertigung.001"]}
        />
        <group
          position={[0.261, 0.514, 0.059]}
          rotation={[0, -1.571, 0]}
          scale={[2.23, 1.464, 0.262]}
        >
          <mesh
            geometry={nodes.Cube669.geometry}
            material={materials["weiss.001"]}
          />
          <mesh
            geometry={nodes.Cube669_1.geometry}
            material={materials.metall}
          />
          <mesh
            geometry={nodes.Cube669_2.geometry}
            material={materials.graublau}
          />
        </group>
      </group>
      <group
        position={[126.703, 2.448, -146.762]}
        rotation={[0, 1.571, 0]}
        scale={[0.224, 0.035, 0.609]}
      >
        <mesh
          geometry={nodes.Cube480.geometry}
          material={materials["dblau.metal"]}
        />
        <mesh
          geometry={nodes.Cube480_1.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube480_2.geometry}
          material={materials.NMHblau}
        />
      </group>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials.boden}
        position={[143.2, -0.88, -140.898]}
      />
      <mesh
        geometry={nodes.Cylinder030.geometry}
        material={materials["gelb.002"]}
        position={[129.678, -0.261, -144.27]}
        scale={[-0.057, -0.07, -0.057]}
      />
      <mesh
        geometry={nodes.Cylinder076.geometry}
        material={materials["gelb.002"]}
        position={[139.442, -0.261, -144.27]}
        scale={[-0.057, -0.07, -0.057]}
      />
      <mesh
        geometry={nodes.Cylinder077.geometry}
        material={materials["schwarz.011"]}
        position={[132.277, -0.261, -144.116]}
        scale={[-0.057, -0.07, -0.057]}
      />
      <mesh
        geometry={nodes.Cylinder078.geometry}
        material={materials["schwarz.011"]}
        position={[127.017, -0.261, -144.038]}
        scale={[-0.057, -0.07, -0.057]}
      />
      <mesh
        geometry={nodes.Cylinder079.geometry}
        material={materials["default"]}
        position={[124.346, -0.261, -143.78]}
        scale={[-0.057, -0.07, -0.057]}
      />
      <mesh
        geometry={nodes.Cylinder080.geometry}
        material={materials["gelb.002"]}
        position={[134.738, -0.261, -144.27]}
        scale={[-0.057, -0.07, -0.057]}
      />
      <mesh
        geometry={nodes.Cylinder081.geometry}
        material={materials["schwarz.011"]}
        position={[137.757, -0.449, -143.404]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.Cylinder082.geometry}
        material={materials["schwarz.011"]}
        position={[133.092, -0.449, -143.208]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.Cylinder064.geometry}
        material={materials["schwarz.011"]}
        position={[124.177, -0.261, -136.671]}
        scale={[-0.057, -0.07, -0.057]}
      />
      <mesh
        geometry={nodes.Cylinder083.geometry}
        material={materials["gelb.002"]}
        position={[127.558, -0.261, -136.997]}
        scale={[-0.057, -0.07, -0.057]}
      />
      <mesh
        geometry={nodes.Cylinder084.geometry}
        material={materials["gelb.002"]}
        position={[126.774, -0.449, -137.744]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.Cylinder085.geometry}
        material={materials["schwarz.011"]}
        position={[128.53, -0.449, -137.508]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.Cylinder086.geometry}
        material={materials["schwarz.011"]}
        position={[122.822, -0.449, -137.296]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.Cylinder087.geometry}
        material={materials["gelb.002"]}
        position={[132.729, -0.261, -136.647]}
        scale={[-0.057, -0.07, -0.057]}
      />
      <mesh
        geometry={nodes.Cylinder088.geometry}
        material={materials["schwarz.011"]}
        position={[132.729, -0.261, -136.647]}
        scale={[-0.057, -0.07, -0.057]}
      />
      <mesh
        geometry={nodes.Cylinder089.geometry}
        material={materials["gelb.002"]}
        position={[137.56, -0.261, -136.899]}
        scale={[-0.057, -0.07, -0.057]}
      />
      <mesh
        geometry={nodes.Cylinder090.geometry}
        material={materials["schwarz.011"]}
        position={[135.435, -0.449, -137.508]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.Cylinder091.geometry}
        material={materials["schwarz.011"]}
        position={[141.188, -0.449, -137.522]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.018}
      />
      <mesh
        geometry={nodes.Cylinder092.geometry}
        material={materials["gelb.002"]}
        position={[137.56, -0.261, -136.899]}
        scale={[-0.057, -0.07, -0.057]}
      />
      <group position={[120.126, 4.94, -136.55]} scale={[5.036, 0.03, 0.151]}>
        <mesh
          geometry={nodes.Cube008.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube008_1.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube008_2.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
      <group position={[107.108, 4.924, -136.596]} scale={[5.036, 0.03, 0.151]}>
        <mesh
          geometry={nodes.Cube009.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube009_1.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube009_2.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
      <group position={[122.689, 5.638, -137.005]} scale={[2.93, 3.227, 3.412]}>
        <mesh
          geometry={nodes.Cube154.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube154_1.geometry}
          material={materials["schwarz.014"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube184.geometry}
        material={materials.hblaugrau}
        position={[124.993, 8.706, -141.19]}
        scale={[24.158, 3.294, 6.742]}
      />
      <mesh
        geometry={nodes.Cylinder022.geometry}
        material={materials.hblaugrau}
        position={[138.21, 5.265, -140.773]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[-0.712, -7.653, -1.433]}
      />
      <group
        position={[145.585, 0.129, -139.246]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.164, 0.997, 0.436]}
      >
        <mesh
          geometry={nodes.Cube600.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube600_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[143.884, 0.627, -136.665]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[4.053, 1.363, 0.092]}
      >
        <mesh
          geometry={nodes.Cube501.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube501_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube501_2.geometry} material={materials.Glas} />
      </group>
      <group
        position={[143.884, 0.627, -148.543]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[4.015, 1.363, 0.092]}
      >
        <mesh
          geometry={nodes.Cube502.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube502_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube502_2.geometry} material={materials.Glas} />
      </group>
      <group
        position={[146.892, 0.613, -140.501]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[5.186, 1.393, 0.092]}
      >
        <mesh
          geometry={nodes.Cube509.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube509_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube509_2.geometry} material={materials.Glas} />
      </group>
      <group
        position={[144.697, -0.126, -141.836]}
        rotation={[0, -1.571, 0]}
        scale={[0.154, 0.74, 0.416]}
      >
        <mesh
          geometry={nodes.Cube367.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube367_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[146.904, 0.318, -140.586]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.404, 0.02, 0.673]}
      >
        <mesh
          geometry={nodes.Cube479.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube479_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube479_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube479_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube479_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube479_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube479_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube479_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube479_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[146.31, -0.126, -135.78]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.134, 0.74, 0.416]}
      >
        <mesh
          geometry={nodes.Cube495.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube495_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[148.638, -0.061, -136.596]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.162, 0.805, 0.37]}
      >
        <mesh
          geometry={nodes.Cube498.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube498_1.geometry} material={materials.braun} />
      </group>
      <group position={[148.012, 0.422, -144.81]} scale={[0.48, 0.02, 0.673]}>
        <mesh
          geometry={nodes.Cube506.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube506_1.geometry}
          material={materials["metall.002"]}
        />
      </group>
      <group
        position={[146.209, 0.112, -145.063]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.165, 0.877, 0.325]}
      >
        <mesh
          geometry={nodes.Cube508.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube508_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[147.518, 0.476, -141.882]}
        rotation={[Math.PI, 1.254, -Math.PI / 2]}
        scale={[0.22, 0.012, 0.298]}
      >
        <mesh
          geometry={nodes.Cube325.geometry}
          material={materials["schwarz.018"]}
        />
        <mesh
          geometry={nodes.Cube325_1.geometry}
          material={materials.Bildschirmleuchten}
        />
      </group>
      <group
        position={[146.919, -0.758, -142.29]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.198, 1.164, 0.601]}
      >
        <mesh
          geometry={nodes.Cube081.geometry}
          material={materials["graublau.hell"]}
        />
        <mesh
          geometry={nodes.Cube081_1.geometry}
          material={materials["metall.002"]}
        />
      </group>
      <group
        position={[145.56, -0.765, -145.32]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.154, 0.909, 0.469]}
      >
        <mesh
          geometry={nodes.Cube511.geometry}
          material={materials["graublau.hell"]}
        />
        <mesh
          geometry={nodes.Cube511_1.geometry}
          material={materials["metall.002"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube103.geometry}
        material={materials.brick}
        position={[144.303, -0.758, -142.052]}
        scale={0.041}
      />
      <group position={[144.268, -0.758, -137.177]} scale={0.041}>
        <mesh geometry={nodes.Cube482.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube482_1.geometry} material={materials.Glas} />
      </group>
      <mesh
        geometry={nodes.Cube284.geometry}
        material={materials.hblaugrau}
        position={[146.494, -0.758, -134.264]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.034, 0.041, 0.041]}
      />
      <group position={[147.802, 0.106, -141.059]} scale={0.028}>
        <mesh geometry={nodes.Cube499.geometry} material={materials.Holz} />
        <mesh
          geometry={nodes.Cube499_1.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[147.859, 0.087, -141.031]}
        rotation={[Math.PI, -0.26, Math.PI]}
        scale={[-0.142, -0.015, -0.142]}
      >
        <mesh geometry={nodes.Cube503.geometry} material={materials.schwarz} />
        <mesh
          geometry={nodes.Cube503_1.geometry}
          material={materials.Pullover_rot}
        />
      </group>
      <mesh
        geometry={nodes.Cube287.geometry}
        material={materials["schwarz.018"]}
        position={[147.523, 0.539, -141.967]}
        scale={0.018}
      />
      <group
        position={[147.398, 0.432, -145.445]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.411, 0.021, 0.684]}
      >
        <mesh
          geometry={nodes.Cube571.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube571_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube571_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube571_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube571_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube571_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube571_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube571_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube571_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[144.315, 0.655, -140.575]}
        scale={[0.411, 0.021, 0.684]}
      >
        <mesh
          geometry={nodes.Cube572.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube572_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube572_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube572_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube572_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube572_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube572_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube572_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube572_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group position={[144.23, 0.318, -134.929]} scale={[0.404, 0.02, 0.673]}>
        <mesh
          geometry={nodes.Cube574.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube574_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube574_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube574_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube574_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube574_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube574_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube574_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube574_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group position={[146.501, 0.318, -136.04]} scale={[0.404, 0.02, 0.673]}>
        <mesh
          geometry={nodes.Cube575.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube575_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube575_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube575_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube575_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube575_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube575_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube575_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube575_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[145.184, 0.008, -140.564]}
        rotation={[0, -1.458, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube505.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube505_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube505_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube513.geometry}
            material={materials["schwarz.013"]}
          />
          <mesh
            geometry={nodes.Cube513_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube513_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[-0.19, 0, 0]}>
          <mesh
            geometry={nodes.Cube524.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube524_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[-0.022, 0, 0]}>
          <mesh
            geometry={nodes.Cube525.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube525_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube525_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]} rotation={[0, -0.508, 0]}>
          <mesh
            geometry={nodes.Untitled034.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled034_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[147.213, -0.419, -136.057]}
        rotation={[-Math.PI / 2, -1.432, -Math.PI / 2]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube529.geometry}
          material={materials["dblau.012"]}
        />
        <mesh
          geometry={nodes.Cube529_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube529_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube529_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube529_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube529_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube540.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube540_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube540_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube558.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube558_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled035.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled035_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[147.342, -0.352, -144.812]}
        rotation={[-3.003, 0, -Math.PI]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube535.geometry}
          material={materials["dblau.012"]}
        />
        <mesh
          geometry={nodes.Cube535_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube535_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube535_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube535_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube535_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube559.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube559_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube565.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube565_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube565_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled036.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled036_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[141.368, 2.905, -134.37]}
        rotation={[0, 0, -Math.PI]}
        scale={[-14.082, -0.024, -0.029]}
      >
        <mesh
          geometry={nodes.Cube272.geometry}
          material={materials["metall-grau"]}
        />
        <mesh
          geometry={nodes.Cube272_1.geometry}
          material={materials["Plasti.weiß.001"]}
        />
        <mesh
          geometry={nodes.Cube272_2.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[141.499, 2.905, -146.958]}
        scale={[14.082, 0.024, 0.029]}
      >
        <mesh
          geometry={nodes.Cube103_1.geometry}
          material={materials["metall-grau"]}
        />
        <mesh
          geometry={nodes.Cube103_2.geometry}
          material={materials["Plasti.weiß.001"]}
        />
        <mesh
          geometry={nodes.Cube103_3.geometry}
          material={materials.schwarz}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder032.geometry}
        material={materials["Plasti.weiß.001"]}
        position={[141.247, 2.723, -134.576]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.072, 12.335, 0.072]}
      />
      <mesh
        geometry={nodes.Cylinder033.geometry}
        material={materials["Plasti.weiß.001"]}
        position={[141.247, 2.723, -146.641]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.072, 12.335, 0.072]}
      />
      <group
        position={[120.094, 3.711, -140.662]}
        scale={[-0.224, -0.224, -0.212]}
      >
        <mesh
          geometry={nodes.Cube051.geometry}
          material={materials["orange.002"]}
        />
        <mesh geometry={nodes.Cube051_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[120.095, 3.894, -140.672]}
        scale={[0.427, 0.122, 0.223]}
      >
        <mesh geometry={nodes.Cube079.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube079_1.geometry} material={materials.metall} />
      </group>
      <mesh
        geometry={nodes.wandstreben001.geometry}
        material={materials.graublau}
        position={[113.275, 5.17, -140.66]}
        scale={[0.029, 3.003, 0.07]}
      />
      <mesh
        geometry={nodes.wandstreben002.geometry}
        material={materials.graublau}
        position={[113.301, 4.943, -140.66]}
        scale={[0.029, 3.094, 0.07]}
      />
      <mesh
        geometry={nodes.wandstreben003.geometry}
        material={materials.graublau}
        position={[143.999, 3.485, -140.776]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.029, 16.562, 0.07]}
      />
      <group
        position={[113.36, 4.943, -140.672]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.029, -3.094, -0.07]}
      >
        <mesh geometry={nodes.Cube164.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube164_1.geometry}
          material={materials.hblaugrau}
        />
      </group>
      <group position={[113.722, 1.747, -139.004]} scale={-0.042}>
        <mesh
          geometry={nodes.Cube581.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh
          geometry={nodes.Cube581_1.geometry}
          material={materials["schwarz.002"]}
        />
        <mesh geometry={nodes.Cube581_2.geometry} material={materials.drot} />
      </group>
      <group position={[113.698, 2.21, -136.319]} scale={[0.191, 0.191, 0.158]}>
        <mesh
          geometry={nodes.Cube596.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh
          geometry={nodes.Cube596_1.geometry}
          material={materials["schwarz.002"]}
        />
        <mesh geometry={nodes.Cube596_2.geometry} material={materials.drot} />
      </group>
      <group position={[113.698, 2.21, -139.583]} scale={[0.201, 0.191, 0.173]}>
        <mesh
          geometry={nodes.Cube629.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh
          geometry={nodes.Cube629_1.geometry}
          material={materials["schwarz.002"]}
        />
        <mesh geometry={nodes.Cube629_2.geometry} material={materials.drot} />
      </group>
      <group position={[113.715, 2.235, -137.185]} scale={0.188}>
        <mesh geometry={nodes.Cylinder052.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cylinder052_1.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cylinder052_2.geometry}
          material={materials["graublau.hell"]}
        />
        <mesh
          geometry={nodes.Cylinder052_3.geometry}
          material={materials.weiss}
        />
      </group>
      <group position={[113.715, 2.286, -139.185]} scale={0.235}>
        <mesh geometry={nodes.Cylinder053.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cylinder053_1.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cylinder053_2.geometry}
          material={materials["graublau.hell"]}
        />
        <mesh
          geometry={nodes.Cylinder053_3.geometry}
          material={materials.weiss}
        />
      </group>
      <group position={[113.713, 2.237, -138.553]} scale={0.188}>
        <mesh geometry={nodes.Cylinder054.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cylinder054_1.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cylinder054_2.geometry}
          material={materials["graublau.hell"]}
        />
        <mesh
          geometry={nodes.Cylinder054_3.geometry}
          material={materials.weiss}
        />
      </group>
      <group position={[113.719, 2.235, -135.939]} scale={0.188}>
        <mesh geometry={nodes.Cylinder049.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cylinder049_1.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cylinder049_2.geometry}
          material={materials["graublau.hell"]}
        />
        <mesh
          geometry={nodes.Cylinder049_3.geometry}
          material={materials.weiss}
        />
      </group>
      <mesh
        geometry={nodes.Cube116.geometry}
        material={materials["metall-weiß.002"]}
        position={[114.506, 1.56, -137.026]}
        scale={[1.204, 0.075, 2.829]}
      />
      <mesh
        geometry={nodes.Cube118.geometry}
        material={materials["metall-weiß.002"]}
        position={[115.648, -0.542, -134.304]}
        scale={[0.062, 0.411, 0.062]}
      />
      <mesh
        geometry={nodes.Cube119.geometry}
        material={materials["metall-weiß.002"]}
        position={[113.425, 1.807, -139.866]}
        scale={[0.032, 0.208, 0.032]}
      />
      <mesh
        geometry={nodes.Cube120.geometry}
        material={materials["metall-weiß.002"]}
        position={[115.703, 1.807, -135.464]}
        scale={[0.032, 0.208, 0.032]}
      />
      <mesh
        geometry={nodes.Cube121.geometry}
        material={materials["metall-weiß.002"]}
        position={[115.7, 1.807, -139.865]}
        scale={[0.032, 0.208, 0.032]}
      />
      <mesh
        geometry={nodes.Cube122.geometry}
        material={materials["metall-weiß.002"]}
        position={[115.701, 2.213, -139.672]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.032, 0.183, 0.032]}
      />
      <mesh
        geometry={nodes.Cube123.geometry}
        material={materials["metall-weiß.002"]}
        position={[115.701, 2.213, -135.384]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.032, 0.063, 0.032]}
      />
      <mesh
        geometry={nodes.Cube124.geometry}
        material={materials["metall-weiß.002"]}
        position={[113.558, 2.213, -139.864]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.032, 0.12, 0.032]}
      />
      <mesh
        geometry={nodes.Cube127.geometry}
        material={materials["metall-weiß.002"]}
        position={[115.951, 1.374, -135.933]}
        scale={[0.199, 0.027, 0.437]}
      />
      <mesh
        geometry={nodes.Cube128.geometry}
        material={materials["metall-weiß.002"]}
        position={[116.124, 1.126, -136.377]}
        rotation={[Math.PI / 2, 0.798, Math.PI]}
        scale={[0.118, 0.018, 0.7]}
      />
      <mesh
        geometry={nodes.Cube130.geometry}
        material={materials["metall-weiß.002"]}
        position={[117.984, -0.337, -136.379]}
        scale={[0.032, 0.208, 0.022]}
      />
      <group
        position={[137.768, -0.016, -144.048]}
        scale={[0.432, 0.473, 0.707]}
      >
        <mesh
          geometry={nodes.Cube636.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube636_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube636_2.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube636_3.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube636_4.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube636_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube636_6.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube636_7.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube636_8.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube636_9.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube636_10.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube636_11.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
      </group>
      <group
        position={[141.185, -0.016, -137.022]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.432, -0.473, -0.707]}
      >
        <mesh
          geometry={nodes.Cube191.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube191_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube191_2.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube191_3.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube191_4.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube191_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube191_6.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube191_7.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube191_8.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube191_9.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube191_10.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube191_11.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube191_12.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube191_13.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube191_14.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube191_15.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube191_16.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube191_17.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube191_18.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[135.504, -0.016, -143.98]}
        scale={[0.432, 0.473, 0.707]}
      >
        <mesh
          geometry={nodes.Cube046.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube046_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube046_2.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube046_3.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube046_4.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube046_5.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube046_6.geometry}
          material={materials["Gitter-blau"]}
        />
      </group>
      <group
        position={[133.034, -0.016, -143.855]}
        scale={[0.432, 0.473, 0.707]}
      >
        <mesh
          geometry={nodes.Cube143.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube143_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube143_2.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube143_3.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube143_4.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube143_5.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube143_6.geometry}
          material={materials["Gitter-blau"]}
        />
      </group>
      <group
        position={[130.441, -0.016, -144.018]}
        scale={[0.432, 0.473, 0.707]}
      >
        <mesh
          geometry={nodes.Cube169.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube169_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube169_2.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube169_3.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube169_4.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube169_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube169_6.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube169_7.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube169_8.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube169_9.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube169_10.geometry}
          material={materials["Maschine innen"]}
        />
        <mesh
          geometry={nodes.Cube169_11.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube169_12.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube169_13.geometry}
          material={materials["Gitter-blau"]}
        />
        <mesh
          geometry={nodes.Cube169_14.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube169_15.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube169_16.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube169_17.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube169_18.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube169_19.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube169_20.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[136.805, -0.016, -137.12]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.432, 0.473, 0.707]}
      >
        <mesh
          geometry={nodes.Cube227.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube227_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube227_2.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube227_3.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube227_4.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube227_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube227_6.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube227_7.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube227_8.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube227_9.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube227_10.geometry}
          material={materials["Maschine innen"]}
        />
        <mesh
          geometry={nodes.Cube227_11.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube227_12.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube227_13.geometry}
          material={materials["Gitter-blau"]}
        />
        <mesh
          geometry={nodes.Cube227_14.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube227_15.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube227_16.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube227_17.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube227_18.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube227_19.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube227_20.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[128.529, -0.016, -136.968]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.432, -0.473, -0.707]}
      >
        <mesh
          geometry={nodes.Cube244.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube244_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube244_2.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube244_3.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube244_4.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube244_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube244_6.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube244_7.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube244_8.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube244_9.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube244_10.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube244_11.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube244_12.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube244_13.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube244_14.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube244_15.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube244_16.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube244_17.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube244_18.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[131.951, -0.016, -136.878]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.432, 0.473, 0.707]}
      >
        <mesh
          geometry={nodes.Cube245.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube245_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube245_2.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube245_3.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube245_4.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube245_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube245_6.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube245_7.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube245_8.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube245_9.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube245_10.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube245_11.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube245_12.geometry}
          material={materials["Gitter-blau"]}
        />
        <mesh
          geometry={nodes.Cube245_13.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube245_14.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube245_15.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube245_16.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube245_17.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube245_18.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube245_19.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[119.421, -0.114, -136.508]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.432, 0.473, 0.662]}
      >
        <mesh
          geometry={nodes.Cube630.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube630_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube630_2.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube630_3.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube630_4.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube630_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube630_6.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube630_7.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube630_8.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube630_9.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube630_10.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube630_11.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube630_12.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube630_13.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube630_14.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube630_15.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube630_16.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube630_17.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube630_18.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group position={[139.885, 0.46, -136.828]} scale={[0.432, 0.473, 0.707]}>
        <mesh
          geometry={nodes.Cube640.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube640_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube640_2.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube640_3.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube640_4.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube640_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube640_6.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube640_7.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube640_8.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube640_9.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube640_10.geometry}
          material={materials["Maschine innen"]}
        />
        <mesh
          geometry={nodes.Cube640_11.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube640_12.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube640_13.geometry}
          material={materials["Gitter-blau"]}
        />
        <mesh geometry={nodes.Cube640_14.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube640_15.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube640_16.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube640_17.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube640_18.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube640_19.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube640_20.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube640_21.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[124.872, -0.016, -136.39]}
        scale={[0.432, 0.473, 0.707]}
      >
        <mesh
          geometry={nodes.Cube651.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube651_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube651_2.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube651_3.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube651_4.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube651_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube651_6.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube651_7.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube651_8.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube651_9.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube651_10.geometry}
          material={materials["Maschine innen"]}
        />
        <mesh
          geometry={nodes.Cube651_11.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube651_12.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube651_13.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube651_14.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube651_15.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube651_16.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube651_17.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube651_18.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube651_19.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[132.04, -0.016, -136.874]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.432, 0.473, 0.707]}
      >
        <mesh geometry={nodes.Cube657.geometry} material={materials.NMHblau} />
        <mesh
          geometry={nodes.Cube657_1.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube657_2.geometry}
          material={materials["Maschine innen"]}
        />
        <mesh
          geometry={nodes.Cube657_3.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[139.288, -0.059, -144.247]}
        scale={[0.558, 0.703, 0.599]}
      >
        <mesh
          geometry={nodes.Cube048.geometry}
          material={materials["Gitter-blau"]}
        />
        <mesh geometry={nodes.Cube048_1.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube048_2.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube048_3.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube048_4.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube048_5.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube048_6.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube048_7.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube048_8.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube048_9.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube048_10.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube048_11.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube048_12.geometry}
          material={materials["Maschine innen"]}
        />
        <mesh
          geometry={nodes.Cube048_13.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube048_14.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
      </group>
      <group
        position={[134.526, -0.05, -136.528]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.558, -0.703, -0.599]}
      >
        <mesh
          geometry={nodes.Cube230.geometry}
          material={materials["Gitter-blau"]}
        />
        <mesh geometry={nodes.Cube230_1.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube230_2.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube230_3.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube230_4.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube230_5.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube230_6.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube230_7.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube230_8.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube230_9.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube230_10.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube230_11.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube230_12.geometry}
          material={materials["Maschine innen"]}
        />
        <mesh
          geometry={nodes.Cube230_13.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube230_14.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube230_15.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube230_16.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube230_17.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube230_18.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube230_19.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube230_20.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube230_21.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[127.672, -0.058, -136.711]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.558, 0.703, 0.599]}
      >
        <mesh
          geometry={nodes.Cube243.geometry}
          material={materials["Gitter-blau"]}
        />
        <mesh geometry={nodes.Cube243_1.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube243_2.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube243_3.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube243_4.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube243_5.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube243_6.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube243_7.geometry}
          material={materials["Material.007"]}
        />
        <mesh geometry={nodes.Cube243_8.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube243_9.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube243_10.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube243_11.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube243_12.geometry}
          material={materials["Maschine innen"]}
        />
        <mesh
          geometry={nodes.Cube243_13.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube243_14.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube243_15.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube243_16.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube243_17.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube243_18.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube243_19.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube243_20.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube243_21.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[134.601, -0.059, -144.302]}
        scale={[0.558, 0.703, 0.599]}
      >
        <mesh
          geometry={nodes.Cube552.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube552_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube552_2.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube552_3.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube552_4.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube552_5.geometry}
          material={materials["Maschine innen"]}
        />
        <mesh
          geometry={nodes.Cube552_6.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube552_7.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube552_8.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube552_9.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube552_10.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube552_11.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube552_12.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube552_13.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube552_14.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[132.12, -0.059, -144.175]}
        scale={[0.558, 0.703, 0.599]}
      >
        <mesh
          geometry={nodes.Cube557.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube557_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube557_2.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube557_3.geometry}
          material={materials["gruen.001"]}
        />
        <mesh
          geometry={nodes.Cube557_4.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube557_5.geometry}
          material={materials["Maschine innen"]}
        />
        <mesh
          geometry={nodes.Cube557_6.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube557_7.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube557_8.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube557_9.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube557_10.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube557_11.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube557_12.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube557_13.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube557_14.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[140.57, 0.534, -144.397]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube548.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube548_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube548_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube548_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.574, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube550.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube550_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube550_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube550_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube550_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[138.094, 0.534, -144.476]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube296.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube296_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube296_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube296_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.574, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube297_1.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube297_2.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube297_3.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube297_4.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube297_5.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[135.883, 0.534, -144.454]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube306_1.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube306_2.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube306_3.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube306_4.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.573, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube308_1.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube308_2.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube308_3.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube308_4.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube308_5.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[133.403, 0.534, -144.322]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube538.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube538_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube538_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube538_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.574, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube592.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube592_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube592_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube592_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube592_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[130.835, 0.534, -144.488]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube593.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube593_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube593_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube593_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.574, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube603.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube603_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube603_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube603_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube603_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[128.175, 0.534, -144.235]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube604.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube604_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube604_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube604_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.6, 8.025, -13.574]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube607.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube607_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube607_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube607_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube607_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[125.509, 0.534, -143.982]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube609.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube609_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube609_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube609_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.575, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube614.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube614_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube614_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube614_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube614_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[119.03, 0.534, -136.645]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube627.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube627_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube627_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube627_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.575, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube628.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube628_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube628_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube628_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube628_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[120.763, 0.534, -136.608]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube631.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube631_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube631_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube631_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.573, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube632.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube632_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube632_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube632_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube632_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[122.5, 0.534, -136.554]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube634.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube634_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube634_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube634_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.573, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube635.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube635_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube635_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube635_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube635_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[124.65, 0.534, -136.431]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube664.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube664_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube664_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube664_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.573, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube666.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube666_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube666_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube666_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube666_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[126.462, 0.534, -136.702]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube672.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube672_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube672_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube672_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.598, 8.025, -13.574]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube673.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube673_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube673_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube673_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube673_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[128.207, 0.534, -136.516]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube675.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube675_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube675_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube675_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.573, 8.039, -3.395]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube676.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube676_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube676_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube676_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube676_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[131.648, 0.534, -136.406]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube677.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube677_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube677_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube677_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.573, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube708.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube708_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube708_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube708_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube708_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[135.725, 0.534, -136.513]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.017, -0.073, -0.073]}
      >
        <mesh
          geometry={nodes.Cube709.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube709_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube709_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube709_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.574, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube710.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube710_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube710_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube710_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube710_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[140.12, 0.534, -136.61]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.017, -0.073, -0.073]}
      >
        <mesh
          geometry={nodes.Cube711.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube711_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube711_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube711_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.574, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube713.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube713_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube713_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube713_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube713_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[136.506, 0.534, -136.643]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.017, 0.073, 0.073]}
      >
        <mesh
          geometry={nodes.Cube714.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube714_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube714_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube714_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.574, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube716.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube716_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube716_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube716_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube716_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[141.513, 0.534, -136.568]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.017, -0.073, -0.073]}
      >
        <mesh
          geometry={nodes.Cube717.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh geometry={nodes.Cube717_1.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube717_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube717_3.geometry}
          material={materials["schwarz.001"]}
        />
        <group
          position={[-15.575, 8.039, -3.394]}
          rotation={[0, -1.571, 0]}
          scale={[-1.321, -1.195, -4.119]}
        >
          <mesh
            geometry={nodes.Cube718.geometry}
            material={materials["metall-weiß"]}
          />
          <mesh geometry={nodes.Cube718_1.geometry} material={materials.drot} />
          <mesh
            geometry={nodes.Cube718_2.geometry}
            material={materials["schwarz.001"]}
          />
          <mesh
            geometry={nodes.Cube718_3.geometry}
            material={materials["metall.007"]}
          />
          <mesh
            geometry={nodes.Cube718_4.geometry}
            material={materials["metall-weiß.002"]}
          />
        </group>
      </group>
      <group
        position={[118.556, -0.625, -146.194]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[0.42, 0.012, 0.054]}
      >
        <mesh
          geometry={nodes.Cube633.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube633_1.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube633_2.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube633_3.geometry}
          material={materials.NMHblau}
        />
      </group>
      <group
        position={[114.052, -0.625, -135.839]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.42, 0.012, 0.054]}
      >
        <mesh
          geometry={nodes.Cube246.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube246_1.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube246_2.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube246_3.geometry}
          material={materials.NMHblau}
        />
      </group>
      <group
        position={[119.434, -0.625, -144.721]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[0.42, 0.012, 0.054]}
      >
        <mesh
          geometry={nodes.Cube252_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube252_2.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube252_3.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube252_4.geometry}
          material={materials.NMHblau}
        />
      </group>
      <group
        position={[111.803, -0.482, -170.584]}
        rotation={[0, -0.014, Math.PI]}
        scale={[0.42, 0.012, 0.054]}
      >
        <mesh
          geometry={nodes.Cube363.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube363_1.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube363_2.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube363_3.geometry}
          material={materials.NMHblau}
        />
      </group>
      <mesh
        geometry={nodes.Palette1022.geometry}
        material={materials["braun.001"]}
        position={[106.287, -0.692, -137.962]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[0.42, 0.012, 0.054]}
      />
      <mesh
        geometry={nodes.Palette1023.geometry}
        material={materials["braun.001"]}
        position={[105.423, -0.692, -137.962]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[0.42, 0.012, 0.054]}
      />
      <mesh
        geometry={nodes.Palette1024.geometry}
        material={materials["braun.001"]}
        position={[104.556, -0.692, -137.962]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[0.42, 0.012, 0.054]}
      />
      <mesh
        geometry={nodes.Palette1025.geometry}
        material={materials["braun.001"]}
        position={[106.275, -0.692, -139.417]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[0.42, 0.012, 0.054]}
      />
      <group
        position={[104.792, 0.499, -134.454]}
        scale={[0.197, 0.028, 0.151]}
      >
        <mesh
          geometry={nodes.Cube137.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube137_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube137_2.geometry}
          material={materials.NMHblau}
        />
      </group>
      <group
        position={[107.426, 0.505, -137.414]}
        scale={[0.197, 0.028, 0.151]}
      >
        <mesh
          geometry={nodes.Cube674.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube674_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube674_2.geometry}
          material={materials.graublau}
        />
      </group>
      <group
        position={[107.829, 0.498, -145.803]}
        scale={[0.197, 0.028, 0.151]}
      >
        <mesh
          geometry={nodes.Cube699.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube699_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube699_2.geometry}
          material={materials.graublau}
        />
      </group>
      <group
        position={[108.273, 2.073, -134.433]}
        scale={[0.197, 0.028, 0.151]}
      >
        <mesh
          geometry={nodes.Cube701.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube701_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube701_2.geometry}
          material={materials.graublau}
        />
      </group>
      <group
        position={[108.672, 1.928, -145.803]}
        scale={[0.197, 0.028, 0.151]}
      >
        <mesh
          geometry={nodes.Cube702.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube702_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube702_2.geometry}
          material={materials.graublau}
        />
      </group>
      <group
        position={[102.115, 1.437, -143.189]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.416, 0.403, 0.403]}
      >
        <mesh geometry={nodes.Cube690.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube690_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube690_2.geometry}
          material={materials.NMHblau}
        />
      </group>
      <group
        position={[145.731, 3.069, -142.698]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.23, 1.023, 0.474]}
      >
        <mesh
          geometry={nodes.Cube081_2.geometry}
          material={materials["graublau.hell"]}
        />
        <mesh
          geometry={nodes.Cube081_3.geometry}
          material={materials["metall.002"]}
        />
      </group>
      <group
        position={[142.196, 0.856, -143.591]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1.084, 1]}
      >
        <mesh geometry={nodes.Cube142.geometry} material={materials.brick} />
        <mesh
          geometry={nodes.Cube142_1.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube142_2.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[117.374, 0.152, -143.074]}
        rotation={[-0.062, 1.392, 0.061]}
        scale={[0.396, 0.396, 0.348]}
      >
        <mesh
          geometry={nodes.Cube417.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube417_1.geometry}
          material={materials["schwarz.014"]}
        />
        <mesh
          geometry={nodes.Cube417_2.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube417_3.geometry}
          material={materials["metall-grau.001"]}
        />
        <mesh
          geometry={nodes.Cube417_4.geometry}
          material={materials["dblau.006"]}
        />
        <mesh
          geometry={nodes.Cube417_5.geometry}
          material={materials["scheinwerfer.003"]}
        />
        <mesh
          geometry={nodes.Cube417_6.geometry}
          material={materials["rueckleuchten.001"]}
        />
        <group
          position={[0.003, -0.467, 3.781]}
          rotation={[0, -0.001, 0]}
          scale={[1.027, 0.495, 0.067]}
        >
          <mesh
            geometry={nodes.Cube418.geometry}
            material={materials["metall.002"]}
          />
          <mesh
            geometry={nodes.Cube418_1.geometry}
            material={materials["metall.008"]}
          />
        </group>
      </group>
      <group
        position={[110.389, 0.06, -170.499]}
        rotation={[-0.062, 1.391, 0.061]}
        scale={[0.407, 0.196, 0.023]}
      >
        <mesh
          geometry={nodes.Cube440.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube440_1.geometry}
          material={materials["metall.008"]}
        />
      </group>
      <group
        position={[142.299, 0.008, -136.565]}
        rotation={[0, -1.186, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube849.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube849_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube849_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, 0.13, 0.017]} rotation={[0.242, 0, 0]}>
          <mesh
            geometry={nodes.Cube854.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube854_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube854_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube864.geometry}
            material={materials["schwarz.013"]}
          />
          <mesh
            geometry={nodes.Cube864_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube864_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]}>
          <mesh
            geometry={nodes.Cube866.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube866_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube866_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled019.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled019_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[136.516, 0.028, -144.3]}
        rotation={[Math.PI, -1.131, Math.PI]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube867.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube867_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube867_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, 0.13, 0.017]} rotation={[0.242, 0, 0]}>
          <mesh
            geometry={nodes.Cube868.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube868_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube868_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube869.geometry}
            material={materials["schwarz.013"]}
          />
          <mesh
            geometry={nodes.Cube869_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube869_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]}>
          <mesh
            geometry={nodes.Cube870.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube870_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube870_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled020.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled020_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[141.25, 0.028, -144.336]}
        rotation={[0, -1.492, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube871.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube871_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube871_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh geometry={nodes.Cube872.geometry} material={materials.jeans} />
          <mesh
            geometry={nodes.Cube872_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube872_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.387, -0.001, -0.006]}>
          <mesh
            geometry={nodes.Cube873.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube873_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube873_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.071, 0, -0.004]}>
          <mesh
            geometry={nodes.Cube874.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube874_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled021.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled021_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[125.982, 0.008, -143.737]}
        rotation={[Math.PI, -0.636, Math.PI]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube875.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube875_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube875_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, 0.13, 0.017]} rotation={[0.242, 0, 0]}>
          <mesh
            geometry={nodes.Cube876.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube876_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube876_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube877.geometry}
            material={materials["schwarz.013"]}
          />
          <mesh
            geometry={nodes.Cube877_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube877_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]}>
          <mesh
            geometry={nodes.Cube878.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube878_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube878_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled022.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled022_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[129.444, 0.019, -136.329]}
        rotation={[0, -1.212, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube879.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube879_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube879_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh geometry={nodes.Cube882.geometry} material={materials.jeans} />
          <mesh
            geometry={nodes.Cube882_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube882_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.387, -0.001, -0.006]}>
          <mesh
            geometry={nodes.Cube883.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube883_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube883_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.071, 0, -0.004]}>
          <mesh
            geometry={nodes.Cube888.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube888_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled023.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled023_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[123.791, 0.019, -136.483]}
        rotation={[0, -1.192, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube889.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube889_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube889_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube890.geometry}
            material={materials["schwarz.002"]}
          />
          <mesh
            geometry={nodes.Cube890_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube890_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.702, -0.003, -0.005]}>
          <mesh
            geometry={nodes.Cube891.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube891_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube891_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.071, 0, -0.004]}>
          <mesh
            geometry={nodes.Cube892.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube892_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled024.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled024_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[117.224, -0.09, -143.08]}
        rotation={[-0.946, 1.399, 0.939]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube897.geometry}
          material={materials["dblau.012"]}
        />
        <mesh
          geometry={nodes.Cube897_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube897_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube897_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube897_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube897_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.465, -0.1]} rotation={[0.241, 0, 0]}>
          <mesh
            geometry={nodes.Cube898.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube898_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[-0.064, 0, 0]}>
          <mesh
            geometry={nodes.Cube899.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube899_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube899_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[0, 0.672, -0.105]}>
          <mesh
            geometry={nodes.Untitled026.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled026_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[108.748, 0.399, -170.709]}
        rotation={[0.792, 1.427, -0.787]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube442.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube442_1.geometry}
          material={materials["schwarz.010"]}
        />
      </group>
      <group
        position={[108.748, 0.428, -170.709]}
        rotation={[-1.116, 1.344, 1.106]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube444.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube444_1.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube444_2.geometry}
          material={materials["weiß-metall.005"]}
        />
      </group>
      <group
        position={[108.717, 0.586, -170.712]}
        rotation={[-0.946, 1.399, 0.939]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Untitled017.geometry}
          material={materials["Rzo_Hair.001"]}
        />
        <mesh
          geometry={nodes.Untitled017_1.geometry}
          material={materials["Haut.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/kunststoff.glb");
