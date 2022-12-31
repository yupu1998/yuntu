import { AttributeAddObj } from '../dto/storageDtos'
import { RoleAttribute } from './baseEnum'
import { AddOrPerAdd } from './operation'

// 好感度加成基础值
export const ATTACK: AttributeAddObj = {
    "attribute": RoleAttribute.ATTACK,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 55
}

export const POWER: AttributeAddObj = {
    "attribute": RoleAttribute.POWER,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 55
}

export const HP: AttributeAddObj = {
    "attribute": RoleAttribute.HP,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 1320
}

export const CRITICAL_HIT_RATE: AttributeAddObj = {
    "attribute": RoleAttribute.CRITICAL_HIT_RATE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 8
}

export const CRITICAL_DAMAGE: AttributeAddObj = {
    "attribute": RoleAttribute.CRITICAL_DAMAGE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 12
}

export const DAMAGE_INCREASE: AttributeAddObj = {
    "attribute": RoleAttribute.DAMAGE_INCREASE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 5
}

export const DAMAGE_REDUCE: AttributeAddObj = {
    "attribute": RoleAttribute.DAMAGE_REDUCE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 5
}

export const RAPIDLY: AttributeAddObj = {
    "attribute": RoleAttribute.RAPIDLY,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 8
}

export const DODGE: AttributeAddObj = {
    "attribute": RoleAttribute.DODGE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 8
}