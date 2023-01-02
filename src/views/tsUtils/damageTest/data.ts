import { LocalFileAdreess } from "../../../enum/LocalFileAdress";
import { simpleDamageTest } from '../../../dto/storageDtos'


/**
 * 获取伤害测试打靶数据
 * @returns 
 */
export const getData = () =>{
    const singleRoleDamageTest = localStorage.getItem(LocalFileAdreess.DAMAGE_TEST_SINGLE_Target) as string
    const res: simpleDamageTest = JSON.parse(singleRoleDamageTest);
    return res
}

/**
 * 保存伤害测试打靶数据
 * @param val 
 */
export const saveData = (val:simpleDamageTest) =>{
    console.log("保存伤害测试数据",val);
    
    localStorage.setItem(LocalFileAdreess.DAMAGE_TEST_SINGLE_Target,JSON.stringify(val))
}