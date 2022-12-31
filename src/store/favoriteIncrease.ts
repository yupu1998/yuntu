import { AttributeAddObj } from '../dto/storageDtos'
import { ATTACK, POWER, HP, CRITICAL_HIT_RATE, CRITICAL_DAMAGE, DAMAGE_INCREASE, DAMAGE_REDUCE, RAPIDLY, DODGE } from '../enum/favoriteIncrease'

// 个人好感加成
export const ZANGYIN: Array<AttributeAddObj> = [POWER,HP,CRITICAL_HIT_RATE]
export const KURO: Array<AttributeAddObj> = [POWER,HP,DAMAGE_INCREASE]