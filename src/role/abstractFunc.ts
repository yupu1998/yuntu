import { RoleStatus } from "@/enum/battleEnum"
import { RoleAttribute } from "@/enum/baseEnum";
import { abstractTrigger, attackTrigger } from "./abstractTrigger";

/**
 * 抽象的函数方法，算法，协议，函数，人物技能等
 */
export abstract class AbsFunc {

    trigger:abstractTrigger
    
    inputArgs:string[] = [] //该方法需要的参数名称，

    abstract isRun(status:RoleStatus):boolean;//该类是否需要执行

    abstract Run(args:any[]):boolean;//执行类方法

    // abstract getType():string;//获取函数类型

    abstract output():any;//返回伤害对象或buff对象

    abstract getStatus(): RoleStatus; //返回当前角色的状态

    constructor(tri:abstractTrigger){
        this.inputArgs = []
        this.trigger = tri
    }
    
  }

  /**
   * 抽象的普攻函数基类
   */
// export abstract class attack extends AbsFunc{


//     inputArgs = [RoleAttribute.ATTACK_SPEED]//需要的参数


//     status = RoleStatus.WAITTING //状态，等待，普攻前摇，普攻，普攻后摇

//     // damageClass:attackDamage = new simpleAttackDamage()

//     constructor(){
//         super(new attackTrigger())
//     }

//     //攻击前摇，攻击动画，攻击后摇
//     /**
//      * 当人形状态为等待时，普攻函数才会继续执行，否则重置普攻触发器
//      * @param status 
//      * @returns 
//      */
//     isRun(status:RoleStatus): boolean {
//         if(status == RoleStatus.WAITTING){
//             return true
//         }else{
//             this.trigger.reset()
//             return false
//         }
        
//     }
//     /**
//      * 运行普攻触发器，判断当前是否需要进行普攻，并修改自身状态
//      * @param args 
//      * @returns 
//      */
//     Run(args: any[]): boolean {
//         const t = this.trigger.run(args)
//         this.status = t ? RoleStatus.ATTACK:RoleStatus.WAITTING
//         return t
//     }

//     /**
//      * 返回本次普攻需要造成的伤害对象，角色对象会调用该对象造成伤害
//      * 此处返回一个攻击对象，默认为无弹道，直接结算的伤害
//      * @returns 
//      */
//     output():abstractDamage{
//         return this.damageClass
//     }
//     /**
//      * 返回当前函数的状态
//      * @returns 
//      */
//     getStatus(): RoleStatus {
//         return this.status
//     }

//     /**
//      * 设置普攻类判断是否普攻的参数，默认为[RoleAttribute.ATTACK_SPEED]
//      * 如果需要使用其他参数，需要重写Run方法，否则会导致异常
//      * @param args 
//      */
//     setInputArgs(args:RoleAttribute[]){
//         this.inputArgs = args
//     }
    
//     /**
//      * 传入一个普攻伤害对象
//      * @param damage 
//      */
//     setdDmageClass(damage:attackDamage){
//         this.damageClass = damage
//     }
// }

// /**
//  * 抽象的技能基类
//  * 技能分为脱手技能和持续技能，持续技能期间，人形不会继续计算cd
//  */
// export  abstract class skillFunc extends AbsFunc{

    

//     isRun(status: RoleStatus): boolean {
//         throw new Error("Method not implemented.");
//     }
//     Run(args: any[]): boolean {
//         throw new Error("Method not implemented.");
//     }
//     output() {
//         throw new Error("Method not implemented.");
//     }
//     getStatus(): RoleStatus {
//         throw new Error("Method not implemented.");
//     }

// }
