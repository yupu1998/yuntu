import {AlgoArea,A_AlgoSuit,B_AlgoSuit,C_AlgoSuit,AmainAttr,BmainAttr,CmainAttr,AassistantAttr,BassistantAttr,CassistantAttr} from "../enum/algorithmEnum"

/**
 * 单个算法的属性
 * area:算法分区 枚举 A/B/C
 * suit:所属套装 各种套装＋单格算法
 * main:主词条
 * assistant：副词条 []
 */
export interface singleAlgorithm {
    area:AlgoArea,
    suit:A_AlgoSuit|B_AlgoSuit|C_AlgoSuit,
    main:AmainAttr|BmainAttr|CmainAttr,
    assistant1:AassistantAttr|BassistantAttr|CassistantAttr,
    assistant2:""|AassistantAttr|BassistantAttr|CassistantAttr,
}

/**
 * 人形不同区域装备的算法
 */
export interface roleAlgos{
    A:Array<singleAlgorithm>,
    B:Array<singleAlgorithm>,
    C:Array<singleAlgorithm>
}