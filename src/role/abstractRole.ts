import { roleAllAttribute } from "@/dto/storageDtos";
import {attack,AbsFunc} from './abstractFunc'
import { RoleAttribute } from "@/enum/baseEnum";
import { RoleStatus } from "@/enum/battleEnum";

export abstract class Role {
    name = ''
    time = 0;//自身的时间
    status = RoleStatus.WAITTING //状态，等待，普攻前摇，普攻，普攻后摇
    //三级属性
    public roleBaseData:roleAllAttribute;
    public roleData:roleAllAttribute;
    public roleFinalData:roleAllAttribute;

    //生成效果的类需要能反复利用，使用后销毁再制造的开销会比较大 TODO
    
    //数组内的方法可以改变自身的属性
    public localFunc:Array<AbsFunc> = [new simpleAttack()]//人形自己的技能方法，优先遍历
    public funcArr:Array<any> = []//只执行一次

    //造成伤害数组 记录自身造成的伤害

    //受到伤害数组 记录自身受到的伤害

    constructor(name:string,baseData:roleAllAttribute){
        this.name = name
        this.roleBaseData = baseData
        this.roleData = baseData
        this.roleFinalData = baseData
        this.funcArr = []
    }

    //角色动作
    RoleRun() {
        this.localFunc.forEach(a=>{
            if(a.isRun(this.status)){
                if(a.Run([this.roleBaseData.attackSpeed])){
                    a.output()
                    console.log(this.name +"造成了普攻伤害")
                }
            }
            
        })
    }
    
    
  }
  

  class simpleAttack extends attack{

  }