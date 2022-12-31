

import { LocalFileAdreess } from "../../../enum/LocalFileAdress";
import { singleAlgorithm } from "../../../dto/algorithmDto"
import { AlgoArea } from "../../../enum/algorithmEnum"
import { A_AlgoSuit, B_AlgoSuit, C_AlgoSuit, } from "../../../enum/algorithmEnum"
import { AmainAttr, BmainAttr, CmainAttr } from "../../../enum/algorithmEnum"
import { AassistantAttr, BassistantAttr, CassistantAttr } from "../../../enum/algorithmEnum"
import { AlgoAreaName, AlgoSuitName, AlgoAttrName } from "../../../enum/Chinese"
import { AttributeAddObj } from '../../../dto/storageDtos'
import { AddOrPerAdd } from '../../../enum/operation'
import { RoleAttribute } from "../../../enum/baseEnum";
import * as algoIncrease from '../../../enum/algorithmIncrease'
import { algoInfo, filiterList } from './interface'
/**
 * 输入算法属性，返回对应字符串
 * @param code 算法相关属性
 * @param type 算法属性类型
 * @param single 算法套装（判断是否为单格）
 * @returns 返回中文字符串
 */
const getChineseName = (code: string|undefined, type: "area" | "suit" | "main" | "assist", single = "") => {
    if (code == "" || code == undefined) {
        return ""
    }
    if (type == "area") {
        return AlgoAreaName[code]
    }
    if (type == "suit") {
        return AlgoSuitName[code]
    }
    // console.log(code)
    const attrInfo: AttributeAddObj = algoIncrease[code]
    let text = AlgoAttrName[code] + "+"

    if (type == "main") {
        const x = single == A_AlgoSuit[0] ? 1 : 2
        if (attrInfo.increaseMethod == AddOrPerAdd.ADD) {
            text = text + x * attrInfo.value
        } else {
            text = text + x * attrInfo.value + "%"
        }
    } else {
        if (attrInfo.increaseMethod == AddOrPerAdd.ADD) {
            text = text + attrInfo.value
        } else {
            text = text + attrInfo.value + "%"
        }
    }
    if ([RoleAttribute.CRITICAL_HIT_RATE, RoleAttribute.CRITICAL_DAMAGE,
    RoleAttribute.TREATMENT, RoleAttribute.DODGE,
    RoleAttribute.RAPIDLY, RoleAttribute.DAMAGE_INCREASE, RoleAttribute.DAMAGE_REDUCE,].includes(attrInfo.attribute)) {
        text = text + "%"
    }
    return text
}
/**
 * 
 * @returns 获取算法信息
 */
export function getalgoData() {
    const localInfoData = localStorage.getItem(LocalFileAdreess.ALGORITHM_STROE) as string;
    const res: Array<singleAlgorithm> = JSON.parse(localInfoData);
    return res
}

/**
 * 更新定制算法页面的下拉表单
 * @param newInfo 传入的算法信息
 * @returns 
 */
export const getAlgoList = (newInfo: algoInfo) => {
    let suit: any
    let main: any
    let assist: any
    const name: filiterList = { "Area": [] as string[], "Suit": [] as string[], "Main": [] as string[], "Assist": [] as string[] }//展示值

    if (newInfo.area == AlgoArea[0]) {
        suit = A_AlgoSuit
        main = AmainAttr
        assist = AassistantAttr
    } else if (newInfo.area == AlgoArea[1]) {
        suit = B_AlgoSuit
        main = BmainAttr
        assist = BassistantAttr
    } else {
        suit = C_AlgoSuit
        main = CmainAttr
        assist = CassistantAttr
    }
    for (const code in AlgoArea) {
        if (AlgoAreaName[code] !== undefined) {
            name.Area.push(AlgoAreaName[code])
        }
    }
    for (const code in suit) {
        if (AlgoSuitName[code] !== undefined) {
            name.Suit.push(AlgoSuitName[code])
        }
    }
    for (const code in main) {
        if (AlgoAttrName[code] !== undefined) {
            name.Main.push(getChineseName(code, "main", newInfo.suit))
        }
    }
    for (const code in assist) {
        if (AlgoAttrName[code] !== undefined) {
            name.Assist.push(getChineseName(code, "assist", newInfo.suit))
        }
    }
    return name
}

/**
 * 获取所有属性的中文展示名称
 */
export const getAllAttributeChineseName = () => {
    //分单格/套装 主属性/副属性
    const suit = [A_AlgoSuit, B_AlgoSuit, C_AlgoSuit]
    const mainAttr = [AmainAttr, BmainAttr, CmainAttr]
    const assistAttr = [AassistantAttr, BassistantAttr, CassistantAttr]

    const codeToChinese = { area: {}, suit: {}, main: { single: {}, suit: {} }, assist: { } }
    const ChineseToCode = { area: {}, suit: {}, main: { single: {}, suit: {} }, assist: {  } }
    for (const code in AlgoArea) {
        if (AlgoAreaName[code] !== undefined) {
            codeToChinese.area[code] = AlgoAreaName[code]
            ChineseToCode.area[AlgoAreaName[code]] = code
        }
    }
    suit.forEach((element) => {
        for (const code in element) {
            if (AlgoSuitName[code] !== undefined) {
                codeToChinese.suit[code] = AlgoSuitName[code]
                ChineseToCode.suit[AlgoSuitName[code]] = code
            }
        }
    })
    mainAttr.forEach((element) => {
        for (const code in element) {
            if (AlgoAttrName[code] !== undefined) {
                const tmp = getChineseName(code, "main", A_AlgoSuit[0])
                const tmp1 = getChineseName(code, "main", A_AlgoSuit[1])
                codeToChinese.main.single[code] = tmp
                ChineseToCode.main.single[tmp] = code
                codeToChinese.main.suit[code] = tmp1
                ChineseToCode.main.suit[tmp1] = code
            }
        }
    })
    assistAttr.forEach((element) => {
        for (const code in element) {
            if (AlgoAttrName[code] !== undefined) {
                const tmp = getChineseName(code, "assist", A_AlgoSuit[0])
                codeToChinese.assist[code] = tmp
                ChineseToCode.assist[tmp] = code
            }
        }
    })
    

    function toChinese(code: any, type: "area" | "suit" | "main" | "assist", single = "") {
        if (code == "" || code == undefined) {
            return ""
        }
        if (type !== "main") {
            return codeToChinese[type][code]
        }
        else {
            if (single == A_AlgoSuit[0]) {
                return codeToChinese.main.single[code]
            } else {
                return codeToChinese.main.suit[code]
            }
        }

    }
    function toCode(code: any, type: "area" | "suit" | "main" | "assist", single = "") {
        if (code == "" || code == undefined) {
            return ""
        }
        if (type !== "main") {
            return ChineseToCode[type][code]
        }
        else {
            if (single == AlgoSuitName.SINGLE) {
                return ChineseToCode.main.single[code]
            } else {
                return ChineseToCode.main.suit[code]
            }
        }
    }

    return { toChinese, toCode }

}