import { ruleObj } from "../dto/battleInfoDto";
import { ruleFunctionType } from "../enum/battleEnum"
import { Occupation, IsLong, AttentionPosition, Camp } from '../enum/baseEnum'

export const attackDownAndPowerUp:ruleObj = {
    name:"重火力",
    code:"attackDownAndPowerUp",
    type:ruleFunctionType.INNER,
    range:{isRole:true,occupation:[],long:[],camp:[],Attention:[AttentionPosition.FRIEND]},
    description:"所有友方人形攻击下降50%，算力提升50%"
}

export const powerDownAndAttackUp:ruleObj = {
    name:"威力至上",
    code:"powerDownAndAttackUp",
    type:ruleFunctionType.INNER,
    range:{isRole:true,occupation:[],long:[],camp:[],Attention:[AttentionPosition.FRIEND]},
    description:"所有友方人形算力下降50%，攻击提升50%"
}