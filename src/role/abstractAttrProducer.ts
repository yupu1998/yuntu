
import { RoleStatus } from "@/enum/battleEnum"
import { SkillType } from "@/enum/trigger"
import { Damage, damageRecord } from "./abstractDamage"
import { Role } from "./abstractRole"
import { roleAllAttribute } from "@/dto/storageDtos"
import { RoleAttribute, RoleNumberAttribute } from "@/enum/baseEnum"
import { AddOrPerAdd } from "@/enum/operation"


/**
 * 属性修改的生产者
 */
export abstract class abstractAttrProducer {

    soureObj: "roleBaseData" | "roleData" | "roleFinalData" //修改前属性对象
    targetObj: "roleBaseData" | "roleData" | "roleFinalData"//修改目标属性对象

    sourceAttribute: RoleNumberAttribute//基于该属性进行修改
    aimAttribute: RoleNumberAttribute //修改的目标属性

    changeType: AddOrPerAdd //修改类型 百分比修改/直接增减数值
    changeValue: number //修改数值

    changed = false //是否已经执行过不在执行？
    susTime: number
    localTime = 0
    /**
     * 
     * @param soureObj 源头属性对象
     * @param targetObj 目标属性对象
     * @param source 源头指定属性
     * @param aim 目标指定属性
     * @param type 属性改变类型 百分比或数值
     * @param value 改变百分比/值
     * @param susTime 持续时间/s -1为无限时间
     */
    constructor(
        soureObj: "roleBaseData" | "roleData" | "roleFinalData",
        targetObj: "roleBaseData" | "roleData" | "roleFinalData",
        source: RoleNumberAttribute,
        aim: RoleNumberAttribute,
        type: AddOrPerAdd,
        value: number,
        susTime: number
    ) {
        this.soureObj = soureObj
        this.targetObj = targetObj
        this.sourceAttribute = source
        this.aimAttribute = aim
        this.changeType = type
        this.changeValue = value
        this.susTime = Math.floor(susTime * 15)
    }

    /**
     * 属性修改判断方法
     * @param value 
     */
    abstract judge(value: {
        "roleBaseData": roleAllAttribute,
        "roleData": roleAllAttribute,
        "roleFinalData": roleAllAttribute,
    }, status: RoleStatus): void

    /**
     * 执行属性变更
     * @param value 
     */
    protected run(value: {
        "roleBaseData": roleAllAttribute,
        "roleData": roleAllAttribute,
        "roleFinalData": roleAllAttribute,
    }) {
        const base = value[this.soureObj][this.sourceAttribute]
        if (this.changeType == AddOrPerAdd.PRECENTAGE) {
            const a = base * this.changeValue
            value[this.targetObj][this.aimAttribute] = value[this.targetObj][this.aimAttribute] + a
        } else {
            value[this.targetObj][this.aimAttribute] = value[this.targetObj][this.aimAttribute] + this.changeValue
        }
    }


    /**
     * 回退属性变更
     * @param value 
     */
    protected back(value: {
        "roleBaseData": roleAllAttribute,
        "roleData": roleAllAttribute,
        "roleFinalData": roleAllAttribute,
    }) {
        const base = value[this.soureObj][this.sourceAttribute]
        if (this.changeType == AddOrPerAdd.PRECENTAGE) {
            const a = base * this.changeValue
            value[this.targetObj][this.aimAttribute] = value[this.targetObj][this.aimAttribute] - a
        } else {
            value[this.targetObj][this.aimAttribute] = value[this.targetObj][this.aimAttribute] - this.changeValue
        }
    }

}

/**
 * 开局触发属性修改,只执行一次
 */
export class battleStartAttrProducer extends abstractAttrProducer {



    judge(value: { roleBaseData: roleAllAttribute; roleData: roleAllAttribute; roleFinalData: roleAllAttribute }): void {
        if (!this.changed) {//开局触发属性修改
            this.run(value)
            this.changed = true
        } else {
            this.localTime += 1
            if (this.localTime == this.susTime) {//抵达持续时间，回退属性
                this.back(value)
            }
        }
    }
}

/**
 * 状态触发属性修改
 */
export class StatusAttrProducer extends abstractAttrProducer {


    roleStatus: RoleStatus

    constructor(soureObj: "roleBaseData" | "roleData" | "roleFinalData",
        targetObj: "roleBaseData" | "roleData" | "roleFinalData",
        source: RoleNumberAttribute,
        aim: RoleNumberAttribute,
        type: AddOrPerAdd,
        value: number,
        susTime: number,
        status: RoleStatus) {
        super(soureObj, targetObj, source, aim, type, value, susTime)
        this.roleStatus = status
    }

    judge(value: { roleBaseData: roleAllAttribute; roleData: roleAllAttribute; roleFinalData: roleAllAttribute }, status: RoleStatus): void {
        if (status == this.roleStatus && !this.changed) {//启动属性更新
            this.run(value)
            this.changed = true
            this.localTime = 0
        } else if (status == this.roleStatus && this.changed) {//刷新持续时间
            this.localTime = 0
        } else {
            if (this.localTime == this.susTime) {//抵达持续时间，回退属性
                this.back(value)
                this.changed = false
            }
            this.localTime += 1
        }
    }
}
