import { roleBaseAttribute,roleTotalAttribute } from "../dto/storageDtos";



/**
 * 传入人形完整属性，返回人形基础属性，或者直接返回空值的人形基础属性
 */
export function getroleBaseAttribute (intput:undefined|roleTotalAttribute = undefined){
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
      if (intput !== undefined){
        for (const code in Data){
            Data[code] = intput[code]
        }
      }
    return Data
}
