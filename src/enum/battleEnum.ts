

/**
 * 协议/函数作用类型
 * OUTER 战斗外加成，对人形基础属性产生改变
 * INNER 场内加成 根据人形基础属性进行额外加成
 * BATTLE 战斗中持续加成
 */
export enum ruleFunctionType{
    OUTER, 
    INNER,
    BATTLE
}

/**
 * 函数总类枚举
 * 五种职业，远程，近战，所有
 */
export enum functionType{
    GUARD,
    SHOOTER,
    FIGHTER,
    SPECIAL,
    PHYSICIAN,
    LONG,
    SHORT,
    ALL
}
/**
 * 函数套装枚举
 */
export enum functionSuitEnum{
    NO_SUIT = "",
    SHOOTER_DAMAGE_INCREASE = "shooterDamageIncrease"
}

/**
 * 角色状态枚举
 * 等待
 * 普攻前摇
 * 普攻
 * 普攻后摇
 * 自动技能前摇
 * 自动技能中
 * 自动技能后摇
 * 眩晕
 * 其他
 */
export enum RoleStatus{
    WAITTING,
    ATTACK_START,
    ATTACK,
    ATTACK_END,
    SKILL_START,
    SKILL,
    SKILL_END,
    XUANYUN,
    ERROE
}


/**
 * 伤害属性 算力伤害，物理伤害，真实伤害，绝对伤害
 */
export enum DamageAttr{
    POWER,
    PHYSCIAL,
    REAL,
    ABSOLUTE
}

/**
 * 普攻 技能 被动 函数 协议 其他
 */
export enum DamageType{
    ATTACk,
    SKILL,
    STATUS,
    FUNC,
    RULE,
    OTHER
}

/**
 * 衍生非衍生
 */
export enum Deri{
    YES,NO
}