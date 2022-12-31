import { AttributeAddObj,roleTotalAttribute,roleBaseAttribute } from '../../../dto/storageDtos'

/**
* 人形基础属性
* hp: 血量
* attack: 攻击
* power: 算力
* physicalDefence: 物理防御
* powerDefence: 算量防御
* attackSpeed: 攻速
* criticalHitRate: 暴击率 百分比
* criticalDamage: 爆伤 百分比
* physicalPenetration: 物理穿透
* powerPenetration: 算量穿透
* dodge: 闪避
* regeneration: 战后生命恢复
* rapidly: 技能急速 
* resistance: 抵抗
* reflexive: 反伤 百分比
* damageIncrease: 伤害增加 百分比
* damageReduce:伤害减少 百分比
* treatment:治疗效果 百分比
*/
export interface roleAttribution{
  hp: number,
  attack: number,
  power: number,
  physicalDefense: number,
  powerDefense: number,
  attackSpeed: number,
  criticalHitRate: number,
  criticalDamage: number,
  physicalPenetration: number,
  powerPenetration: number,
  dodge: number,
  regeneration: number,
  rapidly: number,
  resistance: number,
  reflexive: number,
  damageIncrease: number,
  damageReduce: number,
  treatment: number,
}

/**
 * 表格展示的不同分区对属性的加成
 */
export interface listObj {
    code: string,
    type: string,
    defaultValue: number,
    occupation: number,
    favorite: number,
    algorithm: number,
    update: number,
    final: number,
    gua: number
  }


/**
 * 传入人形完整属性，返回人形基础属性，或者直接返回空值的人形基础属性
 */
export function getroleBaseAttribute (intput:undefined|roleTotalAttribute = undefined){
    const Data: roleAttribution = {
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
      };
      if (intput !== undefined){
        for (const code in Data){
            Data[code] = intput[code]
        }
      }
    return Data
}