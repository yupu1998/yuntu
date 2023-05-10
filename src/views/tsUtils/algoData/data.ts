
import { LocalFileAdreess } from "../../../enum/LocalFileAdress";
import { AAlgoNumber,BAlgoNumber,CAlgoNumber } from "../../../enum/algorithmEnum";
import {roleAlgos} from '../../../dto/algorithmDto'

import {roleAlgoObj} from './interface'
import canadd from '../../../image/png/algo_can_add.png'
import noadd from '../../../image/png/algo_no_add.png'

/**
 * 获取人形的算法数据，人形不同区域的算法格数
 * @param code 角色code
 * @param occupation 角色职业
 * @returns 
 */
export const getRoleAlgoInfo = (code:string,occupation:string)=>{
    const localInfoData = localStorage.getItem(LocalFileAdreess.ROLE_ALGO) as string;
    const allAlgoInfo = JSON.parse(localInfoData) as{ [key: string]: roleAlgos }//TODO

    const res:roleAlgoObj = {
        A:{
            number:AAlgoNumber[occupation],
            algo:allAlgoInfo[code].A
        },
        B:{
            number:BAlgoNumber[occupation],
            algo:allAlgoInfo[code].B
        },
        C:{
            number:CAlgoNumber[occupation],
            algo:allAlgoInfo[code].C
        },
    }
    return res
}

/**
 * 保存人形的算法数据
 * @param code 
 * @param algo 
 */
export const saveRoleAlgoInfo = (code:string,algo:roleAlgoObj)=>{
    const res:roleAlgos = {A:algo.A.algo,B:algo.B.algo,C:algo.C.algo}
    const localInfoData = localStorage.getItem(LocalFileAdreess.ROLE_ALGO) as string;
    const allAlgoInfo = JSON.parse(localInfoData) as{ [key: string]: roleAlgos }
    allAlgoInfo[code] = res
    localStorage.setItem(LocalFileAdreess.ROLE_ALGO,JSON.stringify(allAlgoInfo));
}


export const getImg = (code:string)=>{
    if (code=="yes"){
        return canadd
    }else{
        return noadd
    }
}