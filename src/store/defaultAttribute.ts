import {roleAllAttribute} from '../dto/storageDtos'
import {Occupation,IsLong,AttentionPosition,Camp} from '../enum/baseEnum'

/**
 * 标靶的默认数据
 */
export const defaultTargetData:roleAllAttribute = 
{
    "name":"靶子",
    "code":"aimTarget",
    "range":4,
    "hp":100000,
    "attack":5000,
    "power":5000,
    "physicalDefense":1000,
    "powerDefense":1000,
    "attackSpeed":100,
    "criticalHitRate":0,
    "criticalDamage":50,
    "physicalPenetration":500,
    "powerPenetration":500,
    "dodge":0,
    "regeneration":0,
    "rapidly":1000,
    "resistance":0,
    "reflexive":0,
    "damageIncrease":0,
    "damageReduce":0,
    "treatment":0,
    "speed":100,
    "powerIncrease":0,
    "physcialIncrease":0,
    "skillIncrease":0,
    "attackIncrease":0,
    "powerReduce":0,
    "physcialReduce":0,
    "skillReduce":0,
    "attackReduce":0,
    "byTreatment":0,
    "attackRecovery":0,
    "recovery5":0,
    "occupation":Occupation.FIGHTER,
    "isLong":IsLong.LONG,
    "attentionPosition":AttentionPosition.ENEMY,
    "camp":Camp.OTHER,
    "update":0
}