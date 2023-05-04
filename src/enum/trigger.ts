

/**
 * 触发器枚举
 * 普攻触发器，根据射速判断下次是否普攻
 * 状态触发器，根据传入状态响应
 * 伤害触发器，根据传入的伤害类型判断响应
 * 定时触发器
 * 技能触发器
 */
export enum TriggerType{
    ATTACk_TRIGGER,
    STATUS_TRIGGER,
    DAMAGE_TRIGGER,
    COUNT_TRIGGER,
    TIME_TRIGGER,
    SKILL_TRIGGER
}

/**
 * 技能类型
 * 脱手技能 技能触发会占一帧
 * 持续技能 技能触发根据技能时间调整 技能持续时间不进行技能充能 可以被控制打断技能状态
 * 状态技能 一种持续技能 不会被打断技能状态 
 * 引导技能 一种持续技能 会被打断技能状态 
 */
export enum SkillType{

    IMMEDIATE_SKILL,
    STATUS_SKILL,
    CONTINUE_SKILL,
}