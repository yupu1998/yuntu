

import { ref, watch } from "vue";
import { LocalFileAdreess } from "../../../enum/LocalFileAdress";
import { singleAlgorithm } from "../../../dto/algorithmDto"
import { AlgoArea } from "../../../enum/algorithmEnum"
import { A_AlgoSuit, B_AlgoSuit, C_AlgoSuit, } from "../../../enum/algorithmEnum"
import { AmainAttr, BmainAttr, CmainAttr } from "../../../enum/algorithmEnum"
import { AassistantAttr, BassistantAttr, CassistantAttr } from "../../../enum/algorithmEnum"
import { AlgoSuitName } from "../../../enum/Chinese"
import { algoInfo } from './interface'
import { getalgoData, getAlgoList, getAllAttributeChineseName } from './data'
import { randomInt } from "../../../utils/dataUtils"
import { roleAlgoObj, algoDraw, algoPort, areaType, portType } from '../../tsUtils/algoData//interface'
import * as algoIncrease from '../../../enum/algorithmIncrease'
import { AttributeAddObj } from '../../../dto/storageDtos'

export const { toChinese, toCode } = getAllAttributeChineseName()
/**
 * 返回值
 * algoList：算法列表
 * filiter：过滤条件对象
 * filiterList：过滤条件下拉列表
 * filiterFunc：条件过滤函数
 * saveAlgo
 * deletedAlgo
 * @returns 
 */
export function algoListUtil() {
    const allAlgoList = getalgoData()
    const filiter = ref({
        index: NaN,
        area: "",
        suit: "",
        main: "",
        assistant1: "",
        assistant2: "",
    } as algoInfo)
    const algoList = ref([] as algoInfo[])
    const filiterList = ref(getAlgoList(filiter.value))
    console.log("allAlgoList",allAlgoList);
    

    const saveAlgo = (algo: algoInfo) => {
        allAlgoList.push(algoInfoTosingleAlgorithm(algo))
        localStorage.setItem(LocalFileAdreess.ALGORITHM_STROE, JSON.stringify(allAlgoList))
        filiterFunc()
    }

    const deletedAlgo = (index: number) => {
        allAlgoList.splice(index, 1)
        localStorage.setItem(LocalFileAdreess.ALGORITHM_STROE, JSON.stringify(allAlgoList))
        filiterFunc()
    }


    const filiterFunc = () => {
        const filiterArr = [] as algoInfo[]
        for (let i = 0; i < allAlgoList.length; i++) {
            const algo = addIndex(i, allAlgoList[i])
            if (filiter.value.area == "" || toChinese(algo.area, "area") == filiter.value.area)
                if (filiter.value.suit == "" || toChinese(algo.suit, "suit") == filiter.value.suit)
                    if (filiter.value.main == "" || toChinese(algo.main, "main", algo.suit) == filiter.value.main)
                        if (filiter.value.assistant1 == "" || toChinese(algo.assistant1, "assist", algo.suit) == filiter.value.assistant1)
                            if (filiter.value.assistant2 == "" || toChinese(algo.assistant2, "assist", algo.suit) == filiter.value.assistant2)
                                filiterArr.push(algo)
        }
        algoList.value = filiterArr
    }


    watch(
        //监听到筛选条件变化，更新界面
        () => filiter.value,
        () => {
            console.log(filiter.value)
            filiterFunc()
            filiterList.value = getAlgoList({
                index: NaN,
                area: toCode(filiter.value.area, "area"),
                suit: A_AlgoSuit[0],
                main: "",
                assistant1: "",
                assistant2: "",
            })
        },
        { deep: true, immediate: true }
    );

    return { algoList, filiter, filiterList, filiterFunc, saveAlgo, deletedAlgo }

}


