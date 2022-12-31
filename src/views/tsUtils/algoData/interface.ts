
import { singleAlgorithm } from "../../../dto/algorithmDto"


/**
 * 角色算法数据
 */
export interface roleAlgoObj{
    A:areaAlgo,
    B:areaAlgo,
    C:areaAlgo
}

/**
 * 角色算法结构，用于绘图
 */
export interface algoStructureObj{
    A:algoDraw,
    B:algoDraw,
    C:algoDraw
}

export enum portType{
    ALL_NO,
    ONE_SINGLE,
    TWO_SINGLE,
    ONE_SUIT
}

export enum areaType{
    zero,
    one,
    two
}

export interface areaAlgo{
    number:number,
    algo:Array<singleAlgorithm>
}

/**
 * type :有四种情况 两格都为空，一个单格一个空，两个单格，一个双格
 * openType:三种清理 双开，一开一闭，双闭
 */
export interface algoPort{
    type:portType,
    openType:areaType,
    algo:Array<singleAlgorithm>
}

/**
 * 算法显示结构接口
 * number 确定开发的格子数量
 * one,two,three,four将8个算法格分成4份，
 */
export interface algoDraw{
    number:number,
    one:algoPort,
    two:algoPort,
    three:algoPort,
    four:algoPort,
}
