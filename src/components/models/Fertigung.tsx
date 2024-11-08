import * as THREE from "three";
import React from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF, SkeletonUtils } from "three-stdlib";
import { FertigungBot } from "./Fertigungbot";

type GLTFResult = GLTF & {
  nodes: {
    Cube226: THREE.Mesh;
    Cube226_1: THREE.Mesh;
    Cube226_2: THREE.Mesh;
    Cube239: THREE.Mesh;
    Cube239_1: THREE.Mesh;
    Cube239_2: THREE.Mesh;
    Cube242: THREE.Mesh;
    Cube242_1: THREE.Mesh;
    Cube242_2: THREE.Mesh;
    Cube536: THREE.Mesh;
    Cube536_1: THREE.Mesh;
    Cube536_2: THREE.Mesh;
    Untitled004: THREE.Mesh;
    Untitled004_1: THREE.Mesh;
    Cube764: THREE.Mesh;
    Cube764_1: THREE.Mesh;
    Cube764_2: THREE.Mesh;
    Cube766: THREE.Mesh;
    Cube766_1: THREE.Mesh;
    Cube766_2: THREE.Mesh;
    Cube767: THREE.Mesh;
    Cube767_1: THREE.Mesh;
    Cube767_2: THREE.Mesh;
    Cube768: THREE.Mesh;
    Cube768_1: THREE.Mesh;
    Cube768_2: THREE.Mesh;
    Untitled006: THREE.Mesh;
    Untitled006_1: THREE.Mesh;
    Cube779: THREE.Mesh;
    Cube779_1: THREE.Mesh;
    Cube779_2: THREE.Mesh;
    Cube780: THREE.Mesh;
    Cube780_1: THREE.Mesh;
    Cube780_2: THREE.Mesh;
    Cube781: THREE.Mesh;
    Cube781_1: THREE.Mesh;
    Cube781_2: THREE.Mesh;
    Cube782: THREE.Mesh;
    Cube782_1: THREE.Mesh;
    Cube782_2: THREE.Mesh;
    Untitled009: THREE.Mesh;
    Untitled009_1: THREE.Mesh;
    Cube783: THREE.Mesh;
    Cube783_1: THREE.Mesh;
    Cube783_2: THREE.Mesh;
    Cube784: THREE.Mesh;
    Cube784_1: THREE.Mesh;
    Cube784_2: THREE.Mesh;
    Cube785: THREE.Mesh;
    Cube785_1: THREE.Mesh;
    Cube785_2: THREE.Mesh;
    Cube786: THREE.Mesh;
    Cube786_1: THREE.Mesh;
    Untitled010: THREE.Mesh;
    Untitled010_1: THREE.Mesh;
    Cube794: THREE.Mesh;
    Cube794_1: THREE.Mesh;
    Cube794_2: THREE.Mesh;
    Cube795: THREE.Mesh;
    Cube795_1: THREE.Mesh;
    Cube795_2: THREE.Mesh;
    Cube796: THREE.Mesh;
    Cube796_1: THREE.Mesh;
    Cube796_2: THREE.Mesh;
    Cube797: THREE.Mesh;
    Cube797_1: THREE.Mesh;
    Untitled012: THREE.Mesh;
    Untitled012_1: THREE.Mesh;
    Cube775: THREE.Mesh;
    Cube775_1: THREE.Mesh;
    Cube775_2: THREE.Mesh;
    Cube775_3: THREE.Mesh;
    Cube775_4: THREE.Mesh;
    Cube775_5: THREE.Mesh;
    Cube774: THREE.Mesh;
    Cube774_1: THREE.Mesh;
    Cube776: THREE.Mesh;
    Cube776_1: THREE.Mesh;
    Cube776_2: THREE.Mesh;
    Untitled008: THREE.Mesh;
    Untitled008_1: THREE.Mesh;
    Cube827: THREE.Mesh;
    Cube827_1: THREE.Mesh;
    Cube827_2: THREE.Mesh;
    Cube831: THREE.Mesh;
    Cube831_1: THREE.Mesh;
    Cube831_2: THREE.Mesh;
    Cube832: THREE.Mesh;
    Cube832_1: THREE.Mesh;
    Cube832_2: THREE.Mesh;
    Cube833: THREE.Mesh;
    Cube833_1: THREE.Mesh;
    Untitled018: THREE.Mesh;
    Untitled018_1: THREE.Mesh;
    Cube893: THREE.Mesh;
    Cube893_1: THREE.Mesh;
    Cube893_2: THREE.Mesh;
    Cube894: THREE.Mesh;
    Cube894_1: THREE.Mesh;
    Cube894_2: THREE.Mesh;
    Cube895: THREE.Mesh;
    Cube895_1: THREE.Mesh;
    Cube895_2: THREE.Mesh;
    Cube896: THREE.Mesh;
    Cube896_1: THREE.Mesh;
    Untitled025: THREE.Mesh;
    Untitled025_1: THREE.Mesh;
    Cube097: THREE.Mesh;
    Cube678: THREE.Mesh;
    Cube678_1: THREE.Mesh;
    Cube679: THREE.Mesh;
    Cube679_1: THREE.Mesh;
    Cube681: THREE.Mesh;
    Cube681_1: THREE.Mesh;
    Cube682: THREE.Mesh;
    Cube682_1: THREE.Mesh;
    Cube683: THREE.Mesh;
    Cube683_1: THREE.Mesh;
    Cube684: THREE.Mesh;
    Cube684_1: THREE.Mesh;
    Cube685: THREE.Mesh;
    Cube685_1: THREE.Mesh;
    Cube686: THREE.Mesh;
    Cube686_1: THREE.Mesh;
    Cube607: THREE.Mesh;
    Cube608: THREE.Mesh;
    Cube689: THREE.Mesh;
    Cube689_1: THREE.Mesh;
    Cube610: THREE.Mesh;
    Cube692: THREE.Mesh;
    Cube692_1: THREE.Mesh;
    Cube693: THREE.Mesh;
    Cube693_1: THREE.Mesh;
    Cube694: THREE.Mesh;
    Cube694_1: THREE.Mesh;
    Cube695: THREE.Mesh;
    Cube695_1: THREE.Mesh;
    Cube696: THREE.Mesh;
    Cube696_1: THREE.Mesh;
    Cube698: THREE.Mesh;
    Cube698_1: THREE.Mesh;
    Cube715: THREE.Mesh;
    Cube715_1: THREE.Mesh;
    Buero_Regal1: THREE.Mesh;
    Cube759: THREE.Mesh;
    Cube759_1: THREE.Mesh;
    Cube621: THREE.Mesh;
    Cube622: THREE.Mesh;
    Cube623: THREE.Mesh;
    Cube624: THREE.Mesh;
    Cube626: THREE.Mesh;
    Cube627: THREE.Mesh;
    Cube628: THREE.Mesh;
    Cube629: THREE.Mesh;
    Cube630: THREE.Mesh;
    Cube633: THREE.Mesh;
    Cube634: THREE.Mesh;
    Cube848: THREE.Mesh;
    Cube848_1: THREE.Mesh;
    Cylinder026: THREE.Mesh;
    Cylinder026_1: THREE.Mesh;
    Cylinder027: THREE.Mesh;
    Cylinder027_1: THREE.Mesh;
    Cube850: THREE.Mesh;
    Cube850_1: THREE.Mesh;
    Cylinder029_1: THREE.Mesh;
    Cylinder029_2: THREE.Mesh;
    Cube851: THREE.Mesh;
    Cube851_1: THREE.Mesh;
    Cylinder014: THREE.Mesh;
    Cube639: THREE.Mesh;
    Cylinder016: THREE.Mesh;
    Cube853: THREE.Mesh;
    Cube853_1: THREE.Mesh;
    Cube853_2: THREE.Mesh;
    Cube853_3: THREE.Mesh;
    Cube853_4: THREE.Mesh;
    Cube853_5: THREE.Mesh;
    Cube120: THREE.Mesh;
    Cube120_1: THREE.Mesh;
    Cube642: THREE.Mesh;
    Cube643: THREE.Mesh;
    Cube645: THREE.Mesh;
    Cube646: THREE.Mesh;
    Cube122: THREE.Mesh;
    Cube122_1: THREE.Mesh;
    Cube147_1: THREE.Mesh;
    Cube147_2: THREE.Mesh;
    Cube147_3: THREE.Mesh;
    Cube149_1: THREE.Mesh;
    Cube149_2: THREE.Mesh;
    Cube149_3: THREE.Mesh;
    Cube494: THREE.Mesh;
    Cube494_1: THREE.Mesh;
    Cube494_2: THREE.Mesh;
    Cube617_1: THREE.Mesh;
    Cube617_2: THREE.Mesh;
    Cube617_3: THREE.Mesh;
    Cube642_1: THREE.Mesh;
    Cube642_2: THREE.Mesh;
    Cube642_3: THREE.Mesh;
    Cylinder017: THREE.Mesh;
    Cube648: THREE.Mesh;
    Cube671: THREE.Mesh;
    Cube671_1: THREE.Mesh;
    Cube834: THREE.Mesh;
    Cube834_1: THREE.Mesh;
    Cube844: THREE.Mesh;
    Cube844_1: THREE.Mesh;
    Cube860: THREE.Mesh;
    Cube860_1: THREE.Mesh;
    Cube863: THREE.Mesh;
    Cube863_1: THREE.Mesh;
    Cube670: THREE.Mesh;
    Cube670_1: THREE.Mesh;
    Cube670_2: THREE.Mesh;
    Cube670_3: THREE.Mesh;
    Cube680: THREE.Mesh;
    Cube680_1: THREE.Mesh;
    Cube680_2: THREE.Mesh;
    Cube680_3: THREE.Mesh;
    Cube680_4: THREE.Mesh;
    Cube680_5: THREE.Mesh;
    Cube741: THREE.Mesh;
    Cube741_1: THREE.Mesh;
    Cube743: THREE.Mesh;
    Cube743_1: THREE.Mesh;
    Cube847: THREE.Mesh;
    Cube847_1: THREE.Mesh;
    Cube847_2: THREE.Mesh;
    Cube857: THREE.Mesh;
    Cube857_1: THREE.Mesh;
    Cube857_2: THREE.Mesh;
    Cube697: THREE.Mesh;
    Cube697_1: THREE.Mesh;
    Cube086: THREE.Mesh;
    Cube086_1: THREE.Mesh;
    Cube087: THREE.Mesh;
    Cube087_1: THREE.Mesh;
    Cube088: THREE.Mesh;
    Cube088_1: THREE.Mesh;
    Cube082: THREE.Mesh;
    Cube082_1: THREE.Mesh;
    Cube082_2: THREE.Mesh;
    Cube082_3: THREE.Mesh;
    Cube082_4: THREE.Mesh;
    Cube082_5: THREE.Mesh;
    Cube082_6: THREE.Mesh;
    Cube083: THREE.Mesh;
    Cube083_1: THREE.Mesh;
    Cube083_2: THREE.Mesh;
    Cube083_3: THREE.Mesh;
    Cube083_4: THREE.Mesh;
    Cube083_5: THREE.Mesh;
    Cube083_6: THREE.Mesh;
    Cube089: THREE.Mesh;
    Cube089_1: THREE.Mesh;
    Cube089_2: THREE.Mesh;
    Cube090: THREE.Mesh;
    Cube090_1: THREE.Mesh;
    Cube090_2: THREE.Mesh;
    Cube007_1: THREE.Mesh;
    Cube007_2: THREE.Mesh;
    Cube007_3: THREE.Mesh;
    Cube133: THREE.Mesh;
    Cube133_1: THREE.Mesh;
    Cube133_2: THREE.Mesh;
    Cube134: THREE.Mesh;
    Cube134_1: THREE.Mesh;
    Cube134_2: THREE.Mesh;
    Cube135: THREE.Mesh;
    Cube135_1: THREE.Mesh;
    Cube135_2: THREE.Mesh;
    Cube165: THREE.Mesh;
    Cube165_1: THREE.Mesh;
    Cube165_2: THREE.Mesh;
    Cube830: THREE.Mesh;
    Cube830_1: THREE.Mesh;
    Cube660: THREE.Mesh;
    Cube855: THREE.Mesh;
    Cube855_1: THREE.Mesh;
    Cylinder018: THREE.Mesh;
    Cylinder020: THREE.Mesh;
    Cube024_1: THREE.Mesh;
    Cube024_2: THREE.Mesh;
    Cube043: THREE.Mesh;
    Cube131: THREE.Mesh;
    Cube131_1: THREE.Mesh;
    Cube100: THREE.Mesh;
    Cube071: THREE.Mesh;
    Cube071_1: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube193_1: THREE.Mesh;
    Cube193_2: THREE.Mesh;
    Cube195: THREE.Mesh;
    Cube195_1: THREE.Mesh;
    Cube196: THREE.Mesh;
    Cube196_1: THREE.Mesh;
    Cube197: THREE.Mesh;
    Cube197_1: THREE.Mesh;
    Cube199: THREE.Mesh;
    Cube199_1: THREE.Mesh;
    Cube200: THREE.Mesh;
    Cube200_1: THREE.Mesh;
    wandstreben009: THREE.Mesh;
    Cube070_1: THREE.Mesh;
    Cube070_2: THREE.Mesh;
    Cube070_3: THREE.Mesh;
    Cube070_4: THREE.Mesh;
    Cube070_5: THREE.Mesh;
    Cube070_6: THREE.Mesh;
    Cube070_7: THREE.Mesh;
    Cube070_8: THREE.Mesh;
    Cube070_9: THREE.Mesh;
    Cube027_1: THREE.Mesh;
    Cube027_2: THREE.Mesh;
    Cube027_3: THREE.Mesh;
    Cube027_4: THREE.Mesh;
    Cube027_5: THREE.Mesh;
    Cube027_6: THREE.Mesh;
    Cube027_7: THREE.Mesh;
    Cube027_8: THREE.Mesh;
    Cube027_9: THREE.Mesh;
    Cube027_10: THREE.Mesh;
    Cube027_11: THREE.Mesh;
    Cube027_12: THREE.Mesh;
    Cube027_13: THREE.Mesh;
    Cube027_14: THREE.Mesh;
    Cube027_15: THREE.Mesh;
    Cube027_16: THREE.Mesh;
    Cube027_17: THREE.Mesh;
    Cube027_18: THREE.Mesh;
    Cube027_19: THREE.Mesh;
    Cube027_20: THREE.Mesh;
    Cube027_21: THREE.Mesh;
    Cube027_22: THREE.Mesh;
    Cube027_23: THREE.Mesh;
    Cube027_24: THREE.Mesh;
    Cube027_25: THREE.Mesh;
    Cube027_26: THREE.Mesh;
    Cube027_27: THREE.Mesh;
    Cube338: THREE.Mesh;
    Cube338_1: THREE.Mesh;
    Cube338_2: THREE.Mesh;
    Cube420: THREE.Mesh;
    Cube420_1: THREE.Mesh;
    Cube420_2: THREE.Mesh;
    Cube373: THREE.Mesh;
    Cube373_1: THREE.Mesh;
    Cube373_2: THREE.Mesh;
    Cube389_1: THREE.Mesh;
    Cube389_2: THREE.Mesh;
    Untitled002: THREE.Mesh;
    Untitled002_1: THREE.Mesh;
    Cube208: THREE.Mesh;
    Cube208_1: THREE.Mesh;
    Cube208_2: THREE.Mesh;
    Cube208_3: THREE.Mesh;
    Cube208_4: THREE.Mesh;
    Cube208_5: THREE.Mesh;
    Cube130: THREE.Mesh;
    Cube130_1: THREE.Mesh;
    Cube130_2: THREE.Mesh;
    Cube185: THREE.Mesh;
    Cube185_1: THREE.Mesh;
    Untitled001: THREE.Mesh;
    Untitled001_1: THREE.Mesh;
    Cube799: THREE.Mesh;
    Cube799_1: THREE.Mesh;
    Cube799_2: THREE.Mesh;
    Cube799_3: THREE.Mesh;
    Cube799_4: THREE.Mesh;
    Cube799_5: THREE.Mesh;
    Cube798: THREE.Mesh;
    Cube798_1: THREE.Mesh;
    Cube800: THREE.Mesh;
    Cube800_1: THREE.Mesh;
    Cube800_2: THREE.Mesh;
    Untitled013: THREE.Mesh;
    Untitled013_1: THREE.Mesh;
    Cube712: THREE.Mesh;
    Cube712_1: THREE.Mesh;
    Cube189: THREE.Mesh;
    Cube189_1: THREE.Mesh;
    Cube500: THREE.Mesh;
    Cube500_1: THREE.Mesh;
    Cube276: THREE.Mesh;
    Cube510: THREE.Mesh;
    Cube510_1: THREE.Mesh;
    Cube516: THREE.Mesh;
    Cube516_1: THREE.Mesh;
    Cube518: THREE.Mesh;
    Cube518_1: THREE.Mesh;
    Cube518_2: THREE.Mesh;
    Cube518_3: THREE.Mesh;
    Cube518_4: THREE.Mesh;
    Cube518_5: THREE.Mesh;
    Cube518_6: THREE.Mesh;
    Cube518_7: THREE.Mesh;
    Cube518_8: THREE.Mesh;
    Cube530: THREE.Mesh;
    Cube530_1: THREE.Mesh;
    Cube531: THREE.Mesh;
    Cube531_1: THREE.Mesh;
    Cube531_2: THREE.Mesh;
    Cube532: THREE.Mesh;
    Cube532_1: THREE.Mesh;
    Cube532_2: THREE.Mesh;
    Cube520: THREE.Mesh;
    Cube520_1: THREE.Mesh;
    Cube520_2: THREE.Mesh;
    Cube520_3: THREE.Mesh;
    Cube521: THREE.Mesh;
    Cube521_1: THREE.Mesh;
    Cube521_2: THREE.Mesh;
    Cube045_1: THREE.Mesh;
    Cube045_2: THREE.Mesh;
    Cube045_3: THREE.Mesh;
    Cube045_4: THREE.Mesh;
    Cube045_5: THREE.Mesh;
    Cube045_6: THREE.Mesh;
    Cube045_7: THREE.Mesh;
    Cube045_8: THREE.Mesh;
    Cube045_9: THREE.Mesh;
    Cube073: THREE.Mesh;
    Cube073_1: THREE.Mesh;
    Cube073_2: THREE.Mesh;
    Cube073_3: THREE.Mesh;
    Cube073_4: THREE.Mesh;
    Cube073_5: THREE.Mesh;
    Cube073_6: THREE.Mesh;
    Cube073_7: THREE.Mesh;
    Cube073_8: THREE.Mesh;
    Cube336: THREE.Mesh;
    Cube336_1: THREE.Mesh;
    Cube336_2: THREE.Mesh;
    Cube336_3: THREE.Mesh;
    Cube336_4: THREE.Mesh;
    Cube336_5: THREE.Mesh;
    Cube336_6: THREE.Mesh;
    Cube336_7: THREE.Mesh;
    Cube336_8: THREE.Mesh;
    Cube443: THREE.Mesh;
    Cube443_1: THREE.Mesh;
    Cube443_2: THREE.Mesh;
    Cube443_3: THREE.Mesh;
    Cube443_4: THREE.Mesh;
    Cube443_5: THREE.Mesh;
    Cube443_6: THREE.Mesh;
    Cube443_7: THREE.Mesh;
    Cube443_8: THREE.Mesh;
    Cube448: THREE.Mesh;
    Cube448_1: THREE.Mesh;
    Cube448_2: THREE.Mesh;
    Cube448_3: THREE.Mesh;
    Cube448_4: THREE.Mesh;
    Cube448_5: THREE.Mesh;
    Cube448_6: THREE.Mesh;
    Cube448_7: THREE.Mesh;
    Cube448_8: THREE.Mesh;
    Cube777: THREE.Mesh;
    Cube777_1: THREE.Mesh;
    Cube344: THREE.Mesh;
    Cube344_1: THREE.Mesh;
    Cube330: THREE.Mesh;
    Cube330_1: THREE.Mesh;
    Cylinder023: THREE.Mesh;
    Cylinder023_1: THREE.Mesh;
    Cylinder028: THREE.Mesh;
    Cube022_1: THREE.Mesh;
    Cube022_2: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cylinder005_1: THREE.Mesh;
    Cylinder004_1: THREE.Mesh;
    Cylinder004_2: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube039: THREE.Mesh;
    Cube012_1: THREE.Mesh;
    Cube012_2: THREE.Mesh;
    Cube231: THREE.Mesh;
    Cube231_1: THREE.Mesh;
    Cube231_2: THREE.Mesh;
    Cube231_3: THREE.Mesh;
    Cube231_4: THREE.Mesh;
    Cube231_5: THREE.Mesh;
    Cube231_6: THREE.Mesh;
    Cube231_7: THREE.Mesh;
    Cube231_8: THREE.Mesh;
    Cube231_9: THREE.Mesh;
    Cube023_1: THREE.Mesh;
    Cube023_2: THREE.Mesh;
    Cube023_3: THREE.Mesh;
    Cube023_4: THREE.Mesh;
    Cube023_5: THREE.Mesh;
    Cube023_6: THREE.Mesh;
    Cube023_7: THREE.Mesh;
    Cube023_8: THREE.Mesh;
    Cube023_9: THREE.Mesh;
    Cube023_10: THREE.Mesh;
    Plane004: THREE.Mesh;
    Cube426: THREE.Mesh;
    Cube060_1: THREE.Mesh;
    Cube060_2: THREE.Mesh;
    Cube059_1: THREE.Mesh;
    Cube059_2: THREE.Mesh;
    Cylinder038: THREE.Mesh;
    Cylinder038_1: THREE.Mesh;
    Cylinder024: THREE.Mesh;
    Cube057_1: THREE.Mesh;
    Cube057_2: THREE.Mesh;
    Cube057_3: THREE.Mesh;
    Cube057_4: THREE.Mesh;
    Cube057_5: THREE.Mesh;
    Cube057_6: THREE.Mesh;
    Cube057_7: THREE.Mesh;
    Cube057_8: THREE.Mesh;
    Cube057_9: THREE.Mesh;
    Cube057_10: THREE.Mesh;
    Cube057_11: THREE.Mesh;
    Cube058_1: THREE.Mesh;
    Cube058_2: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cube034: THREE.Mesh;
    Cube225: THREE.Mesh;
    Cube225_1: THREE.Mesh;
    Cube180: THREE.Mesh;
    Cube180_1: THREE.Mesh;
    Cylinder016_1: THREE.Mesh;
    Cylinder016_2: THREE.Mesh;
    Cylinder009: THREE.Mesh;
    Cube052: THREE.Mesh;
    Cube052_1: THREE.Mesh;
    Cube052_2: THREE.Mesh;
    Cube052_3: THREE.Mesh;
    Cube052_4: THREE.Mesh;
    Cube052_5: THREE.Mesh;
    Cube052_6: THREE.Mesh;
    Cube052_7: THREE.Mesh;
    Cube052_8: THREE.Mesh;
    Cube052_9: THREE.Mesh;
    Cube052_10: THREE.Mesh;
    Cube100_1: THREE.Mesh;
    Cube100_2: THREE.Mesh;
    Cube029: THREE.Mesh;
    Cube031: THREE.Mesh;
    Cube255: THREE.Mesh;
    Cube255_1: THREE.Mesh;
    Cube238: THREE.Mesh;
    Cube238_1: THREE.Mesh;
    Cylinder021: THREE.Mesh;
    Cylinder021_1: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    Cube234: THREE.Mesh;
    Cube234_1: THREE.Mesh;
    Cube234_2: THREE.Mesh;
    Cube234_3: THREE.Mesh;
    Cube234_4: THREE.Mesh;
    Cube234_5: THREE.Mesh;
    Cube234_6: THREE.Mesh;
    Cube234_7: THREE.Mesh;
    Cube234_8: THREE.Mesh;
    Cube234_9: THREE.Mesh;
    Cube234_10: THREE.Mesh;
    Cube236: THREE.Mesh;
    Cube236_1: THREE.Mesh;
    Cube040: THREE.Mesh;
    Cube041: THREE.Mesh;
    Cube361: THREE.Mesh;
    Cube361_1: THREE.Mesh;
    Cube360: THREE.Mesh;
    Cube360_1: THREE.Mesh;
    Cylinder098: THREE.Mesh;
    Cylinder098_1: THREE.Mesh;
    Cylinder068: THREE.Mesh;
    Cube183: THREE.Mesh;
    Cube183_1: THREE.Mesh;
    Cube183_2: THREE.Mesh;
    Cube186: THREE.Mesh;
    Cube186_1: THREE.Mesh;
    Cube186_2: THREE.Mesh;
    Cube356: THREE.Mesh;
    Cube356_1: THREE.Mesh;
    Cube356_2: THREE.Mesh;
    Cube356_3: THREE.Mesh;
    Cube356_4: THREE.Mesh;
    Cube356_5: THREE.Mesh;
    Cube356_6: THREE.Mesh;
    Cube356_7: THREE.Mesh;
    Cube356_8: THREE.Mesh;
    Cube356_9: THREE.Mesh;
    Cube356_10: THREE.Mesh;
    Cube345_1: THREE.Mesh;
    Cube345_2: THREE.Mesh;
    Cube347: THREE.Mesh;
    Cube347_1: THREE.Mesh;
    Cylinder046: THREE.Mesh;
    Cylinder046_1: THREE.Mesh;
    Cylinder072: THREE.Mesh;
    Cube461: THREE.Mesh;
    Cube461_1: THREE.Mesh;
    Cube461_2: THREE.Mesh;
    Cube472: THREE.Mesh;
    Cube472_1: THREE.Mesh;
    Cube472_2: THREE.Mesh;
    Cube472_3: THREE.Mesh;
    Cube472_4: THREE.Mesh;
    Cube340: THREE.Mesh;
    Cube340_1: THREE.Mesh;
    Cube340_2: THREE.Mesh;
    Cube340_3: THREE.Mesh;
    Cube340_4: THREE.Mesh;
    Cube340_5: THREE.Mesh;
    Cube340_6: THREE.Mesh;
    Cube340_7: THREE.Mesh;
    Cube340_8: THREE.Mesh;
    Cube340_9: THREE.Mesh;
    Cube340_10: THREE.Mesh;
    Cube268: THREE.Mesh;
    Cube269: THREE.Mesh;
    Cube343: THREE.Mesh;
    Cube343_1: THREE.Mesh;
    Cube343_2: THREE.Mesh;
    Cylinder044: THREE.Mesh;
    Cylinder044_1: THREE.Mesh;
    Grid: THREE.Mesh;
    Grid001: THREE.Mesh;
    Palette1: THREE.Mesh;
    Palette1001: THREE.Mesh;
    Plane011: THREE.Mesh;
    Cube017_1: THREE.Mesh;
    Cube017_2: THREE.Mesh;
    Box_dblau001: THREE.Mesh;
    Cube406: THREE.Mesh;
    Cube406_1: THREE.Mesh;
    Cube406_2: THREE.Mesh;
    Cube406_3: THREE.Mesh;
    Cube406_4: THREE.Mesh;
    Cube406_5: THREE.Mesh;
    Cube406_6: THREE.Mesh;
    Cube406_7: THREE.Mesh;
    Box_beige001: THREE.Mesh;
    Cube468: THREE.Mesh;
    Cube468_1: THREE.Mesh;
    Cube468_2: THREE.Mesh;
    Box_hblau: THREE.Mesh;
    Cube476: THREE.Mesh;
    Cube476_1: THREE.Mesh;
    Cube370: THREE.Mesh;
    Cube370_1: THREE.Mesh;
    Cube370_2: THREE.Mesh;
    Cube370_3: THREE.Mesh;
    Cube370_4: THREE.Mesh;
    Cube370_5: THREE.Mesh;
    Cube023: THREE.Mesh;
    Cube032: THREE.Mesh;
    Cube153: THREE.Mesh;
    Cube153_1: THREE.Mesh;
    Cube153_2: THREE.Mesh;
    Cube153_3: THREE.Mesh;
    Cube153_4: THREE.Mesh;
    Cube153_5: THREE.Mesh;
    Cube153_6: THREE.Mesh;
    Cube153_7: THREE.Mesh;
    Cube153_8: THREE.Mesh;
    Cube153_9: THREE.Mesh;
    Cube153_10: THREE.Mesh;
    Cube152: THREE.Mesh;
    Cube152_1: THREE.Mesh;
    Cube152_2: THREE.Mesh;
    Cube152_3: THREE.Mesh;
    Cube152_4: THREE.Mesh;
    Cube152_5: THREE.Mesh;
    Cube152_6: THREE.Mesh;
    Cube152_7: THREE.Mesh;
    Cube152_8: THREE.Mesh;
    Cube152_9: THREE.Mesh;
    Cube152_10: THREE.Mesh;
    Cube152_11: THREE.Mesh;
    Cube155: THREE.Mesh;
    Cube155_1: THREE.Mesh;
    Cube155_2: THREE.Mesh;
    Cube155_3: THREE.Mesh;
    Cube155_4: THREE.Mesh;
    Cube155_5: THREE.Mesh;
    Cube155_6: THREE.Mesh;
    Cube155_7: THREE.Mesh;
    Cube155_8: THREE.Mesh;
    Cube155_9: THREE.Mesh;
    Cube155_10: THREE.Mesh;
    Cube156: THREE.Mesh;
    Cube156_1: THREE.Mesh;
    Cube156_2: THREE.Mesh;
    Cube156_3: THREE.Mesh;
    Cube156_4: THREE.Mesh;
    Cube156_5: THREE.Mesh;
    Cube156_6: THREE.Mesh;
    Cube156_7: THREE.Mesh;
    Cube156_8: THREE.Mesh;
    Cube156_9: THREE.Mesh;
    Cube156_10: THREE.Mesh;
    Cube204: THREE.Mesh;
    Cube204_1: THREE.Mesh;
    Cube204_2: THREE.Mesh;
    Cube204_3: THREE.Mesh;
    Cube204_4: THREE.Mesh;
    Cube204_5: THREE.Mesh;
    Cube204_6: THREE.Mesh;
    Cube204_7: THREE.Mesh;
    Cube204_8: THREE.Mesh;
    Cube204_9: THREE.Mesh;
    Cube204_10: THREE.Mesh;
    Cube204_11: THREE.Mesh;
    Cube490: THREE.Mesh;
    Cube490_1: THREE.Mesh;
    Cube490_2: THREE.Mesh;
    Cube490_3: THREE.Mesh;
    Cube490_4: THREE.Mesh;
    Cube490_5: THREE.Mesh;
    Cube490_6: THREE.Mesh;
    Cube490_7: THREE.Mesh;
    Cube490_8: THREE.Mesh;
    Cube490_9: THREE.Mesh;
    Cube490_10: THREE.Mesh;
    Cube491: THREE.Mesh;
    Cube491_1: THREE.Mesh;
    Cube491_2: THREE.Mesh;
    Cube491_3: THREE.Mesh;
    Cube491_4: THREE.Mesh;
    Cube491_5: THREE.Mesh;
    Cube491_6: THREE.Mesh;
    Cube491_7: THREE.Mesh;
    Cube491_8: THREE.Mesh;
    Cube491_9: THREE.Mesh;
    Cube491_10: THREE.Mesh;
    Cube491_11: THREE.Mesh;
    Cube492: THREE.Mesh;
    Cube492_1: THREE.Mesh;
    Cube492_2: THREE.Mesh;
    Cube492_3: THREE.Mesh;
    Cube492_4: THREE.Mesh;
    Cube492_5: THREE.Mesh;
    Cube492_6: THREE.Mesh;
    Cube492_7: THREE.Mesh;
    Cube492_8: THREE.Mesh;
    Cube492_9: THREE.Mesh;
    Cube492_10: THREE.Mesh;
    Cube492_11: THREE.Mesh;
    Cube492_12: THREE.Mesh;
    Cube493: THREE.Mesh;
    Cube493_1: THREE.Mesh;
    Cube493_2: THREE.Mesh;
    Cube493_3: THREE.Mesh;
    Cube493_4: THREE.Mesh;
    Cube493_5: THREE.Mesh;
    Cube493_6: THREE.Mesh;
    Cube493_7: THREE.Mesh;
    Cube493_8: THREE.Mesh;
    Cube493_9: THREE.Mesh;
    Cube493_10: THREE.Mesh;
    Cube493_11: THREE.Mesh;
    Cube493_12: THREE.Mesh;
    Cube032_1: THREE.Mesh;
    Cube032_2: THREE.Mesh;
    Cube032_3: THREE.Mesh;
    Cube032_4: THREE.Mesh;
    Cube032_5: THREE.Mesh;
    Cube032_6: THREE.Mesh;
    Cube032_7: THREE.Mesh;
    Cube032_8: THREE.Mesh;
    Cube032_9: THREE.Mesh;
    Cube032_10: THREE.Mesh;
    Cube033: THREE.Mesh;
    Cube033_1: THREE.Mesh;
    Cube033_2: THREE.Mesh;
    Cube033_3: THREE.Mesh;
    Cube033_4: THREE.Mesh;
    Cube033_5: THREE.Mesh;
    Cube033_6: THREE.Mesh;
    Cube033_7: THREE.Mesh;
    Cube033_8: THREE.Mesh;
    Cube033_9: THREE.Mesh;
    Cube033_10: THREE.Mesh;
    Cube035_1: THREE.Mesh;
    Cube035_2: THREE.Mesh;
    Cube035_3: THREE.Mesh;
    Cube035_4: THREE.Mesh;
    Cube035_5: THREE.Mesh;
    Cube035_6: THREE.Mesh;
    Cube035_7: THREE.Mesh;
    Cube035_8: THREE.Mesh;
    Cube035_9: THREE.Mesh;
    Cube035_10: THREE.Mesh;
    Cube035_11: THREE.Mesh;
    Cube036_1: THREE.Mesh;
    Cube036_2: THREE.Mesh;
    Cube036_3: THREE.Mesh;
    Cube036_4: THREE.Mesh;
    Cube036_5: THREE.Mesh;
    Cube036_6: THREE.Mesh;
    Cube036_7: THREE.Mesh;
    Cube036_8: THREE.Mesh;
    Cube036_9: THREE.Mesh;
    Cube036_10: THREE.Mesh;
    Cube036_11: THREE.Mesh;
    Cube039_1: THREE.Mesh;
    Cube039_2: THREE.Mesh;
    Cube039_3: THREE.Mesh;
    Cube039_4: THREE.Mesh;
    Cube039_5: THREE.Mesh;
    Cube039_6: THREE.Mesh;
    Cube039_7: THREE.Mesh;
    Cube039_8: THREE.Mesh;
    Cube039_9: THREE.Mesh;
    Cube039_10: THREE.Mesh;
    Cube335: THREE.Mesh;
    Cube335_1: THREE.Mesh;
    Cube335_2: THREE.Mesh;
    Cube335_3: THREE.Mesh;
    Cube335_4: THREE.Mesh;
    Cube335_5: THREE.Mesh;
    Cube335_6: THREE.Mesh;
    Cube335_7: THREE.Mesh;
    Cube335_8: THREE.Mesh;
    Cube335_9: THREE.Mesh;
    Cube335_10: THREE.Mesh;
    Cube514: THREE.Mesh;
    Cube514_1: THREE.Mesh;
    Cube514_2: THREE.Mesh;
    Cube514_3: THREE.Mesh;
    Cube514_4: THREE.Mesh;
    Cube514_5: THREE.Mesh;
    Cube514_6: THREE.Mesh;
    Cube514_7: THREE.Mesh;
    Cube514_8: THREE.Mesh;
    Cube514_9: THREE.Mesh;
    Cube514_10: THREE.Mesh;
    Cube514_11: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube021_1: THREE.Mesh;
    Cube021_2: THREE.Mesh;
    Cube021_3: THREE.Mesh;
    Cube021_4: THREE.Mesh;
    Cube021_5: THREE.Mesh;
    Cube021_6: THREE.Mesh;
    Cube067: THREE.Mesh;
    Cube067_1: THREE.Mesh;
    Cube067_2: THREE.Mesh;
    Cube067_3: THREE.Mesh;
    Cube067_4: THREE.Mesh;
    Cube067_5: THREE.Mesh;
    Cube067_6: THREE.Mesh;
    Cube068: THREE.Mesh;
    Cube068_1: THREE.Mesh;
    Cube068_2: THREE.Mesh;
    Cube068_3: THREE.Mesh;
    Cube068_4: THREE.Mesh;
    Cube068_5: THREE.Mesh;
    Cube068_6: THREE.Mesh;
    Cube042_1: THREE.Mesh;
    Cube042_2: THREE.Mesh;
    Cube042_3: THREE.Mesh;
    Cube042_4: THREE.Mesh;
    Cube042_5: THREE.Mesh;
    Cube042_6: THREE.Mesh;
    Cube042_7: THREE.Mesh;
    Montageplatz1012: THREE.Mesh;
    Montageplatz1013: THREE.Mesh;
    Cube096: THREE.Mesh;
    Cube096_1: THREE.Mesh;
    Cube475: THREE.Mesh;
    Cube475_1: THREE.Mesh;
    Cube478: THREE.Mesh;
    Cube478_1: THREE.Mesh;
    Cube534: THREE.Mesh;
    Cube534_1: THREE.Mesh;
    Cube534_2: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    Cube002_2: THREE.Mesh;
    Cube002_3: THREE.Mesh;
    Cube002_4: THREE.Mesh;
    Cube075_1: THREE.Mesh;
    Cube075_2: THREE.Mesh;
    Cube077: THREE.Mesh;
    Cube077_1: THREE.Mesh;
    Cube077_2: THREE.Mesh;
    Cube249: THREE.Mesh;
    Cube249_1: THREE.Mesh;
    Cube249_2: THREE.Mesh;
    Cube464: THREE.Mesh;
    Cube464_1: THREE.Mesh;
    Cube464_2: THREE.Mesh;
    Cube464_3: THREE.Mesh;
    Cube464_4: THREE.Mesh;
    Cube464_5: THREE.Mesh;
    Cube464_6: THREE.Mesh;
    Cube464_7: THREE.Mesh;
    Cube464_8: THREE.Mesh;
    Cube626_1: THREE.Mesh;
    Cube626_2: THREE.Mesh;
    Cube519: THREE.Mesh;
    Cube519_1: THREE.Mesh;
    Cube282: THREE.Mesh;
    Cube282_1: THREE.Mesh;
    Schreibtisch_m_Sichtschutz006: THREE.Mesh;
    Cube325: THREE.Mesh;
    Cube325_1: THREE.Mesh;
    Cube591: THREE.Mesh;
    Cube591_1: THREE.Mesh;
    Cube452: THREE.Mesh;
    Cube452_1: THREE.Mesh;
    Cube452_2: THREE.Mesh;
    Cube452_3: THREE.Mesh;
    Cube452_4: THREE.Mesh;
    Cube452_5: THREE.Mesh;
    Cube451: THREE.Mesh;
    Cube451_1: THREE.Mesh;
    Cube454: THREE.Mesh;
    Cube454_1: THREE.Mesh;
    Cube454_2: THREE.Mesh;
    Untitled003: THREE.Mesh;
    Untitled003_1: THREE.Mesh;
    Cube802: THREE.Mesh;
    Cube802_1: THREE.Mesh;
    Cube802_2: THREE.Mesh;
    Cube803: THREE.Mesh;
    Cube803_1: THREE.Mesh;
    Cube803_2: THREE.Mesh;
    Cube805: THREE.Mesh;
    Cube805_1: THREE.Mesh;
    Cube806: THREE.Mesh;
    Cube806_1: THREE.Mesh;
    Cube806_2: THREE.Mesh;
    Untitled014: THREE.Mesh;
    Untitled014_1: THREE.Mesh;
    Cube808: THREE.Mesh;
    Cube808_1: THREE.Mesh;
    Cube808_2: THREE.Mesh;
    Cube808_3: THREE.Mesh;
    Cube808_4: THREE.Mesh;
    Cube808_5: THREE.Mesh;
    Cube807: THREE.Mesh;
    Cube807_1: THREE.Mesh;
    Cube809: THREE.Mesh;
    Cube809_1: THREE.Mesh;
    Cube809_2: THREE.Mesh;
    Untitled015: THREE.Mesh;
    Untitled015_1: THREE.Mesh;
    Cube814: THREE.Mesh;
    Cube814_1: THREE.Mesh;
    Cube814_2: THREE.Mesh;
    Cube814_3: THREE.Mesh;
    Cube814_4: THREE.Mesh;
    Cube814_5: THREE.Mesh;
    Cube810: THREE.Mesh;
    Cube810_1: THREE.Mesh;
    Cube815: THREE.Mesh;
    Cube815_1: THREE.Mesh;
    Cube815_2: THREE.Mesh;
    Untitled016: THREE.Mesh;
    Untitled016_1: THREE.Mesh;
    Cube030: THREE.Mesh;
    Cube030_1: THREE.Mesh;
    Cube030_2: THREE.Mesh;
    Cube030_3: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cube019_1: THREE.Mesh;
    Cube138_1: THREE.Mesh;
    Cube138_2: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube004_1: THREE.Mesh;
    Cube004_2: THREE.Mesh;
    Cube273_1: THREE.Mesh;
    Cube273_2: THREE.Mesh;
    Cube273_3: THREE.Mesh;
    Cube273_4: THREE.Mesh;
    Cylinder011_1: THREE.Mesh;
    Cylinder011_2: THREE.Mesh;
    Cylinder011_3: THREE.Mesh;
    Cube233: THREE.Mesh;
    Cube233_1: THREE.Mesh;
    Cube594: THREE.Mesh;
    Cube594_1: THREE.Mesh;
    Cube139: THREE.Mesh;
    Cube139_1: THREE.Mesh;
    Cube139_2: THREE.Mesh;
    Cube512: THREE.Mesh;
    Cube512_1: THREE.Mesh;
    Cube512_2: THREE.Mesh;
    roof002: THREE.Mesh;
    Cylinder010_1: THREE.Mesh;
    Cylinder010_2: THREE.Mesh;
    Cylinder010_3: THREE.Mesh;
    Cylinder010_4: THREE.Mesh;
    Cube545: THREE.Mesh;
    Cube545_1: THREE.Mesh;
    Cube545_2: THREE.Mesh;
    Cube545_3: THREE.Mesh;
    Cube545_4: THREE.Mesh;
    Cube546: THREE.Mesh;
    Cube546_1: THREE.Mesh;
    Cube546_2: THREE.Mesh;
    Cube546_3: THREE.Mesh;
    Cube546_4: THREE.Mesh;
    Cube542: THREE.Mesh;
    Cube542_1: THREE.Mesh;
    Cube542_2: THREE.Mesh;
    Cube542_3: THREE.Mesh;
    Cube542_4: THREE.Mesh;
    Cube542_5: THREE.Mesh;
    Cube542_6: THREE.Mesh;
    Cube542_7: THREE.Mesh;
    Cube544: THREE.Mesh;
    Cube544_1: THREE.Mesh;
    Cube544_2: THREE.Mesh;
    Cube544_3: THREE.Mesh;
    Cube547: THREE.Mesh;
    Cube547_1: THREE.Mesh;
    Cube547_2: THREE.Mesh;
    Cube547_3: THREE.Mesh;
    Cube167: THREE.Mesh;
    Cube167_1: THREE.Mesh;
    Cube167_2: THREE.Mesh;
    Cube167_3: THREE.Mesh;
    Cube167_4: THREE.Mesh;
    Cube167_5: THREE.Mesh;
    Cube167_6: THREE.Mesh;
    Cube168: THREE.Mesh;
    Cube168_1: THREE.Mesh;
    Cube168_2: THREE.Mesh;
    Cube168_3: THREE.Mesh;
    Cube168_4: THREE.Mesh;
    Cube174: THREE.Mesh;
    Cube174_1: THREE.Mesh;
    Cube174_2: THREE.Mesh;
    Montageplatz1008: THREE.Mesh;
    Cube176: THREE.Mesh;
    Cube176_1: THREE.Mesh;
    Cube176_2: THREE.Mesh;
    pathway: THREE.Mesh;
    wandstreben: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube064: THREE.Mesh;
    Cube076: THREE.Mesh;
    Cube076_1: THREE.Mesh;
    Cube076_2: THREE.Mesh;
    Cube076_3: THREE.Mesh;
    Cube076_4: THREE.Mesh;
    Cube076_5: THREE.Mesh;
    Cube132: THREE.Mesh;
    Cube132_1: THREE.Mesh;
    Cube132_2: THREE.Mesh;
    Cube132_3: THREE.Mesh;
    Cube132_4: THREE.Mesh;
    Bone: THREE.Bone;
    Bone_3: THREE.Bone;
    Bone_4: THREE.Bone;
    Bone_5: THREE.Bone;
    Bone_6: THREE.Bone;
    Bone_1: THREE.Bone;
    Bone_2: THREE.Bone;
  };
  materials: {
    ["schwarz.011"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Haut.002"]: THREE.MeshStandardMaterial;
    ["weiß-metall.006"]: THREE.MeshStandardMaterial;
    ["schwarz.013"]: THREE.MeshStandardMaterial;
    ["weiss.014"]: THREE.MeshStandardMaterial;
    ["braun.014"]: THREE.MeshStandardMaterial;
    ["Rzo_Hair.002"]: THREE.MeshStandardMaterial;
    ["Haut.002"]: THREE.MeshStandardMaterial;
    ["Rzo_Hair.001"]: THREE.MeshStandardMaterial;
    jeans: THREE.MeshStandardMaterial;
    ["schwarz.002"]: THREE.MeshStandardMaterial;
    ["dblau.012"]: THREE.MeshStandardMaterial;
    ["Haut.001"]: THREE.MeshStandardMaterial;
    ["weiss.013"]: THREE.MeshStandardMaterial;
    ["braun.013"]: THREE.MeshStandardMaterial;
    ["schwarz.010"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["weiß-metall.005"]: THREE.MeshStandardMaterial;
    ["Haut.001"]: THREE.MeshStandardMaterial;
    Ausbildung_Boden: THREE.MeshStandardMaterial;
    metall: THREE.MeshStandardMaterial;
    Glas: THREE.MeshPhysicalMaterial;
    ["weiss.001"]: THREE.MeshStandardMaterial;
    schwarz: THREE.MeshStandardMaterial;
    ["gruen.001"]: THREE.MeshStandardMaterial;
    weiss: THREE.MeshStandardMaterial;
    ["graublau.001"]: THREE.MeshStandardMaterial;
    NMHblau: THREE.MeshStandardMaterial;
    graublau: THREE.MeshStandardMaterial;
    ["schwarz.022"]: THREE.MeshStandardMaterial;
    braun: THREE.MeshStandardMaterial;
    ["schwarz.001"]: THREE.MeshStandardMaterial;
    ["Bildschirmleuchten.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["beige.001"]: THREE.MeshStandardMaterial;
    ["braun.001"]: THREE.MeshStandardMaterial;
    ["hblaugrau.001"]: THREE.MeshStandardMaterial;
    ["NMHblau.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["fenster.001"]: THREE.MeshStandardMaterial;
    ["drot.001"]: THREE.MeshStandardMaterial;
    ["dgrau.001"]: THREE.MeshStandardMaterial;
    gruen: THREE.MeshStandardMaterial;
    ["schwarz.005"]: THREE.MeshStandardMaterial;
    ["schwarz.006"]: THREE.MeshStandardMaterial;
    ["dgrau.003"]: THREE.MeshStandardMaterial;
    ["dblau.003"]: THREE.MeshStandardMaterial;
    ["Bildschirmleuchten.003"]: THREE.MeshStandardMaterial;
    ["Lampe.001"]: THREE.MeshStandardMaterial;
    hblaugrau: THREE.MeshStandardMaterial;
    ["schwarz.014"]: THREE.MeshStandardMaterial;
    ["orange.002"]: THREE.MeshStandardMaterial;
    dblau: THREE.MeshStandardMaterial;
    ["graublau.004"]: THREE.MeshStandardMaterial;
    ["beige.002"]: THREE.MeshStandardMaterial;
    ["dblau.002"]: THREE.MeshStandardMaterial;
    ["NMHblau.002"]: THREE.MeshStandardMaterial;
    ["metall.001"]: THREE.MeshStandardMaterial;
    gelb: THREE.MeshStandardMaterial;
    ["braun.003"]: THREE.MeshStandardMaterial;
    ["metall-grau.001"]: THREE.MeshStandardMaterial;
    ["dgrau.005"]: THREE.MeshStandardMaterial;
    brick: THREE.MeshStandardMaterial;
    ["weiss.012"]: THREE.MeshStandardMaterial;
    ["braun.008"]: THREE.MeshStandardMaterial;
    ["gruen.006"]: THREE.MeshStandardMaterial;
    ["weiss.004"]: THREE.MeshStandardMaterial;
    ["metall.002"]: THREE.MeshStandardMaterial;
    ["schwarz.007"]: THREE.MeshStandardMaterial;
    ["weiß-metall.001"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["dblau.stoff.001"]: THREE.MeshStandardMaterial;
    ["schwarz.023"]: THREE.MeshStandardMaterial;
    boden: THREE.MeshStandardMaterial;
    ["metal-Black-grey-dird.003"]: THREE.MeshStandardMaterial;
    ["metall-weiß"]: THREE.MeshStandardMaterial;
    ["Plasti.blackl.004"]: THREE.MeshPhysicalMaterial;
    ["orange.001"]: THREE.MeshStandardMaterial;
    ["Plasti.blackl.005"]: THREE.MeshPhysicalMaterial;
    ["Gitter-blau.003"]: THREE.MeshStandardMaterial;
    ["hgrau.006"]: THREE.MeshStandardMaterial;
    ["metal-grey-dird.001"]: THREE.MeshStandardMaterial;
    ["Deep.Black"]: THREE.MeshStandardMaterial;
    ["metall.007"]: THREE.MeshStandardMaterial;
    ["Plastik-weiss"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["metall.010"]: THREE.MeshStandardMaterial;
    ["Plasti.weiß.001"]: THREE.MeshPhysicalMaterial;
    ["gelb.metal.001"]: THREE.MeshStandardMaterial;
    ["Plasti.blackl.003"]: THREE.MeshPhysicalMaterial;
    ["weiss.003"]: THREE.MeshStandardMaterial;
    ["schwarz.004"]: THREE.MeshStandardMaterial;
    ["dgrau.002"]: THREE.MeshStandardMaterial;
    ["fenster.003"]: THREE.MeshStandardMaterial;
    ["Weiss_acrül.001"]: THREE.MeshStandardMaterial;
    ["Bildschirmleuchten.006"]: THREE.MeshStandardMaterial;
    rot: THREE.MeshStandardMaterial;
    fenster: THREE.MeshStandardMaterial;
    ["metal-Black-grey-dird.001"]: THREE.MeshStandardMaterial;
    ["gelb.metal.002"]: THREE.MeshStandardMaterial;
    ["Plasti.blackl.001"]: THREE.MeshPhysicalMaterial;
    gruen_leuchten: THREE.MeshStandardMaterial;
    ["braun.002"]: THREE.MeshStandardMaterial;
    ["metall-grau"]: THREE.MeshStandardMaterial;
    ["dblau.007"]: THREE.MeshStandardMaterial;
    ["beige.003"]: THREE.MeshStandardMaterial;
    ["braun.005"]: THREE.MeshStandardMaterial;
    ["metall.003"]: THREE.MeshStandardMaterial;
    beige: THREE.MeshStandardMaterial;
    ["schwarz.018"]: THREE.MeshStandardMaterial;
    Bildschirmleuchten: THREE.MeshStandardMaterial;
    ["gruen_leuchten.001"]: THREE.MeshStandardMaterial;
    ["dblau.metal"]: THREE.MeshStandardMaterial;
    ["schwarz.003"]: THREE.MeshStandardMaterial;
    ["fenster.002"]: THREE.MeshStandardMaterial;
    ["Bildschirmleuchten.001"]: THREE.MeshStandardMaterial;
    ["hblaugrau.Fertigung"]: THREE.MeshStandardMaterial;
    teppichboden: THREE.MeshStandardMaterial;
    ["weiss.007"]: THREE.MeshStandardMaterial;
    ["braun.006"]: THREE.MeshStandardMaterial;
    ["gruen.003"]: THREE.MeshStandardMaterial;
    ["bild.001"]: THREE.MeshStandardMaterial;
    ["hgrau.002"]: THREE.MeshStandardMaterial;
    Lampe: THREE.MeshStandardMaterial;
    ["dblau.005"]: THREE.MeshStandardMaterial;
    ["metall-weiß.001"]: THREE.MeshStandardMaterial;
    ["weiß-metall"]: THREE.MeshStandardMaterial;
    Pullover_rot: THREE.MeshStandardMaterial;
    ["grün.007"]: THREE.MeshStandardMaterial;
  };
};

export function Fertigung(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/fertigung.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <FertigungBot />
      <mesh
        geometry={nodes.pathway.geometry}
        material={materials.boden}
        position={[146.41, -0.967, -160.155]}
        scale={[1, 1.743, 1.376]}
      />
      <mesh
        geometry={nodes.wandstreben.geometry}
        material={materials.graublau}
        position={[113.474, -0.871, -147.754]}
        scale={[0.029, 3.003, 0.07]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["orange.002"]}
        position={[139.285, 0.142, -169.395]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.097, 1.257, 0.097]}
      />
      <mesh
        geometry={nodes.Cube064.geometry}
        material={materials["orange.002"]}
        position={[129.177, 0.142, -171.507]}
        rotation={[0, 1.571, 0]}
        scale={[0.097, 1.257, 0.097]}
      />
      <group
        position={[142.568, -0.784, -171.52]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[-0.368, -0.088, -0.247]}
      >
        <mesh geometry={nodes.Cube076.geometry} material={materials.schwarz} />
        <mesh
          geometry={nodes.Cube076_1.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube076_2.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube076_3.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube076_4.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube076_5.geometry}
          material={materials["Bildschirmleuchten.006"]}
        />
      </group>
      <group position={[142.551, 0.72, -170.519]} scale={[0.191, 0.005, 0.37]}>
        <mesh geometry={nodes.Cube132.geometry} material={materials.schwarz} />
        <mesh
          geometry={nodes.Cube132_1.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube132_2.geometry}
          material={materials.Pullover_rot}
        />
        <mesh geometry={nodes.Cube132_3.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube132_4.geometry}
          material={materials["grün.007"]}
        />
      </group>
      <group
        position={[136.183, 0.008, -167.268]}
        rotation={[0, -1.186, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube226.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube226_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube226_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, 0.13, 0.017]} rotation={[0.242, 0, 0]}>
          <mesh
            geometry={nodes.Cube239.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube239_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube239_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube242.geometry}
            material={materials["schwarz.013"]}
          />
          <mesh
            geometry={nodes.Cube242_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube242_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]}>
          <mesh
            geometry={nodes.Cube536.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube536_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube536_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled004.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled004_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[141.339, 0.028, -156.25]}
        rotation={[-Math.PI, 0.604, -Math.PI]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube764.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube764_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube764_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, 0.13, 0.017]} rotation={[0.242, 0, 0]}>
          <mesh
            geometry={nodes.Cube766.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube766_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube766_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube767.geometry}
            material={materials["schwarz.013"]}
          />
          <mesh
            geometry={nodes.Cube767_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube767_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]}>
          <mesh
            geometry={nodes.Cube768.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube768_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube768_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled006.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled006_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[126.735, 0.008, -165.424]}
        rotation={[0, -1.186, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube779.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube779_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube779_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, 0.13, 0.017]} rotation={[0.242, 0, 0]}>
          <mesh
            geometry={nodes.Cube780.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube780_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube780_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube781.geometry}
            material={materials["schwarz.013"]}
          />
          <mesh
            geometry={nodes.Cube781_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube781_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]}>
          <mesh
            geometry={nodes.Cube782.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube782_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube782_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled009.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled009_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[130.582, 0.019, -162.996]}
        rotation={[-Math.PI, 1.493, -Math.PI]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube783.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube783_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube783_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh geometry={nodes.Cube784.geometry} material={materials.jeans} />
          <mesh
            geometry={nodes.Cube784_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube784_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.387, -0.001, -0.006]}>
          <mesh
            geometry={nodes.Cube785.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube785_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube785_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.071, 0, -0.004]}>
          <mesh
            geometry={nodes.Cube786.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube786_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled010.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled010_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[117.407, 0.019, -152.141]}
        rotation={[0, -0.033, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube794.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube794_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube794_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube795.geometry}
            material={materials["schwarz.002"]}
          />
          <mesh
            geometry={nodes.Cube795_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube795_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.387, -0.001, -0.006]}>
          <mesh
            geometry={nodes.Cube796.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube796_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube796_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.071, 0, -0.004]}>
          <mesh
            geometry={nodes.Cube797.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube797_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled012.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled012_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[130.725, -0.419, -171.168]}
        rotation={[-Math.PI / 2, -1.432, -Math.PI / 2]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube775.geometry}
          material={materials["dblau.012"]}
        />
        <mesh
          geometry={nodes.Cube775_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube775_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube775_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube775_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube775_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube774.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube774_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube776.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube776_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube776_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled008.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled008_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[139.981, 0.019, -162.046]}
        rotation={[0, -1.192, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube827.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube827_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube827_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh geometry={nodes.Cube831.geometry} material={materials.jeans} />
          <mesh
            geometry={nodes.Cube831_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube831_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.387, -0.001, -0.006]}>
          <mesh
            geometry={nodes.Cube832.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube832_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube832_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.071, 0, -0.004]}>
          <mesh
            geometry={nodes.Cube833.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube833_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled018.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled018_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[128.346, 0.019, -170.441]}
        rotation={[0, 1.221, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube893.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube893_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube893_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube894.geometry}
            material={materials["schwarz.002"]}
          />
          <mesh
            geometry={nodes.Cube894_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube894_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.387, -0.001, -0.006]}>
          <mesh
            geometry={nodes.Cube895.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube895_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube895_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.071, 0, -0.004]}>
          <mesh
            geometry={nodes.Cube896.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube896_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled025.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled025_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <mesh
        geometry={nodes.Cube097.geometry}
        material={materials.Ausbildung_Boden}
        position={[118.018, -0.869, -167.136]}
        scale={[3.163, 0.037, 1]}
      />
      <group
        position={[121.973, 0.134, -163.263]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.517, 0.976, 0.025]}
      >
        <mesh
          geometry={nodes.Cube678.geometry}
          material={materials.Ausbildung_Boden}
        />
        <mesh geometry={nodes.Cube678_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[117.865, 0.134, -162.111]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.518, 0.976, 0.025]}
      >
        <mesh geometry={nodes.Cube679.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube679_1.geometry} material={materials.Glas} />
      </group>
      <group
        position={[118.399, 0.134, -161.621]}
        scale={[0.506, 0.976, 0.025]}
      >
        <mesh geometry={nodes.Cube681.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube681_1.geometry} material={materials.Glas} />
      </group>
      <group
        position={[121.972, 0.134, -162.174]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.572, 0.976, 0.025]}
      >
        <mesh geometry={nodes.Cube682.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube682_1.geometry} material={materials.Glas} />
      </group>
      <group
        position={[121.972, 0.134, -167.377]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.506, 0.976, 0.025]}
      >
        <mesh geometry={nodes.Cube683.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube683_1.geometry} material={materials.Glas} />
      </group>
      <group
        position={[121.973, 0.134, -171.462]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.546, 0.976, 0.025]}
      >
        <mesh
          geometry={nodes.Cube684.geometry}
          material={materials.Ausbildung_Boden}
        />
        <mesh geometry={nodes.Cube684_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[120.425, 0.134, -166.768]}
        scale={[0.509, 0.976, 0.025]}
      >
        <mesh
          geometry={nodes.Cube685.geometry}
          material={materials.Ausbildung_Boden}
        />
        <mesh geometry={nodes.Cube685_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[118.399, 0.134, -166.767]}
        scale={[0.506, 0.976, 0.025]}
      >
        <mesh geometry={nodes.Cube686.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube686_1.geometry} material={materials.Glas} />
      </group>
      <mesh
        geometry={nodes.Cube607.geometry}
        material={materials.metall}
        position={[119.078, -0.115, -161.622]}
        scale={[0.046, 0.083, 0.024]}
      />
      <mesh
        geometry={nodes.Cube608.geometry}
        material={materials.metall}
        position={[119.078, -0.115, -166.768]}
        scale={[0.046, 0.083, 0.024]}
      />
      <group
        position={[116.312, 0.134, -166.767]}
        scale={[0.506, 0.976, 0.025]}
      >
        <mesh geometry={nodes.Cube689.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube689_1.geometry} material={materials.Glas} />
      </group>
      <mesh
        geometry={nodes.Cube610.geometry}
        material={materials.metall}
        position={[116.996, -0.115, -166.768]}
        scale={[0.046, 0.083, 0.024]}
      />
      <group
        position={[115.297, 0.134, -166.768]}
        scale={[0.506, 0.976, 0.025]}
      >
        <mesh
          geometry={nodes.Cube692.geometry}
          material={materials.Ausbildung_Boden}
        />
        <mesh geometry={nodes.Cube692_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[114.831, 0.134, -166.223]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.506, 0.976, 0.025]}
      >
        <mesh
          geometry={nodes.Cube693.geometry}
          material={materials.Ausbildung_Boden}
        />
        <mesh geometry={nodes.Cube693_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[114.831, 0.134, -163.185]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.506, 0.976, 0.025]}
      >
        <mesh geometry={nodes.Cube694.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube694_1.geometry} material={materials.Glas} />
      </group>
      <group
        position={[114.831, 0.134, -162.169]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.506, 0.976, 0.025]}
      >
        <mesh
          geometry={nodes.Cube695.geometry}
          material={materials.Ausbildung_Boden}
        />
        <mesh geometry={nodes.Cube695_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[115.283, 0.134, -161.623]}
        scale={[0.506, 0.976, 0.025]}
      >
        <mesh
          geometry={nodes.Cube696.geometry}
          material={materials.Ausbildung_Boden}
        />
        <mesh geometry={nodes.Cube696_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[114.831, 0.134, -168.335]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.506, 0.976, 0.025]}
      >
        <mesh geometry={nodes.Cube698.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube698_1.geometry} material={materials.Glas} />
      </group>
      <group
        position={[114.831, 0.134, -167.316]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.506, 0.976, 0.025]}
      >
        <mesh
          geometry={nodes.Cube715.geometry}
          material={materials.Ausbildung_Boden}
        />
        <mesh geometry={nodes.Cube715_1.geometry} material={materials.metall} />
      </group>
      <mesh
        geometry={nodes.Buero_Regal1.geometry}
        material={materials["weiss.001"]}
        position={[115.128, -0.514, -166.21]}
        scale={[0.263, 0.317, 0.474]}
      />
      <group
        position={[116.918, -0.638, -161.99]}
        scale={[0.615, 0.374, 0.304]}
      >
        <mesh geometry={nodes.Cube759.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube759_1.geometry} material={materials.metall} />
      </group>
      <mesh
        geometry={nodes.Cube621.geometry}
        material={materials["gruen.001"]}
        position={[120.078, -0.266, -170.02]}
        rotation={[-Math.PI, 1.153, -Math.PI]}
        scale={[0.041, 0.084, 0.007]}
      />
      <mesh
        geometry={nodes.Cube622.geometry}
        material={materials["gruen.001"]}
        position={[120.259, -0.254, -170.011]}
        rotation={[0, 0.124, 0]}
        scale={[0.03, 0.113, 0.006]}
      />
      <mesh
        geometry={nodes.Cube623.geometry}
        material={materials["gruen.001"]}
        position={[120.483, -0.264, -170.02]}
        rotation={[-Math.PI, 0.58, -Math.PI]}
        scale={[0.041, 0.084, 0.007]}
      />
      <mesh
        geometry={nodes.Cube624.geometry}
        material={materials["gruen.001"]}
        position={[120.67, -0.254, -170.011]}
        rotation={[0, -0.899, 0]}
        scale={[0.03, 0.113, 0.006]}
      />
      <mesh
        geometry={nodes.Cube626.geometry}
        material={materials["gruen.001"]}
        position={[120.861, -0.174, -170.011]}
        rotation={[Math.PI, -0.993, Math.PI]}
        scale={[0.03, 0.151, 0.006]}
      />
      <mesh
        geometry={nodes.Cube627.geometry}
        material={materials["gruen.001"]}
        position={[121.098, -0.266, -170.02]}
        rotation={[-Math.PI, 0.436, -Math.PI]}
        scale={[0.041, 0.084, 0.007]}
      />
      <mesh
        geometry={nodes.Cube628.geometry}
        material={materials["gruen.001"]}
        position={[121.256, -0.266, -170.02]}
        rotation={[-Math.PI, 1.153, -Math.PI]}
        scale={[0.04, 0.084, 0.006]}
      />
      <mesh
        geometry={nodes.Cube629.geometry}
        material={materials["gruen.001"]}
        position={[121.401, -0.254, -170.011]}
        rotation={[0, 0.124, 0]}
        scale={[0.024, 0.113, 0.006]}
      />
      <mesh
        geometry={nodes.Cube630.geometry}
        material={materials["gruen.001"]}
        position={[121.582, -0.264, -170.02]}
        rotation={[-Math.PI, 0.58, -Math.PI]}
        scale={[0.036, 0.084, 0.007]}
      />
      <mesh
        geometry={nodes.Cube633.geometry}
        material={materials["gruen.001"]}
        position={[115.085, 0.219, -166.483]}
        rotation={[-3, 0.371, 3.036]}
        scale={[0.041, 0.084, 0.007]}
      />
      <mesh
        geometry={nodes.Cube634.geometry}
        material={materials["gruen.001"]}
        position={[115.243, 0.219, -166.483]}
        rotation={[2.967, 1.178, -3.006]}
        scale={[0.04, 0.084, 0.006]}
      />
      <group
        position={[121.52, -0.638, -165.11]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.615, 0.374, 0.304]}
      >
        <mesh geometry={nodes.Cube848.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube848_1.geometry} material={materials.metall} />
      </group>
      <group position={[121.56, -0.551, -166.305]} scale={0.035}>
        <mesh
          geometry={nodes.Cylinder026.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cylinder026_1.geometry}
          material={materials.Ausbildung_Boden}
        />
      </group>
      <group
        position={[115.858, -0.551, -161.917]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.035}
      >
        <mesh
          geometry={nodes.Cylinder027.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cylinder027_1.geometry}
          material={materials.Ausbildung_Boden}
        />
      </group>
      <group
        position={[120.168, -0.658, -165.983]}
        rotation={[Math.PI, -0.64, Math.PI]}
        scale={[0.504, 0.329, 0.267]}
      >
        <mesh geometry={nodes.Cube850.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube850_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[120.621, -0.654, -165.053]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.035}
      >
        <mesh
          geometry={nodes.Cylinder029_1.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cylinder029_2.geometry}
          material={materials.Ausbildung_Boden}
        />
      </group>
      <group
        position={[120.114, -0.658, -164.115]}
        rotation={[0, -0.726, 0]}
        scale={[0.504, 0.329, 0.267]}
      >
        <mesh geometry={nodes.Cube851.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube851_1.geometry} material={materials.metall} />
      </group>
      <mesh
        geometry={nodes.Cylinder014.geometry}
        material={materials.Glas}
        position={[120.547, -0.49, -165.304]}
        rotation={[0, 0.226, 0]}
        scale={[0.063, 0.081, 0.063]}
      />
      <mesh
        geometry={nodes.Cube639.geometry}
        material={materials["gruen.001"]}
        position={[120.548, -0.38, -165.3]}
        rotation={[Math.PI, -1.219, Math.PI]}
        scale={[0.012, 0.063, 0.002]}
      />
      <mesh
        geometry={nodes.Cylinder016.geometry}
        material={materials.Glas}
        position={[120.624, -0.53, -165.168]}
        rotation={[0, 0.226, 0]}
        scale={[0.063, 0.045, 0.063]}
      />
      <group
        position={[121.579, -0.568, -171.11]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh geometry={nodes.Cube853.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube853_1.geometry}
          material={materials["graublau.001"]}
        />
        <mesh
          geometry={nodes.Cube853_2.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube853_3.geometry}
          material={materials.graublau}
        />
        <mesh geometry={nodes.Cube853_4.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube853_5.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[121.032, -0.478, -162.859]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.264, 0.383, 0.897]}
      >
        <mesh
          geometry={nodes.Cube120.geometry}
          material={materials["schwarz.022"]}
        />
        <mesh geometry={nodes.Cube120_1.geometry} material={materials.braun} />
      </group>
      <mesh
        geometry={nodes.Cube642.geometry}
        material={materials["gruen.001"]}
        position={[121.334, -0.086, -162.874]}
        rotation={[-3, 0.371, 3.036]}
        scale={[0.041, 0.084, 0.007]}
      />
      <mesh
        geometry={nodes.Cube643.geometry}
        material={materials["gruen.001"]}
        position={[121.491, -0.086, -162.874]}
        rotation={[2.967, 1.178, -3.006]}
        scale={[0.04, 0.084, 0.006]}
      />
      <mesh
        geometry={nodes.Cube645.geometry}
        material={materials["gruen.001"]}
        position={[120.818, -0.086, -162.905]}
        rotation={[-0.132, 0.026, -0.051]}
        scale={[0.041, 0.084, 0.007]}
      />
      <mesh
        geometry={nodes.Cube646.geometry}
        material={materials["gruen.001"]}
        position={[120.673, -0.086, -162.844]}
        rotation={[0.094, -0.781, 0.04]}
        scale={[0.04, 0.084, 0.006]}
      />
      <group
        position={[120.925, 0.188, -166.715]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.288, 0.016, 0.452]}
      >
        <mesh
          geometry={nodes.Cube122.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube122_1.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
      </group>
      <group
        position={[120.57, -0.56, -164.788]}
        rotation={[Math.PI, -0.867, Math.PI]}
        scale={[0.107, 0.008, 0.144]}
      >
        <mesh
          geometry={nodes.Cube147_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Cube147_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cube147_3.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
      </group>
      <group
        position={[115.202, -0.232, -164.969]}
        rotation={[0, -0.26, 0]}
        scale={[0.107, 0.008, 0.144]}
      >
        <mesh
          geometry={nodes.Cube149_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Cube149_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cube149_3.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
      </group>
      <group
        position={[115.252, -0.232, -163.519]}
        rotation={[0, 0.187, 0]}
        scale={[0.107, 0.008, 0.144]}
      >
        <mesh
          geometry={nodes.Cube494.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Cube494_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cube494_2.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
      </group>
      <group
        position={[117.455, -0.232, -164.567]}
        rotation={[Math.PI, -0.042, Math.PI]}
        scale={[0.107, 0.008, 0.144]}
      >
        <mesh
          geometry={nodes.Cube617_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Cube617_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cube617_3.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
      </group>
      <group
        position={[117.432, -0.232, -165.9]}
        rotation={[Math.PI, -0.269, Math.PI]}
        scale={[0.107, 0.008, 0.144]}
      >
        <mesh
          geometry={nodes.Cube642_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Cube642_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Cube642_3.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder017.geometry}
        material={materials.Glas}
        position={[115.017, -0.162, -163.998]}
        rotation={[0, 0.226, 0]}
        scale={[0.063, 0.081, 0.063]}
      />
      <mesh
        geometry={nodes.Cube648.geometry}
        material={materials["gruen.001"]}
        position={[115.018, -0.051, -163.994]}
        rotation={[Math.PI, -1.219, Math.PI]}
        scale={[0.012, 0.063, 0.002]}
      />
      <group
        position={[115.451, -0.29, -171.803]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.232, 0.036, 0.532]}
      >
        <mesh
          geometry={nodes.Cube671.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube671_1.geometry}
          material={materials["beige.001"]}
        />
      </group>
      <group
        position={[120.274, -0.594, -170.008]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.154, 0.154, 0.31]}
      >
        <mesh geometry={nodes.Cube834.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube834_1.geometry}
          material={materials["braun.001"]}
        />
      </group>
      <group
        position={[115.275, -0.096, -166.46]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.136, 0.136, 0.275]}
      >
        <mesh geometry={nodes.Cube844.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube844_1.geometry}
          material={materials["braun.001"]}
        />
      </group>
      <group
        position={[121.487, -0.401, -162.88]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.136, 0.136, 0.275]}
      >
        <mesh geometry={nodes.Cube860.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube860_1.geometry}
          material={materials["braun.001"]}
        />
      </group>
      <group
        position={[120.645, -0.401, -162.88]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.136, 0.136, 0.275]}
      >
        <mesh geometry={nodes.Cube863.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube863_1.geometry}
          material={materials["braun.001"]}
        />
      </group>
      <group
        position={[119.016, -0.18, -168.872]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.025, 0.348, 0.706]}
      >
        <mesh
          geometry={nodes.Cube670.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube670_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube670_2.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube670_3.geometry} material={materials.metall} />
      </group>
      <group
        position={[117.817, -0.231, -171.162]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.995, 0.478, 0.427]}
      >
        <mesh
          geometry={nodes.Cube680.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cube680_1.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube680_2.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube680_3.geometry}
          material={materials["drot.001"]}
        />
        <mesh
          geometry={nodes.Cube680_4.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube680_5.geometry}
          material={materials["weiss.001"]}
        />
      </group>
      <group
        position={[115.206, -0.256, -163.367]}
        scale={[0.358, 0.019, 0.577]}
      >
        <mesh
          geometry={nodes.Cube741.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube741_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[117.428, -0.256, -166.073]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.358, 0.019, 0.577]}
      >
        <mesh
          geometry={nodes.Cube743.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube743_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[115.158, -0.734, -161.878]}
        scale={[0.188, 0.188, 0.212]}
      >
        <mesh geometry={nodes.Cube847.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube847_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube847_2.geometry} material={materials.gruen} />
      </group>
      <group
        position={[119.888, -0.726, -162.887]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.188, 0.188, 0.212]}
      >
        <mesh geometry={nodes.Cube857.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube857_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube857_2.geometry} material={materials.gruen} />
      </group>
      <group
        position={[114.831, 0.134, -171.425]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.542, 0.976, 0.025]}
      >
        <mesh
          geometry={nodes.Cube697.geometry}
          material={materials.Ausbildung_Boden}
        />
        <mesh geometry={nodes.Cube697_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[121.455, -0.125, -166.325]}
        rotation={[0, 0.287, -Math.PI]}
        scale={[-0.08, -0.084, -0.002]}
      >
        <mesh
          geometry={nodes.Cube086.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube086_1.geometry}
          material={materials["schwarz.005"]}
        />
      </group>
      <group
        position={[121.463, -0.526, -166.237]}
        rotation={[0, -1.214, -Math.PI]}
        scale={[0.013, 0.005, 0.022]}
      >
        <mesh geometry={nodes.Cube087.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube087_1.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[121.458, -0.526, -166.139]}
        rotation={[-Math.PI, 0.446, 0]}
        scale={[0.013, 0.005, 0.022]}
      >
        <mesh geometry={nodes.Cube088.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube088_1.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[115.123, -0.777, -169.5]}
        rotation={[0, 0.001, 0]}
        scale={[0.354, 0.015, 0.602]}
      >
        <mesh
          geometry={nodes.Cube082.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube082_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube082_2.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube082_3.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube082_4.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube082_5.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube082_6.geometry} material={materials.metall} />
      </group>
      <group
        position={[121.884, 0.226, -168.32]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={[0.354, 0.015, 0.602]}
      >
        <mesh
          geometry={nodes.Cube083.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube083_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube083_2.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube083_3.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube083_4.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube083_5.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube083_6.geometry} material={materials.metall} />
      </group>
      <group
        position={[121.884, 0.226, -168.256]}
        scale={[0.034, 0.025, 0.025]}
      >
        <mesh geometry={nodes.Cube089.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube089_1.geometry}
          material={materials["Bildschirmleuchten.003"]}
        />
        <mesh
          geometry={nodes.Cube089_2.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[115.132, 0.226, -169.894]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.034, 0.025, 0.025]}
      >
        <mesh geometry={nodes.Cube090.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube090_1.geometry}
          material={materials["Bildschirmleuchten.003"]}
        />
        <mesh
          geometry={nodes.Cube090_2.geometry}
          material={materials.schwarz}
        />
      </group>
      <group position={[118.861, 4.952, -149.898]} scale={[5.036, 0.03, 0.151]}>
        <mesh
          geometry={nodes.Cube007_1.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube007_2.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube007_3.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
      <group position={[118.861, 4.891, -165.062]} scale={[5.036, 0.03, 0.151]}>
        <mesh
          geometry={nodes.Cube133.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube133_1.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube133_2.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
      <group position={[141.032, 4.952, -149.866]} scale={[5.036, 0.03, 0.151]}>
        <mesh
          geometry={nodes.Cube134.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube134_1.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube134_2.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
      <group position={[141.032, 4.952, -165.062]} scale={[5.036, 0.03, 0.151]}>
        <mesh
          geometry={nodes.Cube135.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube135_1.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube135_2.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
      <group position={[145.684, 4.952, -159.953]} scale={[2.788, 0.03, 0.151]}>
        <mesh
          geometry={nodes.Cube165.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube165_1.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube165_2.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
      <group position={[122.689, 5.689, -150.409]} scale={[2.93, 3.227, 3.412]}>
        <mesh
          geometry={nodes.Cube830.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube830_1.geometry}
          material={materials["schwarz.014"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube660.geometry}
        material={materials.hblaugrau}
        position={[124.983, 8.716, -160.202]}
        scale={[24.469, 3.294, 6.742]}
      />
      <group position={[122.679, 5.759, -161.821]} scale={[2.93, 3.227, 3.412]}>
        <mesh
          geometry={nodes.Cube855.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube855_1.geometry}
          material={materials["schwarz.014"]}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder018.geometry}
        material={materials.hblaugrau}
        position={[138.21, 5.32, -154.177]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[-0.712, -7.653, -1.433]}
      />
      <mesh
        geometry={nodes.Cylinder020.geometry}
        material={materials.hblaugrau}
        position={[138.21, 5.354, -165.589]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[-0.712, -7.653, -1.433]}
      />
      <group
        position={[118.734, -0.706, -158.52]}
        scale={[0.266, 0.932, 0.319]}
      >
        <mesh
          geometry={nodes.Cube024_1.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube024_2.geometry}
          material={materials.graublau}
        />
      </group>
      <mesh
        geometry={nodes.Cube043.geometry}
        material={materials.graublau}
        position={[113.582, 2.867, -158.932]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-13.861, -0.112, -0.031]}
      />
      <group
        position={[132.956, -0.825, -158.718]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.103, -0.103, -0.122]}
      >
        <mesh geometry={nodes.Cube131.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube131_1.geometry}
          material={materials["braun.001"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube100.geometry}
        material={materials.gruen}
        position={[132.945, -0.16, -158.726]}
        rotation={[-2.657, 1.186, 2.365]}
        scale={[0.071, 0.004, 0.047]}
      />
      <group
        position={[119.104, -0.854, -158.718]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.103, -0.103, -0.122]}
      >
        <mesh geometry={nodes.Cube071.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube071_1.geometry}
          material={materials["braun.001"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials.gruen}
        position={[119.081, -0.189, -158.726]}
        rotation={[-2.674, -1.354, -3.024]}
        scale={[0.071, 0.004, 0.047]}
      />
      <group
        position={[126.672, 3.203, -165.487]}
        scale={[-0.224, -0.224, -0.217]}
      >
        <mesh
          geometry={nodes.Cube193_1.geometry}
          material={materials["orange.002"]}
        />
        <mesh geometry={nodes.Cube193_2.geometry} material={materials.metall} />
      </group>
      <group
        position={[126.673, 3.625, -165.529]}
        scale={[0.427, 0.122, 0.223]}
      >
        <mesh geometry={nodes.Cube195.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube195_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[134.226, 3.203, -165.487]}
        scale={[-0.224, -0.224, -0.217]}
      >
        <mesh
          geometry={nodes.Cube196.geometry}
          material={materials["orange.002"]}
        />
        <mesh geometry={nodes.Cube196_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[134.227, 3.619, -165.529]}
        scale={[0.427, 0.122, 0.223]}
      >
        <mesh geometry={nodes.Cube197.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube197_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[128.178, 3.203, -152.987]}
        scale={[-0.224, -0.224, -0.174]}
      >
        <mesh
          geometry={nodes.Cube199.geometry}
          material={materials["orange.002"]}
        />
        <mesh geometry={nodes.Cube199_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[128.179, 3.619, -152.698]}
        scale={[0.427, 0.122, 0.223]}
      >
        <mesh geometry={nodes.Cube200.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube200_1.geometry} material={materials.metall} />
      </group>
      <mesh
        geometry={nodes.wandstreben009.geometry}
        material={materials["graublau.004"]}
        position={[144.255, 2.979, -154.211]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.029, 16.562, 0.07]}
      />
      <group
        position={[133.228, 0.776, -164.363]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          geometry={nodes.Cube070_1.geometry}
          material={materials["beige.002"]}
        />
        <mesh
          geometry={nodes.Cube070_2.geometry}
          material={materials["dblau.002"]}
        />
        <mesh
          geometry={nodes.Cube070_3.geometry}
          material={materials["NMHblau.002"]}
        />
        <mesh
          geometry={nodes.Cube070_4.geometry}
          material={materials["metall.001"]}
        />
        <mesh geometry={nodes.Cube070_5.geometry} material={materials.gelb} />
        <mesh
          geometry={nodes.Cube070_6.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube070_7.geometry}
          material={materials["metall-grau.001"]}
        />
        <mesh geometry={nodes.Cube070_8.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube070_9.geometry}
          material={materials["dgrau.005"]}
        />
      </group>
      <group
        position={[128.868, 0.622, -158.132]}
        rotation={[0.002, 0, 0.007]}
        scale={[0.144, 0.1, 0.19]}
      >
        <mesh
          geometry={nodes.Cube027_1.geometry}
          material={materials["beige.002"]}
        />
        <mesh
          geometry={nodes.Cube027_2.geometry}
          material={materials["dblau.002"]}
        />
        <mesh
          geometry={nodes.Cube027_3.geometry}
          material={materials["NMHblau.002"]}
        />
        <mesh
          geometry={nodes.Cube027_4.geometry}
          material={materials["metall.001"]}
        />
        <mesh geometry={nodes.Cube027_5.geometry} material={materials.gelb} />
        <mesh
          geometry={nodes.Cube027_6.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube027_7.geometry}
          material={materials["metall-grau.001"]}
        />
        <mesh geometry={nodes.Cube027_8.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube027_9.geometry}
          material={materials["dgrau.005"]}
        />
      </group>
      <group
        position={[124.11, 0.55, -164.268]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.121, 0.095, 0.181]}
        visible={false}
      >
        <mesh
          geometry={nodes.Cube027_10.geometry}
          material={materials["beige.002"]}
        />
        <mesh
          geometry={nodes.Cube027_11.geometry}
          material={materials["dblau.002"]}
        />
        <mesh
          geometry={nodes.Cube027_12.geometry}
          material={materials["NMHblau.002"]}
        />
        <mesh
          geometry={nodes.Cube027_13.geometry}
          material={materials["metall.001"]}
        />
        <mesh geometry={nodes.Cube027_14.geometry} material={materials.gelb} />
        <mesh
          geometry={nodes.Cube027_15.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube027_16.geometry}
          material={materials["metall-grau.001"]}
        />
        <mesh geometry={nodes.Cube027_17.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube027_18.geometry}
          material={materials["dgrau.005"]}
        />
      </group>
      <group
        position={[114.371, 0.563, -152.037]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.123, 0.097, 0.184]}
      >
        <mesh
          geometry={nodes.Cube027_19.geometry}
          material={materials["beige.002"]}
        />
        <mesh
          geometry={nodes.Cube027_20.geometry}
          material={materials["dblau.002"]}
        />
        <mesh
          geometry={nodes.Cube027_21.geometry}
          material={materials["NMHblau.002"]}
        />
        <mesh
          geometry={nodes.Cube027_22.geometry}
          material={materials["metall.001"]}
        />
        <mesh geometry={nodes.Cube027_23.geometry} material={materials.gelb} />
        <mesh
          geometry={nodes.Cube027_24.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube027_25.geometry}
          material={materials["metall-grau.001"]}
        />
        <mesh geometry={nodes.Cube027_26.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube027_27.geometry}
          material={materials["dgrau.005"]}
        />
      </group>
      <group
        position={[146.981, 0.583, -171.879]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.186, 1.437, 0.367]}
      >
        <mesh geometry={nodes.Cube712.geometry} material={materials.braun} />
        <mesh
          geometry={nodes.Cube712_1.geometry}
          material={materials["weiss.001"]}
        />
      </group>
      <group position={[145.699, 0.081, -158.291]} scale={[1.535, 1, 0.084]}>
        <mesh
          geometry={nodes.Cube189.geometry}
          material={materials.hblaugrau}
        />
        <mesh geometry={nodes.Cube189_1.geometry} material={materials.brick} />
      </group>
      <group
        position={[146.166, -0.021, -168.738]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.179, 0.338, 0.666]}
      >
        <mesh
          geometry={nodes.Cube500.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube500_1.geometry} material={materials.braun} />
      </group>
      <mesh
        geometry={nodes.Cube276.geometry}
        material={materials.hblaugrau}
        position={[144.16, -0.854, -168.495]}
        scale={0.045}
      />
      <group
        position={[146.647, -0.045, -168.704]}
        rotation={[0, 1.099, 0]}
        scale={[0.125, 0.125, 0.253]}
      >
        <mesh
          geometry={nodes.Cube461.geometry}
          material={materials["weiss.012"]}
        />
        <mesh
          geometry={nodes.Cube461_1.geometry}
          material={materials["braun.008"]}
        />
        <mesh
          geometry={nodes.Cube461_2.geometry}
          material={materials["gruen.006"]}
        />
      </group>
      <group position={[144.179, -0.848, -164.965]} scale={0.041}>
        <mesh geometry={nodes.Cube510.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube510_1.geometry} material={materials.Glas} />
      </group>
      <group
        position={[148.671, -0.058, -163.752]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.179, 0.338, 1.04]}
      >
        <mesh
          geometry={nodes.Cube516.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube516_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[148.171, 0.342, -167.256]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.411, 0.021, 0.684]}
      >
        <mesh
          geometry={nodes.Cube518.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube518_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube518_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube518_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube518_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube518_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube518_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube518_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube518_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[147.291, -0.021, -167.253]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.179, 0.338, 0.666]}
      >
        <mesh
          geometry={nodes.Cube530.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube530_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[147.28, -0.045, -166.678]}
        rotation={[0, 1.099, 0]}
        scale={[0.125, 0.125, 0.253]}
      >
        <mesh
          geometry={nodes.Cube531.geometry}
          material={materials["weiss.012"]}
        />
        <mesh
          geometry={nodes.Cube531_1.geometry}
          material={materials["braun.008"]}
        />
        <mesh
          geometry={nodes.Cube531_2.geometry}
          material={materials["gruen.006"]}
        />
      </group>
      <group
        position={[148.619, -0.045, -164.498]}
        rotation={[0, 1.099, 0]}
        scale={[0.125, 0.125, 0.253]}
      >
        <mesh
          geometry={nodes.Cube532.geometry}
          material={materials["weiss.012"]}
        />
        <mesh
          geometry={nodes.Cube532_1.geometry}
          material={materials["braun.008"]}
        />
        <mesh
          geometry={nodes.Cube532_2.geometry}
          material={materials["gruen.006"]}
        />
      </group>
      <group
        position={[144.476, 0.316, -167.505]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.413, 1.081, 0.092]}
      >
        <mesh
          geometry={nodes.Cube520.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube520_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube520_2.geometry} material={materials.Glas} />
        <mesh geometry={nodes.Cube520_3.geometry} material={materials.boden} />
      </group>
      <group
        position={[144.475, 0.315, -164.04]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.413, 1.081, 0.092]}
      >
        <mesh
          geometry={nodes.Cube521.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube521_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube521_2.geometry} material={materials.Glas} />
      </group>
      <group
        position={[147.409, -0.021, -167.118]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.13, 0.13, 0.263]}
      >
        <mesh
          geometry={nodes.Cube534.geometry}
          material={materials["weiss.012"]}
        />
        <mesh
          geometry={nodes.Cube534_1.geometry}
          material={materials["braun.008"]}
        />
        <mesh
          geometry={nodes.Cube534_2.geometry}
          material={materials["gruen.006"]}
        />
      </group>
      <group
        position={[147.347, 0.342, -164.965]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.411, 0.021, 0.684]}
      >
        <mesh
          geometry={nodes.Cube045_1.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube045_2.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube045_3.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube045_4.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube045_5.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube045_6.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube045_7.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube045_8.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube045_9.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[147.545, 0.342, -161.867]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.411, 0.021, 0.684]}
      >
        <mesh
          geometry={nodes.Cube073.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube073_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube073_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube073_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube073_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube073_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube073_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube073_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube073_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group position={[144.125, 0.325, -163.637]} scale={[0.404, 0.02, 0.673]}>
        <mesh
          geometry={nodes.Cube336.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube336_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube336_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube336_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube336_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube336_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube336_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube336_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube336_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[148.185, 0.342, -170.28]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.411, 0.021, 0.684]}
      >
        <mesh
          geometry={nodes.Cube443.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube443_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube443_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube443_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube443_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube443_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube443_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube443_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube443_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[147.498, 0.342, -170.276]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.411, 0.021, 0.684]}
      >
        <mesh
          geometry={nodes.Cube448.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube448_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube448_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube448_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube448_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube448_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube448_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube448_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube448_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[130.146, 0.342, -171.127]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.411, 0.021, 0.684]}
      >
        <mesh
          geometry={nodes.Cube777.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube777_1.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[145.078, 0.008, -163.651]}
        rotation={[0, -1.458, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube338.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube338_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube338_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, 0.13, 0.017]} rotation={[-0.022, 0, 0]}>
          <mesh
            geometry={nodes.Cube420.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube420_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube420_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube373.geometry}
            material={materials["schwarz.013"]}
          />
          <mesh
            geometry={nodes.Cube373_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube373_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[-0.19, 0, 0]}>
          <mesh
            geometry={nodes.Cube389_1.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube389_2.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]} rotation={[0, -0.508, 0]}>
          <mesh
            geometry={nodes.Untitled002.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled002_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[148.13, -0.419, -167.834]}
        rotation={[-0.139, 0, 0]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube208.geometry}
          material={materials["dblau.012"]}
        />
        <mesh
          geometry={nodes.Cube208_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube208_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube208_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube208_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube208_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube130.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube130_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube130_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube185.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube185_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled001.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled001_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[144.837, -0.419, -170.163]}
        rotation={[-3.003, 0, -Math.PI]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube799.geometry}
          material={materials["dblau.012"]}
        />
        <mesh
          geometry={nodes.Cube799_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube799_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube799_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube799_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube799_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube798.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube798_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube800.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube800_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube800_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled013.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled013_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[129.004, -0.507, -163.184]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.542, 0.542, 0.864]}
      >
        <mesh
          geometry={nodes.Cube153.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube153_1.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube153_2.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube153_3.geometry}
          material={materials["gruen_leuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube153_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube153_5.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube153_6.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube153_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube153_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube153_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube153_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[129.039, -0.487, -166.356]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.497, 0.534, 1.07]}
      >
        <mesh
          geometry={nodes.Cube152.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube152_1.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh
          geometry={nodes.Cube152_2.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube152_3.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube152_4.geometry}
          material={materials["beige.001"]}
        />
        <mesh
          geometry={nodes.Cube152_5.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube152_6.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube152_7.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube152_8.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube152_9.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube152_10.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube152_11.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[126.095, 0.625, -168.008]}
        scale={[0.044, 0.099, 0.044]}
      >
        <mesh
          geometry={nodes.Cube155.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube155_1.geometry}
          material={materials["gruen_leuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube155_2.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube155_3.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube155_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube155_5.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube155_6.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube155_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube155_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube155_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube155_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[129.17, -0.329, -169.536]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.158}
      >
        <mesh
          geometry={nodes.Cube156.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube156_1.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube156_2.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube156_3.geometry}
          material={materials["gruen_leuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube156_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube156_5.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube156_6.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube156_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube156_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube156_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube156_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[135.191, -0.288, -157.184]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.507, 0.43, 1.155]}
      >
        <mesh
          geometry={nodes.Cube204.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube204_1.geometry}
          material={materials.schwarz}
        />
        <mesh
          geometry={nodes.Cube204_2.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube204_3.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube204_4.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube204_5.geometry}
          material={materials["gruen_leuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube204_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube204_7.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh geometry={nodes.Cube204_8.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube204_9.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube204_10.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube204_11.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[135.261, 0.026, -148.556]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.678, 0.86, 1.004]}
      >
        <mesh
          geometry={nodes.Cube490.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube490_1.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube490_2.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube490_3.geometry}
          material={materials["gruen_leuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube490_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube490_5.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube490_6.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube490_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube490_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube490_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube490_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[137.744, -0.23, -148.344]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.978, 0.47, 0.419]}
      >
        <mesh
          geometry={nodes.Cube491.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube491_1.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube491_2.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube491_3.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube491_4.geometry}
          material={materials["drot.001"]}
        />
        <mesh
          geometry={nodes.Cube491_5.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube491_6.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube491_7.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube491_8.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube491_9.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube491_10.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube491_11.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[140.356, -0.235, -148.681]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.14, 0.547, 0.489]}
      >
        <mesh
          geometry={nodes.Cube492.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cube492_1.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube492_2.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube492_3.geometry}
          material={materials["drot.001"]}
        />
        <mesh
          geometry={nodes.Cube492_4.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube492_5.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube492_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube492_7.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube492_8.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube492_9.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube492_10.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube492_11.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube492_12.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[141.962, -0.272, -150.264]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.618, 0.545, 0.943]}
      >
        <mesh
          geometry={nodes.Cube493.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube493_1.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube493_2.geometry}
          material={materials["dgrau.001"]}
        />
        <mesh
          geometry={nodes.Cube493_3.geometry}
          material={materials["drot.001"]}
        />
        <mesh
          geometry={nodes.Cube493_4.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube493_5.geometry}
          material={materials["gruen_leuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube493_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube493_7.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube493_8.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube493_9.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube493_10.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube493_11.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube493_12.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[140.463, -0.621, -171.549]}
        scale={[1.572, 0.102, 0.529]}
      >
        <mesh
          geometry={nodes.Cube032_1.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube032_2.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube032_3.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube032_4.geometry}
          material={materials.schwarz}
        />
        <mesh
          geometry={nodes.Cube032_5.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube032_6.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh geometry={nodes.Cube032_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube032_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube032_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube032_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[136.733, -0.999, -171.742]}
        scale={[1.349, 0.322, 0.41]}
      >
        <mesh geometry={nodes.Cube033.geometry} material={materials.schwarz} />
        <mesh
          geometry={nodes.Cube033_1.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube033_2.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube033_3.geometry}
          material={materials.graublau}
        />
        <mesh
          geometry={nodes.Cube033_4.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube033_5.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube033_6.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh geometry={nodes.Cube033_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube033_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube033_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube033_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[140.044, -0.744, -166.245]}
        scale={[0.329, 0.17, 0.348]}
      >
        <mesh
          geometry={nodes.Cube035_1.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube035_2.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube035_3.geometry}
          material={materials.graublau}
        />
        <mesh
          geometry={nodes.Cube035_4.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube035_5.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube035_6.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube035_7.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube035_8.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube035_9.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube035_10.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube035_11.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[137.383, -0.744, -166.245]}
        scale={[0.329, 0.17, 0.348]}
      >
        <mesh
          geometry={nodes.Cube036_1.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube036_2.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube036_3.geometry}
          material={materials.graublau}
        />
        <mesh
          geometry={nodes.Cube036_4.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube036_5.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube036_6.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube036_7.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube036_8.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube036_9.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube036_10.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube036_11.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group position={[117.74, 0.115, -148.713]} scale={[0.674, 1, 0.863]}>
        <mesh geometry={nodes.Cube039_1.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube039_2.geometry}
          material={materials.schwarz}
        />
        <mesh
          geometry={nodes.Cube039_3.geometry}
          material={materials["dblau.metal"]}
        />
        <mesh
          geometry={nodes.Cube039_4.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube039_5.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube039_6.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh geometry={nodes.Cube039_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube039_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube039_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube039_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[119.587, 0.065, -156.352]}
        rotation={[0, -1.571, 0]}
        scale={[0.881, 1.008, 0.881]}
      >
        <mesh
          geometry={nodes.Cube335.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh
          geometry={nodes.Cube335_1.geometry}
          material={materials["schwarz.003"]}
        />
        <mesh
          geometry={nodes.Cube335_2.geometry}
          material={materials["fenster.002"]}
        />
        <mesh geometry={nodes.Cube335_3.geometry} material={materials.gelb} />
        <mesh
          geometry={nodes.Cube335_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube335_5.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube335_6.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube335_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube335_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube335_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube335_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[141.62, 0.072, -156.721]}
        rotation={[0, -0.964, 0]}
        scale={[0.054, 0.077, 0.09]}
      >
        <mesh geometry={nodes.Cube514.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube514_1.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube514_2.geometry}
          material={materials["Bildschirmleuchten.006"]}
        />
        <mesh
          geometry={nodes.Cube514_3.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube514_4.geometry}
          material={materials["fenster.001"]}
        />
        <mesh geometry={nodes.Cube514_5.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube514_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube514_7.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh geometry={nodes.Cube514_8.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube514_9.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube514_10.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube514_11.geometry}
          material={materials["metall.010"]}
        />
      </group>

      <group
        position={[129.746, -0.334, -151.89]}
        rotation={[-Math.PI, 0, 0]}
        scale={[1.912, 0.007, 0.028]}
      >
        <mesh
          geometry={nodes.Cube012_1.geometry}
          material={materials["metal-grey-dird.001"]}
        />
        <mesh
          geometry={nodes.Cube012_2.geometry}
          material={materials["Deep.Black"]}
        />
      </group>
      <group
        position={[123.186, -0.007, -149.097]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.856, 0.856, 1.727]}
      >
        <mesh
          geometry={nodes.Cube231.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube231_1.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube231_2.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube231_3.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube231_4.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube231_5.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube231_6.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube231_7.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube231_8.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube231_9.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[129.034, -0.007, -149.097]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.856, 0.856, 1.727]}
      >
        <mesh
          geometry={nodes.Cube023_1.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube023_2.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube023_3.geometry}
          material={materials["fenster.001"]}
        />
        <mesh
          geometry={nodes.Cube023_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube023_5.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube023_6.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube023_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube023_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube023_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube023_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <mesh
        geometry={nodes.Plane004.geometry}
        material={materials["Deep.Black"]}
        position={[127.261, -0.336, -151.58]}
        scale={0.179}
      />
      <mesh
        geometry={nodes.Cube426.geometry}
        material={materials["Plasti.weiß.001"]}
        position={[127.648, -0.287, -151.894]}
        scale={0.092}
      />

      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials["Plasti.blackl.005"]}
        position={[126.35, -0.742, -150.491]}
        scale={[0.826, 0.489, 0.826]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={materials["Gitter-blau.003"]}
        position={[126.998, 4.852, -147.077]}
        scale={5.699}
      />
      <mesh
        geometry={nodes.Cube039.geometry}
        material={materials["hgrau.006"]}
        position={[126.998, 4.852, -147.077]}
        scale={5.699}
      />

      <group
        position={[132.226, -0.316, -156.102]}
        rotation={[0, -1.571, 0]}
        scale={2.16}
      >
        <mesh
          geometry={nodes.Cube057_1.geometry}
          material={materials["weiss.003"]}
        />
        <mesh
          geometry={nodes.Cube057_2.geometry}
          material={materials["schwarz.004"]}
        />
        <mesh
          geometry={nodes.Cube057_3.geometry}
          material={materials["dgrau.002"]}
        />
        <mesh
          geometry={nodes.Cube057_4.geometry}
          material={materials["fenster.003"]}
        />
        <mesh
          geometry={nodes.Cube057_5.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube057_6.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube057_7.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube057_8.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube057_9.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube057_10.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube057_11.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[129.838, -0.748, -156.811]}
        rotation={[0, -1.571, 0]}
        scale={1.959}
      >
        <mesh
          geometry={nodes.Cube058_1.geometry}
          material={materials["Weiss_acrül.001"]}
        />
        <mesh
          geometry={nodes.Cube058_2.geometry}
          material={materials["schwarz.004"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube026.geometry}
        material={materials["hgrau.006"]}
        position={[130.859, 0.593, -156.274]}
        scale={1.443}
      />
      <mesh
        geometry={nodes.Cube034.geometry}
        material={materials["Gitter-blau.003"]}
        position={[130.856, 0.593, -156.285]}
        scale={1.443}
      />

      <group
        position={[128.482, -0.316, -156.102]}
        rotation={[0, -1.571, 0]}
        scale={2.16}
      >
        <mesh
          geometry={nodes.Cube052.geometry}
          material={materials["weiss.003"]}
        />
        <mesh
          geometry={nodes.Cube052_1.geometry}
          material={materials["schwarz.004"]}
        />
        <mesh
          geometry={nodes.Cube052_2.geometry}
          material={materials["dgrau.002"]}
        />
        <mesh
          geometry={nodes.Cube052_3.geometry}
          material={materials["fenster.003"]}
        />
        <mesh
          geometry={nodes.Cube052_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube052_5.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube052_6.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube052_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube052_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube052_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube052_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[126.094, -0.748, -156.811]}
        rotation={[0, -1.571, 0]}
        scale={1.959}
      >
        <mesh
          geometry={nodes.Cube100_1.geometry}
          material={materials["Weiss_acrül.001"]}
        />
        <mesh
          geometry={nodes.Cube100_2.geometry}
          material={materials["schwarz.004"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube029.geometry}
        material={materials["hgrau.006"]}
        position={[127.115, 0.593, -156.274]}
        scale={1.443}
      />
      <mesh
        geometry={nodes.Cube031.geometry}
        material={materials["Gitter-blau.003"]}
        position={[127.112, 0.593, -156.285]}
        scale={1.443}
      />

      <group
        position={[124.701, -0.316, -156.102]}
        rotation={[0, -1.571, 0]}
        scale={2.16}
      >
        <mesh
          geometry={nodes.Cube234.geometry}
          material={materials["weiss.003"]}
        />
        <mesh
          geometry={nodes.Cube234_1.geometry}
          material={materials["schwarz.004"]}
        />
        <mesh
          geometry={nodes.Cube234_2.geometry}
          material={materials["dgrau.002"]}
        />
        <mesh
          geometry={nodes.Cube234_3.geometry}
          material={materials["fenster.003"]}
        />
        <mesh
          geometry={nodes.Cube234_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube234_5.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube234_6.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube234_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube234_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube234_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube234_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[122.313, -0.748, -156.811]}
        rotation={[0, -1.571, 0]}
        scale={1.959}
      >
        <mesh
          geometry={nodes.Cube236.geometry}
          material={materials["Weiss_acrül.001"]}
        />
        <mesh
          geometry={nodes.Cube236_1.geometry}
          material={materials["schwarz.004"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube040.geometry}
        material={materials["hgrau.006"]}
        position={[123.334, 0.593, -156.274]}
        scale={1.443}
      />
      <mesh
        geometry={nodes.Cube041.geometry}
        material={materials["Gitter-blau.003"]}
        position={[123.331, 0.593, -156.285]}
        scale={1.443}
      />

      <group
        position={[125.863, -0.628, -165.418]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.054, 0.077, 0.09]}
      >
        <mesh geometry={nodes.Cube183.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube183_1.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube183_2.geometry}
          material={materials["Bildschirmleuchten.006"]}
        />
      </group>
      <group
        position={[126.255, -0.479, -163.25]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.599, 0.43, 0.43]}
      >
        <mesh geometry={nodes.Cube186.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube186_1.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube186_2.geometry}
          material={materials["dgrau.003"]}
        />
      </group>
      <group
        position={[125.151, -0.29, -164.427]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.097}
      >
        <mesh geometry={nodes.Cube356.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube356_1.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube356_2.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube356_3.geometry} material={materials.rot} />
        <mesh
          geometry={nodes.Cube356_4.geometry}
          material={materials.fenster}
        />
        <mesh geometry={nodes.Cube356_5.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube356_6.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh geometry={nodes.Cube356_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube356_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube356_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube356_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[126.278, -0.623, -164.182]}
        rotation={[2.702, -0.226, -3.123]}
        scale={1.471}
      >
        <primitive object={nodes.Bone_1} />
      </group>
      <group
        position={[140.366, -0.75, -157.202]}
        rotation={[0, -1.571, 0]}
        scale={1.959}
      >
        <primitive object={nodes.Bone} />
      </group>
      <group
        visible={false}
        position={[128.202, 0.371, -150.068]}
        scale={0.826}
      >
        <primitive object={nodes.Bone_3} />
      </group>
      <group
        position={[130.873, -0.75, -156.164]}
        rotation={[0, -1.571, 0]}
        scale={1.959}
      >
        <primitive object={nodes.Bone_4} />
      </group>
      <group
        position={[127.129, -0.75, -156.164]}
        rotation={[0, -1.571, 0]}
        scale={1.959}
      >
        <primitive object={nodes.Bone_5} />
      </group>
      <group
        position={[123.348, -0.75, -156.164]}
        rotation={[0, -1.571, 0]}
        scale={1.959}
      >
        <primitive object={nodes.Bone_6} />
      </group>
      <group
        position={[136.885, -0.75, -163.958]}
        rotation={[0, -1.571, 0]}
        scale={1.959}
      >
        <primitive object={nodes.Bone_2} />
      </group>
      <group
        position={[139.392, -0.11, -162.915]}
        scale={[0.046, 0.046, 0.093]}
      >
        <mesh
          geometry={nodes.Cube461.geometry}
          material={materials["weiss.012"]}
        />
        <mesh
          geometry={nodes.Cube461_1.geometry}
          material={materials["braun.008"]}
        />
        <mesh
          geometry={nodes.Cube461_2.geometry}
          material={materials["gruen.006"]}
        />
      </group>
      <group
        position={[140.946, -0.779, -161.892]}
        scale={[0.105, 0.092, 0.163]}
      >
        <mesh
          geometry={nodes.Cube472.geometry}
          material={materials["dblau.002"]}
        />
        <mesh
          geometry={nodes.Cube472_1.geometry}
          material={materials["Deep.Black"]}
        />
        <mesh
          geometry={nodes.Cube472_2.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube472_3.geometry}
          material={materials["metall-grau.001"]}
        />
        <mesh geometry={nodes.Cube472_4.geometry} material={materials.weiss} />
      </group>
      <group
        position={[137.269, -0.905, -164.809]}
        scale={[0.264, 0.189, 0.189]}
      >
        <mesh
          geometry={nodes.Cube340.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube340_1.geometry}
          material={materials["schwarz.004"]}
        />
        <mesh
          geometry={nodes.Cube340_2.geometry}
          material={materials["fenster.003"]}
        />
        <mesh geometry={nodes.Cube340_3.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube340_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube340_5.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube340_6.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube340_7.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube340_8.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube340_9.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube340_10.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube268.geometry}
        material={materials.schwarz}
        position={[136.165, 0.601, -165.539]}
        scale={[-0.149, -0.041, -0.094]}
      />
      <mesh
        geometry={nodes.Cube269.geometry}
        material={materials["weiss.001"]}
        position={[135.794, -0.11, -164.58]}
        scale={[-0.06, -0.041, -0.064]}
      />
      <group position={[138.735, 0.199, -164.539]} scale={0.03}>
        <mesh
          geometry={nodes.Cube343.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cube343_1.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube343_2.geometry}
          material={materials["Bildschirmleuchten.006"]}
        />
      </group>
      <group
        position={[138.521, 0.592, -164.689]}
        scale={[0.025, 0.012, 0.025]}
      >
        <mesh
          geometry={nodes.Cylinder044.geometry}
          material={materials["weiss.001"]}
        />
        <mesh
          geometry={nodes.Cylinder044_1.geometry}
          material={materials.gruen_leuchten}
        />
      </group>
      <mesh
        geometry={nodes.Grid.geometry}
        material={materials["metall.007"]}
        position={[137.789, -0.803, -164.412]}
        scale={[1, 1.206, 0.951]}
      />
      <mesh
        geometry={nodes.Grid001.geometry}
        material={materials["metall.007"]}
        position={[137.789, -0.681, -164.412]}
        scale={[1, 1.206, 0.951]}
      />
      <mesh
        geometry={nodes.Palette1.geometry}
        material={materials["braun.002"]}
        position={[136.049, -0.794, -162.525]}
        rotation={[-Math.PI, 0.68, 0]}
        scale={[0.292, 0.008, 0.037]}
      />
      <mesh
        geometry={nodes.Palette1001.geometry}
        material={materials["braun.002"]}
        position={[135.633, -0.794, -163.604]}
        rotation={[-3.141, -1.569, 0]}
        scale={[0.292, 0.008, 0.037]}
      />
      <mesh
        geometry={nodes.Plane011.geometry}
        material={materials["metall-grau"]}
        position={[136.92, -0.895, -163.956]}
        scale={0.414}
      />
      <group
        position={[139.698, -0.205, -161.782]}
        rotation={[0, 0.05, 0]}
        scale={[0.069, 0.005, 0.093]}
      >
        <mesh
          geometry={nodes.Cube017_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube017_2.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <mesh
        geometry={nodes.Box_dblau001.geometry}
        material={materials["dblau.007"]}
        position={[139.421, -0.17, -162.301]}
        rotation={[Math.PI, -1.37, Math.PI]}
        scale={[0.057, 0.035, 0.072]}
      />
      <group position={[139.352, 0.234, -163.022]}>
        <mesh
          geometry={nodes.Cube406.geometry}
          material={materials["beige.003"]}
        />
        <mesh
          geometry={nodes.Cube406_1.geometry}
          material={materials["braun.005"]}
        />
        <mesh
          geometry={nodes.Cube406_2.geometry}
          material={materials["metall.003"]}
        />
        <mesh
          geometry={nodes.Cube406_3.geometry}
          material={materials["metall-grau"]}
        />
        <mesh
          geometry={nodes.Cube406_4.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube406_5.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh geometry={nodes.Cube406_6.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube406_7.geometry} material={materials.weiss} />
      </group>
      <mesh
        geometry={nodes.Box_beige001.geometry}
        material={materials.beige}
        position={[139.361, -0.072, -164.015]}
        rotation={[0, -0.145, 0]}
        scale={[0.059, 0.052, 0.1]}
      />
      <group
        position={[139.386, 0.232, -164.366]}
        rotation={[0, 0.864, 0]}
        scale={[0.046, 0.046, 0.093]}
      >
        <mesh
          geometry={nodes.Cube468.geometry}
          material={materials["weiss.012"]}
        />
        <mesh
          geometry={nodes.Cube468_1.geometry}
          material={materials["braun.008"]}
        />
        <mesh
          geometry={nodes.Cube468_2.geometry}
          material={materials["gruen.006"]}
        />
      </group>
      <mesh
        geometry={nodes.Box_hblau.geometry}
        material={materials["metall.007"]}
        position={[140.695, -0.685, -162.003]}
        scale={[0.059, 0.052, 0.064]}
      />
      <group
        position={[139.419, 0.037, -161.836]}
        rotation={[0, 0.291, -1.388]}
        scale={[0.132, 0.006, 0.175]}
      >
        <mesh
          geometry={nodes.Cube476.geometry}
          material={materials["schwarz.018"]}
        />
        <mesh
          geometry={nodes.Cube476_1.geometry}
          material={materials.Bildschirmleuchten}
        />
      </group>
      <group
        position={[139.211, -0.772, -162.401]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.135, 0.009, 0.274]}
      >
        <mesh
          geometry={nodes.Cube370.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube370_1.geometry}
          material={materials.schwarz}
        />
        <mesh
          geometry={nodes.Cube370_2.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube370_3.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube370_4.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube370_5.geometry} material={materials.metall} />
      </group>
      <mesh
        geometry={nodes.Cube023.geometry}
        material={materials["hgrau.006"]}
        position={[137.125, 1.228, -163.645]}
        scale={2.091}
      />
      <mesh
        geometry={nodes.Cube032.geometry}
        material={materials["Gitter-blau.003"]}
        position={[137.125, 1.228, -163.645]}
        scale={2.091}
      />
      <group
        position={[138.056, -0.395, -169.256]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.354, 0.015, 0.602]}
      >
        <mesh
          geometry={nodes.Cube021.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube021_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube021_2.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube021_3.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube021_4.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube021_5.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube021_6.geometry} material={materials.metall} />
      </group>
      <group
        position={[116.582, -0.632, -151.011]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.354, 0.015, 0.602]}
      >
        <mesh
          geometry={nodes.Cube067.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube067_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube067_2.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube067_3.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube067_4.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube067_5.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube067_6.geometry} material={materials.metall} />
      </group>
      <group
        position={[128.83, -0.797, -169.213]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.354, 0.015, 0.602]}
      >
        <mesh
          geometry={nodes.Cube068.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube068_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube068_2.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube068_3.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube068_4.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube068_5.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube068_6.geometry} material={materials.metall} />
      </group>
      <group
        position={[138.056, -0.606, -153.362]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.354, 0.015, 0.602]}
      >
        <mesh
          geometry={nodes.Cube042_1.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube042_2.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube042_3.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube042_4.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube042_5.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube042_6.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube042_7.geometry} material={materials.metall} />
      </group>
      <mesh
        geometry={nodes.Montageplatz1012.geometry}
        material={materials["metall.003"]}
        position={[137.434, -0.349, -153.69]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.221, 0.018, 0.433]}
      />
      <mesh
        geometry={nodes.Montageplatz1013.geometry}
        material={materials["metall.003"]}
        position={[138.807, -0.349, -153.109]}
        rotation={[0, -0.565, Math.PI / 2]}
        scale={[0.183, 0.015, 0.358]}
      />
      <group
        position={[137.212, -0.269, -169.11]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.163, 0.01, 0.258]}
      >
        <mesh
          geometry={nodes.Cube096.geometry}
          material={materials["schwarz.004"]}
        />
        <mesh
          geometry={nodes.Cube096_1.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
      </group>
      <group
        position={[142.514, 3.034, -166.942]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[3.915, 1.032, 0.092]}
      >
        <mesh
          geometry={nodes.Cube030.geometry}
          material={materials["hblaugrau.Fertigung"]}
        />
        <mesh
          geometry={nodes.Cube030_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube030_2.geometry} material={materials.brick} />
        <mesh
          geometry={nodes.Cube030_3.geometry}
          material={materials.hblaugrau}
        />
      </group>
      <group
        position={[144.855, 2.686, -154.8]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.121, 0.946, 0.552]}
      >
        <mesh geometry={nodes.Cube019.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube019_1.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[143.801, 2.686, -152.796]}
        rotation={[0, 1.571, 0]}
        scale={[0.119, 0.946, 0.76]}
      >
        <mesh
          geometry={nodes.Cube138_1.geometry}
          material={materials.graublau}
        />
        <mesh
          geometry={nodes.Cube138_2.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[147.973, 2.364, -158.895]}
        rotation={[0, 1.571, 0]}
        scale={[0.306, 0.56, 0.381]}
      >
        <mesh
          geometry={nodes.Cube004.geometry}
          material={materials.hblaugrau}
        />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials.braun} />
        <mesh geometry={nodes.Cube004_2.geometry} material={materials.metall} />
      </group>
      <group position={[147.23, 2.522, -158.852]} scale={[0.15, 0.06, 0.146]}>
        <mesh
          geometry={nodes.Cube273_1.geometry}
          material={materials.schwarz}
        />
        <mesh
          geometry={nodes.Cube273_2.geometry}
          material={materials["bild.001"]}
        />
        <mesh
          geometry={nodes.Cube273_3.geometry}
          material={materials.fenster}
        />
        <mesh geometry={nodes.Cube273_4.geometry} material={materials.weiss} />
      </group>
      <group position={[147.923, 2.42, -158.739]} scale={0.037}>
        <mesh
          geometry={nodes.Cylinder011_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cylinder011_2.geometry}
          material={materials.weiss}
        />
        <mesh
          geometry={nodes.Cylinder011_3.geometry}
          material={materials.dblau}
        />
      </group>
      <group
        position={[143.685, 2.673, -162.212]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.153, 0.946, 0.552]}
      >
        <mesh geometry={nodes.Cube233.geometry} material={materials.graublau} />
        <mesh
          geometry={nodes.Cube233_1.geometry}
          material={materials.fenster}
        />
      </group>
      <group
        position={[147.497, 2.842, -161.705]}
        rotation={[0, -0.684, 0]}
        scale={[0.288, 0.016, 0.496]}
      >
        <mesh
          geometry={nodes.Cube594.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube594_1.geometry}
          material={materials["metall.002"]}
        />
      </group>
      <group
        position={[147.535, 2.89, -161.491]}
        rotation={[0, -0.684, 0]}
        scale={[0.107, 0.107, 0.216]}
      >
        <mesh
          geometry={nodes.Cube534.geometry}
          material={materials["weiss.012"]}
        />
        <mesh
          geometry={nodes.Cube534_1.geometry}
          material={materials["braun.008"]}
        />
        <mesh
          geometry={nodes.Cube534_2.geometry}
          material={materials["gruen.006"]}
        />
      </group>
      <group
        position={[142.521, 3.24, -166.934]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[3.915, 1.032, 0.092]}
      >
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials["hblaugrau.Fertigung"]}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube002_2.geometry} material={materials.Glas} />
        <mesh geometry={nodes.Cube002_3.geometry} material={materials.brick} />
        <mesh
          geometry={nodes.Cube002_4.geometry}
          material={materials.teppichboden}
        />
      </group>
      <group
        position={[148.242, 2.586, -165.901]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.181, 0.341, 0.519]}
      >
        <mesh
          geometry={nodes.Cube075_1.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube075_2.geometry} material={materials.braun} />
      </group>
      <group
        position={[148.479, 2.771, -165.865]}
        rotation={[0, 1.571, 0]}
        scale={[0.226, 0.226, 0.456]}
      >
        <mesh
          geometry={nodes.Cube077.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube077_1.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube077_2.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[145.498, 1.811, -162.656]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.11, 0.11, 0.223]}
      >
        <mesh geometry={nodes.Cube249.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube249_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube249_2.geometry} material={materials.gruen} />
      </group>
      <group
        position={[147.553, 2.854, -167.568]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.38, 0.019, 0.632]}
      >
        <mesh
          geometry={nodes.Cube464.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube464_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube464_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube464_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube464_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube464_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube464_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube464_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube464_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[146.127, 2.586, -169.144]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.181, 0.341, 0.519]}
      >
        <mesh
          geometry={nodes.Cube626_1.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube626_2.geometry} material={materials.braun} />
      </group>
      <group
        position={[144.88, 3.307, -170.027]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.079, 1.428, 0.042]}
      >
        <mesh geometry={nodes.Cube519.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube519_1.geometry} material={materials.Glas} />
      </group>
      <group
        position={[144.15, 3.311, -169.371]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.079, 1.428, 0.044]}
      >
        <mesh geometry={nodes.Cube282.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube282_1.geometry} material={materials.Glas} />
      </group>
      <mesh
        geometry={nodes.Schreibtisch_m_Sichtschutz006.geometry}
        material={materials["schwarz.007"]}
        position={[139.503, -0.199, -162.001]}
        rotation={[0, 0.668, 0]}
        scale={[0.443, 0.022, 0.737]}
      />
      <group
        position={[148.828, 3.636, -171.154]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={[0.569, 0.026, 0.756]}
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
        position={[146.159, 3.313, -162.028]}
        rotation={[Math.PI, -1.519, 1.571]}
        scale={[0.274, 0.013, 0.364]}
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
      <group position={[145.99, 2.085, -161.887]} scale={[0.634, 0.357, 0.246]}>
        <mesh
          geometry={nodes.Cube591.geometry}
          material={materials.hblaugrau}
        />
        <mesh geometry={nodes.Cube591_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[148.105, 2.178, -168.187]}
        rotation={[-0.139, 0, 0]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube452.geometry}
          material={materials["dblau.012"]}
        />
        <mesh
          geometry={nodes.Cube452_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube452_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube452_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube452_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube452_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube451.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube451_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube454.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube454_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube454_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled003.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled003_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[146.728, 2.357, -170.73]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.488, 0.021, 0.83]}
      >
        <mesh
          geometry={nodes.Cube475.geometry}
          material={materials["Plasti.weiß.001"]}
        />
        <mesh
          geometry={nodes.Cube475_1.geometry}
          material={materials["metall.007"]}
        />
      </group>
      <group
        position={[146.698, 2.362, -170.747]}
        rotation={[0, 0.059, 0]}
        scale={[-0.11, -0.118, -0.118]}
      >
        <mesh
          geometry={nodes.Cube478.geometry}
          material={materials["drot.001"]}
        />
        <mesh
          geometry={nodes.Cube478_1.geometry}
          material={materials["metall.007"]}
        />
      </group>
      <group
        position={[148.146, 2.624, -166.677]}
        rotation={[Math.PI, -0.117, Math.PI]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube802.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube802_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube802_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube803.geometry}
            material={materials["schwarz.013"]}
          />
          <mesh
            geometry={nodes.Cube803_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube803_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[-0.19, 0, 0]}>
          <mesh
            geometry={nodes.Cube805.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube805_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[-0.022, 0, 0]}>
          <mesh
            geometry={nodes.Cube806.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube806_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube806_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]} rotation={[0, -0.508, 0]}>
          <mesh
            geometry={nodes.Untitled014.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled014_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[146.321, 2.197, -164.952]}
        rotation={[-0.139, 0, 0]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube808.geometry}
          material={materials["dblau.012"]}
        />
        <mesh
          geometry={nodes.Cube808_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube808_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube808_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube808_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube808_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube807.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube807_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube809.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube809_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube809_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled015.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled015_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[146.328, 2.197, -163.584]}
        rotation={[-3.003, 0, -Math.PI]}
        scale={0.919}
      >
        <mesh geometry={nodes.Cube814.geometry} material={materials.jeans} />
        <mesh
          geometry={nodes.Cube814_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube814_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube814_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube814_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube814_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube810.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube810_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube815.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube815_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube815_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled016.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled016_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[133.009, 0.204, -168.781]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[3.656, 0.997, 0.081]}
      >
        <mesh
          geometry={nodes.Cube139.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube139_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube139_2.geometry} material={materials.Glas} />
      </group>
      <group
        position={[132.537, 1.407, -171.271]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.006, 0.109, 0.007]}
      >
        <mesh
          geometry={nodes.Cube512.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube512_1.geometry}
          material={materials["hgrau.002"]}
        />
        <mesh geometry={nodes.Cube512_2.geometry} material={materials.Lampe} />
      </group>
      <mesh
        geometry={nodes.roof002.geometry}
        material={materials["dgrau.003"]}
        position={[133.009, 0.216, -168.734]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[3.656, 0.997, 0.081]}
      />
      <group
        position={[131.31, -0.317, -169.3]}
        scale={[-0.017, -0.038, -0.01]}
      >
        <mesh
          geometry={nodes.Cylinder010_1.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cylinder010_2.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cylinder010_3.geometry}
          material={materials.schwarz}
        />
        <mesh
          geometry={nodes.Cylinder010_4.geometry}
          material={materials.weiss}
        />
      </group>
      <group
        position={[131.395, -0.737, -167.478]}
        rotation={[0, 1.571, 0]}
        scale={[0.232, 0.015, 0.485]}
      >
        <mesh
          geometry={nodes.Cube545.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube545_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube545_2.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube545_3.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube545_4.geometry}
          material={materials["metall-weiß"]}
        />
      </group>
      <group
        position={[132.834, -0.779, -170.902]}
        rotation={[Math.PI, -1.052, Math.PI]}
        scale={[0.105, 0.092, 0.163]}
      >
        <mesh
          geometry={nodes.Cube546.geometry}
          material={materials["dblau.002"]}
        />
        <mesh
          geometry={nodes.Cube546_1.geometry}
          material={materials["Deep.Black"]}
        />
        <mesh
          geometry={nodes.Cube546_2.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube546_3.geometry}
          material={materials["metall-grau.001"]}
        />
        <mesh geometry={nodes.Cube546_4.geometry} material={materials.weiss} />
      </group>
      <group
        position={[130.234, -0.034, -171.46]}
        rotation={[0, 0.195, 0]}
        scale={[0.443, 0.022, 0.737]}
      >
        <mesh
          geometry={nodes.Cube542.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube542_1.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube542_2.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube542_3.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube542_4.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube542_5.geometry}
          material={materials.schwarz}
        />
        <mesh
          geometry={nodes.Cube542_6.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube542_7.geometry}
          material={materials["metall.007"]}
        />
      </group>
      <group
        position={[132.344, -0.644, -167.702]}
        rotation={[0, 1.57, 0]}
        scale={[0.204, 0.09, 1.218]}
      >
        <mesh geometry={nodes.Cube544.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube544_1.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube544_2.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube544_3.geometry}
          material={materials["metall-weiß.001"]}
        />
      </group>
      <group
        position={[131.965, -0.644, -171.794]}
        rotation={[0, -1.57, 0]}
        scale={[0.151, 0.09, 1.218]}
      >
        <mesh geometry={nodes.Cube547.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube547_1.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube547_2.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube547_3.geometry}
          material={materials["metall-weiß.001"]}
        />
      </group>
      <group
        position={[131.208, -0.209, -163.02]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.354, 0.015, 0.602]}
      >
        <mesh
          geometry={nodes.Cube167.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube167_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube167_2.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube167_3.geometry}
          material={materials["weiß-metall"]}
        />
        <mesh
          geometry={nodes.Cube167_4.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube167_5.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube167_6.geometry} material={materials.metall} />
      </group>
      <group
        position={[130.659, -0.571, -165.146]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.172, 0.014, 0.382]}
      >
        <mesh
          geometry={nodes.Cube168.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube168_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube168_2.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube168_3.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube168_4.geometry}
          material={materials["metall-weiß"]}
        />
      </group>
      <group
        position={[131.469, -0.965, -165.2]}
        rotation={[0, 0, -0.201]}
        scale={[0.144, 0.02, 0.586]}
      >
        <mesh
          geometry={nodes.Cube174.geometry}
          material={materials["metall-grau"]}
        />
        <mesh
          geometry={nodes.Cube174_1.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube174_2.geometry}
          material={materials["dgrau.003"]}
        />
      </group>
      <mesh
        geometry={nodes.Montageplatz1008.geometry}
        material={materials["metall.003"]}
        position={[131.324, -0.348, -163.475]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.221, 0.018, 0.433]}
      />
      <group
        position={[130.708, -0.965, -163.961]}
        rotation={[Math.PI, 0, 2.94]}
        scale={[0.144, 0.02, 0.588]}
      >
        <mesh
          geometry={nodes.Cube176.geometry}
          material={materials["metall-grau"]}
        />
        <mesh
          geometry={nodes.Cube176_1.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube176_2.geometry}
          material={materials["dgrau.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/fertigung.glb");
