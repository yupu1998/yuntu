import { roleAllAttribute } from "@/dto/storageDtos";
// import {attack,AbsFunc} from './abstractFunc'
import { RoleAttribute } from "@/enum/baseEnum";
import { DamageAttr, DamageType, Deri, RoleStatus } from "@/enum/battleEnum";
// import { simpleAttack } from "./attack";
import { attackStatusProducer, skillStatusProducer } from "./abstractStatusProducer";
import { abstractDamageProducer, immediateDamageProducer } from "./abstractDamageProducer";
import { Damage } from "./abstractDamage";
import { abstractAttrProducer } from "./abstractAttrProducer";
import { FactorGradient } from "@babylonjs/core";
import { SkillType } from "@/enum/trigger";

export abstract class Role {
    name = ''
    time = 0;//自身的时间
    status = RoleStatus.WAITTING //状态
    hp:number //当前生命
    shield = 0 //护盾
    //三级属性
    public roleBaseData:roleAllAttribute;
    public roleData:roleAllAttribute;
    public roleFinalData:roleAllAttribute;

    //普攻状态与技能状态
    public attacKStatus:RoleStatus = RoleStatus.WAITTING
    public skillStatus:RoleStatus = RoleStatus.WAITTING
    //普攻状态生产者和技能状态生产者
    public attackProducer:attackStatusProducer = new attackStatusProducer()
    public skillProducer:skillStatusProducer = new skillStatusProducer(6,4)

    //生成效果的类需要能反复利用，使用后销毁再制造的开销会比较大 TODO
    public damageByStatusList:abstractDamageProducer[] = []
    //数组内的类可以改变自身的属性
    public AttrByStatusList:abstractAttrProducer[] = []

    //造成伤害数组 记录自身造成的伤害

    //受到伤害数组 记录自身受到的伤害

    constructor(name:string,baseData:roleAllAttribute,){
        this.name = name
        this.roleBaseData = baseData
        this.roleData = baseData
        this.roleFinalData = baseData
        this.AttrByStatusList = []
        this.hp = baseData.hp
    }

    /**
     * 获取普攻与技能状态，并选择其一
     */
    getStatus(){
        const judgeRes = this.roleStatusJudge()
        
        this.attackProducer.run(judgeRes.attack,this.roleFinalData.attackSpeed)
        this.skillProducer.run(judgeRes.skill,this.roleFinalData.rapidly)

        const attackT = this.attackProducer.getStatus()
        const skillT = this.skillProducer.getStatus()
        // console.log(attackT,skillT)
        //从二者选一个状态
        this.getOneStatus(attackT,skillT)
        console.log(this.status)
    }

    /**
     * 判断接下来是否进行普攻判断和自动技能判断
     */
    roleStatusJudge(){
        if(this.status == RoleStatus.XUANYUN){//眩晕状态，都不判断
            return{attack:false,skill:false}
        }
        if(this.status == RoleStatus.WAITTING){//等待状态，都判断
            return {attack:true,skill:true}
        }
        if(this.status == RoleStatus.SKILL_START||this.status == RoleStatus.SKILL_END){//技能前摇/后摇状态，不进行普攻判断，并重置普攻
            return {attack:false,skill:true}
        }
        if(this.status == RoleStatus.SKILL){//技能中 判断技能类型
            if(this.skillProducer.skillType == SkillType.IMMEDIATE_SKILL){//瞬发技能，不进行普攻判断，并重置普攻
                return {attack:false,skill:true}
            }
            if(this.skillProducer.skillType == SkillType.CONTINUE_SKILL){//持续技能，不进行普攻判断，并重置普攻
                return {attack:false,skill:true}
            }
            if(this.skillProducer.skillType == SkillType.STATUS_SKILL){//状态技能，进行普攻判断
                return {attack:true,skill:true}
            }
        }
        return {attack:true,skill:true}
    }

    /**
     * 从不同状态的冲突中选择一个当前状态
     * @param attackStatus 
     * @param skillStatus 
     */
    getOneStatus(attackStatus:RoleStatus,skillStatus:RoleStatus){
        if(this.status != RoleStatus.XUANYUN){
            if(skillStatus == RoleStatus.SKILL_START||skillStatus == RoleStatus.SKILL_END){
                this.status = skillStatus //处于技能前摇或者技能后摇状态 优于普攻状态
            }else if (skillStatus == RoleStatus.SKILL){
                //立刻技能状态和持续技能状态 优于普攻zhuangt
                if(this.skillProducer.skillType == SkillType.IMMEDIATE_SKILL){
                    this.status = skillStatus
                }else if(this.skillProducer.skillType == SkillType.CONTINUE_SKILL){
                    this.status = skillStatus
                }else{
                    this.status = attackStatus
                }
            }else{
                this.status = attackStatus
            }
        }
       
    }

    //角色动作
    RoleRun() {
        this.getStatus()//获取当前状态
        this.SPECIAL()//执行角色特有状态判断逻辑方法
        // console.log(this.status)
        //修改自身属性的方法调用
        this.AttrByStatusList.forEach((value)=>{
            value.judge({roleBaseData:this.roleBaseData,roleData:this.roleData,roleFinalData:this.roleFinalData},
                this.status)
        })
        //根据状态生成伤害的方法调用
        this.damageByStatusList.forEach((value)=>[
            value.run(this.status)
        ])
        console.log()
    }

    /**
     * 人形特有的处理方法
     */
    abstract SPECIAL():void
    
    /**
     * 设置技能生产者
     * @param pro 
     */
    setSkillProducer(pro:skillStatusProducer){
        this.skillProducer = pro
    }

    addDamageByStatus(d:abstractDamageProducer){
        this.damageByStatusList.push(d)
    }
    addAttrByStatus(d:abstractAttrProducer){
        this.AttrByStatusList.push(d)
    }
  }
  

