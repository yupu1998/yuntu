
import { RoleAttribute } from "@/enum/baseEnum"
import { DamageAttr, DamageType, Deri, RoleStatus } from "@/enum/battleEnum"
import { TriggerType } from "@/enum/trigger"
import { damageRecord } from "./abstractDamage"

/**抽象的触发器，
 * 普攻触发器
 * 计数触发器
 * 伤害触发器
 * 状态触发器
 * 阈值触发器
 */
export abstract class abstractTrigger {
    abstract type: TriggerType

    //获取触发器需要的参数
    abstract getArgs(): string[]

    //根据传入参数判断是否触发效果
    abstract run(args: any[]): boolean

    //恢复为默认状态
    abstract reset(): void

}

/**
 * 普攻触发器
 */
export class attackTrigger extends abstractTrigger {

    type: TriggerType = TriggerType.ATTACk_TRIGGER//普攻触发器
    atcckOpen = 6000
    attackSum = 6000

    getArgs(): string[] {
        return []
    }
    run(args: any[]): boolean {
        this.attackSum += 100 + args[0]//也就是攻速
        if (this.attackSum > this.atcckOpen) {
            this.attackSum -= this.atcckOpen
            return true
        } else {
            return false
        }
    }
    reset(): void {
        this.attackSum = this.atcckOpen
    }
}


/**
 * 人形状态触发器,满足状态和cd回转时，返回true
 */
export class statusTrigger extends abstractTrigger {
    type: TriggerType = TriggerType.STATUS_TRIGGER
    aimStatus: RoleStatus
    cd: number
    count = -1
    /**
     * 
     * @param status 人形状态枚举
     * @param cd 内置cd，默认-1无cd
     */
    constructor(status: RoleStatus, cd = -1) {
        super()
        this.aimStatus = status
        this.cd = cd
    }
    getArgs(): string[] {
        throw new Error("Method not implemented.")
    }
    run(args: any[]): boolean {
        if (this.aimStatus == args[0] && this.count < 0) {
            this.count = this.cd
            return true
        } else {
            this.count -= 1
            return false
        }
    }
    reset(): void {
        this.count = this.cd
    }

}

/**
 * 伤害计数触发器，真实伤害，绝对伤害，衍生伤害不会计数
 */
export class countTrigger extends abstractTrigger {

    type: TriggerType = TriggerType.COUNT_TRIGGER
    damageAttr: DamageAttr
    damageType: DamageType
    critical: boolean
    count: number
    cd: number
    localCount = 0
    localCd = 0

    /**
     * @param damageAttr 伤害属性 算力伤害，物理伤害，真实伤害，绝对伤害
     * @param damageType 伤害类型 普攻 技能 被动 函数 协议 其他
     * @param critical 计数
     * @param cd 内置cd
     */
    constructor(damageAttr: DamageAttr,
        damageType: DamageType,
        critical: boolean, count = -1, cd = -1) {
        super()
        this.damageAttr = damageAttr,
            this.damageType = damageType,
            this.critical = critical
        this.count = count
        this.cd = cd
        this.localCd = cd
    }
    getArgs(): string[] {
        throw new Error("Method not implemented.")
    }
    run(args: any[]): boolean {
        const damage: damageRecord = args[0]
        this.localCd -= 1
        let res = true
        //跳过衍生伤害，真实伤害，绝对伤害
        if (damage.Derivative == Deri.YES ||
            damage.damageAttr == DamageAttr.REAL ||
            damage.damageAttr == DamageAttr.ABSOLUTE) {
            return false
        }
        if (res && this.damageAttr != undefined && damage.damageAttr != this.damageAttr) {
            res = false
        }
        if (res && this.damageType != undefined && damage.damageType != this.damageType) {
            res = false
        }
        if (res && this.critical != undefined && damage.isCritical != this.critical) {
            res = false
        }
        if (res) {
            this.localCount += 1
            if (this.localCd < 0 && this.localCount == this.count) {
                this.localCd = this.cd
                this.localCount = 0
                return true
            }
        }
        return false
    }
    reset(): void {
        throw new Error("Method not implemented.")
    }

}

/**
 * 定时触发器
 */
export class timeTrigger extends abstractTrigger {
    type: TriggerType = TriggerType.ATTACk_TRIGGER

    time:number
    sum = 0
    /**
     * 
     * @param time 触发间隔
     */
    constructor(time:number){
        super()
        this.time = time
    }

    getArgs(): string[] {
        throw new Error("Method not implemented.")
    }
    run(args: any[]): boolean {
        this.sum +=1
        if(this.sum == this.time){
            this.sum = 0
            return true
        }else{
            return false
        }
    }
    reset(): void {
        throw new Error("Method not implemented.")
    }

}

/**
 * 技能触发器
 * 脱手技能 非持续技能
 */
export class skillTriger extends abstractTrigger{
    type: TriggerType = TriggerType.SKILL_TRIGGER
    cd:number
    sustainTime:number
    localCd:number
    localSus:number

    /**
     * 技能触发构造器
     * @param cd 技能cd 单位s
     * @param startTime 技能预加载 单位s
     * @param sustainTime 技能持续时间，单位s,默认为0
     */
    constructor(cd:number,startTime:number,sustainTime=0){
        super()
        this.cd = cd*15,
        this.sustainTime = sustainTime*15
        this.localCd = startTime*15
        this.localSus = 0
    }

    getArgs(): string[] {
        throw new Error("Method not implemented.")
    }
    run(args: any[]): boolean {
        const roleStatus:RoleStatus = args[0]
        const skillRapid:number = args[1]
        const isgoon = true //根据人形状态判断是否继续执行
        if(isgoon){
            if(this.localCd>this.cd&&this.localSus ==0){
                return true
            }else{
                this.localCd +=skillRapid
            }
        }

        throw new Error("Method not implemented.")
    }
    reset(): void {
        throw new Error("Method not implemented.")
    }
    
}
