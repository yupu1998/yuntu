/**
 * 人形基本属性枚举
 */
 export enum RoleBaseAttribute {
    HP = "hp",
    ATTACK = "attack",
    POWER = "power",
    PHYSICAL_DEFENSE = "physicalDefense",
    POWER_DEFENSE = "powerDefense",
    ATTACK_SPEED = "attackSpeed",
    CRITICAL_HIT_RATE = "criticalHitRate",
    CRITICAL_DAMAGE = "criticalDamage",
    PHYSICAL_PENETRATION = "physicalPenetration",
    POWER_PENETRATION = "powerPenetration",
    DODGE = "dodge",
    REGENERATION = "regeneration",
    RAPIDLY = "rapidly",
    RESISTANCE = "resistance",
    REFLEXIVE = "reflexive",
    DAMAGE_INCREASE = "damageIncrease",
    DAMAGE_REDUCE = "damageReduce",
    TREATMENT = "treatment",
    //UPDATE = "update",
}

/**
 * 人形属性枚举
 */
export enum RoleAttribute {
    NAME = "name",
    RANGE = "range",
    HP = "hp",
    ATTACK = "attack",
    POWER = "power",
    PHYSICAL_DEFENSE = "physicalDefense",
    POWER_DEFENSE = "powerDefense",
    ATTACK_SPEED = "attackSpeed",
    CRITICAL_HIT_RATE = "criticalHitRate",
    CRITICAL_DAMAGE = "criticalDamage",
    PHYSICAL_PENETRATION = "physicalPenetration",
    POWER_PENETRATION = "powerPenetration",
    DODGE = "dodge",
    REGENERATION = "regeneration",
    RAPIDLY = "rapidly",
    RESISTANCE = "resistance",
    REFLEXIVE = "reflexive",
    DAMAGE_INCREASE = "damageIncrease",
    DAMAGE_REDUCE = "damageReduce",
    TREATMENT = "treatment",
    BY_TREATMENT = "byTreatment",//被治疗效果
    SPEED = "speed",
    POWER_INCRERASE = "powerIncrease",
    PHYSCIAL_INCREASE = "physcialIncrease",
    SKILL_INCREASE = "skillIncrease",
    ATTACK_INCREASE = "attackIncrease",
    POWER_REDUCE = "powerReduce",
    PHYSCIAL_REDUCE = "physcialReduce",
    SKILL_REDUCE = "skillReduce",
    ATTACK_REDUCE = "attackReduce",
    ATTACK_RECOVERY = "attackRecovery",//普攻吸血
    RECOVERY_5 = "recovery5",//每5s回血
    OCCUPATION = "occupation",
    IS_LONG = "isLong",
    ATTENTION_POSITION = "attentionPosition",
    CAMP = "camp",
    UPDATE = "update",
}
/**
 * 职业枚举
 * GUARD: 守卫
 * SHOOTER：射手
 * FIGHTER: 战士
 * SPECIAL：特种
 * PHYSICIAN：医生
 */
export enum Occupation {
    GUARD = 'GUARD',
    SHOOTER = 'SHOOTER',
    FIGHTER = 'FIGHTER',
    SPECIAL = 'SPECIAL',
    PHYSICIAN = 'PHYSICIAN'
}

/**
 * 刻印等级
 */
export enum Update{
    ZERO,
    ONE,
    TWO,
    THREE,
}
/**
 * 是否为远程
 * LONG:远程
 * SHORT:近战
 */
export enum IsLong {
    LONG,
    SHORT
}

/**
 * 立场
 * FRIEND:友方
 * ENEMY:敌方
 * NEUTRAL:中立
 */
export enum AttentionPosition {
    FRIEND,
    ENEMY,
    NEUTRAL
}

/**
 * 阵营枚举
 * FIRE_INDUSTRY：火神重工
 * GLOBAL_SERVER：环球完事
 * FOUR_TWO_LAB：42LAB
 * FANIAL_LIFE：最终生命
 * CYBER_MEDIA：赛博传媒
 * ENTROPY：熵
 * PURIFIER：净化者
 * OTHER：其他
 */
export enum Camp {
    FIRE_INDUSTRY,
    GLOBAL_SERVER,
    FOUR_TWO_LAB,
    FANIAL_LIFE,
    CYBER_MEDIA,
    ENTROPY,
    PURIFIER,
    OTHER,
}


