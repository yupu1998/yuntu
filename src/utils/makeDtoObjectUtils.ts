import { AttentionPosition, Camp, IsLong, Occupation, Update } from "@/enum/baseEnum";
import { roleBaseAttribute,roleTotalAttribute,roleAllAttribute} from "../dto/storageDtos";



/**
 * 返回空值的人形基础属性
 */
export function getroleBaseAttribute (){
    const Data: roleBaseAttribute = {
        hp: 0,
        attack: 0,
        power: 0,
        physicalDefense: 0,
        powerDefense: 0,
        attackSpeed: 0,
        criticalHitRate: 0,
        criticalDamage: 0,
        physicalPenetration: 0,
        powerPenetration: 0,
        dodge: 0,
        regeneration: 0,
        rapidly: 0,
        resistance: 0,
        reflexive: 0,
        damageIncrease: 0,
        damageReduce: 0,
        treatment: 0,
        //update: 0
      };
    return Data
}

/**
 * 返回空值的完整人形基础属性
 */
export function getroleTotalAttribute (){
    const Data: roleTotalAttribute = {
        hp: 0,
        attack: 0,
        power: 0,
        physicalDefense: 0,
        powerDefense: 0,
        attackSpeed: 0,
        criticalHitRate: 0,
        criticalDamage: 0,
        physicalPenetration: 0,
        powerPenetration: 0,
        dodge: 0,
        regeneration: 0,
        rapidly: 0,
        resistance: 0,
        reflexive: 0,
        damageIncrease: 0,
        damageReduce: 0,
        treatment: 0,
        speed:0,
        range:1,
        powerIncrease:0,
        powerReduce:0,
        physcialIncrease:0,
        physcialReduce:0,
        skillIncrease:0,
        skillReduce:0,
        attackIncrease:0,
        attackReduce:0,
        byTreatment:0,
        attackRecovery:0,
        recovery5:0
        //update: 0
      };
    return Data
}


export function getroleAllAttribute(){
  const Data:roleAllAttribute = {
    hp: 0,
    code:"",
    attack: 0,
    power: 0,
    physicalDefense: 0,
    powerDefense: 0,
    attackSpeed: 0,
    criticalHitRate: 0,
    criticalDamage: 0,
    physicalPenetration: 0,
    powerPenetration: 0,
    dodge: 0,
    regeneration: 0,
    rapidly: 0,
    resistance: 0,
    reflexive: 0,
    damageIncrease: 0,
    damageReduce: 0,
    treatment: 0,
    speed:0,
    range:1,
    powerIncrease:0,
    powerReduce:0,
    physcialIncrease:0,
    physcialReduce:0,
    skillIncrease:0,
    skillReduce:0,
    attackIncrease:0,
    attackReduce:0,
    byTreatment:0,
    attackRecovery:0,
    recovery5:0,
    name:'未命名',
    occupation:Occupation.FIGHTER,
    camp:Camp.ENTROPY,
    isLong:IsLong.SHORT,
    attentionPosition:AttentionPosition.NEUTRAL,
    update: Update.ZERO
  };
  return Data
}