export function makeAAlgo() {
    //需要抛出一个算法对象 下拉算法列表 监听算法对象 改变下拉算法列表
    //根据名称倒推算法属性

    const algo = getRandomAlgo()

    const algoListMake = ref(getAlgoList(algo))
    const algoName = ref({
        index: NaN,
        area: toChinese(algo.area, "area"),
        suit: toChinese(algo.suit, "suit"),
        main: toChinese(algo.main, "main", algo.suit),
        assistant1: toChinese(algo.assistant1, "assist", algo.suit),
        assistant2: toChinese(algo.assistant2, "assist", algo.suit),
    } as algoInfo)

    watch(
        //监听到值变化 更新下拉列表
        () => algoName.value.area,
        (element) => {
            algoListMake.value = getAlgoList({
                index: NaN,
                area: toCode(element, "area"),
                suit: A_AlgoSuit[0],
                main: "",
                assistant1: "",
                assistant2: "",
            })
            algoName.value.suit = algoListMake.value.Suit[0]
            algoName.value.main = algoListMake.value.Main[0]
            algoName.value.assistant1 = algoListMake.value.Assist[0]
            algoName.value.assistant2 = ""
        },
        { deep: true }
    );
    watch(
        //监听到值变化 更新下拉列表
        () => algoName.value.suit,
        (element) => {
            const index = algoListMake.value.Main.indexOf(algoName.value.main)
            if (element == AlgoSuitName.SINGLE) {
                algoListMake.value = getAlgoList({
                    index: NaN,
                    area: toCode(algoName.value.area, "area"),
                    suit: A_AlgoSuit[0],
                    main: "",
                    assistant1: "",
                    assistant2: "",
                })
                algoName.value.assistant2 = ""
            } else {
                algoListMake.value = getAlgoList({
                    index: NaN,
                    area: toCode(algoName.value.area, "area"),
                    suit: toCode(element, "suit"),
                    main: "",
                    assistant1: "",
                    assistant2: "",
                })
                if (algoName.value.assistant2 == "") {
                    algoName.value.assistant2 = algoListMake.value.Assist[0] == algoName.value.assistant1 ? algoListMake.value.Assist[1] : algoListMake.value.Assist[0]
                }
            }
            algoName.value.main = algoListMake.value.Main[index]
        },
        { deep: true }
    );
    return { algoName, algoListMake }

}
/**
 * 生成一个随机算法
 * @returns 
 */
export const getRandomAlgo = () => {
    let suitMax: number; let mainMax: number; let assistMax: number; 
    //获取随机区域
    let areaNum = 0
    let suitNum = 0
    let mainNum = 0
    let assist1Num = 0
    let assist2Num = 0
    areaNum = randomInt(0, AlgoArea.enumCount-1)
    if (areaNum == AlgoArea.A) {
        suitMax = A_AlgoSuit.enumCount;
        mainMax = AmainAttr.enumCount;
        assistMax = AassistantAttr.enumCount; 
    } else if (areaNum == AlgoArea.B) {
        suitMax = B_AlgoSuit.enumCount;
        mainMax = BmainAttr.enumCount;
        assistMax = BassistantAttr.enumCount; 
    } else {
        suitMax = C_AlgoSuit.enumCount;
        mainMax = CmainAttr.enumCount;
        assistMax = CassistantAttr.enumCount; 
    }

    suitNum = randomInt(0, suitMax-1);
    mainNum = randomInt(0, mainMax-1);
    assist1Num = randomInt(0, assistMax-1);
    assist2Num = randomInt(0, assistMax-1, assist1Num);

    const algo = {
        index: NaN,
        area: areaNum,
        suit: suitNum,
        main: mainNum,
        assistant1: assist1Num,
        assistant2: "",
    } as singleAlgorithm

    if (suitNum != A_AlgoSuit.SINGLE) {
        algo.assistant2 = assist2Num
    }

    return singleAlgorithmToalgoInfo(algo)

}
/**
 * 给存储的算法添加索引序号
 * @param index 数组索引
 * @param algo 保存的算法信息
 * @returns 
 */
function addIndex(index: number, algo: singleAlgorithm) {
    const algoInfo  = singleAlgorithmToalgoInfo(algo)
    algoInfo.index = index
    return algoInfo
}

