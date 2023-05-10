
import { singleAlgorithm } from "@/dto/algorithmDto";
import { ref, watch } from "vue";
import { getRoleAlgoInfo,saveRoleAlgoInfo } from "./data"
import { areaAlgo, algoDraw, areaType, portType } from './interface'

import { A_AlgoSuit } from "../../../enum/algorithmEnum"


export const getRoleAlgoFunc = (role: string, occupation: string) => {
    const algoData = ref(getRoleAlgoInfo(role, occupation))
    //检查算法结构，画图
    // console.log(algoData.value);
    const algoStructure = ref({
        A: analysis(algoData.value.A),
        B: analysis(algoData.value.B),
        C: analysis(algoData.value.C),
    })

    const saveAlgo = ()=>{
        saveRoleAlgoInfo(role,algoData.value)
    }
    watch(
        //监听到筛选条件变化，更新界面
        () => algoData.value,
        () => {
            algoStructure.value = {
                A: analysis(algoData.value.A),
                B: analysis(algoData.value.B),
                C: analysis(algoData.value.C),
            }
        },
        { deep: true,}
    );
    return { algoData,algoStructure,saveAlgo }
}

/**
 * 将算法超出限制的算法删除
 * @param algoData 
 */
export const dealAlgo = (algoData: areaAlgo) =>{
    //对算法进行排序，两格的靠前排放，依次放入算法区域中
    const sortAlgo: Array<singleAlgorithm> = []
    let count = 0 //
    algoData.algo.forEach((algo) => {
        if (count < algoData.number && algo.suit == A_AlgoSuit.SINGLE){
            sortAlgo.push(algo)//后方插入
            count += 1
        }else if (count < algoData.number-1 && algo.suit  != A_AlgoSuit.SINGLE){
            sortAlgo.unshift(algo)//前方插入
            count += 2
        }
    })
    //删去多余算法
    if(sortAlgo.length <algoData.algo.length ){
        algoData.algo = algoData.algo.slice(0,sortAlgo.length)
    }
}

/**
 * 将角色算法转成利于绘图的对象形式
 * @param algoData 
 * @returns 
 */
const analysis = (algoData: areaAlgo) => {
    const algo: algoDraw = {
        number: 4,
        one: { type: portType.ALL_NO, openType: areaType.two, algo: [] },
        two: { type: portType.ALL_NO, openType: areaType.two, algo: [] },
        three: { type: portType.ALL_NO, openType: areaType.zero, algo: [] },
        four: { type: portType.ALL_NO, openType: areaType.zero, algo: [] }
    }
    if (algoData.number == 5) {
        algo.number = 5
        algo.three.openType = areaType.one

    } else if (algoData.number == 6) {
        algo.number = 6
        algo.three.openType = areaType.two
    }

    if (algoData.algo.length == 0) {
        return algo
    }
    //对算法进行排序，两格的靠前排放，依次放入算法区域中
    const sortAlgo: Array<singleAlgorithm> = []
    let count = 0 //
    algoData.algo.forEach((algo) => {
        if (algo.suit  == A_AlgoSuit.SINGLE){
            sortAlgo.push(algo)//后方插入
            count += 1
        }else{
            sortAlgo.unshift(algo)//前方插入
            count += 2
        }
    })

    //console.log(algoData.algo);
    //将算法信息加入结构中
    const tmpObj = { 0: "one", 1: "two", 2: "three", 3: "four" }
    let tmpcount = 0
    while (sortAlgo.length > 0) {
        const onaalgo = sortAlgo.shift()
        algo[tmpObj[tmpcount]].algo.push(onaalgo)
        if (count > 1) {
            count -= 2
            if (onaalgo?.suit == A_AlgoSuit.SINGLE) {
                algo[tmpObj[tmpcount]].type = portType.TWO_SINGLE
                algo[tmpObj[tmpcount]].algo.push(sortAlgo.shift())
            } else {
                algo[tmpObj[tmpcount]].type = portType.ONE_SUIT
            }
        } else {
            algo[tmpObj[tmpcount]].type = portType.ONE_SINGLE
        }

        tmpcount += 1

    }
    //console.log(algo);
    
    return algo
}
