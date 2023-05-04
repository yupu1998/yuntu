
import { DamageAttr, DamageType, Deri } from "@/enum/battleEnum"
import { RoleAttribute } from "@/enum/baseEnum";
import { Role } from "./abstractRole";
import { RoleStatus } from "@/enum/battleEnum"
import { randomInt } from "@/utils/dataUtils";

export interface damageRecord {
    name:string
    time:number
    soure: string,
    target: string,
    value: number,
    damageAttr: DamageAttr,
    damageType: DamageType,
    Derivative: Deri,
    isCritical: boolean,
    isDodge:boolean
}



/**
 * 抽象的伤害类
 */
export class Damage {

    name:string
    source = '' //归属人形
    target = '' //指向目标 可以是任何一个对象 TODO 索敌目标
    damageAddAttr: RoleAttribute //伤害加成属性
    damageValue: number //伤害加成数值
    damageAttr: DamageAttr//伤害属性 算力伤害，物理伤害，真实伤害，绝对伤害
    damageType: DamageType//伤害类型 普攻 技能 被动 函数 协议 其他
    Derivative: Deri//衍生非衍生
    critical: boolean//是否可暴击
    dodge:boolean//是否判断闪避

    start = false
    /**
     * @param damageAddAttr 伤害加成属性
     * @param damageValue 伤害加成数值
     * @param damageAttr 伤害属性 算力伤害，物理伤害，真实伤害，绝对伤害
     * @param damageType 伤害类型 普攻 技能 被动 函数 协议 状态 其他
     * @param Derivative 衍生非衍生
     * @param critical 是否可暴击
     * @param dodge 是否判断闪避
     */
    constructor(
        name:string,
        damageAddAttr: RoleAttribute = RoleAttribute.ATTACK,
        damageValue = 1,
        damageAttr: DamageAttr = DamageAttr.PHYSCIAL,
        damageType: DamageType = DamageType.ATTACk,
        Derivative: Deri = Deri.NO,
        critical = true,
        dodge = true) {
        this.name = name
        this.damageAttr = damageAttr,
        this.damageType = damageType,
        this.Derivative = Derivative,
        this.critical = critical
        this.damageAddAttr = damageAddAttr
        this.damageValue = damageValue
        this.dodge = dodge
    }
    open(){
        this.start = true
    }
    back(){
        this.start = false
    }

    //是否造成伤害
    isDamage(){
        return this.start
    }
    //返回一次伤害数据
    /**
     * 绝对伤害 不暴击 不受防御影响 不触发反伤 不触发生命偷取 不吃任何增伤减伤 不触发各种函数效果
     * 真实伤害 不暴击 不受防御影响 不触发反伤 不触发生命偷取 不触发各种函数效果
     * 物理伤害 
     * 算量伤害
     * 衍生伤害 不触发反伤 不触发生命偷取 不触发各种函数效果
     * @param source 
     * @param target 
     * @returns 
     */
    getDamage(source: Role, target: Role,otherBase:number|undefined=undefined):damageRecord{
        this.back()//关闭伤害输出

        let base:number //基本属性
        let coef1 = 1 //属性加成数值
        let coef2 = 1 //普通增伤减伤
        let coef3 = 1 //防御系数
        let coef4 = 1 //物理/算量增伤
        let coef5 = 1 //伤害类型增伤（普攻/技能）
        let coef6 = 1 //暴击增伤

        const res:damageRecord = {
            name:this.name,
            time:0,
            soure:source.name,
            target:target.name,
            value:0,
            damageAttr:this.damageAttr,
            damageType:this.damageType,
            Derivative:this.Derivative,
            isCritical:false,
            isDodge:false
        }

        if (otherBase == undefined){
            base = source.roleFinalData[this.damageAddAttr] as unknown as number//基本伤害
        }else{
            base = otherBase //其他伤害
        }
        coef1 = this.damageValue //系数1 加成数值
        if (this.damageAttr == DamageAttr.ABSOLUTE){//绝对伤害
            res.value = base*coef1
            return res
        }
        //普通增伤减伤 我方增伤数值减去敌方减伤数值
        coef2 = source.roleFinalData.damageIncrease - target.roleFinalData.damageReduce + 1
        if(this.damageAttr == DamageAttr.REAL){//真实伤害
            res.value = base*coef1*coef2
            return res
        }
 
        if(this.damageAttr == DamageAttr.PHYSCIAL){//物理伤害
            //计算防御系数
            const tmp = 1000/(1000-source.roleFinalData.physicalPenetration + target.roleFinalData.physicalDefense)
            coef3 = tmp>1.25 ? 1.25:tmp
            //计算物理增伤
            coef4 = source.roleFinalData.physcialIncrease - target.roleFinalData.physcialReduce + 1
        }else if(this.damageAttr == DamageAttr.POWER){//算量伤害
            //计算防御系数
            const tmp = 1000/(1000-source.roleFinalData.powerPenetration + target.roleFinalData.powerDefense)
            coef3 = tmp>1.25 ? 1.25:tmp
            //计算物理增伤
            coef4 = source.roleFinalData.powerIncrease - target.roleFinalData.powerReduce + 1
        }
        //伤害类型增伤
        if(this.damageType == DamageType.ATTACk){
            coef5 = source.roleFinalData.attackIncrease - target.roleFinalData.attackReduce + 1
        }else if(this.damageType == DamageType.SKILL){
            coef5 = source.roleFinalData.skillIncrease - target.roleFinalData.skillReduce + 1
        }

        //判断暴击
        if(this.critical){
            const aim = Math.random()
            if(aim<source.roleFinalData.criticalHitRate){
                coef6 = source.roleFinalData.criticalDamage/100 + 1
                res.isCritical = true
            }
        }
        //判断闪避
        res.value = base*coef1*coef2*coef3*coef4*coef5*coef6
        // console.log(base,coef1,coef2,coef3,coef4,coef5,coef6)
        if (this.dodge){
            const aim = Math.random()
            if (aim<target.roleFinalData.dodge){
                res.isDodge = true
            }
        }
        const newhp = target.hp - res.value
        if (newhp<0){
            res.value = target.hp
            target.hp = 0
        }else{
            target.hp = newhp
        }
        return res
    }


    

}

