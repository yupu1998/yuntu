
/**
 * 算法区域
 * A 攻击区
 * B 稳定区
 * C 特意区
 */
 export enum AlgoArea{
    A,
    B,
    C,
    enumCount
}

/**
 * A区算法套装 8
 */
 export enum A_AlgoSuit{
    SINGLE,//单格
    OVERTHRESHOLD_RESPONSE,//超阈响应
    HETEROGENEOUS_REGRESSION,//异相回归
    MINIMUMTHRESHOLD,//最小阈值
    DATA_RECOVERY,//数据复原
    OPERATOR_UP,//算符追叠
    FEEDFORWARD,//前馈
    GRADUAL,//渐进
    DEDUCE,//推演
    enumCount
    // SINGLE = "single",//单格
    // OVERTHRESHOLD_RESPONSE = "overthresholdResponse",//超阈响应
    // HETEROGENEOUS_REGRESSION = "heterogeneousRegression",//异相回归
    // MINIMUMTHRESHOLD = "minimumThreshold",//最小阈值
    // DATA_RECOVERY = "dataRecovery",//数据复原
    // OPERATOR_UP = "operatorUp",//算符追叠
    // FEEDFORWARD = "feedforward",//前馈
    // GRADUAL = "gradual",//渐进
    // DEDUCE = "deduce",//推演
}
/**
 * B区算法套装 9
 */
 export enum B_AlgoSuit{
    SINGLE,//单格
    CODE_ENCAPSULATION,//代码封装
    LOW_VALUE_RESISTANCE,//低值抗性
    MACHINE_LEARNING,//机器学习
    COMPLEMENT_OVERFLOW,//补码溢出
    HEAT_REFLEXION,//热炽反射
    PERCEPTION,//感知
    REASON,//理性
    LINK,//连结
    enumCount
    // SINGLE = "single",//单格
    // CODE_ENCAPSULATION = "codeEncapsulation",//代码封装
    // LOW_VALUE_RESISTANCE = "lowValueResistance",//低值抗性
    // MACHINE_LEARNING = "machineLearning",//机器学习
    // COMPLEMENT_OVERFLOW = "complementOverflow",//补码溢出
    // HEAT_REFLEXION = "heatReflexion",//热炽反射
    // PERCEPTION = "perception",//感知
    // REASON = "reason",//理性
    // LINK = "link"//连结
}
/**
 * C区算法套装 10
 */
 export enum C_AlgoSuit{
    SINGLE,//单格
    POSITIVE_FEEDBACK,//正向反馈
    SUPPORT_VECTOR,//支持向量
    VECTOR_ACCELERATION,//矢量加速
    MATRIX_STRUCTURE,//矩阵结构
    BUG_EXPAND,//漏洞拓展
    BUNDLE,//集束
    CONVOLUTION,//卷积
    AROUSE,//启发
    GAME,//博弈
    enumCount
    // SINGLE = "single",//单格
    // POSITIVE_FEEDBACK = "positiveFeedback",//正向反馈
    // SUPPORT_VECTOR = "supportVector",//支持向量
    // VECTOR_ACCELERATION = "vectorAcceleration",//矢量加速
    // MATRIX_STRUCTURE = "matrixStructure",//矩阵结构
    // BUG_EXPAND = "bugExpand",//漏洞拓展
    // BUNDLE = "bundle",//集束
    // CONVOLUTION = "convolution",//卷积
    // AROUSE = "arouse",//启发
    // GAME = "game"//博弈
}
/**
 * A区主属性 8
 */
export enum AmainAttr{
    ATTACK_A_MAIN,//固定攻击
    ATTACK_B_MAIN,//百分比攻击
    POWER_A_MAIN,//固定算力
    POWER_B_MAIN,//百分比算力
    PHYSICAL_PENETRATION_A_MAIN,//固定物穿
    PHYSICAL_PENETRATION_B_MAIN,//百分比物穿
    POWER_PENETRATION_A_MAIN,//固定算穿
    POWER_PENETRATION_B_MAIN,//百分比算穿
    enumCount
}

