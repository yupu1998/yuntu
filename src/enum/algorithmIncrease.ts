import { AttributeAddObj } from '../dto/storageDtos'
import { RoleNumberAttribute } from './baseEnum'
import { AddOrPerAdd } from './operation'

// 主属性 单格的最大属性 A区
//固定攻击
export const ATTACK_A_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.ATTACK,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 54
}
//百分比攻击
export const ATTACK_B_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.ATTACK,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 12
}
//固定算力
export const POWER_A_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 54
}
//百分比算力
export const POWER_B_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 12
}
//固定物理穿透
export const PHYSICAL_PENETRATION_A_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.PHYSICAL_PENETRATION,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 20
}
//百分比物理穿透
export const PHYSICAL_PENETRATION_B_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.PHYSICAL_PENETRATION,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 7.2
}
//固定算力穿透
export const POWER_PENETRATION_A_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER_PENETRATION,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 20
}
//百分比算力穿透
export const POWER_PENETRATION_B_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER_PENETRATION,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 7.2
}
// 主属性 单格的最大属性 B区
//固定生命
export const HP_A_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.HP,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 1800
}
//百分比生命
export const HP_B_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.HP,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 12
}
//固定算防
export const POWER_DEFENSE_A_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER_DEFENSE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 56
}
//百分比算防
export const POWER_DEFENSE_B_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER_DEFENSE,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 7.2
}
//固定物防
export const PHYSICAL_DEFENSE_A_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.PHYSICAL_DEFENSE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 56
}
//百分比物防
export const PHYSICAL_DEFENSE_B_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.PHYSICAL_DEFENSE,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 7.2
}
//生命恢复
export const REGENERATION_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.REGENERATION,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 720
}
// 主属性 单格的最大属性 C区
//暴击
export const CRITICAL_HIT_RATE_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.CRITICAL_HIT_RATE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 8
}
//爆伤
export const CRITICAL_DAMAGE_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.CRITICAL_DAMAGE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 16
}
//急速
export const RAPIDLY_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.RAPIDLY,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 8
}
//治疗效果
export const TREATMENT_MAIN: AttributeAddObj = {
    "attribute": RoleNumberAttribute.TREATMENT,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 4
}
// 副属性 
//固定攻击
export const ATTACK_A_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.ATTACK,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 32
}
//百分比攻击
export const ATTACK_B_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.ATTACK,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 7.2
}
//固定算力
export const POWER_A_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 32
}
//百分比算力
export const POWER_B_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 7.2
}
//固定物理穿透
export const PHYSICAL_PENETRATION_A_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.PHYSICAL_PENETRATION,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 12
}
//固定算力穿透
export const POWER_PENETRATION_A_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER_PENETRATION,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 12
}
//固定生命
export const HP_A_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.HP,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 1080
}
//百分比生命
export const HP_B_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.HP,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 7.2
}
//固定算防
export const POWER_DEFENSE_A_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER_DEFENSE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 33
}
//百分比算防
export const POWER_DEFENSE_B_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER_DEFENSE,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 4.3
}
//固定物防
export const PHYSICAL_DEFENSE_A_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.PHYSICAL_DEFENSE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 33
}
//百分比物防
export const PHYSICAL_DEFENSE_B_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.PHYSICAL_DEFENSE,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 4.3
}
//暴击
export const CRITICAL_HIT_RATE_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.CRITICAL_HIT_RATE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 4.8
}
//爆伤
export const CRITICAL_DAMAGE_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.CRITICAL_DAMAGE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 9.6
}
//急速
export const RAPIDLY_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.RAPIDLY,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 4.8
}
//治疗
export const TREATMENT_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.TREATMENT,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 2
}
//生命恢复
export const REGENERATION_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.REGENERATION,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 360
}
//增伤
export const DAMAGE_INCREASE_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.DAMAGE_INCREASE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 3.9
}
//抵抗
export const RESISTANCE_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.RESISTANCE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 30
}
//减伤
export const DAMAGE_REDUCE_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.DAMAGE_REDUCE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 3.9
}
//闪避
export const DODGE_ASSIS: AttributeAddObj = {
    "attribute": RoleNumberAttribute.DODGE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 3.9
}

