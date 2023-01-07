import { functionObj } from "../dto/battleInfoDto";
import { ruleFunctionType,functionSuitEnum,functionType } from "../enum/battleEnum"
import { Occupation, IsLong, AttentionPosition, Camp } from '../enum/baseEnum'

export const shooterDeduceCd:functionObj = {
    name:"超速预载",
    code:"shooterDeduceCd",
    suit:functionSuitEnum.SHOOTER_DAMAGE_INCREASE,
    type:ruleFunctionType.INNER,
    functionType:functionType.SHOOTER,
    range:{isRole:true,occupation:[Occupation.SHOOTER],long:[],camp:[],Attention:[AttentionPosition.FRIEND]},
    description:"射手释放技能后，自身技能充能加快30%"
}

export const shooterAddDamageDebuff:functionObj = {
    name:"易碎标注",
    code:"shooterAddDamageDebuff",
    suit:functionSuitEnum.SHOOTER_DAMAGE_INCREASE,
    type:ruleFunctionType.INNER,
    functionType:functionType.SHOOTER,
    range:{isRole:true,occupation:[Occupation.SHOOTER],long:[],camp:[],Attention:[AttentionPosition.FRIEND]},
    description:"射手释放技能时，为生命比例最低的敌方单位添加5层易伤"
}