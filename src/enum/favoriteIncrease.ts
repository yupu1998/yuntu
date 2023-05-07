import { AttributeAddObj } from '../dto/storageDtos'
import { RoleNumberAttribute } from './baseEnum'
import { AddOrPerAdd } from './operation'

// 好感度加成基础值
export const ATTACK: AttributeAddObj = {
    "attribute": RoleNumberAttribute.ATTACK,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 55
}

export const POWER: AttributeAddObj = {
    "attribute": RoleNumberAttribute.POWER,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 55
}

export const HP: AttributeAddObj = {
    "attribute": RoleNumberAttribute.HP,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 1320
}

export const CRITICAL_HIT_RATE: AttributeAddObj = {
    "attribute": RoleNumberAttribute.CRITICAL_HIT_RATE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 8
}

export const CRITICAL_DAMAGE: AttributeAddObj = {
    "attribute": RoleNumberAttribute.CRITICAL_DAMAGE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 12
}

export const DAMAGE_INCREASE: AttributeAddObj = {
    "attribute": RoleNumberAttribute.DAMAGE_INCREASE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 5
}

export const DAMAGE_REDUCE: AttributeAddObj = {
    "attribute": RoleNumberAttribute.DAMAGE_REDUCE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 5
}

export const RAPIDLY: AttributeAddObj = {
    "attribute": RoleNumberAttribute.RAPIDLY,
    "increaseMethod": AddOrPerAdd.PRECENTAGE,
    "value": 8
}

export const DODGE: AttributeAddObj = {
    "attribute": RoleNumberAttribute.DODGE,
    "increaseMethod": AddOrPerAdd.ADD,
    "value": 8
}