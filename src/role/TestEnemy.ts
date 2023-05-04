import { Role } from './abstractRole'
// import { simpleAttack } from './attack';
import { roleAllAttribute } from "@/dto/storageDtos";
import { skillStatusProducer } from './abstractStatusProducer';
import { SkillType } from '@/enum/trigger';
import { immediateDamageProducer } from './abstractDamageProducer';
import { DamageAttr, DamageType, Deri, RoleStatus } from '@/enum/battleEnum';
import { Damage } from './abstractDamage';
import { RoleAttribute, RoleNumberAttribute } from '@/enum/baseEnum';
import { StatusAttrProducer } from './abstractAttrProducer';
import { AddOrPerAdd } from '@/enum/operation';


/**
 * 简单的靶子 不攻击无技能
 */
export class SimpleTarget extends Role {

    constructor(name: string, baseDate: roleAllAttribute) {
        super(name, baseDate)
    }

    /**
     * 人形特有判断方法
     */
    SPECIAL(){
        console.log()
    }
}


