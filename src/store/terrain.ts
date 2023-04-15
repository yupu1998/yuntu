import { baseGroudModel } from "@/enum/3dModel"

const HIGH = baseGroudModel.HIGH_BASE
const BASE = baseGroudModel.BASE
const LOWER = baseGroudModel.LOWER_BASE
const NO = baseGroudModel.NO_BASE

export const SimpleTerrain:baseGroudModel[][] = [
    [HIGH,BASE,BASE,BASE,BASE,BASE,BASE],
    [HIGH,LOWER,BASE,BASE,BASE,BASE,BASE],
    [HIGH,BASE,BASE,BASE,BASE,BASE,BASE],
    [HIGH,LOWER,BASE,BASE,BASE,BASE,BASE],
    [HIGH,BASE,BASE,BASE,BASE,BASE,BASE]
]