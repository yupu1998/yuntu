import { ElMessage } from 'element-plus'
import * as occupationIncrease from "../../../store/occupationIncrease";
import * as roleFavoriteIncrease from "../../../store/favoriteIncrease";
import * as roleDefaultData from "../../../store/baseRole";
import { LocalFileAdreess } from "../../../enum/LocalFileAdress";
import { getRoleAttributeData } from '../roleInfo/data'
import { AttributeAddObj, roleTotalAttribute,roleAllAttribute } from '../../../dto/storageDtos'
import { ListObj } from '../roleInfo/interface';

/**
 * 获取角色的基本数据 默认数据 职业数据 好感度数据
 * @param k 
 * @returns 
 */
export const selectRole = (k: ListObj) => {
    //点击角色，进入角色属性页面
    return {
        role: k,
        baseData: roleDefaultData[k.code] as roleAllAttribute,
        localData: getRoleAttributeData().find(role=>role.name == k.name) as roleAllAttribute,
        occupationData: occupationIncrease[roleDefaultData[k.code].occupation] as AttributeAddObj[],
        favoriteData: roleFavoriteIncrease[k.code] as AttributeAddObj[],
    };
};

/**
 * 更新角色的属性
 * @param code 
 * @param newData 
 */
export const updateRoleData = (name:string,newData: roleAllAttribute) => {
    const oldData = getRoleAttributeData()
    oldData[oldData.findIndex(role=>role.name == name)] = newData
    localStorage.setItem(LocalFileAdreess.ROLE_INFO, JSON.stringify(oldData))
    ElMessage("已更新数据")
}

