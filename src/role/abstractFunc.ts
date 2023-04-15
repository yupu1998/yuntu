import { RoleStatus } from "@/enum/battleEnum"
import { RoleAttribute } from "@/enum/baseEnum";
import { abstractDamage,attackDamage } from "./abstractDamage";

/**
 * 抽象的函数方法，算法，协议，函数，人物技能等
 */
export abstract class AbsFunc {
    
    inputArgs:string[] = [] //该方法需要的参数名称，

    abstract isRun(status:RoleStatus):boolean;//该类是否需要执行

    abstract Run(args:any[]):boolean;//执行类方法

    // abstract getType():string;//获取函数类型

    abstract output():abstractDamage;//返回伤害

    abstract getStatus(): RoleStatus; //返回当前角色的状态

    constructor(){
        this.inputArgs = []
    }
    
  }

  /**
   * 抽象的普攻函数基类
   */
export abstract class attack extends AbsFunc{

    private atcckOpen = 6000

    inputArgs = [RoleAttribute.ATTACK_SPEED]//需要的参数

    attackSum = 0 //当attack数值到达atcckOpen后，进行普攻操作

    status = RoleStatus.WAITTING //状态，等待，普攻前摇，普攻，普攻后摇

    damageClass:attackDamage = new simpleAttackDamage()

    //攻击前摇，攻击动画，攻击后摇

    isRun(status:RoleStatus): boolean {
        if(status == RoleStatus.WAITTING){
            return true
        }else{
            this.attackSum = 0
            return false
        }
        
    }
    Run(args: any[]): boolean {
        this.attackSum += 100+args[0]//也就是攻速
        if (this.attackSum > this.atcckOpen){
            this.status = RoleStatus.ATTACK
            this.attackSum = 0
            return true
        }else{
            this.status = RoleStatus.WAITTING
            return false
        } 
    }
    //此处返回一个攻击对象，默认为无弹道，直接结算的伤害
    output():any{
        return this.damageClass
    }
    getStatus(): RoleStatus {
        return this.status
    }

    /**
     * 设置普攻类判断是否普攻的参数，默认为[RoleAttribute.ATTACK_SPEED]
     * 如果需要使用其他参数，需要重写Run方法，否则会导致异常
     * @param args 
     */
    setInputArgs(args:RoleAttribute[]){
        this.inputArgs = args
    }
    
    /**
     * 传入一个普攻伤害对象
     * @param damage 
     */
    setdDmageClass(damage:attackDamage){
        this.damageClass = damage
    }
}

export class simpleAttackDamage extends attackDamage{
    
}