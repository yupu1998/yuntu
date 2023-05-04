
import { RoleStatus } from "@/enum/battleEnum"
import { SkillType } from "@/enum/trigger"

/**抽象的状态触发器
 * 普攻触发，技能触发，大招触发，其他触发 //设计到动画的问题如何处理？不在这里处理，另起一个处理模块
 */
export abstract class abstractStatusProducer {

    roleStatus = RoleStatus.WAITTING

    //每帧需要调用该方法运行
    abstract run(roleStatus: boolean, args: any):void

    //恢复为默认状态
    abstract reset(): void

    //获取状态
    getStatus(){
        return this.roleStatus
    }

}

/**
 * 普攻生产者
 * 普攻准备 普攻伤害 普攻结束 普攻伤害和普攻结束各占一帧 普攻准备可设置
 * 普攻前摇时间被打断会吞掉普攻并重置
 * 三种普攻状态均不影响普攻进度
 */
export class attackStatusProducer extends abstractStatusProducer {

    private attackOpen = 6000 //普攻进度最大值
    private before //普攻前摇时间
    attackSum = 6000 //当前普攻进度
    localBefore = 0 //当前前摇进度
    /**
     * @param before 普攻前摇 帧
     */
    constructor(before = 2) {
        super()
        this.before = before
    }

    /**
     * 传入当前人形状态和攻速，返回此时应有的人形普攻状态 
     * 该方法返回四种状态 普攻前 普攻 普攻结束 等待
     * @param Status 
     * @param args 
     * @returns 
     */
    run(Status: boolean, args: number):void {
        //判断是否进行普攻判断
        if (!Status){
            this.reset()//重置普攻
            
        }
        args = args > 900 ? 900 : args  //攻速上限900
        this.attackSum += 100 + args//计算普攻进度
        //判断下一步操作
        if (this.roleStatus == RoleStatus.ATTACK_START) {//上次为普攻前摇状态
            if (this.localBefore === this.before) {//判断攻击前摇是否结束
                this.localBefore = 0 //前摇结束，重置前摇
                this.roleStatus = RoleStatus.ATTACK//前摇结束，返回攻击
            }
            this.localBefore += 1
        } else if (this.roleStatus == RoleStatus.ATTACK) {//上次状态为普攻 
            this.roleStatus = RoleStatus.ATTACK_END//返回普攻后摇状态
        } else {
            //达到普攻要求，返回普攻状态
            if (this.attackSum > this.attackOpen) {
                this.attackSum -= this.attackOpen
                this.roleStatus = RoleStatus.ATTACK_START
            }else{
                this.roleStatus = RoleStatus.WAITTING
            }
            
        }
    }
    /**
     * 重置普攻
     */
    reset(): void {
        this.attackSum = this.attackOpen
        this.roleStatus =  RoleStatus.WAITTING
    }

    /**
     * 直接修改数值，用于满足来自方法的直接调用
     */
    // change(): void {
    //     this.attackSum = this.attackOpen
    // }
}


/**
 * 自动技能状态生产者
 * 脱手技能 持续技能  持续技能和其他状态的冲突不在此处解决
 * 技能进度条长度为 技能cd*1000 
 * 每次调用方法进度条增加 技能急速/15  因为15帧/s
 */
export class skillStatusProducer extends abstractStatusProducer {

    skillType:SkillType//技能类型
    cd: number //技能间隔cd
    sustainTime: number //技能持续时间
    skillAhead:number //技能释放前摇
    skillAfter:number //技能释放后摇
    localCd: number //当前技能进度
    localSus: number //当前技能持续进度
    localAhead:number //当前技能前摇进度
    localAfter:number //当前技能后摇进度

    /**
     * 技能触发构造器
     * @param cd 技能cd 单位s
     * @param startTime 技能预加载 单位s
     * @param sustainTime 技能持续时间，单位s,默认为0
     * @param ahead 技能前摇 单位 帧
     * @param after 技能后摇 单位 帧
     * @param skillType 技能类型
     */
    constructor(cd: number, startTime: number, sustainTime = 0, ahead= 1,after =5,skillType: SkillType = SkillType.IMMEDIATE_SKILL) {
        super()
        this.cd = cd * 1000,
        this.sustainTime = sustainTime * 15
        this.localCd = startTime * 1000
        this.skillAhead = ahead
        this.skillAfter = after
        this.localAhead = 0
        this.localAfter = 0
        this.localSus = 0
        this.skillType = skillType
    }

    /**
     * @param roleStatus 
     * @param args 
     * @returns 
     * 该方法返回人形自动技能状态
     * 技能前摇 技能进度满条时触发  若技能前摇未正常结束 充能进度重置为90%，返回等待状态
     * 技能中 技能持续时间 技能持续时间内不涨技能进度 若持续状态被打断 中断技能状态
     * 技能后摇 技能结束后触发 开始增加技能进度 
     */
    run(roleStatus: boolean, args: number):void {
        const skillRapid: number = args
        const isgoon = roleStatus //是否继续执行技能触发判断
        if(this.roleStatus == RoleStatus.SKILL_START){//处于技能前摇状态
            this.localCd += skillRapid / 15 //技能充能增加
            if(!isgoon){//打断前摇
                this.back()
            }else{
                if(this.skillAhead == this.localAhead){//技能前摇结束
                    this.localAhead = 0 //重置技能前摇
                    this.roleStatus = RoleStatus.SKILL //进入技能状态
                }
                this.localAhead += 1
            }
        }else if(this.roleStatus == RoleStatus.SKILL){//处于释放技能的状态
            if(this.skillType == SkillType.IMMEDIATE_SKILL){//瞬发技能
                this.roleStatus = RoleStatus.SKILL_END//技能释放结束
            }else if (this.skillType == SkillType.CONTINUE_SKILL){//持续性技能
                if(!isgoon){//打断持续技能
                    this.localSus = 0//重置技能持续时间
                    this.roleStatus = RoleStatus.WAITTING
                }else{
                    if(this.localSus == this.sustainTime){//持续技能结束
                        this.localSus = 0//重置技能持续时间
                        this.roleStatus = RoleStatus.SKILL_END//技能释放结束
                    }
                    this.localSus += 1
                }
            }else if(this.skillType == SkillType.STATUS_SKILL){//持续状态技能
                if(this.localSus == this.sustainTime){//持续技能结束
                    this.localSus = 0//重置技能持续时间
                    this.roleStatus = RoleStatus.SKILL_END//技能释放结束
                }
                this.localSus += 1
            }
        }else if(this.roleStatus == RoleStatus.SKILL_END){
            this.localCd += skillRapid / 15 //技能充能增加
            if(this.localAfter == this.skillAfter){
                this.localAfter = 0
                this.roleStatus = RoleStatus.WAITTING
            }
            this.localAfter += 1
        }else{
            if (this.localCd >this.cd){
                this.roleStatus = RoleStatus.SKILL_START
                this.localCd = this.localCd - this.cd
            }
            this.localCd += skillRapid / 15 //技能充能增加
        }
    }

    reset(): void {
        throw new Error("Method not implemented.")
    }
    /**
     * 技能前摇中被打断,回退cd,重置状态
     */
    back():void{
        this.localCd = 0.9*this.cd
        this.roleStatus = RoleStatus.WAITTING
    }
}
