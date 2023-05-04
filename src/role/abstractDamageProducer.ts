
import { RoleStatus } from "@/enum/battleEnum"
import { SkillType } from "@/enum/trigger"
import { Damage, damageRecord } from "./abstractDamage"
import { Role } from "./abstractRole"


/**
 * 伤害的生产者
 */
export abstract class abstractDamageProducer {

    triggerStatus:RoleStatus
    
    constructor(status:RoleStatus){
        this.triggerStatus = status
    }

    //每帧需要调用该方法运行
    abstract run(roleStatus: RoleStatus):boolean

    //生成本次伤害
    abstract getDamage(s:Role,t:Role,o:number|undefined):damageRecord[]

}

/**
 * 立刻伤害生产者
 */
export class immediateDamageProducer extends abstractDamageProducer{

    damageObj:Damage
    constructor(status:RoleStatus,damage:Damage){
        super(status)
        this.damageObj = damage
    }

    run(roleStatus: RoleStatus) {
        if (roleStatus == this.triggerStatus){
            this.damageObj.open()//打开技能
            return true
        }else{
            return false
        }
    }

    getDamage(s:Role,t:Role,o:number|undefined=undefined):damageRecord[] {
        const damgeList:damageRecord[] = []
        if(this.damageObj.isDamage()){
            damgeList.push(this.damageObj.getDamage(s,t,o))
        }
        if(damgeList.length>0)
            console.log(damgeList)
        return damgeList
    }

}

/**
 * 持续伤害生产者
 */
export class continueDamageProducer extends abstractDamageProducer{

    start = false //是否开始计算伤害
    triggerList:number[]
    damageObj:Damage[]
    countTime = 0 //计时
    constructor(roleStatus:RoleStatus,tirggerTimes:number[],damageObj:Damage[]){
        super(roleStatus)
        this.triggerList = tirggerTimes
        this.damageObj = damageObj
    }

    run(roleStatus: RoleStatus): boolean {
        if (roleStatus == this.triggerStatus){
            if(this.start){
                this.countTime +=1
                const index = this.triggerList.indexOf(this.countTime)
                if(index != -1){
                    this.damageObj[index].open()
                    return true
                }
            }else{
                this.start = true
            }
        }else{
            if(this.start){
                this.start = false
                this.countTime = 0
            }
        }
        return false
    }

    getDamage(s:Role,t:Role,o:number|undefined=undefined):damageRecord[] {
        const damgeList:damageRecord[] = []
        this.damageObj.forEach(damge=>{
            if(damge.isDamage()){
                damgeList.push(damge.getDamage(s,t,o))
            }
        })
        if(damgeList.length>0)
        console.log(damgeList)
        return damgeList
    }
}