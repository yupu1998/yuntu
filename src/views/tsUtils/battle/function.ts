import { AttentionPosition, Camp } from '@/enum/baseEnum'
import { ref,watch } from 'vue'
import { roleTotalAttribute, simpleDamageTest } from '../../../dto/storageDtos'
import {GroupAndName,roleAllAttribute} from '../../../dto/storageDtos'
import {getGroupRoleAttribute,getTargetData} from './data'


/**
 * 初始化场上单位的基础属性
 * @param groupName 
 * @param targetData 
 * @returns 
 */
export function initalDamageTestBattleRoleData(groupName:number,targetData:roleTotalAttribute){
    const roleData:{[key: string]: roleAllAttribute} = getGroupRoleAttribute(groupName)//我方梯队角色
    const aimData:roleAllAttribute = getTargetData(targetData)
    aimData.camp = Camp.ENTROPY
    aimData.attentionPosition = AttentionPosition.ENEMY
    roleData['Aim'] = aimData
    console.log(roleData);
    return roleData
}

export function initialFunction(funcs:string[],rules:string[]){
    funcs.forEach((f)=>{
        // 查找对应函数
    })
    rules.forEach((r)=>{
        // 查找对应协议
            })
}