/**
 * A区副属性 11+3
 */
 export enum AassistantAttr{
    ATTACK_A_ASSIS,//固定攻击
    POWER_A_ASSIS,//固定算力
    PHYSICAL_PENETRATION_A_ASSIS,//固定物穿
    POWER_PENETRATION_A_ASSIS,//固定算穿
    HP_A_ASSIS,//固定生命
    POWER_DEFENSE_A_ASSIS,//固定算防
    PHYSICAL_DEFENSE_A_ASSIS,//固定物防
    CRITICAL_HIT_RATE_ASSIS,//暴击
    CRITICAL_DAMAGE_ASSIS,//爆伤
    RESISTANCE_ASSIS,//抵抗
    REGENERATION_ASSIS,//回血

    ATTACK_B_ASSIS,//百分比攻击
    POWER_B_ASSIS,//百分比算力
    DAMAGE_INCREASE_ASSIS,//伤害提升

    enumCount
}


/**
 * B区主属性 7
 */
 export enum BmainAttr{
    HP_A_MAIN,
    HP_B_MAIN,
    POWER_DEFENSE_A_MAIN,
    POWER_DEFENSE_B_MAIN,
    PHYSICAL_DEFENSE_A_MAIN,
    PHYSICAL_DEFENSE_B_MAIN,
    REGENERATION_MAIN,
    enumCount
}
/**
 * B区副属性 11+4
 */
 export enum BassistantAttr{
    ATTACK_A_ASSIS,//固定攻击
    POWER_A_ASSIS,//固定算力
    PHYSICAL_PENETRATION_A_ASSIS,//固定物穿
    POWER_PENETRATION_A_ASSIS,//固定算穿
    HP_A_ASSIS,//固定生命
    POWER_DEFENSE_A_ASSIS,//固定算防
    PHYSICAL_DEFENSE_A_ASSIS,//固定物防
    CRITICAL_HIT_RATE_ASSIS,//暴击
    CRITICAL_DAMAGE_ASSIS,//爆伤
    RESISTANCE_ASSIS,//抵抗
    REGENERATION_ASSIS,//回血

    HP_B_ASSIS,//百分比生命
    POWER_DEFENSE_B_ASSIS,//百分比算防
    PHYSICAL_DEFENSE_B_ASSIS,//百分比物防
    DAMAGE_REDUCE_ASSIS,//伤害减少
    enumCount
}


/**
 * C区主属性 8
 */
 export enum CmainAttr{
    CRITICAL_HIT_RATE_MAIN,
    CRITICAL_DAMAGE_MAIN,
    RAPIDLY_MAIN,
    TREATMENT_MAIN,
    POWER_DEFENSE_A_MAIN,
    POWER_DEFENSE_B_MAIN,
    PHYSICAL_DEFENSE_A_MAIN,
    PHYSICAL_DEFENSE_B_MAIN,
    enumCount
}
/**
 * C区副属性 11+3
 */
 export enum CassistantAttr{
    ATTACK_A_ASSIS,//固定攻击
    POWER_A_ASSIS,//固定算力
    PHYSICAL_PENETRATION_A_ASSIS,//固定物穿
    POWER_PENETRATION_A_ASSIS,//固定算穿
    HP_A_ASSIS,//固定生命
    POWER_DEFENSE_A_ASSIS,//固定算防
    PHYSICAL_DEFENSE_A_ASSIS,//固定物防
    CRITICAL_HIT_RATE_ASSIS,//暴击
    CRITICAL_DAMAGE_ASSIS,//爆伤
    RESISTANCE_ASSIS,//抵抗
    REGENERATION_ASSIS,//回血

    RAPIDLY_ASSIS,//急速
    TREATMENT_ASSIS,//治疗
    DODGE_ASSIS,//闪避
    enumCount
}

