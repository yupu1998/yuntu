
import { singleAlgorithm } from "@/dto/algorithmDto";


export interface algoInfo{
    index:number,
    area: string,
    suit: string,
    main: string,
    assistant1: string,
    assistant2: string,
}

/**
 * 算法过滤的下拉列表
 */
export interface filiterList{
    Area: string[],
    Suit: string[],
    Main: string[],
    Assist: string[],
}