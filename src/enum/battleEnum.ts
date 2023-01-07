

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