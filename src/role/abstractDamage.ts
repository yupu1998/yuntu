
import { DamageAttr, DamageType, Deri } from "@/enum/battleEnum"
import { RoleAttribute } from "@/enum/baseEnum";
import { Role } from "./abstractRole";
import { ta } from "element-plus/es/locale";


interface damageRecord {
    soure: string,
    target: string,
    value: number,
    damageAttr: DamageAttr,
    damageType: DamageType,
    Derivative: Deri,
    isCritical: boolean
}



/**
 * 抽象的伤害类
 */
export abstract class abstractDamage {

    source = '' //归属人形
    target = '' //指向目标 可以是任何一个对象
    damageAddAttr: RoleAttribute //伤害加成属性
    damageValue: number //伤害加成数值
    maxCount:number //生成伤害个数
    damageAttr: DamageAttr//伤害属性 算力伤害，物理伤害，真实伤害，绝对伤害
    damageType: DamageType//伤害类型 普攻 技能 被动 函数 协议 其他
    Derivative: Deri//衍生非衍生
    critical: boolean//是否可暴击


    //是否造成伤害
    abstract isDamage(): boolean
    //返回一次伤害数据
    abstract getDamage(source: Role, target: Role): damageRecord
    //是否销毁该伤害类
    abstract isExist(): boolean

    /**
     * 
     * @param damageAddAttr 伤害加成属性
     * @param damageValue 伤害加成数值
     * @param maxCount 生成伤害个数
     * @param damageAttr 伤害属性 算力伤害，物理伤害，真实伤害，绝对伤害
     * @param damageType 伤害类型 普攻 技能 被动 函数 协议 其他
     * @param Derivative 衍生非衍生
     * @param critical 是否可暴击
     */
    constructor(
        damageAddAttr: RoleAttribute = RoleAttribute.ATTACK,
        damageValue = 1,
        maxCount = 1,
        damageAttr: DamageAttr = DamageAttr.PHYSCIAL,
        damageType: DamageType = DamageType.ATTACk,
        Derivative: Deri = Deri.NO,
        critical = true) {
        this.damageAttr = damageAttr,
        this.damageType = damageType,
        this.Derivative = Derivative,
        this.critical = critical
        this.damageAddAttr = damageAddAttr
        this.damageValue = damageValue
        this.maxCount = maxCount
    }

}

/**
 * 普攻伤害抽象类
 */
export abstract class attackDamage extends abstractDamage {


    isDamage(): boolean {
        return true
    }
    //传入敌我双方的属性，计算伤害 TODO
    getDamage(source: Role, target: Role) {
        const da: damageRecord = {
            soure: source.name,
            target: target.name,
            damageAttr: this.damageAttr,
            value: 1000,
            damageType: this.damageType,
            Derivative: this.Derivative,
            isCritical: true
        }
        return da
    }
    isExist(): boolean {
        return true
    }

}