//OVERTHRESHOLD_RESPONSE,//超阈响应
export const OVERTHRESHOLD_RESPONSE: AttributeAddObj = {
    "attribute": RoleNumberAttribute.DAMAGE_INCREASE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 5
}
// HETEROGENEOUS_REGRESSION,//异相回归
export const HETEROGENEOUS_REGRESSION: AttributeAddObj = {
    "attribute": RoleNumberAttribute.DAMAGE_INCREASE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 5
}
// MINIMUMTHRESHOLD,//最小阈值
export const MINIMUMTHRESHOLD: AttributeAddObj = {
    "attribute": RoleNumberAttribute.ATTACK_RECOVERY,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 10
}
// DATA_RECOVERY,//数据复原
export const DATA_RECOVERY: AttributeAddObj = {
    "attribute": RoleNumberAttribute.RESISTANCE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 50
}
// OPERATOR_UP,//算符追叠
export const OPERATOR_UP: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 15
}
// FEEDFORWARD,//前馈
export const FEEDFORWARD: AttributeAddObj = {
    "attribute": RoleNumberAttribute.ATTACK,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 15
}
// GRADUAL,//渐进
export const GRADUAL: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 15
}
// DEDUCE,//推演
export const DEDUCE: AttributeAddObj = {
    "attribute": RoleNumberAttribute.ATTACK_SPEED,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 30
}
// CODE_ENCAPSULATION,//代码封装
export const CODE_ENCAPSULATION: AttributeAddObj = {
    "attribute": RoleNumberAttribute.DAMAGE_REDUCE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 5
}
// LOW_VALUE_RESISTANCE,//低值抗性
export const LOW_VALUE_RESISTANCE: AttributeAddObj = {
    "attribute": RoleNumberAttribute.DAMAGE_REDUCE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 5
}
// MACHINE_LEARNING,//机器学习
export const MACHINE_LEARNING: AttributeAddObj = {
    "attribute": RoleNumberAttribute.REFLEXIVE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 5
}
// COMPLEMENT_OVERFLOW,//补码溢出
export const COMPLEMENT_OVERFLOW: AttributeAddObj = {
    "attribute": RoleNumberAttribute.RECOVERY_5,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 2
}
// HEAT_REFLEXION,//热炽反射
export const HEAT_REFLEXION: AttributeAddObj = {
    "attribute": RoleNumberAttribute.REFLEXIVE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 5
}
// PERCEPTION,//感知
export const PERCEPTION: AttributeAddObj = {
    "attribute": RoleNumberAttribute.HP,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 15
}
// REASON,//理性
export const REASON: AttributeAddObj = {
    "attribute": RoleNumberAttribute.PHYSICAL_DEFENSE,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 15
}
// LINK,//连结
export const LINK: AttributeAddObj = {
    "attribute": RoleNumberAttribute.RESISTANCE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 50
}
// POSITIVE_FEEDBACK,//正向反馈
export const POSITIVE_FEEDBACK: AttributeAddObj = {
    "attribute": RoleNumberAttribute.TREATMENT,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 7.5
}
// SUPPORT_VECTOR,//支持向量
export const SUPPORT_VECTOR: AttributeAddObj = {
    "attribute": RoleNumberAttribute.TREATMENT,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 7.5
}
// VECTOR_ACCELERATION,//矢量加速
export const VECTOR_ACCELERATION: AttributeAddObj = {
    "attribute": RoleNumberAttribute.RAPIDLY,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 10
}
// MATRIX_STRUCTURE,//矩阵结构
export const MATRIX_STRUCTURE: AttributeAddObj = {
    "attribute": RoleNumberAttribute.ATTACK_SPEED,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 30
}
// BUG_EXPAND,//漏洞拓展
export const BUG_EXPAND: AttributeAddObj = {
    "attribute": RoleNumberAttribute.RAPIDLY,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 10
}
// BUNDLE,//集束
export const BUNDLE: AttributeAddObj = {
    "attribute": RoleNumberAttribute.CRITICAL_HIT_RATE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 10
}
// CONVOLUTION,//卷积
export const CONVOLUTION: AttributeAddObj = {
    "attribute": RoleNumberAttribute.CRITICAL_DAMAGE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 20
}
// AROUSE,//启发
export const AROUSE: AttributeAddObj = {
    "attribute": RoleNumberAttribute.RECOVERY_5,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 2
}
// GAME,//博弈
export const GAME: AttributeAddObj = {
    "attribute": RoleNumberAttribute.DODGE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 8
}