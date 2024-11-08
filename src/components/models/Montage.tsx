import * as THREE from "three";
import React from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF, SkeletonUtils } from "three-stdlib";
import { MontageBot } from "./Montagebot";

type GLTFResult = GLTF & {
  nodes: {
    Cube935: THREE.Mesh;
    Cube935_1: THREE.Mesh;
    Cube259: THREE.Mesh;
    Cylinder083: THREE.Mesh;
    Cylinder083_1: THREE.Mesh;
    Cylinder082: THREE.Mesh;
    Cylinder082_1: THREE.Mesh;
    Cube222: THREE.Mesh;
    Cube198: THREE.Mesh;
    Cube194: THREE.Mesh;
    Cube194_1: THREE.Mesh;
    Cube194_2: THREE.Mesh;
    Cube097: THREE.Mesh;
    Cube097_1: THREE.Mesh;
    Cube097_2: THREE.Mesh;
    Cube856: THREE.Mesh;
    Cube856_1: THREE.Mesh;
    Cylinder021: THREE.Mesh;
    Cube657: THREE.Mesh;
    Cube624: THREE.Mesh;
    Cube624_1: THREE.Mesh;
    Cube624_2: THREE.Mesh;
    Cube637: THREE.Mesh;
    Cube637_1: THREE.Mesh;
    Cube637_2: THREE.Mesh;
    Cube638: THREE.Mesh;
    Cube638_1: THREE.Mesh;
    Cube650: THREE.Mesh;
    Cube650_1: THREE.Mesh;
    Cube650_2: THREE.Mesh;
    Untitled037: THREE.Mesh;
    Untitled037_1: THREE.Mesh;
    Cube654: THREE.Mesh;
    Cube654_1: THREE.Mesh;
    Cube654_2: THREE.Mesh;
    Cube654_3: THREE.Mesh;
    Cube654_4: THREE.Mesh;
    Cube654_5: THREE.Mesh;
    Cube729: THREE.Mesh;
    Cube729_1: THREE.Mesh;
    Cube729_2: THREE.Mesh;
    Cube733: THREE.Mesh;
    Cube733_1: THREE.Mesh;
    Untitled038: THREE.Mesh;
    Untitled038_1: THREE.Mesh;
    Cube659: THREE.Mesh;
    Cube659_1: THREE.Mesh;
    Cube659_2: THREE.Mesh;
    Cube659_3: THREE.Mesh;
    Cube659_4: THREE.Mesh;
    Cube659_5: THREE.Mesh;
    Cube747: THREE.Mesh;
    Cube747_1: THREE.Mesh;
    Cube748: THREE.Mesh;
    Cube748_1: THREE.Mesh;
    Cube748_2: THREE.Mesh;
    Untitled039: THREE.Mesh;
    Untitled039_1: THREE.Mesh;
    Cube730: THREE.Mesh;
    Cube730_1: THREE.Mesh;
    Cube730_2: THREE.Mesh;
    Cube734: THREE.Mesh;
    Cube734_1: THREE.Mesh;
    Cube735: THREE.Mesh;
    Cube735_1: THREE.Mesh;
    Cube721: THREE.Mesh;
    Cube721_1: THREE.Mesh;
    Cube721_2: THREE.Mesh;
    Cube721_3: THREE.Mesh;
    Cube723: THREE.Mesh;
    Cube723_1: THREE.Mesh;
    Cube723_2: THREE.Mesh;
    Cube077: THREE.Mesh;
    Cube077_1: THREE.Mesh;
    Cube077_2: THREE.Mesh;
    Cube560: THREE.Mesh;
    Cube560_1: THREE.Mesh;
    Cube560_2: THREE.Mesh;
    Cube560_3: THREE.Mesh;
    Cube560_4: THREE.Mesh;
    Cube560_5: THREE.Mesh;
    Cube560_6: THREE.Mesh;
    Cube560_7: THREE.Mesh;
    Cube560_8: THREE.Mesh;
    Cube561: THREE.Mesh;
    Cube561_1: THREE.Mesh;
    Cube561_2: THREE.Mesh;
    Cube561_3: THREE.Mesh;
    Cube561_4: THREE.Mesh;
    Cube561_5: THREE.Mesh;
    Cube561_6: THREE.Mesh;
    Cube561_7: THREE.Mesh;
    Cube561_8: THREE.Mesh;
    Cube496: THREE.Mesh;
    Cube496_1: THREE.Mesh;
    Cube496_2: THREE.Mesh;
    Cube496_3: THREE.Mesh;
    Cube496_4: THREE.Mesh;
    Cube496_5: THREE.Mesh;
    Cube496_6: THREE.Mesh;
    Cube534: THREE.Mesh;
    Cube534_1: THREE.Mesh;
    Cube534_2: THREE.Mesh;
    Cube461: THREE.Mesh;
    Cube461_1: THREE.Mesh;
    Cube461_2: THREE.Mesh;
    Cube517: THREE.Mesh;
    Cube517_1: THREE.Mesh;
    Cube517_2: THREE.Mesh;
    Cube419_1: THREE.Mesh;
    Cube419_2: THREE.Mesh;
    Cube515: THREE.Mesh;
    Cube515_1: THREE.Mesh;
    Cube081: THREE.Mesh;
    Cube081_1: THREE.Mesh;
    Cube150: THREE.Mesh;
    Cube293: THREE.Mesh;
    Cube293_1: THREE.Mesh;
    Cube618: THREE.Mesh;
    Cube618_1: THREE.Mesh;
    Cube765: THREE.Mesh;
    Cube765_1: THREE.Mesh;
    Cube765_2: THREE.Mesh;
    Cube197: THREE.Mesh;
    Cube390: THREE.Mesh;
    Cube390_1: THREE.Mesh;
    Cube390_2: THREE.Mesh;
    Cube390_3: THREE.Mesh;
    Cube390_4: THREE.Mesh;
    Cube390_5: THREE.Mesh;
    Cube390_6: THREE.Mesh;
    Cube390_7: THREE.Mesh;
    Cube390_8: THREE.Mesh;
    Cube487: THREE.Mesh;
    Cube487_1: THREE.Mesh;
    Cube487_2: THREE.Mesh;
    Cube487_3: THREE.Mesh;
    Cube487_4: THREE.Mesh;
    Cube487_5: THREE.Mesh;
    Cube334_1: THREE.Mesh;
    Cube334_2: THREE.Mesh;
    Cube334_3: THREE.Mesh;
    Cube334_4: THREE.Mesh;
    Cube334_5: THREE.Mesh;
    Cube334_6: THREE.Mesh;
    Cube334_7: THREE.Mesh;
    Cube334_8: THREE.Mesh;
    Cube334_9: THREE.Mesh;
    Cube334_10: THREE.Mesh;
    Cube334_11: THREE.Mesh;
    Cube334_12: THREE.Mesh;
    Cube334_13: THREE.Mesh;
    Cube334_14: THREE.Mesh;
    Cube334_15: THREE.Mesh;
    Cube324: THREE.Mesh;
    Cube324_1: THREE.Mesh;
    Cube324_2: THREE.Mesh;
    Cube327: THREE.Mesh;
    Cube327_1: THREE.Mesh;
    Cube327_2: THREE.Mesh;
    Cube562: THREE.Mesh;
    Cube562_1: THREE.Mesh;
    Cube562_2: THREE.Mesh;
    Cube562_3: THREE.Mesh;
    Cube562_4: THREE.Mesh;
    Cube315: THREE.Mesh;
    Cube315_1: THREE.Mesh;
    Cube322: THREE.Mesh;
    Cube322_1: THREE.Mesh;
    Cube322_2: THREE.Mesh;
    Cube322_3: THREE.Mesh;
    Cube322_4: THREE.Mesh;
    Cube402: THREE.Mesh;
    Cube402_1: THREE.Mesh;
    Cube402_2: THREE.Mesh;
    Cube402_3: THREE.Mesh;
    Cube402_4: THREE.Mesh;
    Cube402_5: THREE.Mesh;
    Cube402_6: THREE.Mesh;
    Cube402_7: THREE.Mesh;
    Cube402_8: THREE.Mesh;
    Montageplatz1020: THREE.Mesh;
    Cube738: THREE.Mesh;
    Cube738_1: THREE.Mesh;
    Cube738_2: THREE.Mesh;
    Cube738_3: THREE.Mesh;
    Cube589: THREE.Mesh;
    Cube589_1: THREE.Mesh;
    Cube589_2: THREE.Mesh;
    Cube589_3: THREE.Mesh;
    Cube589_4: THREE.Mesh;
    Cube589_5: THREE.Mesh;
    Cube589_6: THREE.Mesh;
    Cube589_7: THREE.Mesh;
    Cube589_8: THREE.Mesh;
    Cube588: THREE.Mesh;
    Cube588_1: THREE.Mesh;
    Cube588_2: THREE.Mesh;
    Cube588_3: THREE.Mesh;
    Cube588_4: THREE.Mesh;
    Cube588_5: THREE.Mesh;
    Cube588_6: THREE.Mesh;
    Cube588_7: THREE.Mesh;
    Cube588_8: THREE.Mesh;
    Cube379: THREE.Mesh;
    Cube379_1: THREE.Mesh;
    Cube379_2: THREE.Mesh;
    Cube379_3: THREE.Mesh;
    Cube379_4: THREE.Mesh;
    Cube150_1: THREE.Mesh;
    Cube150_2: THREE.Mesh;
    Cube151: THREE.Mesh;
    Cube151_1: THREE.Mesh;
    Cube163_1: THREE.Mesh;
    Cube163_2: THREE.Mesh;
    wandstreben006: THREE.Mesh;
    wandstreben007: THREE.Mesh;
    wandstreben008: THREE.Mesh;
    Plane003: THREE.Mesh;
    Cube266_1: THREE.Mesh;
    Cube266_2: THREE.Mesh;
    Cube266_3: THREE.Mesh;
    Cube266_4: THREE.Mesh;
    Cube259_1: THREE.Mesh;
    Cube259_2: THREE.Mesh;
    Cube259_3: THREE.Mesh;
    Cube259_4: THREE.Mesh;
    Cube259_5: THREE.Mesh;
    Cube259_6: THREE.Mesh;
    Cube121: THREE.Mesh;
    Cube121_1: THREE.Mesh;
    Cube121_2: THREE.Mesh;
    Cube121_3: THREE.Mesh;
    Cube121_4: THREE.Mesh;
    Cube121_5: THREE.Mesh;
    Cube121_6: THREE.Mesh;
    Cube121_7: THREE.Mesh;
    Cube121_8: THREE.Mesh;
    Cube121_9: THREE.Mesh;
    Cube121_10: THREE.Mesh;
    Cube121_11: THREE.Mesh;
    Cube201: THREE.Mesh;
    Cube382: THREE.Mesh;
    Cube382_1: THREE.Mesh;
    Cube382_2: THREE.Mesh;
    Cube382_3: THREE.Mesh;
    Cube382_4: THREE.Mesh;
    Cube382_5: THREE.Mesh;
    Cube382_6: THREE.Mesh;
    Cube382_7: THREE.Mesh;
    Cube405: THREE.Mesh;
    Cube405_1: THREE.Mesh;
    Cube405_2: THREE.Mesh;
    Cube405_3: THREE.Mesh;
    Cube405_4: THREE.Mesh;
    Cube405_5: THREE.Mesh;
    Cube405_6: THREE.Mesh;
    Cube405_7: THREE.Mesh;
    Cube381: THREE.Mesh;
    Cube381_1: THREE.Mesh;
    Cube381_2: THREE.Mesh;
    Cube381_3: THREE.Mesh;
    Cube381_4: THREE.Mesh;
    Cube381_5: THREE.Mesh;
    Cube381_6: THREE.Mesh;
    Cube381_7: THREE.Mesh;
    Cube381_8: THREE.Mesh;
    Cube381_9: THREE.Mesh;
    Cube381_10: THREE.Mesh;
    Cube381_11: THREE.Mesh;
    Cube381_12: THREE.Mesh;
    Cube381_13: THREE.Mesh;
    Cube381_14: THREE.Mesh;
    Cube403: THREE.Mesh;
    Cube403_1: THREE.Mesh;
    Cube403_2: THREE.Mesh;
    Cube403_3: THREE.Mesh;
    Cube403_4: THREE.Mesh;
    Cube403_5: THREE.Mesh;
    Cube403_6: THREE.Mesh;
    Cube403_7: THREE.Mesh;
    Cube404: THREE.Mesh;
    Cube404_1: THREE.Mesh;
    Cube404_2: THREE.Mesh;
    Cube404_3: THREE.Mesh;
    Cube404_4: THREE.Mesh;
    Cube404_5: THREE.Mesh;
    Cube404_6: THREE.Mesh;
    Cube404_7: THREE.Mesh;
    Cube404_8: THREE.Mesh;
    Cube404_9: THREE.Mesh;
    Cube404_10: THREE.Mesh;
    Cube404_11: THREE.Mesh;
    Cube236: THREE.Mesh;
    Cube237: THREE.Mesh;
    Cube397: THREE.Mesh;
    Cube397_1: THREE.Mesh;
    Cube084: THREE.Mesh;
    Cube084_1: THREE.Mesh;
    Cube384: THREE.Mesh;
    Cube384_1: THREE.Mesh;
    Cube384_2: THREE.Mesh;
    Cube384_3: THREE.Mesh;
    Cube080: THREE.Mesh;
    Cube080_1: THREE.Mesh;
    Cube080_2: THREE.Mesh;
    Cube080_3: THREE.Mesh;
    Cube080_4: THREE.Mesh;
    Cube253: THREE.Mesh;
    Cube253_1: THREE.Mesh;
    Cube265: THREE.Mesh;
    Cube265_1: THREE.Mesh;
    Cube268: THREE.Mesh;
    Cube268_1: THREE.Mesh;
    Cube268_2: THREE.Mesh;
    Cube269: THREE.Mesh;
    Cube269_1: THREE.Mesh;
    Cube269_2: THREE.Mesh;
    Cube257: THREE.Mesh;
    Cube257_1: THREE.Mesh;
    Cube078: THREE.Mesh;
    Cube078_1: THREE.Mesh;
    Cube078_2: THREE.Mesh;
    Cube264: THREE.Mesh;
    Cube264_1: THREE.Mesh;
    Cube264_2: THREE.Mesh;
    Cube331_1: THREE.Mesh;
    Cube331_2: THREE.Mesh;
    Cube473: THREE.Mesh;
    Cube473_1: THREE.Mesh;
    Cube366: THREE.Mesh;
    Cube366_1: THREE.Mesh;
    Cube366_2: THREE.Mesh;
    Cube366_3: THREE.Mesh;
    Cube366_4: THREE.Mesh;
    Cube366_5: THREE.Mesh;
    Cube366_6: THREE.Mesh;
    Cube366_7: THREE.Mesh;
    Cube366_8: THREE.Mesh;
    Cube549: THREE.Mesh;
    Cube549_1: THREE.Mesh;
    Cube467: THREE.Mesh;
    Cube467_1: THREE.Mesh;
    Cube467_2: THREE.Mesh;
    Cube467_3: THREE.Mesh;
    Cube467_4: THREE.Mesh;
    Cube467_5: THREE.Mesh;
    Cube467_6: THREE.Mesh;
    Cube467_7: THREE.Mesh;
    Cube467_8: THREE.Mesh;
    Cube372: THREE.Mesh;
    Cube372_1: THREE.Mesh;
    Cube372_2: THREE.Mesh;
    Cube372_3: THREE.Mesh;
    Cube372_4: THREE.Mesh;
    Cube372_5: THREE.Mesh;
    Cube372_6: THREE.Mesh;
    Cube372_7: THREE.Mesh;
    Cube372_8: THREE.Mesh;
    Cube372_9: THREE.Mesh;
    Cube372_10: THREE.Mesh;
    Cube372_11: THREE.Mesh;
    Cube372_12: THREE.Mesh;
    Cube372_13: THREE.Mesh;
    Cube372_14: THREE.Mesh;
    Cube392: THREE.Mesh;
    Cube392_1: THREE.Mesh;
    Cube392_2: THREE.Mesh;
    Cube392_3: THREE.Mesh;
    Cube028: THREE.Mesh;
    Cube028_1: THREE.Mesh;
    Cube028_2: THREE.Mesh;
    Cube028_3: THREE.Mesh;
    Cube394: THREE.Mesh;
    Cube394_1: THREE.Mesh;
    Cube394_2: THREE.Mesh;
    Montageplatz1011: THREE.Mesh;
    Cube385: THREE.Mesh;
    Cube385_1: THREE.Mesh;
    Cube385_2: THREE.Mesh;
    Cube385_3: THREE.Mesh;
    Cube385_4: THREE.Mesh;
    Cube385_5: THREE.Mesh;
    Cube385_6: THREE.Mesh;
    Cube385_7: THREE.Mesh;
    Cube380: THREE.Mesh;
    Cube380_1: THREE.Mesh;
    Cube380_2: THREE.Mesh;
    Cube380_3: THREE.Mesh;
    Cube380_4: THREE.Mesh;
    Cube380_5: THREE.Mesh;
    Cube380_6: THREE.Mesh;
    Cube380_7: THREE.Mesh;
    Cube386: THREE.Mesh;
    Cube386_1: THREE.Mesh;
    Cube386_2: THREE.Mesh;
    Cube386_3: THREE.Mesh;
    Cube386_4: THREE.Mesh;
    Cube386_5: THREE.Mesh;
    Cube386_6: THREE.Mesh;
    Cube386_7: THREE.Mesh;
    Cube386_8: THREE.Mesh;
    Cube386_9: THREE.Mesh;
    Cube386_10: THREE.Mesh;
    Cube386_11: THREE.Mesh;
    Cube376: THREE.Mesh;
    Cube376_1: THREE.Mesh;
    Cube376_2: THREE.Mesh;
    Cube376_3: THREE.Mesh;
    Cube376_4: THREE.Mesh;
    Cube376_5: THREE.Mesh;
    Cube376_6: THREE.Mesh;
    Cube376_7: THREE.Mesh;
    Cube376_8: THREE.Mesh;
    Cube376_9: THREE.Mesh;
    Cube376_10: THREE.Mesh;
    Cube376_11: THREE.Mesh;
    Cube411: THREE.Mesh;
    Cube411_1: THREE.Mesh;
    Cube411_2: THREE.Mesh;
    Cube411_3: THREE.Mesh;
    Cube411_4: THREE.Mesh;
    Cube411_5: THREE.Mesh;
    Cube411_6: THREE.Mesh;
    Cube411_7: THREE.Mesh;
    Cube411_8: THREE.Mesh;
    Cube411_9: THREE.Mesh;
    Cube411_10: THREE.Mesh;
    Cube411_11: THREE.Mesh;
    Cube412: THREE.Mesh;
    Cube412_1: THREE.Mesh;
    Cube412_2: THREE.Mesh;
    Cube412_3: THREE.Mesh;
    Cube413: THREE.Mesh;
    Cube413_1: THREE.Mesh;
    Cube413_2: THREE.Mesh;
    Cube413_3: THREE.Mesh;
    Cube414: THREE.Mesh;
    Cube414_1: THREE.Mesh;
    Cube414_2: THREE.Mesh;
    Montageplatz1017: THREE.Mesh;
    Cube044: THREE.Mesh;
    Cube044_1: THREE.Mesh;
    Cube044_2: THREE.Mesh;
    Cube044_3: THREE.Mesh;
    Cube044_4: THREE.Mesh;
    Cube044_5: THREE.Mesh;
    Cube044_6: THREE.Mesh;
    Cube044_7: THREE.Mesh;
    Cube044_8: THREE.Mesh;
    Cube044_9: THREE.Mesh;
    Cube044_10: THREE.Mesh;
    Cube044_11: THREE.Mesh;
    Cube044_12: THREE.Mesh;
    Cube044_13: THREE.Mesh;
    Cube044_14: THREE.Mesh;
    Cube422: THREE.Mesh;
    Cube422_1: THREE.Mesh;
    Cube301: THREE.Mesh;
    Cube301_1: THREE.Mesh;
    Fließband004: THREE.Mesh;
    Cube424: THREE.Mesh;
    Cube424_1: THREE.Mesh;
    Cube425: THREE.Mesh;
    Cube425_1: THREE.Mesh;
    Fließband007: THREE.Mesh;
    Cube437: THREE.Mesh;
    Cube437_1: THREE.Mesh;
    Cube437_2: THREE.Mesh;
    Cube437_3: THREE.Mesh;
    Cube437_4: THREE.Mesh;
    Cube437_5: THREE.Mesh;
    Cube437_6: THREE.Mesh;
    Cube437_7: THREE.Mesh;
    Cube408: THREE.Mesh;
    Cube408_1: THREE.Mesh;
    Cube408_2: THREE.Mesh;
    Cube408_3: THREE.Mesh;
    Cube408_4: THREE.Mesh;
    Cube408_5: THREE.Mesh;
    Cube408_6: THREE.Mesh;
    Cube408_7: THREE.Mesh;
    Cube398: THREE.Mesh;
    Cube398_1: THREE.Mesh;
    Cube407: THREE.Mesh;
    Cube407_1: THREE.Mesh;
    Cube416: THREE.Mesh;
    Cube416_1: THREE.Mesh;
    Cube427_1: THREE.Mesh;
    Cube427_2: THREE.Mesh;
    Cube429: THREE.Mesh;
    Cube429_1: THREE.Mesh;
    Cube434: THREE.Mesh;
    Cube434_1: THREE.Mesh;
    Cube434_2: THREE.Mesh;
    Cube583: THREE.Mesh;
    Cube583_1: THREE.Mesh;
    Cube583_2: THREE.Mesh;
    Cube439: THREE.Mesh;
    Cube439_1: THREE.Mesh;
    Cube439_2: THREE.Mesh;
    Cube393: THREE.Mesh;
    Cube393_1: THREE.Mesh;
    Cube393_2: THREE.Mesh;
    Cube393_3: THREE.Mesh;
    Cube409: THREE.Mesh;
    Cube409_1: THREE.Mesh;
    Cube409_2: THREE.Mesh;
    Cube409_3: THREE.Mesh;
    Cube409_4: THREE.Mesh;
    Cube409_5: THREE.Mesh;
    Cube409_6: THREE.Mesh;
    Cube409_7: THREE.Mesh;
    Cube401: THREE.Mesh;
    Cube401_1: THREE.Mesh;
    Cube401_2: THREE.Mesh;
    Cube401_3: THREE.Mesh;
    Cube401_4: THREE.Mesh;
    Cube401_5: THREE.Mesh;
    Cube401_6: THREE.Mesh;
    Cube401_7: THREE.Mesh;
    Cube401_8: THREE.Mesh;
    Cube401_9: THREE.Mesh;
    Cube401_10: THREE.Mesh;
    Cube401_11: THREE.Mesh;
    Cube433: THREE.Mesh;
    Cube433_1: THREE.Mesh;
    Cube433_2: THREE.Mesh;
    Cube433_3: THREE.Mesh;
    Cube433_4: THREE.Mesh;
    Cube433_5: THREE.Mesh;
    Cube433_6: THREE.Mesh;
    Cube433_7: THREE.Mesh;
    Cube433_8: THREE.Mesh;
    Cube433_9: THREE.Mesh;
    Cube433_10: THREE.Mesh;
    Cube433_11: THREE.Mesh;
    Cube436: THREE.Mesh;
    Cube436_1: THREE.Mesh;
    Cube436_2: THREE.Mesh;
    Cube436_3: THREE.Mesh;
    Cube436_4: THREE.Mesh;
    Cube436_5: THREE.Mesh;
    Cube436_6: THREE.Mesh;
    Cube436_7: THREE.Mesh;
    Cube436_8: THREE.Mesh;
    Cube436_9: THREE.Mesh;
    Cube436_10: THREE.Mesh;
    Cube436_11: THREE.Mesh;
    Cube391: THREE.Mesh;
    Cube391_1: THREE.Mesh;
    Cube292: THREE.Mesh;
    Cube292_1: THREE.Mesh;
    Cube298: THREE.Mesh;
    Cube298_1: THREE.Mesh;
    Cube298_2: THREE.Mesh;
    Cube375: THREE.Mesh;
    Cube375_1: THREE.Mesh;
    Cube375_2: THREE.Mesh;
    Cube375_3: THREE.Mesh;
    Cube375_4: THREE.Mesh;
    Cube375_5: THREE.Mesh;
    Cube375_6: THREE.Mesh;
    Cube375_7: THREE.Mesh;
    Cube375_8: THREE.Mesh;
    Cube375_9: THREE.Mesh;
    Cube375_10: THREE.Mesh;
    Cube375_11: THREE.Mesh;
    Cube375_12: THREE.Mesh;
    Cube399: THREE.Mesh;
    Cube399_1: THREE.Mesh;
    Cube400: THREE.Mesh;
    Cube400_1: THREE.Mesh;
    Cube431: THREE.Mesh;
    Cube431_1: THREE.Mesh;
    Cube431_2: THREE.Mesh;
    Cube431_3: THREE.Mesh;
    Cube431_4: THREE.Mesh;
    Cube431_5: THREE.Mesh;
    Cube431_6: THREE.Mesh;
    Cube431_7: THREE.Mesh;
    Cube431_8: THREE.Mesh;
    Cube431_9: THREE.Mesh;
    Cube431_10: THREE.Mesh;
    Cube431_11: THREE.Mesh;
    Cube431_12: THREE.Mesh;
    Cube432: THREE.Mesh;
    Cube432_1: THREE.Mesh;
    Cube432_2: THREE.Mesh;
    Cube432_3: THREE.Mesh;
    Cube432_4: THREE.Mesh;
    Cube432_5: THREE.Mesh;
    Cube432_6: THREE.Mesh;
    Cube432_7: THREE.Mesh;
    Cube432_8: THREE.Mesh;
    Cube432_9: THREE.Mesh;
    Cube432_10: THREE.Mesh;
    Cube432_11: THREE.Mesh;
    Cube432_12: THREE.Mesh;
    Cube570: THREE.Mesh;
    Cube570_1: THREE.Mesh;
    Cube570_2: THREE.Mesh;
    Cube584: THREE.Mesh;
    Cube584_1: THREE.Mesh;
    Cube584_2: THREE.Mesh;
    Cube343: THREE.Mesh;
    Circle_1: THREE.Mesh;
    Circle_2: THREE.Mesh;
    Circle_3: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Circle001_2: THREE.Mesh;
    Circle001_3: THREE.Mesh;
    Cube423: THREE.Mesh;
    Cube423_1: THREE.Mesh;
    Cube410: THREE.Mesh;
    Cube410_1: THREE.Mesh;
    Cube428: THREE.Mesh;
    Cube428_1: THREE.Mesh;
    Cube063: THREE.Mesh;
    Cube063_1: THREE.Mesh;
    Cube063_2: THREE.Mesh;
    Cube195: THREE.Mesh;
    Cube347: THREE.Mesh;
    Cube427: THREE.Mesh;
    Plane006: THREE.Mesh;
    Plane006_1: THREE.Mesh;
    Plane006_2: THREE.Mesh;
    Cube337_1: THREE.Mesh;
    Cube337_2: THREE.Mesh;
    Cube337_3: THREE.Mesh;
    Cube337_4: THREE.Mesh;
    Cube762: THREE.Mesh;
    Cube762_1: THREE.Mesh;
    Cube762_2: THREE.Mesh;
    Cube368: THREE.Mesh;
    Cube368_1: THREE.Mesh;
    Cube368_2: THREE.Mesh;
    Cube368_3: THREE.Mesh;
    Cube368_4: THREE.Mesh;
    Cube368_5: THREE.Mesh;
    Cube474: THREE.Mesh;
    Cube474_1: THREE.Mesh;
    Cube474_2: THREE.Mesh;
    Cube481: THREE.Mesh;
    Cube481_1: THREE.Mesh;
    Cube483: THREE.Mesh;
    Cube483_1: THREE.Mesh;
    Cube483_2: THREE.Mesh;
    Cube483_3: THREE.Mesh;
    Cube483_4: THREE.Mesh;
    Cube483_5: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube017_1: THREE.Mesh;
    Cube485: THREE.Mesh;
    Cube485_1: THREE.Mesh;
    Cube471: THREE.Mesh;
    Cube471_1: THREE.Mesh;
    Cube471_2: THREE.Mesh;
    Cube486: THREE.Mesh;
    Cube486_1: THREE.Mesh;
    Cube486_2: THREE.Mesh;
    Cube040: THREE.Mesh;
    Cube040_1: THREE.Mesh;
    Cube040_2: THREE.Mesh;
    Cube040_3: THREE.Mesh;
    Cube053: THREE.Mesh;
    Cube053_1: THREE.Mesh;
    Cube053_2: THREE.Mesh;
    Cube484: THREE.Mesh;
    Cube484_1: THREE.Mesh;
    Cube484_2: THREE.Mesh;
    Cube069: THREE.Mesh;
    Cube069_1: THREE.Mesh;
    Cube069_2: THREE.Mesh;
    Cube334: THREE.Mesh;
    Cube335: THREE.Mesh;
    Cube371: THREE.Mesh;
    Cube371_1: THREE.Mesh;
    Cube337: THREE.Mesh;
    Cube338: THREE.Mesh;
    Cube587: THREE.Mesh;
    Cube587_1: THREE.Mesh;
    Cube420: THREE.Mesh;
    Cube421: THREE.Mesh;
    Cube179: THREE.Mesh;
    Cube179_1: THREE.Mesh;
    Plane031: THREE.Mesh;
    Plane031_1: THREE.Mesh;
    Plane031_2: THREE.Mesh;
    Cube056: THREE.Mesh;
    Cube056_1: THREE.Mesh;
    Cube056_2: THREE.Mesh;
    Cube328: THREE.Mesh;
    Cube328_1: THREE.Mesh;
    Cube328_2: THREE.Mesh;
    Cube329: THREE.Mesh;
    Cube329_1: THREE.Mesh;
    Cube329_2: THREE.Mesh;
    Cube264_3: THREE.Mesh;
    Cylinder036: THREE.Mesh;
    Cylinder036_1: THREE.Mesh;
    Cylinder043: THREE.Mesh;
    Cylinder043_1: THREE.Mesh;
    Cube331: THREE.Mesh;
    Cube332: THREE.Mesh;
    Cube333: THREE.Mesh;
    Cube377: THREE.Mesh;
    Cube377_1: THREE.Mesh;
    Cube377_2: THREE.Mesh;
    Cube377_3: THREE.Mesh;
    Cube377_4: THREE.Mesh;
    Cube377_5: THREE.Mesh;
    Cube377_6: THREE.Mesh;
    Cube377_7: THREE.Mesh;
    Cube061: THREE.Mesh;
    Cube061_1: THREE.Mesh;
    Cube061_2: THREE.Mesh;
    Cube061_3: THREE.Mesh;
    Cube061_4: THREE.Mesh;
    Cube061_5: THREE.Mesh;
    Cube374: THREE.Mesh;
    Cube374_1: THREE.Mesh;
    Cube374_2: THREE.Mesh;
    Cube065: THREE.Mesh;
    Cube065_1: THREE.Mesh;
    Cube065_2: THREE.Mesh;
    Cube065_3: THREE.Mesh;
    Cube065_4: THREE.Mesh;
    Cube065_5: THREE.Mesh;
    Cube065_6: THREE.Mesh;
    Cube920: THREE.Mesh;
    Cube920_1: THREE.Mesh;
    Cube920_2: THREE.Mesh;
    Cube920_3: THREE.Mesh;
    Cube920_4: THREE.Mesh;
    Cube920_5: THREE.Mesh;
    Cube920_6: THREE.Mesh;
    Cube921: THREE.Mesh;
    Cube921_1: THREE.Mesh;
    Cube921_2: THREE.Mesh;
    Cube921_3: THREE.Mesh;
    Cube921_4: THREE.Mesh;
    Cube921_5: THREE.Mesh;
    Cube921_6: THREE.Mesh;
    Cube922: THREE.Mesh;
    Cube922_1: THREE.Mesh;
    Cube922_2: THREE.Mesh;
    Cube922_3: THREE.Mesh;
    Cube922_4: THREE.Mesh;
    Cube922_5: THREE.Mesh;
    Cube922_6: THREE.Mesh;
    Cube923: THREE.Mesh;
    Cube923_1: THREE.Mesh;
    Cube923_2: THREE.Mesh;
    Cube923_3: THREE.Mesh;
    Cube923_4: THREE.Mesh;
    Cube923_5: THREE.Mesh;
    Cube923_6: THREE.Mesh;
    Cube900: THREE.Mesh;
    Cube900_1: THREE.Mesh;
    Cube900_2: THREE.Mesh;
    Cube901: THREE.Mesh;
    Cube901_1: THREE.Mesh;
    Cube901_2: THREE.Mesh;
    Cube902: THREE.Mesh;
    Cube902_1: THREE.Mesh;
    Cube902_2: THREE.Mesh;
    Cube903: THREE.Mesh;
    Cube903_1: THREE.Mesh;
    Untitled027: THREE.Mesh;
    Untitled027_1: THREE.Mesh;
    Cube787: THREE.Mesh;
    Cube787_1: THREE.Mesh;
    Cube787_2: THREE.Mesh;
    Cube788: THREE.Mesh;
    Cube788_1: THREE.Mesh;
    Cube788_2: THREE.Mesh;
    Cube789: THREE.Mesh;
    Cube789_1: THREE.Mesh;
    Cube789_2: THREE.Mesh;
    Cube791: THREE.Mesh;
    Cube791_1: THREE.Mesh;
    Untitled011: THREE.Mesh;
    Untitled011_1: THREE.Mesh;
    Cube769: THREE.Mesh;
    Cube769_1: THREE.Mesh;
    Cube769_2: THREE.Mesh;
    Cube773: THREE.Mesh;
    Cube773_1: THREE.Mesh;
    Cube771: THREE.Mesh;
    Cube771_1: THREE.Mesh;
    Cube771_2: THREE.Mesh;
    Cube772: THREE.Mesh;
    Cube772_1: THREE.Mesh;
    Cube772_2: THREE.Mesh;
    Untitled007: THREE.Mesh;
    Untitled007_1: THREE.Mesh;
    Bone: THREE.Bone;
    Bone_1: THREE.Bone;
  };
  materials: {
    ["Plasti.blackl.004"]: THREE.MeshPhysicalMaterial;
    ["orange.001"]: THREE.MeshStandardMaterial;
    ["Plasti.blackl.005"]: THREE.MeshPhysicalMaterial;
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
    weiss: THREE.MeshStandardMaterial;
    ["braun.001"]: THREE.MeshStandardMaterial;
    gruen: THREE.MeshStandardMaterial;
    ["weiss.001"]: THREE.MeshStandardMaterial;
    braun: THREE.MeshStandardMaterial;
    schwarz: THREE.MeshStandardMaterial;
    Glas: THREE.MeshPhysicalMaterial;
    teppichboden: THREE.MeshStandardMaterial;
    ["weiss.007"]: THREE.MeshStandardMaterial;
    ["braun.006"]: THREE.MeshStandardMaterial;
    ["gruen.003"]: THREE.MeshStandardMaterial;
    ["weiss.004"]: THREE.MeshStandardMaterial;
    ["metall.002"]: THREE.MeshStandardMaterial;
    ["schwarz.007"]: THREE.MeshStandardMaterial;
    ["weiß-metall.001"]: THREE.MeshStandardMaterial;
    ["Bildschirmleuchten.002"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["dblau.stoff.001"]: THREE.MeshStandardMaterial;
    ["schwarz.023"]: THREE.MeshStandardMaterial;
    dblau: THREE.MeshStandardMaterial;
    ["metall-grau"]: THREE.MeshStandardMaterial;
    ["dgrau.003"]: THREE.MeshStandardMaterial;
    ["dblau.003"]: THREE.MeshStandardMaterial;
    ["weiss.006"]: THREE.MeshStandardMaterial;
    beige: THREE.MeshStandardMaterial;
    ["weiss.012"]: THREE.MeshStandardMaterial;
    ["braun.008"]: THREE.MeshStandardMaterial;
    ["gruen.006"]: THREE.MeshStandardMaterial;
    ["graublau.hell"]: THREE.MeshStandardMaterial;
    ["Plasti.weiß.001"]: THREE.MeshPhysicalMaterial;
    ["metall.007"]: THREE.MeshStandardMaterial;
    ["metall-weiß.001"]: THREE.MeshStandardMaterial;
    ["Gitter-blau"]: THREE.MeshStandardMaterial;
    metall: THREE.MeshStandardMaterial;
    ["beige.002"]: THREE.MeshStandardMaterial;
    ["NMHblau.003"]: THREE.MeshStandardMaterial;
    ["gelb.002"]: THREE.MeshStandardMaterial;
    ["dblau.010"]: THREE.MeshStandardMaterial;
    ["weiss.011"]: THREE.MeshStandardMaterial;
    ["metall-grau.002"]: THREE.MeshStandardMaterial;
    ["dblau.007"]: THREE.MeshStandardMaterial;
    ["dgrau.005"]: THREE.MeshStandardMaterial;
    ["NMHblau.008"]: THREE.MeshStandardMaterial;
    ["metall.013"]: THREE.MeshStandardMaterial;
    ["gelb.003"]: THREE.MeshStandardMaterial;
    ["metall.003"]: THREE.MeshStandardMaterial;
    ["dblau.metal"]: THREE.MeshStandardMaterial;
    ["Bildschirmleuchten.001"]: THREE.MeshStandardMaterial;
    ["NMHblau.001"]: THREE.MeshStandardMaterial;
    ["schwarz.006"]: THREE.MeshStandardMaterial;
    ["metall.010"]: THREE.MeshStandardMaterial;
    ["dblau.002"]: THREE.MeshStandardMaterial;
    ["NMHblau.002"]: THREE.MeshStandardMaterial;
    ["metall.001"]: THREE.MeshStandardMaterial;
    gelb: THREE.MeshStandardMaterial;
    ["braun.003"]: THREE.MeshStandardMaterial;
    ["metall-grau.001"]: THREE.MeshStandardMaterial;
    ["dblau.005"]: THREE.MeshStandardMaterial;
    ["dblau.006"]: THREE.MeshStandardMaterial;
    ["metall.008"]: THREE.MeshStandardMaterial;
    ["orange.002"]: THREE.MeshStandardMaterial;
    ["graublau.004"]: THREE.MeshStandardMaterial;
    ["hblaugrau.003"]: THREE.MeshStandardMaterial;
    boden: THREE.MeshStandardMaterial;
    ["schwarz.001"]: THREE.MeshStandardMaterial;
    ["metall-weiß"]: THREE.MeshStandardMaterial;
    ["silber.matt"]: THREE.MeshStandardMaterial;
    ["weiss.009"]: THREE.MeshStandardMaterial;
    NMHblau: THREE.MeshStandardMaterial;
    Lampe: THREE.MeshStandardMaterial;
    ["hblaugrau.Fertigung"]: THREE.MeshStandardMaterial;
    brick: THREE.MeshStandardMaterial;
    Holz: THREE.MeshStandardMaterial;
    ["braun.007"]: THREE.MeshStandardMaterial;
    ["schwarz.018"]: THREE.MeshStandardMaterial;
    ["metal-grey-dird.001"]: THREE.MeshStandardMaterial;
    ["Deep.Black"]: THREE.MeshStandardMaterial;
    ["Glas.004"]: THREE.MeshPhysicalMaterial;
    ["Bildschirmleuchten.006"]: THREE.MeshStandardMaterial;
    Rueckleuchten: THREE.MeshStandardMaterial;
    ["gruen_leuchten.001"]: THREE.MeshStandardMaterial;
    fenster: THREE.MeshStandardMaterial;
    rot: THREE.MeshStandardMaterial;
    hbl: THREE.MeshStandardMaterial;
    ["leuchten.rot"]: THREE.MeshStandardMaterial;
    ["leuchten.grün_blink"]: THREE.MeshStandardMaterial;
    ["leuchten.grün_"]: THREE.MeshStandardMaterial;
    ["dblau.metal.001"]: THREE.MeshStandardMaterial;
    ["Glas.005"]: THREE.MeshPhysicalMaterial;
    ["schwarz.005"]: THREE.MeshStandardMaterial;
    Bildschirmleuchten: THREE.MeshStandardMaterial;
    ["Plastik-weiss"]: THREE.MeshStandardMaterial;
    ["schwarz.002"]: THREE.MeshStandardMaterial;
    ["metall-weiß.002"]: THREE.MeshStandardMaterial;
    ["gelb.001"]: THREE.MeshStandardMaterial;
    ["weiss.010"]: THREE.MeshStandardMaterial;
    ["gelb-durchsicht"]: THREE.MeshPhysicalMaterial;
    drot: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    jeans: THREE.MeshStandardMaterial;
  };
};

export function Montage(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/montage.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <MontageBot />
      <group
        position={[138.63, 0.371, -180.223]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.826}
      >
        <primitive object={nodes.Bone} />
      </group>
      <mesh
        geometry={nodes.Cube198.geometry}
        material={materials["Plasti.blackl.005"]}
        position={[138.602, -0.742, -179.8]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.826, 0.489, 0.826]}
      />
      <group position={[120.044, 4.93, -174.502]} scale={[5.036, 0.03, 0.151]}>
        <mesh
          geometry={nodes.Cube194.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube194_1.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube194_2.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
      <group position={[142.19, 4.93, -174.502]} scale={[5.036, 0.03, 0.151]}>
        <mesh
          geometry={nodes.Cube097.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube097_1.geometry}
          material={materials["Lampe.001"]}
        />
        <mesh
          geometry={nodes.Cube097_2.geometry}
          material={materials["dgrau.001"]}
        />
      </group>
      <group position={[122.689, 5.638, -176.001]} scale={[2.93, 3.227, 3.412]}>
        <mesh
          geometry={nodes.Cube856.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube856_1.geometry}
          material={materials["schwarz.014"]}
        />
      </group>
      <mesh
        geometry={nodes.Cylinder021.geometry}
        material={materials.hblaugrau}
        position={[138.21, 5.265, -179.769]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[-0.712, -7.653, -1.433]}
      />
      <mesh
        geometry={nodes.Cube657.geometry}
        material={materials.hblaugrau}
        position={[124.993, 8.706, -180.186]}
        scale={[24.158, 3.294, 6.742]}
      />
      <group
        position={[144.335, -0.314, -183.07]}
        scale={[0.123, 0.123, 0.138]}
      >
        <mesh geometry={nodes.Cube730.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube730_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube730_2.geometry} material={materials.gruen} />
      </group>
      <group
        position={[146.499, -0.459, -178.84]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.177, 0.769, 0.462]}
      >
        <mesh
          geometry={nodes.Cube734.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube734_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[144.389, -0.648, -181.329]}
        scale={[0.233, 0.338, 0.519]}
      >
        <mesh
          geometry={nodes.Cube735.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube735_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[143.663, 0.328, -183.379]}
        scale={[4.169, 1.081, 0.092]}
      >
        <mesh
          geometry={nodes.Cube721.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube721_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube721_2.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube721_3.geometry}
          material={materials.teppichboden}
        />
      </group>
      <group
        position={[144.115, 0.441, -177.705]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[4.42, 1.081, 0.092]}
      >
        <mesh
          geometry={nodes.Cube723.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube723_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube723_2.geometry} material={materials.Glas} />
      </group>
      <group
        position={[146.635, 0.113, -178.869]}
        rotation={[0, 1.571, 0]}
        scale={[0.242, 0.226, 0.406]}
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
        position={[146.641, 0.017, -178.996]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.38, 0.019, 0.632]}
      >
        <mesh
          geometry={nodes.Cube560.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube560_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube560_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube560_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube560_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube560_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube560_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube560_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube560_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[144.859, 0.342, -173.979]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.411, 0.021, 0.684]}
      >
        <mesh
          geometry={nodes.Cube561.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube561_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube561_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube561_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube561_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube561_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube561_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube561_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube561_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[146.676, -0.46, -173.437]}
        rotation={[Math.PI, -0.091, Math.PI / 2]}
        scale={[0.19, 0.013, 0.385]}
      >
        <mesh geometry={nodes.Cube496.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube496_1.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube496_2.geometry}
          material={materials["metall-grau"]}
        />
        <mesh
          geometry={nodes.Cube496_3.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube496_4.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube496_5.geometry}
          material={materials["weiss.006"]}
        />
        <mesh geometry={nodes.Cube496_6.geometry} material={materials.beige} />
      </group>
      <group
        position={[146.552, 0.08, -174.434]}
        rotation={[-Math.PI, 1.48, -Math.PI]}
        scale={[0.095, 0.095, 0.193]}
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
        position={[146.547, 0.005, -172.932]}
        rotation={[-Math.PI, 1.48, -Math.PI]}
        scale={[0.095, 0.095, 0.191]}
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
        position={[148.554, -0.077, -174.337]}
        rotation={[Math.PI, -0.587, Math.PI]}
        scale={[0.103, 0.103, 0.208]}
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
        position={[148.634, -0.127, -173.911]}
        rotation={[0, -0.423, -Math.PI / 2]}
        scale={[0.187, 0.013, 0.379]}
      >
        <mesh geometry={nodes.Cube517.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube517_1.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube517_2.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <group
        position={[148.636, -0.103, -175.017]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.055, 0.034, 0.069]}
      >
        <mesh
          geometry={nodes.Cube419_1.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube419_2.geometry}
          material={materials["dgrau.003"]}
        />
      </group>
      <group
        position={[148.64, -0.504, -174.926]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.202, 0.666, 0.462]}
      >
        <mesh
          geometry={nodes.Cube515.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube515_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[148.412, 0.088, -172.692]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.193, 0.925, 0.494]}
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
      <mesh
        geometry={nodes.Cube150.geometry}
        material={materials.hblaugrau}
        position={[144.295, -0.854, -176.089]}
        scale={0.045}
      />
      <group
        position={[145.126, -0.206, -184.744]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.406, 0.02, 0.736]}
      >
        <mesh
          geometry={nodes.Cube293.geometry}
          material={materials["Plasti.weiß.001"]}
        />
        <mesh
          geometry={nodes.Cube293_1.geometry}
          material={materials["metall.007"]}
        />
      </group>
      <group
        position={[139.434, 0.342, -173.654]}
        scale={[0.411, 0.021, 0.684]}
      >
        <mesh
          geometry={nodes.Cube618.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube618_1.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[146.842, 0.033, -179.761]}
        rotation={[Math.PI, -0.061, Math.PI]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube624.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube624_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube624_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube637.geometry}
            material={materials["schwarz.013"]}
          />
          <mesh
            geometry={nodes.Cube637_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube637_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[-0.19, 0, 0]}>
          <mesh
            geometry={nodes.Cube638.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube638_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[-0.022, 0, 0]}>
          <mesh
            geometry={nodes.Cube650.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube650_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube650_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]} rotation={[0, -0.508, 0]}>
          <mesh
            geometry={nodes.Untitled037.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled037_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[144.808, -0.395, -174.414]}
        rotation={[-0.139, 0.01, 0.001]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube654.geometry}
          material={materials["dblau.012"]}
        />
        <mesh
          geometry={nodes.Cube654_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube654_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube654_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube654_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube654_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube729.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube729_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube729_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube733.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube733_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled038.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled038_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group
        position={[148.247, -0.327, -176.712]}
        rotation={[-3.003, 0, -Math.PI]}
        scale={0.919}
      >
        <mesh
          geometry={nodes.Cube659.geometry}
          material={materials["dblau.012"]}
        />
        <mesh
          geometry={nodes.Cube659_1.geometry}
          material={materials["Haut.001"]}
        />
        <mesh
          geometry={nodes.Cube659_2.geometry}
          material={materials["weiss.013"]}
        />
        <mesh
          geometry={nodes.Cube659_3.geometry}
          material={materials["braun.013"]}
        />
        <mesh
          geometry={nodes.Cube659_4.geometry}
          material={materials["schwarz.010"]}
        />
        <mesh
          geometry={nodes.Cube659_5.geometry}
          material={materials["Material.009"]}
        />
        <group position={[0.001, 0.497, -0.096]} rotation={[0.372, 0, 0]}>
          <mesh
            geometry={nodes.Cube747.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube747_1.geometry}
            material={materials["schwarz.010"]}
          />
        </group>
        <group position={[0.001, 0.497, -0.096]} rotation={[0.11, 0, 0]}>
          <mesh
            geometry={nodes.Cube748.geometry}
            material={materials["Haut.001"]}
          />
          <mesh
            geometry={nodes.Cube748_1.geometry}
            material={materials["schwarz.010"]}
          />
          <mesh
            geometry={nodes.Cube748_2.geometry}
            material={materials["weiß-metall.005"]}
          />
        </group>
        <group position={[-0.001, 0.673, -0.111]}>
          <mesh
            geometry={nodes.Untitled039.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled039_1.geometry}
            material={materials["Haut.001"]}
          />
        </group>
      </group>
      <group position={[114.665, 1.494, -181.48]} scale={[1.204, 0.075, 3.346]}>
        <mesh
          geometry={nodes.Cube765.geometry}
          material={materials["metall-weiß.001"]}
        />
        <mesh
          geometry={nodes.Cube765_1.geometry}
          material={materials["Gitter-blau"]}
        />
        <mesh geometry={nodes.Cube765_2.geometry} material={materials.metall} />
      </group>
      <mesh
        geometry={nodes.Cube197.geometry}
        material={materials["metall.007"]}
        position={[121.767, -0.376, -186.372]}
        scale={[0.029, 0.396, 0.028]}
      />
      <group
        position={[113.551, 3.01, -181.493]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.076, 0.063, 0.119]}
      >
        <mesh
          geometry={nodes.Cube390.geometry}
          material={materials["beige.002"]}
        />
        <mesh
          geometry={nodes.Cube390_1.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube390_2.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube390_3.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube390_4.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube390_5.geometry}
          material={materials["gelb.002"]}
        />
        <mesh
          geometry={nodes.Cube390_6.geometry}
          material={materials["dblau.010"]}
        />
        <mesh
          geometry={nodes.Cube390_7.geometry}
          material={materials["weiss.011"]}
        />
        <mesh
          geometry={nodes.Cube390_8.geometry}
          material={materials["metall-grau.002"]}
        />
      </group>
      <group
        position={[119.353, 1.646, -184.637]}
        scale={[0.096, 0.075, 0.143]}
      >
        <mesh geometry={nodes.Cube487.geometry} material={materials.beige} />
        <mesh
          geometry={nodes.Cube487_1.geometry}
          material={materials["dblau.007"]}
        />
        <mesh
          geometry={nodes.Cube487_2.geometry}
          material={materials["dgrau.005"]}
        />
        <mesh
          geometry={nodes.Cube487_3.geometry}
          material={materials["NMHblau.008"]}
        />
        <mesh
          geometry={nodes.Cube487_4.geometry}
          material={materials["metall.013"]}
        />
        <mesh
          geometry={nodes.Cube487_5.geometry}
          material={materials["gelb.003"]}
        />
      </group>
      <group
        position={[119.008, -0.845, -186.395]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.135, 0.009, 0.274]}
      >
        <mesh
          geometry={nodes.Cube334_1.geometry}
          material={materials["metall.003"]}
        />
        <mesh geometry={nodes.Cube334_2.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube334_3.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube334_4.geometry}
          material={materials["metall-grau"]}
        />
        <mesh
          geometry={nodes.Cube334_5.geometry}
          material={materials["dblau.metal"]}
        />
        <mesh
          geometry={nodes.Cube334_6.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube334_7.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube334_8.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube334_9.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube334_10.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube334_11.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh
          geometry={nodes.Cube334_12.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cube334_13.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube334_14.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube334_15.geometry}
          material={materials["dblau.003"]}
        />
      </group>
      <group
        position={[121.47, -0.24, -184.239]}
        rotation={[0, 1.26, -Math.PI / 2]}
        scale={[0.194, 0.013, 0.395]}
      >
        <mesh geometry={nodes.Cube324.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube324_1.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube324_2.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <group
        position={[119.208, -0.214, -184.301]}
        rotation={[Math.PI, -0.808, Math.PI / 2]}
        scale={[0.116, 0.014, 0.421]}
      >
        <mesh geometry={nodes.Cube327.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube327_1.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube327_2.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <group
        position={[115.987, 0.374, -181.444]}
        scale={[0.143, 0.088, 0.189]}
      >
        <mesh
          geometry={nodes.Cube562.geometry}
          material={materials["dblau.007"]}
        />
        <mesh geometry={nodes.Cube562_1.geometry} material={materials.braun} />
        <mesh geometry={nodes.Cube562_2.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube562_3.geometry}
          material={materials["dgrau.005"]}
        />
        <mesh
          geometry={nodes.Cube562_4.geometry}
          material={materials["metall.007"]}
        />
      </group>
      <group position={[121.671, -0.284, -183.843]} scale={0.061}>
        <mesh
          geometry={nodes.Cube315.geometry}
          material={materials["dblau.metal"]}
        />
        <mesh
          geometry={nodes.Cube315_1.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[120.543, 0.08, -184.119]}
        rotation={[-Math.PI, 1.034, Math.PI / 2]}
        scale={[0.135, 0.009, 0.274]}
      >
        <mesh
          geometry={nodes.Cube322.geometry}
          material={materials["metall-grau"]}
        />
        <mesh
          geometry={nodes.Cube322_1.geometry}
          material={materials["dblau.metal"]}
        />
        <mesh
          geometry={nodes.Cube322_2.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube322_3.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube322_4.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group
        position={[122.174, 0.698, -184.953]}
        scale={[0.849, 0.919, 0.777]}
      >
        <mesh
          geometry={nodes.Cube402.geometry}
          material={materials["beige.002"]}
        />
        <mesh
          geometry={nodes.Cube402_1.geometry}
          material={materials["dblau.002"]}
        />
        <mesh
          geometry={nodes.Cube402_2.geometry}
          material={materials["NMHblau.002"]}
        />
        <mesh
          geometry={nodes.Cube402_3.geometry}
          material={materials["metall.001"]}
        />
        <mesh geometry={nodes.Cube402_4.geometry} material={materials.gelb} />
        <mesh
          geometry={nodes.Cube402_5.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube402_6.geometry}
          material={materials["metall-grau.001"]}
        />
        <mesh geometry={nodes.Cube402_7.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube402_8.geometry}
          material={materials["dgrau.005"]}
        />
      </group>
      <mesh
        geometry={nodes.Montageplatz1020.geometry}
        material={materials["metall.003"]}
        position={[121.306, -0.24, -184.009]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.108, 0.009, 0.212]}
      />
      <group
        position={[135.268, -0.845, -172.884]}
        scale={[0.011, 0.567, 0.011]}
      >
        <mesh
          geometry={nodes.Cube738.geometry}
          material={materials["dblau.005"]}
        />
        <mesh geometry={nodes.Cube738_1.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube738_2.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube738_3.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <group position={[117.109, 0.842, -175.136]} scale={[0.924, 1, 0.845]}>
        <mesh
          geometry={nodes.Cube589.geometry}
          material={materials["beige.002"]}
        />
        <mesh
          geometry={nodes.Cube589_1.geometry}
          material={materials["dblau.002"]}
        />
        <mesh
          geometry={nodes.Cube589_2.geometry}
          material={materials["NMHblau.002"]}
        />
        <mesh
          geometry={nodes.Cube589_3.geometry}
          material={materials["metall.001"]}
        />
        <mesh geometry={nodes.Cube589_4.geometry} material={materials.gelb} />
        <mesh
          geometry={nodes.Cube589_5.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube589_6.geometry}
          material={materials["metall-grau.001"]}
        />
        <mesh geometry={nodes.Cube589_7.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube589_8.geometry}
          material={materials["dgrau.005"]}
        />
      </group>
      <group
        position={[119.503, 0.838, -174.079]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.924, 1, 0.845]}
      >
        <mesh
          geometry={nodes.Cube588.geometry}
          material={materials["beige.002"]}
        />
        <mesh
          geometry={nodes.Cube588_1.geometry}
          material={materials["dblau.002"]}
        />
        <mesh
          geometry={nodes.Cube588_2.geometry}
          material={materials["NMHblau.002"]}
        />
        <mesh
          geometry={nodes.Cube588_3.geometry}
          material={materials["metall.001"]}
        />
        <mesh geometry={nodes.Cube588_4.geometry} material={materials.gelb} />
        <mesh
          geometry={nodes.Cube588_5.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube588_6.geometry}
          material={materials["metall-grau.001"]}
        />
        <mesh geometry={nodes.Cube588_7.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube588_8.geometry}
          material={materials["dgrau.005"]}
        />
      </group>
      <group
        position={[114.75, -0.475, -175.162]}
        rotation={[0, -1.183, 0]}
        scale={[-0.012, -0.166, -0.012]}
      >
        <mesh geometry={nodes.Cube379.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube379_1.geometry}
          material={materials["dblau.006"]}
        />
        <mesh
          geometry={nodes.Cube379_2.geometry}
          material={materials["metall.008"]}
        />
        <mesh
          geometry={nodes.Cube379_3.geometry}
          material={materials["dblau.metal"]}
        />
        <mesh
          geometry={nodes.Cube379_4.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[120.094, 3.767, -179.6]}
        scale={[-0.224, -0.224, -0.218]}
      >
        <mesh
          geometry={nodes.Cube150_1.geometry}
          material={materials["orange.002"]}
        />
        <mesh geometry={nodes.Cube150_2.geometry} material={materials.metall} />
      </group>
      <group
        position={[120.095, 3.846, -179.599]}
        scale={[0.427, 0.122, 0.223]}
      >
        <mesh geometry={nodes.Cube151.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube151_1.geometry} material={materials.metall} />
      </group>
      <group
        position={[141.056, 4.917, -178.9]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.03, -3.094, -0.07]}
      >
        <mesh
          geometry={nodes.Cube163_1.geometry}
          material={materials["graublau.004"]}
        />
        <mesh
          geometry={nodes.Cube163_2.geometry}
          material={materials["hblaugrau.003"]}
        />
      </group>
      <mesh
        geometry={nodes.wandstreben006.geometry}
        material={materials["graublau.004"]}
        position={[144.333, 3.545, -179.031]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.029, 16.562, 0.07]}
      />
      <mesh
        geometry={nodes.wandstreben007.geometry}
        material={materials["graublau.004"]}
        position={[140.794, 5.022, -180.215]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.029, 3.094, 0.07]}
      />
      <mesh
        geometry={nodes.wandstreben008.geometry}
        material={materials["graublau.004"]}
        position={[113.435, 5.121, -178.93]}
        scale={[0.029, 3.003, 0.07]}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials.boden}
        position={[146.41, -0.879, -185.769]}
        rotation={[0, 0, -Math.PI]}
        scale={[-1, -1, -1.376]}
      />
      <group
        position={[133.12, -0.845, -172.574]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.011, 0.567, 0.011]}
      >
        <mesh
          geometry={nodes.Cube266_1.geometry}
          material={materials["dblau.005"]}
        />
        <mesh geometry={nodes.Cube266_2.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube266_3.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube266_4.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <group
        position={[132.362, -0.277, -174.904]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[0.135, 0.009, 0.247]}
      >
        <mesh
          geometry={nodes.Cube259_1.geometry}
          material={materials["metall.003"]}
        />
        <mesh
          geometry={nodes.Cube259_2.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube259_3.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube259_4.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube259_5.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube259_6.geometry}
          material={materials["schwarz.006"]}
        />
      </group>
      <group
        position={[132.876, -0.638, -174.412]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[0.185, 0.055, 0.615]}
      >
        <mesh
          geometry={nodes.Cube121.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube121_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube121_2.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube121_3.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube121_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube121_5.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube121_6.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube121_7.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube121_8.geometry}
          material={materials["metall.003"]}
        />
        <mesh geometry={nodes.Cube121_9.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube121_10.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube121_11.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube201.geometry}
        material={materials["orange.002"]}
        position={[132.277, 0.044, -176.154]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.067, 0.874, 0.067]}
      />
      <group
        position={[129.918, -0.69, -175.782]}
        rotation={[-Math.PI, 0.19, -Math.PI]}
        scale={[0.069, 0.043, 0.086]}
      >
        <mesh
          geometry={nodes.Cube382.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube382_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube382_2.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube382_3.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube382_4.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube382_5.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube382_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube382_7.geometry} material={materials.metall} />
      </group>
      <group
        position={[125.251, -0.662, -174.611]}
        rotation={[0, 1.39, 0]}
        scale={[0.069, 0.043, 0.086]}
      >
        <mesh
          geometry={nodes.Cube405.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube405_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube405_2.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube405_3.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube405_4.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube405_5.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube405_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube405_7.geometry} material={materials.metall} />
      </group>
      <group
        position={[132.06, -0.885, -174.988]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.135, 0.009, 0.274]}
      >
        <mesh
          geometry={nodes.Cube381.geometry}
          material={materials["metall.003"]}
        />
        <mesh geometry={nodes.Cube381_1.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube381_2.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube381_3.geometry}
          material={materials["metall-grau"]}
        />
        <mesh
          geometry={nodes.Cube381_4.geometry}
          material={materials["dblau.metal"]}
        />
        <mesh
          geometry={nodes.Cube381_5.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube381_6.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube381_7.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube381_8.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube381_9.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube381_10.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh
          geometry={nodes.Cube381_11.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cube381_12.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube381_13.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube381_14.geometry}
          material={materials["dblau.003"]}
        />
      </group>
      <group
        position={[126.564, -0.277, -176.19]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.135, 0.009, 0.274]}
      >
        <mesh
          geometry={nodes.Cube403.geometry}
          material={materials["metall.003"]}
        />
        <mesh
          geometry={nodes.Cube403_1.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube403_2.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube403_3.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube403_4.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube403_5.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube403_6.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube403_7.geometry}
          material={materials["dblau.003"]}
        />
      </group>
      <group
        position={[127.884, -0.638, -174.939]}
        rotation={[0, -0.003, 0]}
        scale={[0.18, 0.053, 0.597]}
      >
        <mesh
          geometry={nodes.Cube404.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube404_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube404_2.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube404_3.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube404_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube404_5.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube404_6.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube404_7.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube404_8.geometry}
          material={materials["metall.003"]}
        />
        <mesh geometry={nodes.Cube404_9.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube404_10.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube404_11.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube236.geometry}
        material={materials["metall.007"]}
        position={[123.8, -0.845, -172.677]}
        scale={[0.113, 0.113, 0.133]}
      >
        <mesh
          geometry={nodes.Cube237.geometry}
          material={materials["metall.007"]}
          position={[65.502, 0, 0]}
        />
      </mesh>
      <group
        position={[131.423, -0.46, -172.892]}
        scale={[0.024, 0.024, 0.028]}
      >
        <mesh
          geometry={nodes.Cube397.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh
          geometry={nodes.Cube397_1.geometry}
          material={materials["silber.matt"]}
        />
      </group>
      <group
        position={[131.667, -0.172, -175.753]}
        rotation={[Math.PI, -1.563, Math.PI]}
        scale={[0.501, 0.597, 0.501]}
      >
        <mesh
          geometry={nodes.Cube084.geometry}
          material={materials["weiss.009"]}
        />
        <mesh
          geometry={nodes.Cube084_1.geometry}
          material={materials.NMHblau}
        />
      </group>
      <group
        position={[124.352, -0.172, -175.972]}
        scale={[0.501, 0.597, 0.501]}
      >
        <mesh
          geometry={nodes.Cube384.geometry}
          material={materials["weiss.009"]}
        />
        <mesh
          geometry={nodes.Cube384_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube384_2.geometry}
          material={materials["metall-grau.001"]}
        />
        <mesh geometry={nodes.Cube384_3.geometry} material={materials.Lampe} />
      </group>
      <group
        position={[142.934, 5.506, -179.641]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[3.982, 1.032, 0.092]}
      >
        <mesh
          geometry={nodes.Cube080.geometry}
          material={materials["hblaugrau.Fertigung"]}
        />
        <mesh
          geometry={nodes.Cube080_1.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube080_2.geometry} material={materials.Glas} />
        <mesh geometry={nodes.Cube080_3.geometry} material={materials.brick} />
        <mesh
          geometry={nodes.Cube080_4.geometry}
          material={materials.teppichboden}
        />
      </group>
      <group position={[143.611, 3.224, -183.008]} scale={[0.084, 1.49, 0.042]}>
        <mesh geometry={nodes.Cube253.geometry} material={materials.metall} />
        <mesh geometry={nodes.Cube253_1.geometry} material={materials.Glas} />
      </group>
      <group
        position={[148.275, 2.609, -176.933]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.233, 0.338, 0.566]}
      >
        <mesh
          geometry={nodes.Cube265.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube265_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[148.567, 2.609, -176.942]}
        rotation={[0, 1.571, 0]}
        scale={[0.226, 0.226, 0.456]}
      >
        <mesh
          geometry={nodes.Cube268.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube268_1.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube268_2.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[145.249, 1.838, -176.918]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.11, 0.11, 0.223]}
      >
        <mesh geometry={nodes.Cube269.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube269_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube269_2.geometry} material={materials.gruen} />
      </group>
      <group
        position={[144.148, 2.41, -186.283]}
        rotation={[0, -1.57, 0]}
        scale={[0.214, 0.566, 0.476]}
      >
        <mesh geometry={nodes.Cube257.geometry} material={materials.Holz} />
        <mesh
          geometry={nodes.Cube257_1.geometry}
          material={materials["braun.007"]}
        />
      </group>
      <group
        position={[145.156, 2.419, -186.322]}
        rotation={[0, -1.571, 0]}
        scale={[0.155, 0.155, 0.312]}
      >
        <mesh
          geometry={nodes.Cube078.geometry}
          material={materials["weiss.007"]}
        />
        <mesh
          geometry={nodes.Cube078_1.geometry}
          material={materials["braun.006"]}
        />
        <mesh
          geometry={nodes.Cube078_2.geometry}
          material={materials["gruen.003"]}
        />
      </group>
      <group
        position={[144.818, 1.833, -183.426]}
        rotation={[0, 1.571, 0]}
        scale={[0.151, 0.151, 0.306]}
      >
        <mesh geometry={nodes.Cube264.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube264_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube264_2.geometry} material={materials.gruen} />
      </group>
      <group
        position={[148.324, 2.609, -181.129]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={[-0.233, -0.338, -0.519]}
      >
        <mesh
          geometry={nodes.Cube331_1.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube331_2.geometry} material={materials.braun} />
      </group>
      <group
        position={[144.904, -0.756, -186.39]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.216, 0.046, 0.676]}
      >
        <mesh
          geometry={nodes.Cube473.geometry}
          material={materials["schwarz.018"]}
        />
        <mesh
          geometry={nodes.Cube473_1.geometry}
          material={materials["NMHblau.008"]}
        />
      </group>
      <group
        position={[146.192, 2.253, -184.697]}
        rotation={[0, -0.553, 0]}
        scale={1.242}
      >
        <mesh
          geometry={nodes.Cube366.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube366_1.geometry}
          material={materials["schwarz.023"]}
        />
        <mesh
          geometry={nodes.Cube366_2.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube366_3.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube366_4.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube366_5.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube366_6.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube366_7.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube366_8.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group
        position={[148.275, 2.609, -172.716]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.233, 0.338, 0.566]}
      >
        <mesh
          geometry={nodes.Cube549.geometry}
          material={materials["weiss.001"]}
        />
        <mesh geometry={nodes.Cube549_1.geometry} material={materials.braun} />
      </group>
      <group
        position={[146.591, 2.615, -176.973]}
        rotation={[-Math.PI, 1.565, -Math.PI]}
        scale={[0.38, 0.019, 0.632]}
      >
        <mesh
          geometry={nodes.Cube467.geometry}
          material={materials["weiss.004"]}
        />
        <mesh
          geometry={nodes.Cube467_1.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube467_2.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube467_3.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube467_4.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
        <mesh
          geometry={nodes.Cube467_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube467_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube467_7.geometry}
          material={materials["dblau.stoff.001"]}
        />
        <mesh
          geometry={nodes.Cube467_8.geometry}
          material={materials["schwarz.023"]}
        />
      </group>
      <group
        position={[142.8, -0.886, -184.682]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.135, 0.009, 0.274]}
      >
        <mesh
          geometry={nodes.Cube372.geometry}
          material={materials["metall.003"]}
        />
        <mesh geometry={nodes.Cube372_1.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube372_2.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube372_3.geometry}
          material={materials["metall-grau"]}
        />
        <mesh
          geometry={nodes.Cube372_4.geometry}
          material={materials["dblau.metal"]}
        />
        <mesh
          geometry={nodes.Cube372_5.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube372_6.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube372_7.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube372_8.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube372_9.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube372_10.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh
          geometry={nodes.Cube372_11.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cube372_12.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube372_13.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube372_14.geometry}
          material={materials["dblau.003"]}
        />
      </group>
      <group
        position={[130.516, -0.297, -186.121]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.309, 0.016, 0.636]}
      >
        <mesh
          geometry={nodes.Cube392.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube392_1.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube392_2.geometry}
          material={materials.NMHblau}
        />
        <mesh geometry={nodes.Cube392_3.geometry} material={materials.metall} />
      </group>
      <group
        position={[130.25, -0.199, -186.149]}
        rotation={[-0.084, -1.135, -1.536]}
        scale={[0.108, 0.004, 0.136]}
      >
        <mesh
          geometry={nodes.Cube028.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube028_1.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube028_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube028_3.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[130.836, -0.244, -186.244]}
        rotation={[0, 1.006, -1.571]}
        scale={[0.156, 0.011, 0.317]}
      >
        <mesh geometry={nodes.Cube394.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube394_1.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube394_2.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <mesh
        geometry={nodes.Montageplatz1011.geometry}
        material={materials["metall.003"]}
        position={[130.713, -0.278, -185.979]}
        rotation={[0, 1.097, Math.PI / 2]}
        scale={[0.107, 0.009, 0.209]}
      />
      <group
        position={[133.727, -0.69, -185.321]}
        rotation={[0, 1.387, 0]}
        scale={[0.069, 0.043, 0.086]}
      >
        <mesh
          geometry={nodes.Cube385.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube385_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube385_2.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube385_3.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube385_4.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube385_5.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube385_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube385_7.geometry} material={materials.metall} />
      </group>
      <group
        position={[126.825, -0.69, -184.433]}
        rotation={[0, 1.372, 0]}
        scale={[0.069, 0.043, 0.086]}
      >
        <mesh
          geometry={nodes.Cube380.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube380_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube380_2.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube380_3.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube380_4.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube380_5.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube380_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube380_7.geometry} material={materials.metall} />
      </group>
      <group
        position={[141.154, -0.638, -184.248]}
        rotation={[Math.PI, -0.009, Math.PI]}
        scale={[0.18, 0.053, 0.597]}
      >
        <mesh
          geometry={nodes.Cube386.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube386_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube386_2.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube386_3.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube386_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube386_5.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube386_6.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube386_7.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube386_8.geometry}
          material={materials["metall.003"]}
        />
        <mesh geometry={nodes.Cube386_9.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube386_10.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube386_11.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <group
        position={[130.207, -0.638, -185.122]}
        rotation={[0, -1.567, 0]}
        scale={[0.18, 0.053, 0.597]}
      >
        <mesh
          geometry={nodes.Cube376.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube376_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube376_2.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube376_3.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube376_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube376_5.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube376_6.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube376_7.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube376_8.geometry}
          material={materials["metall.003"]}
        />
        <mesh geometry={nodes.Cube376_9.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube376_10.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube376_11.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <group
        position={[137.203, -0.638, -185.756]}
        rotation={[Math.PI, -1.557, Math.PI]}
        scale={[0.18, 0.053, 0.597]}
      >
        <mesh
          geometry={nodes.Cube411.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube411_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube411_2.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube411_3.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube411_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube411_5.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube411_6.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube411_7.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube411_8.geometry}
          material={materials["metall.003"]}
        />
        <mesh geometry={nodes.Cube411_9.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube411_10.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube411_11.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <group
        position={[141.483, -0.297, -186.121]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.309, 0.016, 0.636]}
      >
        <mesh
          geometry={nodes.Cube412.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube412_1.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube412_2.geometry}
          material={materials.NMHblau}
        />
        <mesh geometry={nodes.Cube412_3.geometry} material={materials.metall} />
      </group>
      <group
        position={[141.41, -0.199, -186.197]}
        rotation={[-0.738, -1.518, -2.197]}
        scale={[0.108, 0.004, 0.136]}
      >
        <mesh
          geometry={nodes.Cube413.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube413_1.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube413_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube413_3.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[141.876, -0.244, -185.992]}
        rotation={[0, 1.006, -1.571]}
        scale={[0.156, 0.011, 0.317]}
      >
        <mesh geometry={nodes.Cube414.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube414_1.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube414_2.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <mesh
        geometry={nodes.Montageplatz1017.geometry}
        material={materials["metall.003"]}
        position={[141.066, -0.278, -186.055]}
        rotation={[0, 1.097, Math.PI / 2]}
        scale={[0.107, 0.009, 0.209]}
      />
      <group position={[139.109, -0.89, -184.682]}>
        <mesh
          geometry={nodes.Cube044.geometry}
          material={materials["metall.003"]}
        />
        <mesh geometry={nodes.Cube044_1.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube044_2.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube044_3.geometry}
          material={materials["metall-grau"]}
        />
        <mesh
          geometry={nodes.Cube044_4.geometry}
          material={materials["dblau.metal"]}
        />
        <mesh
          geometry={nodes.Cube044_5.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube044_6.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube044_7.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube044_8.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube044_9.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube044_10.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh
          geometry={nodes.Cube044_11.geometry}
          material={materials.metall}
        />
        <mesh
          geometry={nodes.Cube044_12.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube044_13.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube044_14.geometry}
          material={materials["dblau.003"]}
        />
      </group>
      <group
        position={[126.197, -0.311, -180.103]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[1.336, 0.007, 0.02]}
      >
        <mesh
          geometry={nodes.Cube422.geometry}
          material={materials["metal-grey-dird.001"]}
        />
        <mesh
          geometry={nodes.Cube422_1.geometry}
          material={materials["Deep.Black"]}
        />
      </group>
      <group
        position={[128.184, -0.311, -181.398]}
        rotation={[0, 0, -Math.PI]}
        scale={[1.336, 0.007, 0.02]}
      >
        <mesh
          geometry={nodes.Cube301.geometry}
          material={materials["metal-grey-dird.001"]}
        />
        <mesh
          geometry={nodes.Cube301_1.geometry}
          material={materials["Deep.Black"]}
        />
      </group>
      <mesh
        geometry={nodes.Fließband004.geometry}
        material={materials["graublau.hell"]}
        position={[126.226, -0.299, -181.397]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.829, 0.003, 0.015]}
      />
      <group
        position={[136.796, -0.311, -180.295]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[1.336, 0.007, 0.02]}
      >
        <mesh
          geometry={nodes.Cube424.geometry}
          material={materials["metal-grey-dird.001"]}
        />
        <mesh
          geometry={nodes.Cube424_1.geometry}
          material={materials["Deep.Black"]}
        />
      </group>
      <group
        position={[138.784, -0.311, -181.393]}
        rotation={[0, 0, -Math.PI]}
        scale={[1.336, 0.007, 0.02]}
      >
        <mesh
          geometry={nodes.Cube425.geometry}
          material={materials["metal-grey-dird.001"]}
        />
        <mesh
          geometry={nodes.Cube425_1.geometry}
          material={materials["Deep.Black"]}
        />
      </group>
      <mesh
        geometry={nodes.Fließband007.geometry}
        material={materials["graublau.hell"]}
        position={[136.824, -0.299, -181.401]}
        rotation={[0, 0, -Math.PI]}
        scale={[0.829, 0.003, 0.015]}
      />
      <group
        position={[134.285, -0.69, -179.689]}
        rotation={[-Math.PI, 0.186, -Math.PI]}
        scale={[0.069, 0.043, 0.086]}
      >
        <mesh
          geometry={nodes.Cube437.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube437_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube437_2.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube437_3.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube437_4.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube437_5.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube437_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube437_7.geometry} material={materials.metall} />
      </group>
      <group
        position={[142.381, -0.313, -180.027]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.135, 0.009, 0.274]}
      >
        <mesh
          geometry={nodes.Cube408.geometry}
          material={materials["metall.003"]}
        />
        <mesh
          geometry={nodes.Cube408_1.geometry}
          material={materials["hblaugrau.001"]}
        />
        <mesh
          geometry={nodes.Cube408_2.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube408_3.geometry}
          material={materials["NMHblau.001"]}
        />
        <mesh geometry={nodes.Cube408_4.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube408_5.geometry}
          material={materials["schwarz.006"]}
        />
        <mesh
          geometry={nodes.Cube408_6.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube408_7.geometry}
          material={materials["dblau.003"]}
        />
      </group>
      <group
        position={[136.295, -0.092, -181.701]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.02, 0.022, 0.031]}
      >
        <mesh
          geometry={nodes.Cube398.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube398_1.geometry}
          material={materials["Glas.004"]}
        />
      </group>
      <group
        position={[142.269, -0.195, -182.322]}
        rotation={[0, -1.571, 0]}
        scale={[0.545, 0.519, 0.501]}
      >
        <mesh
          geometry={nodes.Cube407.geometry}
          material={materials["weiss.009"]}
        />
        <mesh
          geometry={nodes.Cube407_1.geometry}
          material={materials.NMHblau}
        />
      </group>
      <group
        position={[141.161, -0.092, -181.908]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.02, 0.022, 0.024]}
      >
        <mesh
          geometry={nodes.Cube416.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube416_1.geometry}
          material={materials["Glas.004"]}
        />
      </group>
      <group
        position={[137.777, -0.092, -182.37]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.02, 0.022, 0.034]}
      >
        <mesh
          geometry={nodes.Cube427_1.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube427_2.geometry}
          material={materials["Glas.004"]}
        />
      </group>
      <group
        position={[136.292, -0.092, -180.63]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.02, 0.022, 0.022]}
      >
        <mesh
          geometry={nodes.Cube429.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube429_1.geometry}
          material={materials["Glas.004"]}
        />
      </group>
      <group
        position={[135.886, -1.015, -179.533]}
        rotation={[0, -1.568, 0]}
        scale={[0.054, 0.077, 0.09]}
      >
        <mesh geometry={nodes.Cube434.geometry} material={materials.schwarz} />
        <mesh geometry={nodes.Cube434_1.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube434_2.geometry}
          material={materials["Bildschirmleuchten.006"]}
        />
      </group>
      <group
        position={[139.401, -0.225, -180.82]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.431}
      >
        <mesh geometry={nodes.Cube583.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube583_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube583_2.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[131.16, -0.321, -179.853]}
        rotation={[0, 1.542, -0.012]}
        scale={[0.138, 0.02, 0.106]}
      >
        <mesh
          geometry={nodes.Cube439.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube439_1.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube439_2.geometry}
          material={materials["dblau.003"]}
        />
      </group>
      <group
        position={[127.767, -0.204, -178.759]}
        rotation={[-0.084, -1.135, -1.536]}
        scale={[0.108, 0.004, 0.136]}
      >
        <mesh
          geometry={nodes.Cube393.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube393_1.geometry}
          material={materials["Bildschirmleuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube393_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube393_3.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[128.519, -0.69, -182.263]}
        rotation={[-Math.PI, 0.189, -Math.PI]}
        scale={[0.069, 0.043, 0.086]}
      >
        <mesh
          geometry={nodes.Cube409.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube409_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube409_2.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube409_3.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube409_4.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube409_5.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube409_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube409_7.geometry} material={materials.metall} />
      </group>
      <group
        position={[129.166, -0.638, -178.671]}
        rotation={[0, -1.549, 0]}
        scale={[0.18, 0.053, 0.597]}
      >
        <mesh
          geometry={nodes.Cube401.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube401_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube401_2.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube401_3.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube401_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube401_5.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube401_6.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube401_7.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube401_8.geometry}
          material={materials["metall.003"]}
        />
        <mesh geometry={nodes.Cube401_9.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube401_10.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube401_11.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <group
        position={[131.483, -0.612, -182.148]}
        rotation={[Math.PI, -1.566, Math.PI]}
        scale={[0.18, 0.053, 0.597]}
      >
        <mesh
          geometry={nodes.Cube433.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube433_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube433_2.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube433_3.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube433_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube433_5.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube433_6.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube433_7.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube433_8.geometry}
          material={materials["metall.003"]}
        />
        <mesh geometry={nodes.Cube433_9.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube433_10.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube433_11.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <group
        position={[135.88, -0.638, -181.934]}
        rotation={[0, 0.004, 0]}
        scale={[0.18, 0.053, 0.597]}
      >
        <mesh
          geometry={nodes.Cube436.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube436_1.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube436_2.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube436_3.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube436_4.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube436_5.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube436_6.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube436_7.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube436_8.geometry}
          material={materials["metall.003"]}
        />
        <mesh geometry={nodes.Cube436_9.geometry} material={materials.dblau} />
        <mesh geometry={nodes.Cube436_10.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube436_11.geometry}
          material={materials["metall-grau"]}
        />
      </group>
      <group
        position={[128.032, -0.302, -178.732]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.309, 0.016, 0.636]}
      >
        <mesh
          geometry={nodes.Cube391.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube391_1.geometry} material={materials.weiss} />
      </group>
      <group
        position={[127.231, -0.092, -179.13]}
        rotation={[0, -1.571, 0]}
        scale={[0.02, 0.022, 0.024]}
      >
        <mesh
          geometry={nodes.Cube292.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube292_1.geometry}
          material={materials["Glas.004"]}
        />
      </group>
      <group
        position={[127.119, -0.225, -180.82]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.431}
      >
        <mesh geometry={nodes.Cube298.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube298_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube298_2.geometry}
          material={materials.schwarz}
        />
      </group>
      <group position={[128.449, 0.106, -178.89]} scale={[0.008, 0.01, 0.01]}>
        <mesh geometry={nodes.Cube375.geometry} material={materials.schwarz} />
        <mesh
          geometry={nodes.Cube375_1.geometry}
          material={materials["graublau.hell"]}
        />
        <mesh
          geometry={nodes.Cube375_2.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube375_3.geometry} material={materials.gelb} />
        <mesh geometry={nodes.Cube375_4.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube375_5.geometry}
          material={materials.Rueckleuchten}
        />
        <mesh
          geometry={nodes.Cube375_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube375_7.geometry}
          material={materials["gruen_leuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube375_8.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube375_9.geometry}
          material={materials["Bildschirmleuchten.006"]}
        />
        <mesh geometry={nodes.Cube375_10.geometry} material={materials.rot} />
        <mesh geometry={nodes.Cube375_11.geometry} material={materials.hbl} />
        <mesh geometry={nodes.Cube375_12.geometry} material={materials.gruen} />
      </group>
      <group
        position={[134.827, -0.092, -182.881]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.02, 0.022, 0.024]}
      >
        <mesh
          geometry={nodes.Cube399.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube399_1.geometry}
          material={materials["Glas.004"]}
        />
      </group>
      <group
        position={[135.302, -0.092, -182.291]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.02, 0.022, 0.03]}
      >
        <mesh
          geometry={nodes.Cube400.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube400_1.geometry}
          material={materials["Glas.004"]}
        />
      </group>
      <group
        position={[139.694, 0.106, -182.507]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.008, 0.01, 0.01]}
      >
        <mesh geometry={nodes.Cube431.geometry} material={materials.schwarz} />
        <mesh
          geometry={nodes.Cube431_1.geometry}
          material={materials["graublau.hell"]}
        />
        <mesh
          geometry={nodes.Cube431_2.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube431_3.geometry} material={materials.gelb} />
        <mesh geometry={nodes.Cube431_4.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube431_5.geometry}
          material={materials.Rueckleuchten}
        />
        <mesh
          geometry={nodes.Cube431_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube431_7.geometry}
          material={materials["gruen_leuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube431_8.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube431_9.geometry}
          material={materials["Bildschirmleuchten.006"]}
        />
        <mesh geometry={nodes.Cube431_10.geometry} material={materials.rot} />
        <mesh geometry={nodes.Cube431_11.geometry} material={materials.hbl} />
        <mesh geometry={nodes.Cube431_12.geometry} material={materials.gruen} />
      </group>
      <group
        position={[135.456, 0.106, -182.499]}
        rotation={[0, 1.571, 0]}
        scale={[0.008, 0.01, 0.01]}
      >
        <mesh geometry={nodes.Cube432.geometry} material={materials.schwarz} />
        <mesh
          geometry={nodes.Cube432_1.geometry}
          material={materials["graublau.hell"]}
        />
        <mesh
          geometry={nodes.Cube432_2.geometry}
          material={materials["braun.001"]}
        />
        <mesh geometry={nodes.Cube432_3.geometry} material={materials.gelb} />
        <mesh geometry={nodes.Cube432_4.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube432_5.geometry}
          material={materials.Rueckleuchten}
        />
        <mesh
          geometry={nodes.Cube432_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube432_7.geometry}
          material={materials["gruen_leuchten.001"]}
        />
        <mesh
          geometry={nodes.Cube432_8.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube432_9.geometry}
          material={materials["Bildschirmleuchten.006"]}
        />
        <mesh geometry={nodes.Cube432_10.geometry} material={materials.rot} />
        <mesh geometry={nodes.Cube432_11.geometry} material={materials.hbl} />
        <mesh geometry={nodes.Cube432_12.geometry} material={materials.gruen} />
      </group>
      <group
        position={[130.874, -0.225, -181.973]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.431}
      >
        <mesh geometry={nodes.Cube570.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube570_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube570_2.geometry}
          material={materials.schwarz}
        />
      </group>
      <group
        position={[134.964, -0.225, -181.973]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.431}
      >
        <mesh geometry={nodes.Cube584.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube584_1.geometry}
          material={materials.NMHblau}
        />
        <mesh
          geometry={nodes.Cube584_2.geometry}
          material={materials.schwarz}
        />
      </group>
      <mesh
        geometry={nodes.Cube343.geometry}
        material={materials["Plasti.weiß.001"]}
        position={[133.142, -0.257, -181.397]}
        scale={0.151}
      />
      <group
        position={[126.223, -0.595, -181.407]}
        rotation={[0, -0.491, 0]}
        scale={[1.403, 1.273, 1.403]}
      >
        <mesh
          geometry={nodes.Circle_1.geometry}
          material={materials["metal-grey-dird.001"]}
        />
        <mesh
          geometry={nodes.Circle_2.geometry}
          material={materials["Deep.Black"]}
        />
        <mesh geometry={nodes.Circle_3.geometry} material={materials.NMHblau} />
      </group>
      <group
        position={[136.823, -0.595, -181.409]}
        rotation={[0, -0.491, 0]}
        scale={[1.403, 1.273, 1.403]}
      >
        <mesh
          geometry={nodes.Circle001_1.geometry}
          material={materials["metal-grey-dird.001"]}
        />
        <mesh
          geometry={nodes.Circle001_2.geometry}
          material={materials["Deep.Black"]}
        />
        <mesh
          geometry={nodes.Circle001_3.geometry}
          material={materials.NMHblau}
        />
      </group>
      <group
        position={[126.753, -0.092, -179.593]}
        scale={[0.02, 0.022, 0.024]}
      >
        <mesh
          geometry={nodes.Cube423.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube423_1.geometry}
          material={materials["Glas.004"]}
        />
      </group>
      <group
        position={[140.701, -0.092, -178.402]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.02, 0.022, 0.024]}
      >
        <mesh
          geometry={nodes.Cube410.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube410_1.geometry}
          material={materials["Glas.004"]}
        />
      </group>
      <group
        position={[136.686, -0.092, -182.371]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.02, 0.022, 0.021]}
      >
        <mesh
          geometry={nodes.Cube428.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube428_1.geometry}
          material={materials["Glas.004"]}
        />
      </group>
      <group
        position={[132.427, -0.312, -181.398]}
        scale={[-0.03, -0.018, -0.029]}
      >
        <mesh
          geometry={nodes.Cube063.geometry}
          material={materials["leuchten.rot"]}
        />
        <mesh
          geometry={nodes.Cube063_1.geometry}
          material={materials["leuchten.grün_blink"]}
        />
        <mesh
          geometry={nodes.Cube063_2.geometry}
          material={materials["leuchten.grün_"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube195.geometry}
        material={materials["Plasti.weiß.001"]}
        position={[139.768, -0.257, -181.397]}
        scale={0.151}
      />
      <mesh
        geometry={nodes.Cube347.geometry}
        material={materials["Plasti.weiß.001"]}
        position={[131.742, -0.287, -151.894]}
        scale={0.092}
      />
      <mesh
        geometry={nodes.Cube427.geometry}
        material={materials["Plasti.weiß.001"]}
        position={[129.554, -0.287, -151.894]}
        scale={0.092}
      />
      <group
        position={[148.05, -0.806, -183.913]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.186}
      >
        <mesh geometry={nodes.Plane006.geometry} material={materials.schwarz} />
        <mesh
          geometry={nodes.Plane006_1.geometry}
          material={materials.metall}
        />
        <mesh geometry={nodes.Plane006_2.geometry} material={materials.brick} />
      </group>
      <group
        position={[146.975, 0.328, -185.53]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.421, 1.081, 0.092]}
      >
        <mesh
          geometry={nodes.Cube337_1.geometry}
          material={materials.hblaugrau}
        />
        <mesh
          geometry={nodes.Cube337_2.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube337_3.geometry} material={materials.brick} />
        <mesh
          geometry={nodes.Cube337_4.geometry}
          material={materials.fenster}
        />
      </group>
      <group position={[141.056, 0.897, -174.589]} scale={[1.75, 1.75, 1.543]}>
        <mesh geometry={nodes.Cube762.geometry} material={materials.weiss} />
        <mesh geometry={nodes.Cube762_1.geometry} material={materials.Glas} />
        <mesh geometry={nodes.Cube762_2.geometry} material={materials.dblau} />
      </group>
      <group position={[139.49, -0.036, -174.176]} scale={0.134}>
        <mesh
          geometry={nodes.Cube368.geometry}
          material={materials["metall-grau.001"]}
        />
        <mesh
          geometry={nodes.Cube368_1.geometry}
          material={materials["dblau.metal.001"]}
        />
        <mesh
          geometry={nodes.Cube368_2.geometry}
          material={materials.fenster}
        />
        <mesh
          geometry={nodes.Cube368_3.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube368_4.geometry} material={materials.Glas} />
        <mesh
          geometry={nodes.Cube368_5.geometry}
          material={materials["Glas.005"]}
        />
      </group>
      <group
        position={[140.296, -0.596, -172.872]}
        scale={[0.229, 0.246, 0.218]}
      >
        <mesh
          geometry={nodes.Cube474.geometry}
          material={materials["metall-weiß"]}
        />
        <mesh
          geometry={nodes.Cube474_1.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube474_2.geometry}
          material={materials.schwarz}
        />
      </group>
      <group position={[141.72, -0.567, -172.701]} scale={0.023}>
        <mesh
          geometry={nodes.Cube481.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube481_1.geometry}
          material={materials["schwarz.001"]}
        />
      </group>
      <group
        position={[142.373, 0.13, -173.116]}
        rotation={[0, 0.596, 0]}
        scale={0.036}
      >
        <mesh
          geometry={nodes.Cube483.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube483_1.geometry}
          material={materials.Bildschirmleuchten}
        />
        <mesh
          geometry={nodes.Cube483_2.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh geometry={nodes.Cube483_3.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube483_4.geometry}
          material={materials["silber.matt"]}
        />
        <mesh
          geometry={nodes.Cube483_5.geometry}
          material={materials["schwarz.002"]}
        />
      </group>
      <group
        position={[139.537, -0.163, -173.38]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.082, 0.006, 0.11]}
      >
        <mesh
          geometry={nodes.Cube017.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube017_1.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group
        position={[142.358, -0.225, -174.273]}
        rotation={[0, 0.032, 0]}
        scale={[0.082, 0.006, 0.11]}
      >
        <mesh
          geometry={nodes.Cube485.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube485_1.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group
        position={[139.416, 0.032, -173.363]}
        rotation={[0, 0.279, 0]}
        scale={[0.443, 0.022, 0.737]}
      >
        <mesh
          geometry={nodes.Cube471.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube471_1.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube471_2.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
      </group>
      <group
        position={[142.48, -0.028, -174.242]}
        rotation={[Math.PI, -0.195, Math.PI]}
        scale={[0.443, 0.022, 0.737]}
      >
        <mesh
          geometry={nodes.Cube486.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Cube486_1.geometry}
          material={materials["weiß-metall.001"]}
        />
        <mesh
          geometry={nodes.Cube486_2.geometry}
          material={materials["Bildschirmleuchten.002"]}
        />
      </group>
      <group
        position={[139.377, -0.644, -175.239]}
        scale={[0.295, 0.09, 1.218]}
      >
        <mesh geometry={nodes.Cube040.geometry} material={materials.metall} />
        <mesh
          geometry={nodes.Cube040_1.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube040_2.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube040_3.geometry}
          material={materials["metall-weiß.001"]}
        />
      </group>
      <group
        position={[139.41, -0.164, -173.714]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.365, 0.019, 0.751]}
      >
        <mesh
          geometry={nodes.Cube053.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube053_1.geometry}
          material={materials["metall-weiß.002"]}
        />
        <mesh
          geometry={nodes.Cube053_2.geometry}
          material={materials["schwarz.002"]}
        />
      </group>
      <group position={[142.4, -0.269, -174.526]} scale={[0.327, 0.017, 0.672]}>
        <mesh
          geometry={nodes.Cube484.geometry}
          material={materials["dblau.005"]}
        />
        <mesh
          geometry={nodes.Cube484_1.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube484_2.geometry}
          material={materials.schwarz}
        />
      </group>
      <group position={[139.508, -0.343, -174.175]} scale={0.152}>
        <mesh geometry={nodes.Cube069.geometry} material={materials.weiss} />
        <mesh
          geometry={nodes.Cube069_1.geometry}
          material={materials.schwarz}
        />
        <mesh
          geometry={nodes.Cube069_2.geometry}
          material={materials.hblaugrau}
        />
      </group>
      <mesh
        geometry={nodes.Cube331.geometry}
        material={materials["metall-weiß"]}
        position={[125.287, -0.847, -178.69]}
        scale={[0.069, 0.108, 0.069]}
      />
      <mesh
        geometry={nodes.Cube332.geometry}
        material={materials["metall-weiß"]}
        position={[125.287, -0.847, -178.661]}
        scale={[0.069, 0.108, 0.069]}
      />
      <mesh
        geometry={nodes.Cube333.geometry}
        material={materials["metall-weiß"]}
        position={[125.281, -0.847, -178.725]}
        scale={[0.069, 0.108, 0.069]}
      />
      <group
        position={[124.636, -0.69, -179.703]}
        rotation={[0, 1.39, 0]}
        scale={[0.069, 0.043, 0.086]}
      >
        <mesh
          geometry={nodes.Cube377.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube377_1.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube377_2.geometry}
          material={materials["NMHblau.003"]}
        />
        <mesh
          geometry={nodes.Cube377_3.geometry}
          material={materials["braun.001"]}
        />
        <mesh
          geometry={nodes.Cube377_4.geometry}
          material={materials["metall.002"]}
        />
        <mesh
          geometry={nodes.Cube377_5.geometry}
          material={materials["schwarz.001"]}
        />
        <mesh
          geometry={nodes.Cube377_6.geometry}
          material={materials["metall.007"]}
        />
        <mesh geometry={nodes.Cube377_7.geometry} material={materials.metall} />
      </group>
      <group
        position={[120.328, -0.828, -179.838]}
        rotation={[0, 0.007, 0]}
        scale={0.027}
      >
        <mesh
          geometry={nodes.Cube061.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube061_1.geometry}
          material={materials["dblau.003"]}
        />
        <mesh
          geometry={nodes.Cube061_2.geometry}
          material={materials["gelb-durchsicht"]}
        />
        <mesh
          geometry={nodes.Cube061_3.geometry}
          material={materials.NMHblau}
        />
        <mesh geometry={nodes.Cube061_4.geometry} material={materials.drot} />
        <mesh
          geometry={nodes.Cube061_5.geometry}
          material={materials["Plasti.weiß.001"]}
        />
      </group>
      <group
        position={[120.73, -0.396, -181.44]}
        rotation={[Math.PI, 0, 3.129]}
        scale={[0.119, 0.017, 0.091]}
      >
        <mesh
          geometry={nodes.Cube374.geometry}
          material={materials["dgrau.003"]}
        />
        <mesh
          geometry={nodes.Cube374_1.geometry}
          material={materials["braun.003"]}
        />
        <mesh
          geometry={nodes.Cube374_2.geometry}
          material={materials["dblau.003"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube334.geometry}
        material={materials["metall-grau"]}
        position={[122.065, 1.459, -182.116]}
        scale={-0.065}
      >
        <mesh
          geometry={nodes.Cube335.geometry}
          material={materials["gelb.001"]}
          position={[-11.886, 1, -0.011]}
          scale={0.904}
        >
          <group position={[-6.919, 2.896, 0.022]} scale={0.945}>
            <mesh
              geometry={nodes.Cube371.geometry}
              material={materials["gelb.001"]}
            />
            <mesh
              geometry={nodes.Cube371_1.geometry}
              material={materials["metall-grau"]}
            />
          </group>
        </mesh>
      </mesh>
      <mesh
        geometry={nodes.Cube337.geometry}
        material={materials["metall-grau"]}
        position={[123.624, 1.459, -181.126]}
        scale={-0.065}
      >
        <mesh
          geometry={nodes.Cube338.geometry}
          material={materials["gelb.001"]}
          position={[-11.886, 1, -0.011]}
          scale={0.904}
        >
          <group position={[-6.919, 2.896, 0.022]} scale={0.945}>
            <mesh
              geometry={nodes.Cube587.geometry}
              material={materials["gelb.001"]}
            />
            <mesh
              geometry={nodes.Cube587_1.geometry}
              material={materials["metall-grau"]}
            />
          </group>
        </mesh>
      </mesh>
      <mesh
        geometry={nodes.Cube420.geometry}
        material={materials["metall-grau"]}
        position={[106.104, 1.734, -195.027]}
        scale={-0.065}
      >
        <mesh
          geometry={nodes.Cube421.geometry}
          material={materials["gelb.001"]}
          position={[-11.887, 1, -0.011]}
          scale={0.904}
        >
          <group position={[-6.919, 2.896, 0.022]} scale={0.945}>
            <mesh
              geometry={nodes.Cube179.geometry}
              material={materials["gelb.001"]}
            />
            <mesh
              geometry={nodes.Cube179_1.geometry}
              material={materials["metall-grau"]}
            />
          </group>
        </mesh>
      </mesh>
      <group
        position={[123.198, -0.804, -179.753]}
        rotation={[0, 0.508, 0]}
        scale={0.767}
      >
        <mesh
          geometry={nodes.Plane031.geometry}
          material={materials["gelb.001"]}
        />
        <mesh
          geometry={nodes.Plane031_1.geometry}
          material={materials["schwarz.007"]}
        />
        <mesh
          geometry={nodes.Plane031_2.geometry}
          material={materials["metall.010"]}
        />

        {/* <group position={[0.339, 0.719, 0.219]}>
          <primitive object={nodes.Bone_1} />
        </group> */}
        <group position={[0.334, 0.999, 0]}>
          <mesh
            geometry={nodes.Cube056.geometry}
            material={materials["metall.010"]}
          />
          <mesh
            geometry={nodes.Cube056_1.geometry}
            material={materials["gelb.002"]}
          />
          <mesh
            geometry={nodes.Cube056_2.geometry}
            material={materials["schwarz.007"]}
          />
        </group>
        <group position={[0.242, 1.065, -0.035]}>
          <mesh
            geometry={nodes.Cube328.geometry}
            material={materials["gelb.001"]}
          />
          <mesh
            geometry={nodes.Cube328_1.geometry}
            material={materials["schwarz.007"]}
          />
          <mesh
            geometry={nodes.Cube328_2.geometry}
            material={materials["weiss.010"]}
          />
        </group>
        <group position={[0.707, 1.038, 0.428]}>
          <mesh
            geometry={nodes.Cube329.geometry}
            material={materials["metall.010"]}
          />
          <mesh
            geometry={nodes.Cube329_1.geometry}
            material={materials["gelb.002"]}
          />
          <mesh
            geometry={nodes.Cube329_2.geometry}
            material={materials["schwarz.007"]}
          />
        </group>
        <group position={[0.699, 1.032, 0.697]}>
          <mesh
            geometry={nodes.Cylinder036.geometry}
            material={materials["schwarz.006"]}
          />
          <mesh
            geometry={nodes.Cylinder036_1.geometry}
            material={materials["metall.010"]}
          />
        </group>
        <group position={[0.708, 1.006, 0.759]}>
          <mesh
            geometry={nodes.Cylinder043.geometry}
            material={materials["metall.010"]}
          />
          <mesh
            geometry={nodes.Cylinder043_1.geometry}
            material={materials["Plastik-weiss"]}
          />
        </group>
      </group>
      <group position={[140.257, -0.049, -143.165]} scale={0.012}>
        <mesh
          geometry={nodes.Cube065.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube065_1.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube065_2.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube065_3.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube065_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube065_5.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube065_6.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group position={[139.912, -0.049, -180.034]} scale={0.012}>
        <mesh
          geometry={nodes.Cube920.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube920_1.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube920_2.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube920_3.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube920_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube920_5.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube920_6.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group position={[134.453, -0.049, -180.966]} scale={0.012}>
        <mesh
          geometry={nodes.Cube921.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube921_1.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube921_2.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube921_3.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube921_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube921_5.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube921_6.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[130.407, -0.049, -182.761]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.012}
      >
        <mesh
          geometry={nodes.Cube922.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube922_1.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube922_2.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube922_3.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube922_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube922_5.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube922_6.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[127.63, -0.049, -181.816]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.012}
      >
        <mesh
          geometry={nodes.Cube923.geometry}
          material={materials["metall.007"]}
        />
        <mesh
          geometry={nodes.Cube923_1.geometry}
          material={materials["Plastik-weiss"]}
        />
        <mesh
          geometry={nodes.Cube923_2.geometry}
          material={materials.schwarz}
        />
        <mesh geometry={nodes.Cube923_3.geometry} material={materials.dblau} />
        <mesh
          geometry={nodes.Cube923_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube923_5.geometry}
          material={materials["schwarz.005"]}
        />
        <mesh
          geometry={nodes.Cube923_6.geometry}
          material={materials["metall.010"]}
        />
      </group>
      <group
        position={[141.917, 0.07, -174.301]}
        rotation={[-Math.PI, 1.558, -Math.PI]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube900.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube900_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube900_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh geometry={nodes.Cube901.geometry} material={materials.jeans} />
          <mesh
            geometry={nodes.Cube901_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube901_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.387, -0.001, -0.006]}>
          <mesh
            geometry={nodes.Cube902.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube902_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube902_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.071, 0, -0.004]}>
          <mesh
            geometry={nodes.Cube903.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube903_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled027.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled027_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[129.375, 0.019, -184.736]}
        rotation={[0, -1.425, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube787.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube787_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube787_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh
            geometry={nodes.Cube788.geometry}
            material={materials["schwarz.002"]}
          />
          <mesh
            geometry={nodes.Cube788_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube788_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.387, -0.001, -0.006]}>
          <mesh
            geometry={nodes.Cube789.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube789_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube789_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.071, 0, -0.004]}>
          <mesh
            geometry={nodes.Cube791.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube791_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled011.geometry}
            material={materials["Rzo_Hair.002"]}
          />
          <mesh
            geometry={nodes.Untitled011_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
      <group
        position={[136.032, 0.028, -182.73]}
        rotation={[0, -1.021, 0]}
        scale={0.861}
      >
        <mesh
          geometry={nodes.Cube769.geometry}
          material={materials["schwarz.011"]}
        />
        <mesh
          geometry={nodes.Cube769_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube769_2.geometry}
          material={materials["Haut.002"]}
        />
        <group position={[0, 0.13, 0.017]} rotation={[0.071, 0, -0.004]}>
          <mesh
            geometry={nodes.Cube773.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube773_1.geometry}
            material={materials["schwarz.011"]}
          />
        </group>
        <group position={[0, -0.813, 0.022]} scale={[1, 1.06, 1]}>
          <mesh geometry={nodes.Cube771.geometry} material={materials.jeans} />
          <mesh
            geometry={nodes.Cube771_1.geometry}
            material={materials["weiss.014"]}
          />
          <mesh
            geometry={nodes.Cube771_2.geometry}
            material={materials["braun.014"]}
          />
        </group>
        <group position={[0, 0.13, 0.017]} rotation={[0.387, -0.001, -0.006]}>
          <mesh
            geometry={nodes.Cube772.geometry}
            material={materials["Haut.002"]}
          />
          <mesh
            geometry={nodes.Cube772_1.geometry}
            material={materials["schwarz.011"]}
          />
          <mesh
            geometry={nodes.Cube772_2.geometry}
            material={materials["weiß-metall.006"]}
          />
        </group>
        <group position={[-0.001, 0.13, 0.016]}>
          <mesh
            geometry={nodes.Untitled007.geometry}
            material={materials["Rzo_Hair.001"]}
          />
          <mesh
            geometry={nodes.Untitled007_1.geometry}
            material={materials["Haut.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/montage.glb");
