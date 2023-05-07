import { Occupation, IsLong, AttentionPosition, Camp, RoleAttribute,Update, RoleNumberAttribute } from '../enum/baseEnum'
import { AddOrPerAdd } from '../enum/operation'



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
export interface roleBaseAttribute {
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
 * 人形完整属性
 * speed：移速
 * range: 射程
 * powerIncrease: 算力增伤 百分比
 * physcialIncrease： 物理增伤 百分比
 * skillIncrease：技能增伤 百分比
 * attackIncrease: 普攻增伤 百分比
 * powerReduce: 算力减伤 百分比
 * physcialReduce: 物理减伤 百分比
 * skillReduce: 技能减伤 百分比
 * attackReduce: 技能增伤 百分比
 * byTreatment：受到治疗效果
 * attackRecovery：普攻吸血
 * recovery5：每5s回血
 */
export interface roleTotalAttribute extends roleBaseAttribute {
  speed: number,
  range: number,
  powerIncrease: number,
  physcialIncrease: number,
  skillIncrease: number,
  attackIncrease: number,
  powerReduce: number,
  physcialReduce: number,
  skillReduce: number,
  attackReduce: number,
  byTreatment:number,
  attackRecovery:number,
  recovery5:number,
}
/**
 * name:名字
 * occupation: 职业
 * isLong: 近战/远程
 * attentionPosition: 立场 （友方，敌方，中立）
 * camp: 阵营  (公司///，召唤物，熵，净化者)
 * update:刻印等级
 */
export interface roleAllAttribute extends roleTotalAttribute{
  name: string,
  occupation: Occupation,
  isLong: IsLong,
  attentionPosition: AttentionPosition,
  camp: Camp,
  update:Update,
}


/**
 * 数值加成对象
 * attribute 加成属性
 * increaseMethod 加成方式 数组相加/百分比相加
 * value 加成值
 */
export interface AttributeAddObj {
  attribute: RoleNumberAttribute,
  increaseMethod: AddOrPerAdd,
  value: number
}

/**
 * 人形队伍，8人
 */
export interface roleGroup {
  one: string,
  two: string,
  three: string,
  four: string,
  five: string,
  six: string,
  seven: string,
  eight: string,
}

/**
 * 队伍与队伍名称
 * index: 梯队排序
 * name：梯队名称
 * group：队员
 */
export interface GroupAndName {
  index: number,
  name: string,
  group: roleGroup,
}

/**
 * 单人伤害测试对象
 * group：队伍名称
 * target: 靶机属性
 * rule: 协议列表
 * functions: 函数列表
 */
export interface simpleDamageTest {
  group: number,
  target: roleTotalAttribute,
  rules: Array<string>,
  functions: Array<string>,
}