/**
 * 算法套装效果描述
 */
 export enum AlgoSuitDescription{
    SINGLE = "",//单格

    OVERTHRESHOLD_RESPONSE = "二件套：伤害提升增加5%；三件套：对最大生命高于自身的敌方造成伤害时，追加该伤害（6%+敌方最大生命值/自身最大生命值 *3%）的同属性衍生伤害，最高20%",//超阈响应
    HETEROGENEOUS_REGRESSION = "二件套：伤害提升增加5%；三件套：击败敌方单位时，会偷取目标12%的攻击，算力，生命上限（重复触发取最高值），并回复等量生命，持续到战斗结束",//异相回归
    MINIMUMTHRESHOLD = "二件套：普攻生命偷取增加10%；三件套：生命值低于15%时，获得50攻速，10%攻击力，30%伤害减免，持续10s，每场战斗触发一次",//最小阈值
    DATA_RECOVERY = "二件套：效果抵抗增加50；三件套：造成伤害时，将伤害的10%转换为等量生命值",//数据复原
    OPERATOR_UP = "二件套：算力增加15%；三件套：每次普攻会生成一层迫击炮，最多4层。每层会在每次普攻时追加10%自身算力的衍生算量伤害",//算符追叠
    FEEDFORWARD = "二件套：攻击增加15%",//前馈
    GRADUAL = "二件套：算力增加15%",//渐进
    DEDUCE = "二件套：攻速增加30",//推演

    CODE_ENCAPSULATION = "二件套：伤害减免增加5%；三件套：获得援助能力，为当前生命值最低的友方承担30%的伤害",//代码封装
    LOW_VALUE_RESISTANCE = "二件套：伤害减免增加5%；三件套：生命值低于50%时，伤害减免增加5%，此后每减少10%生命值，获得5%的生命减免，每次生命值变化会刷新伤害减免的数值",//低值抗性
    MACHINE_LEARNING = "二件套：反伤增加5%；三件套：战斗结束时，如果自身没有倒下，恢复自身15%最大生命值",//机器学习
    COMPLEMENT_OVERFLOW = "二件套：每5s回血增加2%；三件套：战斗开始时，为自身添加500%物理防御加成的护盾",//补码溢出
    HEAT_REFLEXION = "二件套：反伤增加5%；三件套：造成反伤伤害时，额外追加1.2%最大生命值的真实伤害。释放技能时，嘲讽自身周围2格的敌方3s，嘲讽期间提升自身反伤值10%",//热炽反射
    PERCEPTION = "二件套：生命增加15%",//感知
    REASON = "二件套：物理防御增加15%",//理性
    LINK = "二件套：效果抵抗增加50",//连结

    POSITIVE_FEEDBACK = "二件套：治疗效果增加7.5%；三件套：治疗友方时，提升20%受治疗效果，持续4s",//正向反馈
    SUPPORT_VECTOR = "二件套：治疗效果增加7.5%；三件套：治疗效果增加10%，若目标生命值低于45%，治疗效果提升为30%",//支持向量
    VECTOR_ACCELERATION = "二件套：技能急速增加10%；三件套：每进行三次普攻，自身技能充能加快1s",//矢量加速
    MATRIX_STRUCTURE = "二件套：攻速增加30；三件套：每第四次普攻暴击，额外造成敌方8%当前生命值的真实伤害，不能超过自身算力的2倍",//矩阵结构
    BUG_EXPAND = "二件套：技能急速增加10%；三件套：对有减益效果的敌方目标造成伤害提升10%，目标身上每有一层减益效果，伤害提升增加2%，最高可叠加三层",//漏洞拓展
    BUNDLE = "二件套：暴击率增加10%",//集束
    CONVOLUTION = "二件套：暴击伤害增加20%",//卷积
    AROUSE = "二件套：每5s回血增加2%",//启发
    GAME = "二件套：闪避增加8%"//博弈
}

/**
 * A区算法格数
 */
export enum AAlgoNumber{
    GUARD = 4,
    SHOOTER = 6,
    FIGHTER = 6,
    SPECIAL = 5,
    PHYSICIAN = 4
}

/**
 * B区算法格数
 */
export enum BAlgoNumber{
    GUARD = 6,
    SHOOTER = 4,
    FIGHTER = 4,
    SPECIAL = 4,
    PHYSICIAN = 5
}

/**
 * C区算法格数
 */
export enum CAlgoNumber{
    GUARD = 5,
    SHOOTER = 5,
    FIGHTER = 5,
    SPECIAL = 6,
    PHYSICIAN = 6
}