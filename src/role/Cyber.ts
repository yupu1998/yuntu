import { Role } from './abstractRole'
// import { simpleAttack } from './attack';
import { roleAllAttribute } from "@/dto/storageDtos";
import { skillStatusProducer } from './abstractStatusProducer';
import { SkillType } from '@/enum/trigger';
import { continueDamageProducer, immediateDamageProducer, probabilityImmediateDamageProducer } from './abstractDamageProducer';
import { DamageAttr, DamageType, Deri, RoleStatus } from '@/enum/battleEnum';
import { Damage, MutiDamage } from './abstractDamage';
import { RoleAttribute, RoleNumberAttribute } from '@/enum/baseEnum';
import { StatusAttrProducer } from './abstractAttrProducer';
import { AddOrPerAdd } from '@/enum/operation';


/**
 * 藏音的人形基础
 */
export class ZANGYIN extends Role {

    buffcount1 = 0 //两次普攻次数加1 上限10
    buffcount2 = 0 //一次终极技能计数加2 上限10
    attackCount = 0 //普攻计数，用于增加普攻内地
    Other: immediateDamageProducer//被动伤害生成器
    Skill: immediateDamageProducer//自动伤害生成器
    SKill1: StatusAttrProducer//自动buff生成器
    constructor(name: string, baseDate: roleAllAttribute) {

        super(name, baseDate)
        //设置普攻生产者 使用默认值
        //设置技能生产者 cd10s，预充能2s,技能前摇 12 帧 
        this.setSkillProducer(new skillStatusProducer(10, 2, 0, 12,18))
        //添加普攻伤害对象
        this.addDamageByStatus(new immediateDamageProducer(RoleStatus.ATTACK,
            new Damage("普攻").setDamage(RoleAttribute.ATTACK, 1, DamageAttr.PHYSCIAL, DamageType.ATTACk, Deri.NO, true)))
        //添加被动伤害对象 //被动 触发器 普攻开始 90%+4%*(count1+count2)算力加成，可暴击算量伤害，必中，被动伤害
        const ZYOther = new immediateDamageProducer(RoleStatus.ATTACK,
            new Damage("青巳幽啮").setDamage(RoleAttribute.POWER, 0.9, DamageAttr.POWER, DamageType.OTHER, Deri.NO, true, false))
        this.Other = ZYOther
        this.addDamageByStatus(ZYOther)
        //添加修改zangYin被动数值的功能 SPECIAL方法内

        //自动技能 对当前目标造成算力伤害，提升自身攻速，持续x秒
        const ZYSkill = new immediateDamageProducer(RoleStatus.SKILL,
            new Damage("驱魂明烛").setDamage(RoleAttribute.POWER, 1, DamageAttr.POWER, DamageType.SKILL, Deri.NO, true, false))
        this.Skill = ZYSkill
        this.addDamageByStatus(ZYSkill)
        //添加修改藏音技能数值的功能 SPECIAL方法内

        //提高ZANGYIN攻速的方法
        const ZYSkill2 = new StatusAttrProducer("roleData", "roleFinalData", RoleNumberAttribute.SPEED, RoleNumberAttribute.SPEED,
            AddOrPerAdd.PRECENTAGE,0.5, 0, RoleStatus.SKILL)
        this.SKill1 = ZYSkill2
        this.addAttrByStatus(ZYSkill2)

        //添加修改ZANGYIN技能持续时间的方法 SPECIAL方法内

    }

    /**
     * 人形特有判断方法
     */
    SPECIAL(){
        if(this.status == RoleStatus.ATTACK){
            this.attackCount +=1
            if(this.attackCount == 2 && this.buffcount1<10){
                console.log("被动数值+1")
                this.attackCount = 0
                this.buffcount1 +=1
                this.Other.damageObj.damageValue = 0.9 +0.04*this.buffcount1 //修改被动的技能数值
                this.Skill.damageObj.damageValue = 1+0.2*this.buffcount1 //修改自动技能的技能数值
                this.SKill1.susTime = this.buffcount1 //修改自动技能的持续时间
            }
        }
    }
}


export class KURO extends Role {

    constructor(name: string, baseDate: roleAllAttribute) {
        super(name, baseDate)
        //普攻 使用默认值
        //设置技能生产者 cd12s，预充能8s, 持续3s，技能前摇 5 帧，技能后摇20帧，持续技能
        this.setSkillProducer(new skillStatusProducer(12, 8,3,5,20,SkillType.CONTINUE_SKILL))
        //添加普攻伤害对象
        this.addDamageByStatus(new immediateDamageProducer(RoleStatus.ATTACK,
            new Damage("普攻").setDamage(RoleAttribute.ATTACK, 1, DamageAttr.PHYSCIAL, DamageType.ATTACk, Deri.NO, true)))
        //被动 触发器 普攻开始 60%概率追加弹幕最多5次 100%算力算量不可暴击 属于普攻伤害
        const ZYOther = new probabilityImmediateDamageProducer(RoleStatus.ATTACK,
            new MutiDamage("弹幕",5,[0.6,0.6,0.6,0.6])
            .setDamage(RoleAttribute.POWER, 1, DamageAttr.POWER, DamageType.ATTACk, Deri.NO, false, false),
            0.6)
        this.addDamageByStatus(ZYOther)
        //自动 持续技能 3s,0.2s一次攻击 
        const skillDamage:Damage[] = []
        for (let index = 0; index < 15; index++) {
            skillDamage.push(new Damage("前方高能").setDamage(RoleAttribute.POWER, 0.8, DamageAttr.POWER, DamageType.SKILL, Deri.NO, false,false))
        }
        this.addDamageByStatus(new continueDamageProducer(RoleStatus.SKILL,[3,6,9,12,15,18,21,24,27,30,33,36,39,42,45],skillDamage))
        //自动技能释放结束后，追加一发技能伤害
        this.addDamageByStatus(new continueDamageProducer(RoleStatus.SKILL_END,[15],[
            new Damage("前方高能").setDamage(RoleAttribute.POWER, 3.2, DamageAttr.POWER, DamageType.SKILL, Deri.NO, false,false)
        ]))

    }

    SPECIAL(): void {
        console.log()
    }
}
