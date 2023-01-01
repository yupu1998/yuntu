

/**
 * 角色的中文名
 */
export enum roleName{
    ZANGYIN = "绿毛",
    KURO = "匿名喷子",

}

/**
 * 职业的对应中文名
 */

export enum occupationName{
    GUARD = '守卫',
    SHOOTER = '射手',
    FIGHTER = '战士',
    SPECIAL = '特种',
    PHYSICIAN = '医师'
}
/**
 * 阵营对应的中文名
 */
export enum campName{
    FIRE_INDUSTRY="火神重工",
    GLOBAL_SERVER="环球万事",
    FOUR_TWO_LAB="42LAB",
    FANIAL_LIFE="最终生命",
    CYBER_MEDIA="赛博传媒",
    ENTROPY="熵",
    PURIFIER="净化者",
    OTHER="其他"
}

/**
 * 属性对应的中文名
 */
export enum attributeName{
    NAME = "名字",
    RANGE = "射程",
    HP = "血量",
    ATTACK = "攻击",
    POWER = "算力",
    PHYSICAL_DEFENSE = "物理防御",
    POWER_DEFENSE = "算力防御",
    ATTACK_SPEED = "攻速",
    CRITICAL_HIT_RATE = "暴击率",
    CRITICAL_DAMAGE = "爆伤",
    PHYSICAL_PENETRATION = "物理穿透",
    POWER_PENETRATION = "算力穿透",
    DODGE = "闪避",
    REGENERATION = "生命恢复",
    RAPIDLY = "急速",
    RESISTANCE = "抵抗",
    REFLEXIVE = "反伤",
    DAMAGE_INCREASE = "伤害增加",
    DAMAGE_REDUCE = "伤害减少",
    TREATMENT = "治疗效果",
    SPEED = "移速",
    POWER_INCRERASE = "算力增伤",
    PHYSCIAL_INCREASE = "物理增伤",
    SKILL_INCREASE = "技能增伤",
    ATTACK_INCREASE = "普攻增伤",
    POWER_REDUCE = "算力减伤",
    PHYSCIAL_REDUCE = "物理减伤",
    SKILL_REDUCE = "技能减伤",
    ATTACK_REDUCE = "普攻减伤",
    BY_TREATMENT = "被治疗效果",
    ATTACK_RECOVERY = "普攻吸血",
    RECOVERY_5 = "每5s回血",
    OCCUPATION = "职业",
    IS_LONG = "长手",
    ATTENTION_POSITION = "立场",
    CAMP = "阵营",
}

/**
 * 算法区域中文名
 */
export enum AlgoAreaName{
    A = "攻击区",
    B = "稳定区",
    C = "特异区"
}

/**
 * 算法套装中文名
 */
export enum AlgoSuitName{
    SINGLE = "单格",//单格

    OVERTHRESHOLD_RESPONSE = "超阈响应",//超阈响应
    HETEROGENEOUS_REGRESSION = "异相回归",//异相回归
    MINIMUMTHRESHOLD = "最小阈值",//最小阈值
    DATA_RECOVERY = "数据复原",//数据复原
    OPERATOR_UP = "算符追叠",//算符追叠
    FEEDFORWARD = "前馈",//前馈
    GRADUAL = "渐进",//渐进
    DEDUCE = "推演",//推演

    CODE_ENCAPSULATION = "代码封装",//代码封装
    LOW_VALUE_RESISTANCE = "低值抗性",//低值抗性
    MACHINE_LEARNING = "机器学习",//机器学习
    COMPLEMENT_OVERFLOW = "补码溢出",//补码溢出
    HEAT_REFLEXION = "热炽反射",//热炽反射
    PERCEPTION = "感知",//感知
    REASON = "理性",//理性
    LINK = "连结",//连结

    POSITIVE_FEEDBACK = "正向反馈",//正向反馈
    SUPPORT_VECTOR = "支持向量",//支持向量
    VECTOR_ACCELERATION = "矢量加速",//矢量加速
    MATRIX_STRUCTURE = "矩阵结构",//矩阵结构
    BUG_EXPAND = "漏洞拓展",//漏洞拓展
    BUNDLE = "集束",//集束
    CONVOLUTION = "卷积",//卷积
    AROUSE = "启发",//启发
    GAME = "博弈"//博弈
}

/**
 * 算法属性 中文名
 * A为固定值 B为百分比
 */
 export enum AlgoAttrName{
    ATTACK_A_MAIN="攻击",
    ATTACK_B_MAIN="攻击",
    POWER_A_MAIN="算力",
    POWER_B_MAIN="算力",
    PHYSICAL_PENETRATION_A_MAIN="物穿",
    PHYSICAL_PENETRATION_B_MAIN="物穿",
    POWER_PENETRATION_A_MAIN="算穿",
    POWER_PENETRATION_B_MAIN="算穿",

    HP_A_MAIN="生命",
    HP_B_MAIN="生命",
    POWER_DEFENSE_A_MAIN="算防",
    POWER_DEFENSE_B_MAIN="算防",
    PHYSICAL_DEFENSE_A_MAIN="物防",
    PHYSICAL_DEFENSE_B_MAIN="物防",
    REGENERATION_MAIN="回血",

    CRITICAL_HIT_RATE_MAIN="暴击",
    CRITICAL_DAMAGE_MAIN="爆伤",
    RAPIDLY_MAIN="急速",
    TREATMENT_MAIN="治疗",

    ATTACK_A_ASSIS="攻击",
    POWER_A_ASSIS="算力",
    PHYSICAL_PENETRATION_A_ASSIS="物穿",
    POWER_PENETRATION_A_ASSIS="算穿",
    HP_A_ASSIS="生命",
    POWER_DEFENSE_A_ASSIS="算防",
    PHYSICAL_DEFENSE_A_ASSIS="物防",
    CRITICAL_HIT_RATE_ASSIS="暴击",
    CRITICAL_DAMAGE_ASSIS="爆伤",
    RESISTANCE_ASSIS="抵抗",
    REGENERATION_ASSIS="回血",

    ATTACK_B_ASSIS="攻击",
    POWER_B_ASSIS="算力",
    DAMAGE_INCREASE_ASSIS="伤害提升",

    HP_B_ASSIS="生命",
    POWER_DEFENSE_B_ASSIS="算防",
    PHYSICAL_DEFENSE_B_ASSIS="物防",
    DAMAGE_REDUCE_ASSIS="伤害减少",

    RAPIDLY_ASSIS="急速",
    TREATMENT_ASSIS="治疗",
    DODGE_ASSIS="闪避",
}