export function singleAlgorithmToalgoInfo(algo: singleAlgorithm) {
    const newAlgo = { index: NaN, area: "", suit: "", main: "", assistant1: "", assistant2: "" } as algoInfo
    newAlgo.area = AlgoArea[algo.area]
    if (algo.area == AlgoArea.A) {
        newAlgo.suit = A_AlgoSuit[algo.suit]
        newAlgo.main = AmainAttr[algo.main]
        newAlgo.assistant1 = AassistantAttr[algo.assistant1]
        if (algo.suit != A_AlgoSuit.SINGLE) {
            newAlgo.assistant2 = AassistantAttr[algo.assistant2]
        }
    } else if (algo.area == AlgoArea.B) {
        newAlgo.suit = B_AlgoSuit[algo.suit]
        newAlgo.main = BmainAttr[algo.main]
        newAlgo.assistant1 = BassistantAttr[algo.assistant1]
        if (algo.suit != B_AlgoSuit.SINGLE) {
            newAlgo.assistant2 = BassistantAttr[algo.assistant2]
        }
    } else {
        newAlgo.suit = C_AlgoSuit[algo.suit]
        newAlgo.main = CmainAttr[algo.main]
        newAlgo.assistant1 = CassistantAttr[algo.assistant1]
        if (algo.suit != C_AlgoSuit.SINGLE) {
            newAlgo.assistant2 = CassistantAttr[algo.assistant2]
        }
    }

    return newAlgo

}
export function algoInfoTosingleAlgorithm(algo:algoInfo){

    const newAlgo = { area: 0, suit:0, main: 0, assistant1: 0, assistant2: "" } as singleAlgorithm
    newAlgo.area = AlgoArea[algo.area]
    if (AlgoArea[algo.area] == AlgoArea.A) {
        newAlgo.suit = A_AlgoSuit[algo.suit]
        newAlgo.main = AmainAttr[algo.main]
        newAlgo.assistant1 = AassistantAttr[algo.assistant1]
        if (A_AlgoSuit[algo.suit] != A_AlgoSuit.SINGLE) {
            newAlgo.assistant2 = AassistantAttr[algo.assistant2]
        }
    } else if (AlgoArea[algo.area] == AlgoArea.B) {
        newAlgo.suit = B_AlgoSuit[algo.suit]
        newAlgo.main = BmainAttr[algo.main]
        newAlgo.assistant1 = BassistantAttr[algo.assistant1]
        if (B_AlgoSuit[algo.suit] != B_AlgoSuit.SINGLE) {
            newAlgo.assistant2 = BassistantAttr[algo.assistant2]
        }
    } else {
        newAlgo.suit = C_AlgoSuit[algo.suit]
        newAlgo.main = CmainAttr[algo.main]
        newAlgo.assistant1 = CassistantAttr[algo.assistant1]
        if (C_AlgoSuit[algo.suit] != C_AlgoSuit.SINGLE) {
            newAlgo.assistant2 = CassistantAttr[algo.assistant2]
        }
    }
    
    return newAlgo

}

export function algoDataToArr(algoData: roleAlgoObj) {
    let arr: AttributeAddObj[] = []
    const obj:{[k:string]:number} = {}
    algoData.A.algo.forEach((val) => {
        arr = arr.concat(algoToAdd(val, A_AlgoSuit, AmainAttr, AassistantAttr))
        obj[A_AlgoSuit[val.suit]] = obj[A_AlgoSuit[val.suit]] ? obj[A_AlgoSuit[val.suit]]+1:1
    })
    algoData.B.algo.forEach((val) => {
        arr = arr.concat( algoToAdd(val, B_AlgoSuit, BmainAttr, BassistantAttr))
        obj[B_AlgoSuit[val.suit]] = obj[B_AlgoSuit[val.suit]] ? obj[B_AlgoSuit[val.suit]]+1:1
    })
    algoData.C.algo.forEach((val) => {
        arr = arr.concat(algoToAdd(val, C_AlgoSuit, CmainAttr, CassistantAttr))
        obj[C_AlgoSuit[val.suit]] = obj[C_AlgoSuit[val.suit]] ? obj[C_AlgoSuit[val.suit]]+1:1
    })
    //检查算法套装 新增套装效果对应数值 TODO
    for (const k in obj){
        if (obj[k] > 1 && k != A_AlgoSuit[0]){
            //获取算法套装效果数值加成
            arr.push(algoIncrease[k])
        }
    }
    
    return arr
}



function algoToAdd(algo: singleAlgorithm,
    Suit: typeof A_AlgoSuit | typeof B_AlgoSuit | typeof C_AlgoSuit,
    Main: typeof AmainAttr | typeof BmainAttr | typeof CmainAttr,
    Assist: typeof AassistantAttr | typeof BassistantAttr | typeof CassistantAttr,) {

    const arr: AttributeAddObj[] = []
    arr.push(algoIncrease[Main[algo.main]])
    arr.push(algoIncrease[Assist[algo.assistant1]])
    //如果算法为套装，再加一份主属性加成，加入副2属性加成
    if (algo.suit != Suit.SINGLE) {
        arr.push(algoIncrease[Main[algo.main]])
        arr.push(algoIncrease[Assist[algo.assistant2]])
    }
    return arr

}